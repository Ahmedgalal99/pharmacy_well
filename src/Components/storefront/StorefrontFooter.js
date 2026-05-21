import Image from "next/image";
import Link from "next/link";
import messenger from "@/assets/img/messenger.png";
import telegram from "@/assets/img/telegram.png";
import viber from "@/assets/img/viber.png";
import whatsapp from "@/assets/img/whatsapp.png";
import styles from "@/styles/storefront.module.css";
import { EgaptekaMark } from "./StorefrontShared";

const socialLinks = [
  { icon: telegram, alt: "Telegram", href: "https://t.me/" },
  { icon: whatsapp, alt: "WhatsApp", href: "https://wa.me/201050777117" },
  { icon: messenger, alt: "Messenger", href: "https://www.messenger.com/" },
  { icon: viber, alt: "Viber", href: "viber://chat?number=%2B201050777117" },
];

export default function StorefrontFooter() {
  return (
    <footer className={styles.footerShell}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <div className={styles.footerMark}>
            <EgaptekaMark size={40} />
            <div className={styles.footerBrandWordmark}>
              <span className={styles.footerBrandTitle}>
                EGA<span>PTEKA</span>
              </span>
              <span className={styles.footerBrandCopy}>Your Pharmacy. Any Hour.</span>
            </div>
          </div>

          <p className={styles.footerText}>
            Pharmacy support, hotel delivery, and direct pharmacist contact in one cleaner storefront experience.
          </p>

          <div className={styles.footerContactLine}>
            <span>Sharm El Sheikh, Egypt</span>
            <span>•</span>
            <Link href="tel:+201050777117" className={styles.footerLink}>
              (+20) 105 077 7117
            </Link>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h3 className={styles.footerSectionTitle}>Explore</h3>
          <Link href="/" className={styles.footerLink}>
            Home
          </Link>
          <Link href="/products/all" className={styles.footerLink}>
            Products
          </Link>
          <Link href="/requests" className={styles.footerLink}>
            Cart
          </Link>
          <Link href="/contactus" className={styles.footerLink}>
            Contact us
          </Link>
          <Link href="/policy" className={styles.footerLink}>
            Policy
          </Link>
        </div>

        <div className={styles.footerSocials}>
          <h3 className={styles.footerSectionTitle}>Connect</h3>
          <p className={styles.footerText}>
            Message the team on your preferred channel or request a callback from the contact page.
          </p>
          <div className={styles.footerSocialRow}>
            {socialLinks.map((item) => (
              <Link key={item.alt} href={item.href} className={styles.footerSocialLink} aria-label={item.alt}>
                <Image src={item.icon} alt={item.alt} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles.footerMeta}`}>
        <span>Pharmacy Well storefront redesign</span>
        <span>Delivery, support, and product browsing in one flow</span>
      </div>
    </footer>
  );
}
