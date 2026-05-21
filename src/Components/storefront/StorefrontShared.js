import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/storefront.module.css";

export function EgaptekaMark({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="57" stroke="#84cc16" strokeWidth="4" fill="white" />
      <circle cx="60" cy="60" r="50" stroke="#84cc16" strokeWidth="1.8" fill="white" />
      <rect x="42" y="28" width="36" height="64" rx="5" fill="#84cc16" />
      <rect x="28" y="42" width="64" height="36" rx="5" fill="#84cc16" />
      <ellipse cx="60" cy="68" rx="10" ry="6" fill="white" />
      <path d="M50 62 Q60 56 70 62" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M54 62 L54 72 Q60 76 66 72 L66 62" fill="white" />
      <path d="M60 36 C56 40 64 46 60 52 C56 58 64 62 60 66" stroke="#84cc16" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="60" cy="34" rx="4" ry="5" fill="#84cc16" />
      <circle cx="58.5" cy="32.5" r="1" fill="white" />
    </svg>
  );
}

export function StorefrontNav() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} ${styles.navInner}`}>
        <Link href="/" className={styles.brand}>
          <EgaptekaMark />
          <div className={styles.brandWordmark}>
            <span className={styles.brandTitle}>
              EGA<span>PTEKA</span>
            </span>
            <span className={styles.brandCopy}>Your Pharmacy. Any Hour.</span>
          </div>
        </Link>

        <div className={styles.navLinks}>
          <Link href="/products/all" className={styles.navLink}>
            Products
          </Link>
          <Link href="/requests" className={styles.navLink}>
            Cart
          </Link>
          <Link href="/orders" className={styles.navLink}>
            Orders
          </Link>
        </div>

        <Link href="/contactus" className={styles.navCta}>
          Contact pharmacy
        </Link>
      </div>
    </nav>
  );
}

export function RemoteThumb({ src, alt, className }) {
  if (!src) {
    return <div className={`${className} ${styles.thumbFallback}`}>{alt?.slice(0, 1) || "P"}</div>;
  }

  return (
    <Image
      loader={() => src}
      src={src}
      alt={alt}
      width={600}
      height={600}
      className={className}
      unoptimized
    />
  );
}

export function formatPrice(price) {
  if (price === null || price === undefined || price === "") return null;
  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return `${price}`;
  }

  return `$${numericPrice.toFixed(2)}`;
}
