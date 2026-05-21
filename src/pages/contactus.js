import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Sheet from "react-modal-sheet";
import BottomNav from "@/Components/Ulits/BottomNav";
import FooterDesk from "@/Components/desk/FooterDesk";
import ModalContent from "@/Components/Ulits/ModalContent";
import SizesExample from "@/Components/Spinner";
import Support from "@/Components/Ulits/Support";
import WriteReview from "@/Components/Ulits/WriteReview";
import Frame from "@/assets/img/Frame.png";
import viber from "@/assets/img/viber.png";
import messenger from "@/assets/img/messenger.png";
import whatsapp from "@/assets/img/whatsapp.png";
import telegram from "@/assets/img/telegram.png";
import location from "@/assets/img/location.png";
import phone from "@/assets/img/phone.png";
import styles from "@/styles/storefront.module.css";
import { StorefrontNav } from "@/Components/storefront/StorefrontShared";

const socialLinks = [
  { icon: telegram, alt: "Telegram", href: "https://t.me/" },
  { icon: whatsapp, alt: "WhatsApp", href: "https://wa.me/201050777117" },
  { icon: messenger, alt: "Messenger", href: "https://www.messenger.com/" },
  { icon: viber, alt: "Viber", href: "viber://chat?number=%2B201050777117" },
];

export default function ContactUsPage() {
  const [isOpen, setOpen] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  useEffect(() => {
    setIsLoadingPage(false);
  }, []);

  return (
    <div className={styles.page}>
      <Head>
        <title>Contact Us | Pharmacy Well</title>
      </Head>

      <StorefrontNav />

      <section className={styles.section}>
        <div className={styles.container}>
          {isLoadingPage ? (
            <SizesExample />
          ) : (
            <div className={styles.contactShell}>
              <div className={styles.contactHero}>
                <div className={styles.contactCard}>
                  <span className={styles.eyebrow}>Contact pharmacy</span>
                  <h1 className={styles.contactTitle}>
                    Reach the team without leaving the redesigned storefront.
                  </h1>
                  <p className={styles.contactLead}>
                    Whether you need a pharmacist, want to request a specific prescription, or need hotel delivery help,
                    this page now follows the same visual direction as the rest of the site.
                  </p>

                  <div className={styles.contactActions}>
                    <Link href="tel:+201050777117" className={styles.primaryButton}>
                      Call now
                    </Link>
                    <button type="button" className={styles.secondaryButton} onClick={() => setOpen(true)}>
                      Request a call
                    </button>
                  </div>

                  <div className={styles.contactVisual}>
                    <Image src={Frame} alt="Contact pharmacy" priority />
                  </div>
                </div>

                <div className={styles.contactHighlight}>
                  <span className={styles.eyebrow} style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>
                    We are here for you
                  </span>
                  <h2 style={{ marginBottom: 14 }}>Fast support for urgent pharmacy requests.</h2>
                  <p className={styles.contactMeta}>
                    Chat with us, call directly, or send a callback request when you need help choosing medication,
                    checking availability, or arranging hotel delivery.
                  </p>

                  <div className={styles.authStats} style={{ marginTop: 22 }}>
                    <div className={styles.authStat}>
                      <strong>24/7</strong>
                      <span>Support for visitors and urgent delivery cases.</span>
                    </div>
                    <div className={styles.authStat}>
                      <strong>Direct</strong>
                      <span>Speak to the team without bouncing through old pages.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.contactGrid}>
                <div className={styles.socialCard}>
                  <span className={styles.eyebrow}>Social media</span>
                  <h3 style={{ marginBottom: 12 }}>Message the pharmacy team</h3>
                  <p className={styles.contactMeta}>
                    If you need product support or want to ask about a prescription before ordering, contact us on your
                    preferred channel.
                  </p>

                  <div className={styles.socialRow}>
                    {socialLinks.map((item) => (
                      <Link key={item.alt} href={item.href} className={styles.socialLink} aria-label={item.alt}>
                        <Image src={item.icon} alt={item.alt} width={28} height={28} />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={styles.reachCard}>
                  <span className={styles.eyebrow}>Reach us</span>
                  <h3 style={{ marginBottom: 12 }}>Call or visit the location</h3>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <Image src={phone} alt="Phone" width={24} height={24} />
                    </div>
                    <div>
                      <strong>Phone</strong>
                      <p>(+20) 105 077 7117</p>
                      <div className={styles.contactActions} style={{ marginTop: 12 }}>
                        <Link href="tel:+201050777117" className={styles.secondaryButton}>
                          Call now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <Image src={location} alt="Location" width={24} height={24} />
                    </div>
                    <div>
                      <strong>Location</strong>
                      <p>Tal Avenue, White Hills Hotel, Sharm El Sheikh, Egypt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[600, 400]}>
        <Sheet.Container className={styles.sectionCard}>
          <Sheet.Header />
          <div className="w-100 d-flex justify-content-center align-items-center">
            <h4 style={{ color: "var(--theme-lime-dark)" }}>Request a call</h4>
          </div>
          <Sheet.Content>
            <ModalContent setOpen={setOpen} />
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>

      <FooterDesk />

      <div className={styles.mobileOnly}>
        <BottomNav />
      </div>

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </div>
  );
}
