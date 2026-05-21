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
import getallCategories, { getallUsesApi } from "@/Apis/Category";
import getallProducts, { getallProductsWithNoCategory, searchAllProducts } from "@/Apis/products";
import styles from "@/styles/storefront.module.css";
import { RemoteThumb, StorefrontNav, formatPrice } from "./StorefrontShared";

function truncate(text, length = 120) {
  if (!text) return "Open this product to view the full details and continue to your request.";
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

export default function CatalogPage({ mode = "all" }) {
  const router = useRouter();
  const categoryId = mode === "category" ? router.query.id : "all";
  const pageFromQuery = Number(router.query.page || 1);

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [uses, setUses] = useState([]);
  const [activeCategory, setActiveCategory] = useState(mode === "category" ? null : "all");
  const [selectedUse, setSelectedUse] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(pageFromQuery > 0 ? pageFromQuery : 1);
  const [pageCount, setPageCount] = useState(1);
  const [openReview, setOpenReview] = useState(false);
  const [addingProductId, setAddingProductId] = useState(null);

  useEffect(() => {
    setPage(pageFromQuery > 0 ? pageFromQuery : 1);
  }, [pageFromQuery]);

  useEffect(() => {
    if (mode === "category" && categoryId) {
      setActiveCategory(categoryId);
    }
  }, [categoryId, mode]);

  useEffect(() => {
    const loadMeta = async () => {
      const [categoryRes, useRes] = await Promise.all([getallCategories(), getallUsesApi()]);
      setCategories(categoryRes?.results || categoryRes || []);
      setUses(useRes?.results || useRes || []);
    };

    loadMeta();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);

      try {
        if (searchTerm.trim()) {
          const res = await searchAllProducts(searchTerm.trim());
          setProducts(res?.results || []);
          setPageCount(1);
          return;
        }

        const isAll = activeCategory === "all" || !activeCategory;
        const res = isAll
          ? await getallProductsWithNoCategory({ active: page })
          : await getallProducts({
              category: activeCategory,
              uses: selectedUse || undefined,
              active: page,
            });

        const items = res?.results || [];
        const totalCount = res?.count || items.length || 1;
        const limit = isAll ? 10 : 20;

        setProducts(items);
        setPageCount(Math.max(1, Math.ceil(totalCount / limit)));
      } finally {
        setIsLoading(false);
      }
    };

    if (mode === "category" && !activeCategory) return;
    loadProducts();
  }, [activeCategory, mode, page, searchTerm, selectedUse]);

  const selectedCategoryName = useMemo(() => {
    if (activeCategory === "all") return "All products";
    return categories.find((item) => String(item?.id) === String(activeCategory))?.name || "Category";
  }, [activeCategory, categories]);

  const heroStats = [
    { value: `${products.length || 0}`, label: "Shown now" },
    { value: `${categories.length || 0}+`, label: "Categories" },
    { value: selectedUse || "All", label: "Use filter" },
  ];

  const pageNumbers = useMemo(() => {
    const safeCount = Math.max(1, pageCount);
    const start = Math.max(1, page - 2);
    const end = Math.min(safeCount, page + 2);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }, [page, pageCount]);

  const handlePageChange = (nextPage) => {
    const targetPage = Math.max(1, Math.min(pageCount, nextPage));
    setPage(targetPage);
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: targetPage },
      },
      undefined,
      { shallow: true }
    );
  };

  const clearFilters = () => {
    setSelectedUse("");
    setSearchTerm("");
    setPage(1);
  };

  const handleAddToCart = async (productId) => {
    const hasUser = typeof window !== "undefined" && localStorage.getItem("user");
    if (!hasUser) {
      router.push("/login");
      return;
    }

    setAddingProductId(productId);
    await PostCart({
      product: productId,
      quantity: 1,
    });
    setAddingProductId(null);
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>{selectedCategoryName} | Pharmacy Well</title>
      </Head>

      <StorefrontNav />

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCard}>
            <span className={styles.eyebrow}>Pharmacy storefront</span>
            <h1 className={styles.heroTitle}>
              Browse products in the same <span style={{ color: "var(--theme-lime)" }}>home page style.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              The catalog now follows the new Egapteka visual direction, while still using your current product and
              category APIs.
            </p>

            <div className={styles.heroActions}>
              <Link href="/requests" className={styles.primaryButton}>
                Open cart
              </Link>
              <button type="button" className={styles.secondaryButton} onClick={() => setOpenReview(true)}>
                Write a review
              </button>
            </div>

            <div className={styles.statGrid}>
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.darkPanel}>
            <div>
              <div className={styles.panelTitle}>Active collection</div>
              <p className={styles.microText} style={{ color: "rgba(255,255,255,0.78)", marginTop: 8 }}>
                {selectedCategoryName}
              </p>
            </div>

            <div>
              <span className={styles.microText} style={{ color: "rgba(255,255,255,0.78)" }}>
                Quick category jump
              </span>
              <div className={styles.pillGrid} style={{ marginTop: 12 }}>
                <Link href="/products/all" className={styles.panelPill}>
                  All products
                </Link>
                {categories.slice(0, 5).map((item) => (
                  <Link key={item?.id} href={`/products/${item?.id}`} className={styles.panelPill}>
                    {item?.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className={styles.microText} style={{ color: "rgba(255,255,255,0.78)" }}>
                Current filters
              </span>
              <div className={styles.pillGrid} style={{ marginTop: 12 }}>
                <span className={styles.panelPill}>{selectedUse || "All uses"}</span>
                <span className={styles.panelPill}>{searchTerm || "No search term"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.sectionCard}`}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.eyebrow}>Catalog controls</span>
              <h2 className={styles.sectionTitle}>Search, filter, and continue shopping.</h2>
            </div>
            <p className={styles.sectionLead}>
              Category links, use filters, and the product grid are now presented with the same spacing, cards, and
              accent system as the homepage.
            </p>
          </div>

          <div className={styles.utilityRow}>
            <label className={styles.searchWrap}>
              <span aria-hidden="true">Search</span>
              <input
                className={styles.searchInput}
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setPage(1);
                }}
                placeholder="Search by product name"
              />
            </label>

            <label className={styles.selectWrap}>
              <span aria-hidden="true">Use</span>
              <select
                className={styles.select}
                value={selectedUse}
                onChange={(event) => {
                  setSelectedUse(event.target.value);
                  setPage(1);
                }}
              >
                <option value="">All uses</option>
                {uses.map((item, index) => (
                  <option key={item?.id || item?.name || index} value={item?.name || item}>
                    {item?.name || item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className={styles.filterCard}>
            <div>
              <strong style={{ display: "block", marginBottom: 6 }}>Category filters</strong>
              <p className={styles.filterMeta}>Choose a category to narrow the storefront without leaving the new design.</p>
            </div>
            <button type="button" className={styles.secondaryButton} onClick={clearFilters}>
              Clear filters
            </button>
          </div>

          <div className={styles.pillGrid} style={{ marginBottom: 22 }}>
            <button
              type="button"
              className={styles.pill}
              onClick={() => {
                setActiveCategory("all");
                setPage(1);
                if (mode === "category") router.push("/products/all");
              }}
            >
              All products
            </button>
            {categories.map((item) => (
              <button
                key={item?.id}
                type="button"
                className={styles.pill}
                onClick={() => {
                  setActiveCategory(item?.id);
                  setPage(1);
                  router.push(`/products/${item?.id}`);
                }}
              >
                {item?.name}
              </button>
            ))}
          </div>

          {isLoading ? (
            <SizesExample />
          ) : products.length > 0 ? (
            <>
              <div className={styles.grid}>
                {products.map((item, index) => (
                  <article key={item?.id || index} className={styles.productCard}>
                    <RemoteThumb src={item?.home_image} alt={item?.name || "Product"} className={styles.productMedia} />
                    <div className={styles.productBody}>
                      <h3 className={styles.productTitle}>{item?.name || "Product"}</h3>
                      <div className={styles.productMeta}>
                        <span className={styles.metaTag}>{item?.category_name || item?.category?.name || "Pharmacy item"}</span>
                        {item?.best_seller ? <span className={styles.metaTag}>Best seller</span> : null}
                      </div>
                      {formatPrice(item?.price) ? <p className={styles.productPrice}>{formatPrice(item?.price)}</p> : null}
                      <p className={styles.productCopy}>{truncate(item?.description || item?.short_description)}</p>
                      <div className={styles.productFooter}>
                        <button
                          type="button"
                          className={styles.primaryButton}
                          onClick={() => handleAddToCart(item?.id)}
                          disabled={addingProductId === item?.id}
                        >
                          {addingProductId === item?.id ? "Adding..." : "Add to cart"}
                        </button>
                        <Link href={`/products/${item?.category || activeCategory || "all"}/details/${item?.id}`} className={styles.secondaryButton}>
                          View details
                        </Link>
                        <Link href="/requests" className={styles.secondaryButton}>
                          Open cart
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {pageCount > 1 && !searchTerm.trim() ? (
                <div className={styles.pagination}>
                  <button
                    type="button"
                    className={styles.pageButton}
                    disabled={page === 1}
                    onClick={() => handlePageChange(page - 1)}
                  >
                    {"<"}
                  </button>
                  {pageNumbers.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      className={`${styles.pageButton} ${page === pageNumber ? styles.pageButtonActive : ""}`}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={styles.pageButton}
                    disabled={page === pageCount}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    {">"}
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className={styles.emptyState}>
              <h3>No products matched this filter</h3>
              <p>Try another category or clear the active filters to return to the full storefront.</p>
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
