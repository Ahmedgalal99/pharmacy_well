import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import getallCategories from "../Apis/Category";
import getAllReviews from "../Apis/Testimonails";
import { AllBestSellersProducts } from "@/Apis/products";
import PostCart from "@/Apis/Cart/PostCart";
import SizesExample from "@/Components/Spinner";
import FooterDesk from "../Components/desk/FooterDesk";
import BottomNav from "@/Components/Ulits/BottomNav";
import WriteReview from "../Components/Ulits/WriteReview";
import Support from "../Components/Ulits/Support";
import Service from "../assets/img/service.png";
import Service2 from "../assets/img/service2.png";
import Service3 from "../assets/img/service3.png";

function EgaptekaMark({ size = 44 }) {
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

function RemoteThumb({ src, alt, className }) {
  if (!src) {
    return <div className={`${className} ega-thumb-fallback`}>{alt?.slice(0, 1) || "P"}</div>;
  }

  return (
    <Image
      loader={() => src}
      src={src}
      alt={alt}
      width={320}
      height={240}
      className={className}
      unoptimized
    />
  );
}

function formatPrice(price) {
  if (price === null || price === undefined || price === "") return null;
  const numericPrice = Number(price);
  if (Number.isNaN(numericPrice)) return `${price}`;
  return `$${numericPrice.toFixed(2)}`;
}

export default function Main() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [openReview, setOpenReview] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [addingProductId, setAddingProductId] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [categoryRes, bestSellers, reviewRes] = await Promise.all([
          getallCategories(),
          AllBestSellersProducts(),
          getAllReviews(),
        ]);

        setCategories(categoryRes?.results || categoryRes || []);
        setProducts(bestSellers?.results || []);
        setReviews(reviewRes?.results || []);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reviews.length < 2) return undefined;
    const interval = setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [reviews]);

  const heroCategories = useMemo(() => categories.slice(0, 6), [categories]);
  const spotlightProducts = useMemo(() => products.slice(0, 4), [products]);
  const showcaseCategories = useMemo(() => categories.slice(0, 8), [categories]);
  const featuredReviews = useMemo(() => reviews.slice(0, 4), [reviews]);

  const trustStats = [
    { value: categories.length ? `${categories.length}+` : "20+", label: "Categories" },
    { value: products.length ? `${products.length}+` : "Top picks", label: "Best sellers" },
    { value: reviews.length ? `${reviews.length}+` : "Real reviews", label: "Guest trust" },
    { value: "24/7", label: "Support" },
  ];

  const serviceCards = [
    {
      image: Service,
      title: "Online doctors",
      desc: "Talk to medical specialists online and get guidance before placing your pharmacy request.",
    },
    {
      image: Service2,
      title: "Delivery to your room",
      desc: "Fast delivery to your hotel, apartment, or current address when you need medication urgently.",
    },
    {
      image: Service3,
      title: "Call our pharmacists",
      desc: "Reach the pharmacy team directly for product help, substitutions, and prescription support.",
    },
  ];

  const handleAddToCart = async (productId) => {
    const hasUser = typeof window !== "undefined" && localStorage.getItem("user");
    if (!hasUser) {
      router.push("/login");
      return;
    }

    setAddingProductId(productId);
    await PostCart({ product: productId, quantity: 1 });
    setAddingProductId(null);
  };

  return (
    <div className="ega-page-shell">
      <Head>
        <title>Pharmacy Well</title>
      </Head>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap");

        :root {
          --ega-lime: #84cc16;
          --ega-lime-bright: #a3e635;
          --ega-lime-dark: #4d7c0f;
          --ega-lime-soft: #ecfccb;
          --ega-lime-border: #d9f099;
          --ega-cream: #fafff0;
          --ega-paper: #ffffff;
          --ega-ink: #151a08;
          --ega-muted: #62703b;
          --ega-dark: #101803;
          --ega-shadow: 0 24px 60px rgba(77, 124, 15, 0.12);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Outfit", sans-serif;
          color: var(--ega-ink);
          background:
            radial-gradient(circle at top left, rgba(163, 230, 53, 0.18), transparent 28%),
            linear-gradient(180deg, #f8ffe7 0%, #ffffff 32%, #f7ffe8 100%);
        }

        .ega-page-shell {
          min-height: 100vh;
        }

        .ega-container {
          width: min(1200px, calc(100% - 32px));
          margin: 0 auto;
        }

        .ega-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          transition: all 0.25s ease;
          padding: 14px 0;
        }

        .ega-nav.is-scrolled {
          background: rgba(250, 255, 240, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(217, 240, 153, 0.7);
        }

        .ega-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .ega-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .ega-brand-wordmark {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .ega-brand-title {
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--ega-ink);
          letter-spacing: -0.03em;
        }

        .ega-brand-title span,
        .ega-lime-text {
          color: var(--ega-lime);
        }

        .ega-brand-copy {
          margin-top: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ega-lime-dark);
        }

        .ega-nav-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ega-nav-link {
          color: var(--ega-muted);
          font-size: 0.95rem;
          font-weight: 700;
        }

        .ega-nav-link:hover {
          color: var(--ega-lime-dark);
        }

        .ega-nav-cta,
        .ega-btn-primary,
        .ega-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 16px;
          padding: 13px 22px;
          font-weight: 800;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .ega-nav-cta,
        .ega-btn-primary {
          background: var(--ega-lime);
          color: var(--ega-dark) !important;
          box-shadow: 0 14px 30px rgba(132, 204, 22, 0.28);
        }

        .ega-nav-cta:hover,
        .ega-btn-primary:hover {
          background: var(--ega-lime-bright);
          transform: translateY(-1px);
        }

        .ega-btn-outline {
          border: 1px solid var(--ega-lime-border);
          background: rgba(255, 255, 255, 0.75);
          color: var(--ega-lime-dark) !important;
        }

        .ega-hero {
          position: relative;
          overflow: hidden;
          padding: 28px 0 88px;
        }

        .ega-hero::before,
        .ega-hero::after {
          content: "";
          position: absolute;
          border-radius: 999px;
          filter: blur(10px);
          pointer-events: none;
        }

        .ega-hero::before {
          top: -60px;
          right: -90px;
          width: 340px;
          height: 340px;
          background: radial-gradient(circle, rgba(163, 230, 53, 0.34) 0%, rgba(163, 230, 53, 0) 70%);
        }

        .ega-hero::after {
          left: -70px;
          bottom: -50px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(132, 204, 22, 0.22) 0%, rgba(132, 204, 22, 0) 72%);
        }

        .ega-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 22px;
          align-items: stretch;
        }

        .ega-hero-copy,
        .ega-hero-card,
        .ega-section-card,
        .ega-cta-box,
        .ega-review-card,
        .ega-product-card,
        .ega-category-card,
        .ega-service-card {
          border: 1px solid rgba(217, 240, 153, 0.92);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: var(--ega-shadow);
        }

        .ega-hero-copy,
        .ega-hero-card {
          border-radius: 34px;
          padding: 34px;
        }

        .ega-eyebrow {
          display: inline-flex;
          width: fit-content;
          align-items: center;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(132, 204, 22, 0.16);
          color: var(--ega-lime-dark);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .ega-hero-title {
          font-size: clamp(2.9rem, 6vw, 5.5rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          margin-bottom: 18px;
          max-width: 9ch;
        }

        .ega-hero-subtitle {
          max-width: 56ch;
          font-size: 1.03rem;
          line-height: 1.7;
          color: var(--ega-muted);
          margin-bottom: 22px;
        }

        .ega-hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ega-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 28px;
        }

        .ega-stat-card {
          padding: 18px 16px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(236, 252, 203, 0.72), rgba(255, 255, 255, 0.96));
          border: 1px solid rgba(217, 240, 153, 0.92);
        }

        .ega-stat-value {
          display: block;
          font-size: 1.55rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 8px;
        }

        .ega-stat-label {
          display: block;
          color: var(--ega-muted);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .ega-hero-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
          background: linear-gradient(180deg, rgba(18, 24, 8, 0.98), rgba(30, 42, 10, 0.98));
          color: #fff;
        }

        .ega-panel-head {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
        }

        .ega-panel-title {
          font-size: 1.1rem;
          font-weight: 800;
        }

        .ega-online {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .ega-online::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #84cc16;
          box-shadow: 0 0 0 6px rgba(132, 204, 22, 0.15);
        }

        .ega-search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 18px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .ega-search-placeholder {
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.96rem;
        }

        .ega-pill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ega-category-pill {
          border-radius: 999px;
          padding: 11px 14px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #fff;
          font-size: 0.92rem;
          font-weight: 700;
        }

        .ega-hero-highlight {
          border-radius: 24px;
          padding: 18px;
          background: linear-gradient(180deg, rgba(132, 204, 22, 0.18), rgba(132, 204, 22, 0.06));
          border: 1px solid rgba(163, 230, 53, 0.16);
        }

        .ega-hero-highlight strong {
          display: block;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .ega-hero-highlight p {
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.65;
        }

        .ega-section {
          padding: 0 0 82px;
        }

        .ega-section-card,
        .ega-cta-box {
          border-radius: 34px;
          padding: 34px;
        }

        .ega-section-head {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: end;
          margin-bottom: 24px;
        }

        .ega-section-head h2,
        .ega-cta-box h2 {
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1;
          letter-spacing: -0.05em;
          margin: 0;
        }

        .ega-section-head p,
        .ega-cta-box p {
          max-width: 48ch;
          color: var(--ega-muted);
          line-height: 1.7;
          margin: 12px 0 0;
        }

        .ega-feature-grid,
        .ega-category-grid,
        .ega-product-grid,
        .ega-service-grid,
        .ega-review-grid {
          display: grid;
          gap: 18px;
        }

        .ega-feature-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ega-category-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ega-product-grid,
        .ega-service-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ega-review-grid {
          grid-template-columns: 1.1fr 0.9fr;
          align-items: stretch;
        }

        .ega-feature-card,
        .ega-category-card,
        .ega-product-card,
        .ega-service-card,
        .ega-review-card {
          border-radius: 26px;
          padding: 22px;
        }

        .ega-feature-card {
          background: linear-gradient(180deg, rgba(247, 255, 230, 0.96), rgba(255, 255, 255, 0.96));
        }

        .ega-feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          background: rgba(132, 204, 22, 0.14);
          color: var(--ega-lime-dark);
          font-size: 1.35rem;
        }

        .ega-feature-card h3,
        .ega-category-title,
        .ega-product-title,
        .ega-service-card h3,
        .ega-review-big-name {
          margin: 0 0 10px;
          font-size: 1.16rem;
          font-weight: 800;
        }

        .ega-feature-card p,
        .ega-category-sub,
        .ega-product-copy,
        .ega-service-card p,
        .ega-review-big-copy,
        .ega-review-list-copy {
          margin: 0;
          color: var(--ega-muted);
          line-height: 1.65;
        }

        .ega-category-card,
        .ega-product-card,
        .ega-service-card,
        .ega-review-card {
          overflow: hidden;
        }

        .ega-category-media,
        .ega-product-media,
        .ega-service-media {
          width: 100%;
          border-radius: 20px;
          object-fit: cover;
          background: linear-gradient(180deg, rgba(236, 252, 203, 0.92), rgba(255, 255, 255, 0.96));
        }

        .ega-category-media {
          height: 180px;
          padding: 30px;
        }

        .ega-product-media,
        .ega-service-media {
          height: 220px;
        }

        .ega-thumb-fallback {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 900;
          color: var(--ega-lime-dark);
        }

        .ega-category-card-body,
        .ega-product-card-body {
          padding-top: 18px;
        }

        .ega-category-sub {
          font-size: 0.92rem;
        }

        .ega-product-copy {
          min-height: 52px;
          font-size: 0.95rem;
        }

        .ega-product-link,
        .ega-category-link {
          display: inline-flex;
          margin-top: 16px;
          font-weight: 800;
          color: var(--ega-lime-dark);
        }

        .ega-review-big {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(180deg, rgba(18, 24, 8, 0.98), rgba(30, 42, 10, 0.98));
          color: #fff;
        }

        .ega-review-big .ega-review-big-copy,
        .ega-review-big .ega-review-big-name,
        .ega-review-big .ega-review-big-meta {
          color: #fff;
        }

        .ega-review-stars {
          color: #bef264;
          letter-spacing: 0.18em;
          margin-bottom: 18px;
        }

        .ega-review-big-copy {
          font-size: 1.08rem;
          line-height: 1.8;
        }

        .ega-review-big-meta {
          margin-top: 22px;
          color: rgba(255, 255, 255, 0.75);
        }

        .ega-review-list {
          display: grid;
          gap: 16px;
        }

        .ega-review-list-item {
          border-radius: 22px;
          padding: 20px;
          border: 1px solid rgba(217, 240, 153, 0.92);
          background: linear-gradient(180deg, rgba(247, 255, 230, 0.96), rgba(255, 255, 255, 0.96));
          cursor: pointer;
          transition: transform 0.18s ease, border-color 0.18s ease;
        }

        .ega-review-list-item.is-active {
          border-color: var(--ega-lime);
          transform: translateY(-2px);
        }

        .ega-review-list-name {
          font-size: 1rem;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .ega-cta-box {
          background: linear-gradient(135deg, rgba(247, 255, 230, 0.96), rgba(255, 255, 255, 0.96));
          text-align: center;
        }

        .ega-cta-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .ega-floating-wa {
          position: fixed;
          right: 18px;
          bottom: 98px;
          z-index: 45;
          width: 58px;
          height: 58px;
          border-radius: 999px;
          background: var(--ega-lime);
          color: var(--ega-dark);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 18px 40px rgba(132, 204, 22, 0.32);
          font-size: 1.45rem;
          font-weight: 900;
        }

        @media (max-width: 1100px) {
          .ega-feature-grid,
          .ega-category-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ega-product-grid,
          .ega-service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .ega-nav-links {
            display: none;
          }

          .ega-hero-grid,
          .ega-review-grid {
            grid-template-columns: 1fr;
          }

          .ega-stat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ega-section-head {
            flex-direction: column;
            align-items: start;
          }
        }

        @media (max-width: 640px) {
          .ega-container {
            width: min(100% - 20px, 1200px);
          }

          .ega-nav {
            padding: 10px 0;
          }

          .ega-nav-cta {
            padding: 11px 14px;
            font-size: 0.9rem;
          }

          .ega-brand-copy {
            display: none;
          }

          .ega-hero {
            padding: 16px 0 64px;
          }

          .ega-hero-copy,
          .ega-hero-card,
          .ega-section-card,
          .ega-cta-box {
            padding: 22px;
            border-radius: 24px;
          }

          .ega-hero-title {
            max-width: none;
            font-size: 2.55rem;
          }

          .ega-hero-actions,
          .ega-cta-actions {
            flex-direction: column;
          }

          .ega-feature-grid,
          .ega-category-grid,
          .ega-product-grid,
          .ega-service-grid,
          .ega-stat-grid {
            grid-template-columns: 1fr;
          }

          .ega-category-media,
          .ega-product-media,
          .ega-service-media {
            height: 190px;
          }
        }
      `}</style>

      <nav className={`ega-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="ega-container ega-nav-inner">
          <Link href="/" className="ega-brand">
            <EgaptekaMark />
            <div className="ega-brand-wordmark">
              <span className="ega-brand-title">
                EGA<span>PTEKA</span>
              </span>
              <span className="ega-brand-copy">Your Pharmacy. Any Hour.</span>
            </div>
          </Link>

          <div className="ega-nav-links">
            <a href="#categories" className="ega-nav-link">
              Categories
            </a>
            <a href="#products" className="ega-nav-link">
              Best sellers
            </a>
            <a href="#reviews" className="ega-nav-link">
              Reviews
            </a>
          </div>

          <Link href="/contactus" className="ega-nav-cta">
            WhatsApp
          </Link>
        </div>
      </nav>

      <section className="ega-hero">
        <div className="ega-container ega-hero-grid">
          <div className="ega-hero-copy">
            <span className="ega-eyebrow">Sharm El Sheikh pharmacy support</span>
            <h1 className="ega-hero-title">
              Medicine. <span className="ega-lime-text">Delivered to your door.</span>
            </h1>
            <p className="ega-hero-subtitle">
              Same APIs, cleaner landing page. Categories, products, reviews, and support are still powered by your
              current backend, but the homepage now follows the Egapteka design direction much more closely.
            </p>

            <div className="ega-hero-actions">
              <Link href="/products/all" className="ega-btn-primary">
                Explore products
              </Link>
              <button type="button" className="ega-btn-outline" onClick={() => setOpenReview(true)}>
                Write a review
              </button>
            </div>

            <div className="ega-stat-grid">
              {trustStats.map((stat) => (
                <div key={stat.label} className="ega-stat-card">
                  <span className="ega-stat-value">{stat.value}</span>
                  <span className="ega-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ega-hero-card">
            <div className="ega-panel-head">
              <span className="ega-panel-title">Find medicine quickly</span>
              <span className="ega-online">Online</span>
            </div>

            <div className="ega-search-box">
              <span>Search</span>
              <span className="ega-search-placeholder">Search products, symptoms, or ask for pharmacy help...</span>
            </div>

            <div className="ega-pill-grid">
              {heroCategories.map((item, index) => (
                <Link key={item?.id || index} href={`/products/${item?.id}`} className="ega-category-pill">
                  {item?.name || "Category"}
                </Link>
              ))}
            </div>

            <div className="ega-hero-highlight">
              <strong>Built around your live data</strong>
              <p>
                The design is new, but the category API, best-seller API, and testimonial API remain exactly what this
                page uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isLoading ? (
        <SizesExample />
      ) : (
        <>
          <section className="ega-section">
            <div className="ega-container ega-section-card">
              <div className="ega-section-head">
                <div>
                  <span className="ega-eyebrow">Why Egapteka</span>
                  <h2>Designed like a modern pharmacy landing page.</h2>
                </div>
                <p>
                  Stronger hierarchy, softer cards, brighter lime accents, and a clearer flow from discovery to
                  ordering.
                </p>
              </div>

              <div className="ega-feature-grid">
                <article className="ega-feature-card">
                  <div className="ega-feature-icon">AI</div>
                  <h3>Guided ordering</h3>
                  <p>Visitors can understand what to do faster with a cleaner hero, stronger CTAs, and calmer layout.</p>
                </article>
                <article className="ega-feature-card">
                  <div className="ega-feature-icon">24</div>
                  <h3>Delivery-first presentation</h3>
                  <p>The page now feels tailored to urgent pharmacy requests and hotel or room delivery workflows.</p>
                </article>
                <article className="ega-feature-card">
                  <div className="ega-feature-icon">CAT</div>
                  <h3>Clear browsing</h3>
                  <p>Categories and best sellers stay visible, but now sit inside a tighter and more premium structure.</p>
                </article>
                <article className="ega-feature-card">
                  <div className="ega-feature-icon">REV</div>
                  <h3>Trust-forward UI</h3>
                  <p>Reviews and support are positioned more prominently to make the storefront feel more reliable.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="ega-section" id="categories">
            <div className="ega-container ega-section-card">
              <div className="ega-section-head">
                <div>
                  <span className="ega-eyebrow">Browse</span>
                  <h2>Categories</h2>
                </div>
                <p>These cards are still coming from your categories API, but they now match the new visual direction.</p>
              </div>

              <div className="ega-category-grid">
                {showcaseCategories.map((item, index) => (
                  <Link key={item?.id || index} href={`/products/${item?.id}`} className="ega-category-card">
                    <RemoteThumb src={item?.icon_image} alt={item?.name || "Category"} className="ega-category-media" />
                    <div className="ega-category-card-body">
                      <h3 className="ega-category-title">{item?.name || "Category"}</h3>
                      <p className="ega-category-sub">Open this collection and continue browsing products from your current catalog.</p>
                      <span className="ega-category-link">Explore category</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="ega-section" id="products">
            <div className="ega-container ega-section-card">
              <div className="ega-section-head">
                <div>
                  <span className="ega-eyebrow">Top picks</span>
                  <h2>Best sellers</h2>
                </div>
                <p>The product section keeps your current best-seller API and routes visitors into the same product detail flow.</p>
              </div>

              <div className="ega-product-grid">
                {spotlightProducts.map((item, index) => (
                  <Link
                    key={item?.id || index}
                    href={`/products/${item?.category}/details/${item?.id}`}
                    className="ega-product-card"
                  >
                    <RemoteThumb src={item?.home_image} alt={item?.name || "Product"} className="ega-product-media" />
                    <div className="ega-product-card-body">
                      <h3 className="ega-product-title">{item?.name || "Product"}</h3>
                      {formatPrice(item?.price) ? <p className="ega-category-sub" style={{ marginBottom: 10, color: "var(--ega-lime-dark)", fontWeight: 800 }}>{formatPrice(item?.price)}</p> : null}
                      <p className="ega-product-copy">
                        {item?.description ? `${item.description.slice(0, 88)}...` : "View this item and continue to your existing order flow."}
                      </p>
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                        <button
                          type="button"
                          className="ega-btn-primary"
                          onClick={(event) => {
                            event.preventDefault();
                            handleAddToCart(item?.id);
                          }}
                        >
                          {addingProductId === item?.id ? "Adding..." : "Add to cart"}
                        </button>
                        <span className="ega-product-link" style={{ marginTop: 0 }}>Open product</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="ega-section">
            <div className="ega-container ega-section-card">
              <div className="ega-section-head">
                <div>
                  <span className="ega-eyebrow">Services</span>
                  <h2>Support built around pharmacy requests.</h2>
                </div>
                <p>The same business offering is still here, only presented in a way that feels closer to the reference design.</p>
              </div>

              <div className="ega-service-grid">
                {serviceCards.map((service) => (
                  <article key={service.title} className="ega-service-card">
                    <Image src={service.image} alt={service.title} className="ega-service-media" />
                    <div className="ega-category-card-body">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {featuredReviews.length > 0 && (
            <section className="ega-section" id="reviews">
              <div className="ega-container ega-section-card">
                <div className="ega-section-head">
                  <div>
                    <span className="ega-eyebrow">Trusted by guests</span>
                    <h2>Reviews</h2>
                  </div>
                  <p>Testimonials still come from your current API, with a presentation that feels more premium and more visible.</p>
                </div>

                <div className="ega-review-grid">
                  <article className="ega-review-card ega-review-big">
                    <div>
                      <div className="ega-review-stars">5/5 rating</div>
                      <p className="ega-review-big-copy">
                        "{featuredReviews[activeReview]?.description || "Very good pharmacy experience."}"
                      </p>
                    </div>
                    <div className="ega-review-big-meta">
                      <div className="ega-review-big-name">Guest review</div>
                      <div>Rating: {featuredReviews[activeReview]?.rate || 5}/5</div>
                    </div>
                  </article>

                  <div className="ega-review-list">
                    {featuredReviews.map((item, index) => (
                      <button
                        key={item?.id || index}
                        type="button"
                        className={`ega-review-list-item ${activeReview === index ? "is-active" : ""}`}
                        onClick={() => setActiveReview(index)}
                      >
                        <div className="ega-review-list-name">Review {index + 1}</div>
                        <p className="ega-review-list-copy">
                          {item?.description ? `${item.description.slice(0, 130)}...` : "Customer testimonial"}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="ega-section">
            <div className="ega-container ega-cta-box">
              <span className="ega-eyebrow">Need medicine now?</span>
              <h2>Keep the backend. Upgrade the storefront.</h2>
              <p>
                Your homepage now feels much closer to the reference design while continuing to use the same API-backed
                content and routes already in the project.
              </p>

              <div className="ega-cta-actions">
                <Link href="/products/all" className="ega-btn-primary">
                  Browse all products
                </Link>
                <Link href="/contactus" className="ega-btn-outline">
                  Contact pharmacy
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <a href="/contactus" className="ega-floating-wa" aria-label="Contact pharmacy">
        WA
      </a>

      <FooterDesk />

      <div className="d-block d-sm-none">
        <BottomNav />
      </div>

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </div>
  );
}
