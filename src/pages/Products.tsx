import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useEffect, useState, useRef } from "react";

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = entry.target.getAttribute("data-product-id");
            setVisibleProducts((prev) => new Set([...prev, productId]));
          }
        });
      },
      { rootMargin: "100px" }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-product-id]");
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });
  }, []);
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our premium selection of footwear designed for every
            occasion
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="animate-fade-in min-h-[400px]"
              data-product-id={product.id}
            >
              {visibleProducts.has(product.id.toString()) ? (
                <ProductCard
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              ) : (
                <div className="bg-secondary rounded-lg h-[400px] animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
