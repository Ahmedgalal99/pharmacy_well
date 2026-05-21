import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import BottomNav from "@/Components/Ulits/BottomNav";
import FooterDesk from "@/Components/desk/FooterDesk";
import { loginUser } from "@/Apis/Auth";
import styles from "@/styles/storefront.module.css";
import { StorefrontNav } from "@/Components/storefront/StorefrontShared";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    const res = await loginUser({ password, phone, rememberMe });
    setIsSubmitting(false);

    if (res?.token) {
      router.push("/");
    }
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Login | Pharmacy Well</title>
      </Head>

      <StorefrontNav />

      <section className={styles.authSection}>
        <div className={`${styles.container} ${styles.authLayout}`}>
          <div className={styles.authShowcase}>
            <span className={styles.eyebrow}>Welcome back</span>
            <h1 className={styles.authShowcaseTitle}>
              Sign in without leaving the new storefront.
            </h1>
            <p className={styles.authShowcaseText}>
              The login page now matches the same Egapteka-inspired visual language as the homepage, catalog, cart, and
              order history pages.
            </p>

            <div className={styles.authPills}>
              <span className={styles.authPill}>Fast pharmacy support</span>
              <span className={styles.authPill}>Hotel delivery flow</span>
              <span className={styles.authPill}>Same account backend</span>
            </div>

            <div className={styles.authStats}>
              <div className={styles.authStat}>
                <strong>1 flow</strong>
                <span>Home, products, cart, and login now feel like one product.</span>
              </div>
              <div className={styles.authStat}>
                <strong>24/7</strong>
                <span>Customers can sign in and continue their request any time.</span>
              </div>
            </div>
          </div>

          <div className={styles.authCard}>
            <div className={styles.authHeader}>
              <span className={styles.eyebrow}>Account access</span>
              <h2>Sign in</h2>
              <p>
                Don&apos;t have an account? <Link href="/register" className={styles.authLink}>Create one here</Link>.
              </p>
            </div>

            <form
              className={styles.authForm}
              onSubmit={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <div className={styles.authField}>
                <label htmlFor="phone">Phone number</label>
                <ReactPhoneInput
                  placeholder="01234567890"
                  disableDropdown
                  disableCountryCode
                  country="eg"
                  value={phone}
                  onChange={setPhone}
                  inputProps={{ id: "phone", name: "phone" }}
                />
              </div>

              <div className={styles.authField}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className={styles.authRow}>
                <label className={styles.authCheckbox}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                  />
                  <span>Remember me</span>
                </label>

                <Link href="/" className={styles.authLink}>
                  Forgot password
                </Link>
              </div>

              <button type="submit" className={styles.primaryButton} style={{ width: "100%" }} disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <p className={styles.authNote}>
              Once you sign in, you can go straight back to browsing products, managing your cart, or placing a
              pharmacy request.
            </p>
          </div>
        </div>
      </section>

      <FooterDesk />

      <div className={styles.mobileOnly}>
        <BottomNav />
      </div>
    </div>
  );
}
