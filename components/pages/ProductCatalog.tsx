import { useState, useMemo } from "react";
import { Header } from "../Header";
import { FilterSidebar } from "../FilterSidebar";
import  {ProductCard}  from "../ProductCard";
import { Product, products } from "../../lib/mock-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { motion } from "motion/react";

interface ProductCatalogProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onLoginClick: () => void;
  cartCount: number;
}

export function ProductCatalog({ onProductClick, onAddToCart, onLoginClick, cartCount }: ProductCatalogProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const ratingMatch =
        selectedRatings.length === 0 ||
        selectedRatings.some((rating) => product.rating >= rating);

      return categoryMatch && priceMatch && ratingMatch;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, selectedRatings, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header
        onMenuClick={() => setIsSidebarOpen(true)}
        onLoginClick={onLoginClick}
        cartCount={cartCount}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          <FilterSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            selectedRatings={selectedRatings}
            onRatingChange={setSelectedRatings}
          />

          <div className="flex-1">
            {/* Header with sort */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
            >
              <div>
                <h2>
                  {selectedCategory === "All" ? "All Products" : selectedCategory}
                </h2>
                <p className="text-muted-foreground">
                  {filteredProducts.length} products found
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="lg:hidden px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  Filters
                </button>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={onProductClick}
                      onAddToCart={onAddToCart}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center items-center gap-2 mt-8"
                  >
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            currentPage === page
                              ? "bg-primary text-primary-foreground"
                              : "border border-border hover:bg-muted"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No products found matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

