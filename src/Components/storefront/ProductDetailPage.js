import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import BottomNav from "@/Components/Ulits/BottomNav";
import FooterDesk from "@/Components/desk/FooterDesk";
import SizesExample from "@/Components/Spinner";
import Support from "@/Components/Ulits/Support";
import WriteReview from "@/Components/Ulits/WriteReview";
import PostCart from "@/Apis/Cart/PostCart";
import { GetOneProduct } from "@/Apis/products";
import styles from "@/styles/storefront.module.css";
import { RemoteThumb, StorefrontNav, formatPrice } from "./StorefrontShared";

function cleanValue(value, fallback = "Not specified") {
  if (!value) return fallback;
  if (typeof value === "string") return value;
  return value?.name || fallback;
}

export default function ProductDetailPage() {
  const router = useRouter();
  const { detail, id } = router.query;

  const [details, setDetails] = useState(null);
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      if (!detail) return;

      setIsLoadingPage(true);
      const res = await GetOneProduct({ id: detail });
      setDetails(res);
      setIsLoadingPage(false);
    };

    loadProduct();
  }, [detail]);

  const detailCards = useMemo(
    () => [
      { label: "Category", value: cleanValue(details?.category) },
      { label: "Brand", value: cleanValue(details?.brand) },
      { label: "Active ingredients", value: cleanValue(details?.active_ingredient) },
      { label: "Russian similar", value: cleanValue(details?.russian_similar) },
    ],
    [details]
  );

  const handleAddToCart = async () => {
    const hasUser = typeof window !== "undefined" && localStorage.getItem("user");
    if (!hasUser) {
      router.push("/login");
      return;
    }

    setIsSubmitting(true);
    const res = await PostCart({
      product: detail,
      quantity: 1,
    });
    setIsSubmitting(false);

    if (res) {
      setSuccessMessage(`${details?.name || "This item"} was added to your cart.`);
      setTimeout(() => setSuccessMessage(""), 4000);
    }
  };

  const backHref = id ? `/products/${id}` : "/products/all";

  return (
    <div className={styles.page}>
      <Head>
        <title>{details?.name || "Product details"} | Pharmacy Well</title>
      </Head>

      <StorefrontNav />

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCard}>
            <span className={styles.eyebrow}>Product details</span>
            <h1 className={styles.heroTitle}>
              Review the product, then <span style={{ color: "var(--theme-lime)" }}>add it to your cart.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              This page now matches the homepage storefront style and the cart action now sends the real product id to
              the API.
            </p>
            <div className={styles.heroActions}>
              <Link href="/requests" className={styles.primaryButton}>
                Open cart
              </Link>
              <Link href={backHref} className={styles.secondaryButton}>
                Back to products
              </Link>
            </div>
          </div>

          <div className={styles.darkPanel}>
            <div className={styles.panelTitle}>Current item</div>
            <div className={styles.pillGrid}>
              <span className={styles.panelPill}>{cleanValue(details?.category, "Catalog item")}</span>
              <span className={styles.panelPill}>{cleanValue(details?.brand)}</span>
            </div>
            <p className={styles.microText} style={{ color: "rgba(255,255,255,0.82)" }}>
              Keep browsing in the same lime storefront, then move straight into requests without the old blue page
              change.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.sectionCard}`}>
          {isLoadingPage ? (
            <SizesExample />
          ) : (
            <>
              {successMessage ? <div className={styles.successBanner}>{successMessage}</div> : null}

              <div className={styles.detailGrid}>
                <div className={styles.detailCard}>
                  <RemoteThumb src={details?.home_image} alt={details?.name || "Product"} className={styles.detailMedia} />
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailHeader}>
                    <span className={styles.eyebrow}>Catalog item</span>
                    <p className={styles.detailLead}>{cleanValue(details?.category)}</p>
                    <h1>{details?.name || "Product"}</h1>
                    <p className={styles.detailDescription}>
                      {details?.short_description ||
                        "This product is available through the same backend, now presented inside the updated storefront."}
                    </p>
                    {formatPrice(details?.price) ? <p className={styles.detailPrice}>{formatPrice(details?.price)}</p> : null}
                    <div className={styles.heroActions}>
                      <button type="button" className={styles.primaryButton} onClick={handleAddToCart} disabled={isSubmitting}>
                        {isSubmitting ? "Adding..." : "Add to cart"}
                      </button>
                      <Link href="/requests" className={styles.secondaryButton}>
                        View cart
                      </Link>
                    </div>
                  </div>

                  <div className={styles.detailList}>
                    {detailCards.map((item) => (
                      <div key={item.label}>
                        <strong>{item.label}</strong>
                        <span>{item.value}</span>
                      </div>
                    ))}
                    <div>
                      <strong>Description</strong>
                      <span>
                        {details?.description ||
                          "No long description was returned for this product, but the ordering flow remains active."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
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
