import { ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Product } from "../lib/mock-data";
import { motion } from "motion/react";
import { ImageWithFallback } from "./img/ImageWithFallback";


interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({
  product,
  onViewDetails,
  onAddToCart,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-accent text-accent"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden bg-white border-border hover:shadow-lg transition-shadow">
        <div
          className="relative aspect-square overflow-hidden bg-muted cursor-pointer"
          onClick={() => onViewDetails(product)}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs">
              {product.category}
            </span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3
              className="line-clamp-1 cursor-pointer hover:text-primary transition-colors"
              onClick={() => onViewDetails(product)}
            >
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {renderStars(product.rating)}
              <span className="text-sm text-muted-foreground">
                ({product.reviews})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-primary">${product.price.toFixed(2)}</span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onViewDetails(product)}
            >
              View Details
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90"
              size="icon"
              onClick={() => onAddToCart(product)}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}