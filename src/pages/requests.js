import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import BottomNav from "@/Components/Ulits/BottomNav";
import FooterDesk from "@/Components/desk/FooterDesk";
import SizesExample from "@/Components/Spinner";
import Support from "@/Components/Ulits/Support";
import WriteReview from "@/Components/Ulits/WriteReview";
import GetCart from "@/Apis/Cart/GetCart";
import PostCart, { CreateOrder, DeleteCart, getOrders } from "@/Apis/Cart/PostCart";
import styles from "@/styles/storefront.module.css";
import { RemoteThumb, StorefrontNav, formatPrice } from "@/Components/storefront/StorefrontShared";

function InfoRow({ label, value }) {
  return (
    <div className={styles.summaryRow}>
      <span>{label}</span>
      <strong>{value || "Not provided"}</strong>
    </div>
  );
}

function CartItem({ item, onQuantityChange, onDelete }) {
  const [quantity, setQuantity] = useState(item?.quantity || 1);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateQuantity = async (delta) => {
    if (isUpdating) return;
    if (delta < 0 && quantity <= 1) return;

    setIsUpdating(true);
    const res = await PostCart({
      product: item?.product?.id,
      quantity: delta,
    });
    setIsUpdating(false);

    if (res) {
      const nextQuantity = quantity + delta;
      setQuantity(nextQuantity);
      onQuantityChange(item?.id, nextQuantity);
    }
  };

  const removeItem = async () => {
    if (isUpdating) return;
    setIsUpdating(true);
    const res = await DeleteCart({ id: item?.id });
    setIsUpdating(false);
    if (res !== undefined) {
      onDelete(item?.id);
    }
  };

  return (
    <article className={styles.cartItem}>
      <RemoteThumb src={item?.product?.home_image} alt={item?.product?.name || "Product"} className={styles.cartMedia} />

      <div className={styles.cartDetails}>
        <div className={styles.cartTopRow}>
          <div>
            <h4 className={styles.cartTitle}>{item?.product?.name || "Product"}</h4>
            <p className={styles.cartMeta}>
              {item?.product?.short_description ||
                item?.product?.description ||
                "This pharmacy item is ready to move into your request order."}
            </p>
            {formatPrice(item?.price_product || item?.product?.price || item?.total) ? (
              <p className={styles.productPrice} style={{ marginBottom: 0 }}>
                {formatPrice(item?.price_product || item?.product?.price || item?.total)}
              </p>
            ) : null}
          </div>

          <button type="button" className={styles.iconButton} onClick={removeItem} aria-label="Remove item">
            x
          </button>
        </div>

        <div className={styles.quantityRow}>
          <button type="button" className={styles.quantityButton} onClick={() => updateQuantity(-1)} disabled={quantity <= 1 || isUpdating}>
            -
          </button>
          <span className={styles.quantityValue}>{quantity}</span>
          <button type="button" className={styles.quantityButton} onClick={() => updateQuantity(1)} disabled={isUpdating}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default function RequestsPage() {
  const router = useRouter();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [router]);

  useEffect(() => {
    const loadData = async () => {
      const [cartRes, orderRes] = await Promise.all([GetCart(), getOrders()]);
      setCartList(cartRes?.cart_items || []);
      setOrder(orderRes || null);
      setIsLoadingPage(false);
    };

    loadData();
  }, []);

  const totalItems = useMemo(
    () => cartList.reduce((sum, item) => sum + Number(item?.quantity || 0), 0),
    [cartList]
  );

  const handleQuantityChange = (itemId, nextQuantity) => {
    setCartList((current) =>
      current.map((item) => (item.id === itemId ? { ...item, quantity: nextQuantity } : item))
    );
  };

  const handleDelete = (itemId) => {
    setCartList((current) => current.filter((item) => item.id !== itemId));
  };

  const createOrder = async () => {
    if (!cartList.length || isPlacingOrder) return;

    setIsPlacingOrder(true);
    const res = await CreateOrder();
    setIsPlacingOrder(false);

    if (res) {
      router.push("/confirmation");
    }
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Cart | Pharmacy Well</title>
      </Head>

      <StorefrontNav />

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCard}>
            <span className={styles.eyebrow}>Request cart</span>
            <h1 className={styles.heroTitle}>
              Review your cart in the same <span style={{ color: "var(--theme-lime)" }}>storefront flow.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Cart, quantity controls, and order placement now sit inside the same design system as the new homepage
              and catalog pages.
            </p>
            <div className={styles.heroActions}>
              <button type="button" className={styles.primaryButton} onClick={createOrder} disabled={!cartList.length || isPlacingOrder}>
                {isPlacingOrder ? "Placing order..." : "Place order"}
              </button>
              <Link href="/products/all" className={styles.secondaryButton}>
                Continue shopping
              </Link>
            </div>

            <div className={styles.statGrid}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{totalItems}</span>
                <span className={styles.statLabel}>Items selected</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{cartList.length}</span>
                <span className={styles.statLabel}>Cart lines</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{order?.id || "--"}</span>
                <span className={styles.statLabel}>Latest order</span>
              </div>
            </div>
          </div>

          <div className={styles.darkPanel}>
            <div className={styles.panelTitle}>Order reminder</div>
            <p className={styles.microText} style={{ color: "rgba(255,255,255,0.82)" }}>
              Your request is confirmed after the pharmacy team contacts you with the final price and availability.
            </p>
            <div className={styles.pillGrid}>
              <span className={styles.panelPill}>Fast hotel delivery</span>
              <span className={styles.panelPill}>Pharmacist follow-up</span>
              <span className={styles.panelPill}>Live cart updates</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.sectionCard}`}>
          {isLoadingPage ? (
            <SizesExample />
          ) : cartList.length > 0 ? (
            <div className={styles.cartLayout}>
              <div className={styles.cartStack}>
                <div className={styles.infoCard}>
                  <h3>Your information</h3>
                  <div className={styles.summaryList}>
                    <InfoRow label="Name" value={user?.username || user?.name} />
                    <InfoRow label="Phone" value={user?.phone_number || user?.phone} />
                    <InfoRow label="Email" value={user?.email} />
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <h3>Your cart</h3>
                  <div className={styles.cartStack}>
                    {cartList.map((item) => (
                      <CartItem
                        key={item?.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <aside className={styles.cartCard}>
                <h3>Order summary</h3>
                <p className={styles.cartMeta}>
                  Final pricing is confirmed by phone, but your request is ready to be sent now.
                </p>

                <div className={styles.summaryList}>
                  <div className={styles.summaryRow}>
                    <span>Total selected products</span>
                    <strong>{totalItems}</strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Cart lines</span>
                    <strong>{cartList.length}</strong>
                  </div>
                  {order?.id ? (
                    <div className={styles.summaryRow}>
                      <span>Last order</span>
                      <strong>#{order.id}</strong>
                    </div>
                  ) : null}
                </div>

                <button type="button" className={styles.primaryButton} style={{ width: "100%" }} onClick={createOrder} disabled={isPlacingOrder}>
                  {isPlacingOrder ? "Placing order..." : "Place order"}
                </button>

                <p className={styles.note}>
                  Note: your order will not be confirmed before you receive a call from the team with the order price.
                </p>
              </aside>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3>Your cart is empty</h3>
              <p>Start from the catalog to add products, or open your latest order if you already submitted one.</p>
              <div className={styles.heroActions} style={{ justifyContent: "center", marginTop: 16 }}>
                <Link href="/products/all" className={styles.primaryButton}>
                  Browse products
                </Link>
                {order?.id ? (
                  <Link href={`/tracking?orderId=${order.id}`} className={styles.secondaryButton}>
                    Track latest order
                  </Link>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </section>

      <FooterDesk />

      <div className={styles.mobileOnly}>
        <BottomNav />
      </div>

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </div>
  );
}
