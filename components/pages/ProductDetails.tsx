import { ArrowLeft, ShoppingCart, Star, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Product, products } from "../../lib/mock-data";
import { motion } from "motion/react";
import { ImageWithFallback } from "../img/ImageWithFallback";
import { Header } from "../Header";

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  onLoginClick: () => void;
  cartCount: number;
}

export function ProductDetails({
  product,
  onBack,
  onAddToCart,
  onProductClick,
  onLoginClick,
  cartCount,
}: ProductDetailsProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "fill-accent text-accent" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Get related products from the same category
  const relatedProducts = products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  const features = [
    "Premium quality materials",
    "1-year manufacturer warranty",
    "Free shipping on orders over $50",
    "30-day return policy",
    "Expert customer support",
  ];

  return (
    <>
      <Header
        onLoginClick={onLoginClick}
        cartCount={cartCount}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Product Image */}
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="aspect-square">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm mb-3">
                {product.category}
              </span>
              <h1 className="mb-2">{product.name}</h1>
              <div className="flex items-center gap-3">
                {renderStars(product.rating)}
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-primary">${product.price.toFixed(2)}</h2>
            </div>

            <div>
              <h3 className="mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="mb-3">Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 gap-2"
                onClick={() => onAddToCart(product)}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1">
                Buy Now
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Free Shipping</p>
                <p>On orders $50+</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Warranty</p>
                <p>1 Year</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Returns</p>
                <p>30 Days</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="overflow-hidden bg-white border-border hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => onProductClick(relatedProduct)}
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="line-clamp-1">{relatedProduct.name}</h4>
                    <div className="flex items-center gap-2">
                      {renderStars(relatedProduct.rating)}
                    </div>
                    <p className="text-primary">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}