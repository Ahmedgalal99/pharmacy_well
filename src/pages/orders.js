import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import BottomNav from "@/Components/Ulits/BottomNav";
import FooterDesk from "@/Components/desk/FooterDesk";
import SizesExample from "@/Components/Spinner";
import Support from "@/Components/Ulits/Support";
import WriteReview from "@/Components/Ulits/WriteReview";
import { getAllOrdersHistory } from "@/Apis/Cart/PostCart";
import styles from "@/styles/storefront.module.css";
import { StorefrontNav } from "@/Components/storefront/StorefrontShared";

export default function OrdersPage() {
  const router = useRouter();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!localStorage.getItem("user")) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    const loadOrders = async () => {
      const res = await getAllOrdersHistory();
      setOrders(res?.results || []);
      setIsLoadingPage(false);
    };

    loadOrders();
  }, []);

  return (
    <div className={styles.page}>
      <Head>
        <title>Orders | Pharmacy Well</title>
      </Head>

      <StorefrontNav />

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCard}>
            <span className={styles.eyebrow}>Order history</span>
            <h1 className={styles.heroTitle}>
              Track every pharmacy request in the same <span style={{ color: "var(--theme-lime)" }}>storefront style.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Your post-checkout flow now stays inside the same visual system as home, products, and cart.
            </p>
            <div className={styles.heroActions}>
              <Link href="/products/all" className={styles.primaryButton}>
                Browse products
              </Link>
              <Link href="/requests" className={styles.secondaryButton}>
                Open cart
              </Link>
            </div>
          </div>

          <div className={styles.darkPanel}>
            <div className={styles.panelTitle}>History snapshot</div>
            <div className={styles.statGrid} style={{ marginTop: 0 }}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{orders.length}</span>
                <span className={styles.statLabel}>Saved orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.sectionCard}`}>
          {isLoadingPage ? (
            <SizesExample />
          ) : orders.length > 0 ? (
            <div className={styles.grid}>
              {orders.map((item) => (
                <Link key={item?.id} href={`/tracking?orderId=${item?.id}`} className={styles.productCard}>
                  <div className={styles.productBody}>
                    <div className={styles.productMeta}>
                      <span className={styles.metaTag}>Order #{item?.order_id || item?.id}</span>
                      <span className={styles.metaTag}>{item?.status || "Pending"}</span>
                    </div>
                    <h3 className={styles.productTitle}>Track this request</h3>
                    <p className={styles.productCopy}>
                      Open the tracking view to see the current delivery or confirmation status for this pharmacy order.
                    </p>
                    <div className={styles.productFooter}>
                      <span className={styles.primaryButton}>Open tracking</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3>No orders yet</h3>
              <p>Your submitted pharmacy requests will appear here once you place an order from the cart.</p>
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
