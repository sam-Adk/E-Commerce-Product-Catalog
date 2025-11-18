import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { categories } from "../lib/mock-data";
import { motion, AnimatePresence } from "motion/react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
  selectedRatings: number[];
  onRatingChange: (ratings: number[]) => void;
}

export function FilterSidebar({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedRatings,
  onRatingChange,
}: FilterSidebarProps) {
  const ratings = [5, 4, 3];

  const handleRatingToggle = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      onRatingChange(selectedRatings.filter((r) => r !== rating));
    } else {
      onRatingChange([...selectedRatings, rating]);
    }
  };

  const sidebarContent = (
    <div className="h-full overflow-y-auto">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <h2>Filters</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Category Filter */}
        <div>
          <h3 className="mb-4">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  if (window.innerWidth < 1024) onClose();
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="mb-4">Price Range</h3>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={onPriceChange}
              max={2000}
              step={50}
              className="w-full"
            />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">
                ${priceRange[0]}
              </span>
              <span className="text-muted-foreground">
                ${priceRange[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="mb-4">Rating</h3>
          <div className="space-y-3">
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={selectedRatings.includes(rating)}
                  onCheckedChange={() => handleRatingToggle(rating)}
                />
                <label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <span className="text-accent">★</span>
                  <span>{rating}+ Stars</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            onCategoryChange("All");
            onPriceChange([0, 2000]);
            onRatingChange([]);
          }}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-white rounded-xl border border-border shadow-sm h-fit sticky top-24">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-white z-50 shadow-xl"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
