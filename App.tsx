import { useState } from "react";
import { ProductCatalog } from "./components/pages/ProductCatalog";
import { ProductDetails } from "./components/pages/ProductDetails";
import { AuthPage } from "./components/pages/AuthPage";
import { Product } from "./lib/mock-data";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sooner";

type View = "catalog" | "details" | "auth";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("catalog");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView("details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCatalog = () => {
    setCurrentView("catalog");
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoginClick = () => {
    setCurrentView("auth");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart!`, {
      description: `Price: $${product.price.toFixed(2)}`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />

      {currentView === "catalog" && (
        <ProductCatalog
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
          onLoginClick={handleLoginClick}
          cartCount={cartItems.length}
        />
      )}

      {currentView === "details" && selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onBack={handleBackToCatalog}
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
          onLoginClick={handleLoginClick}
          cartCount={cartItems.length}
        />
      )}

      {currentView === "auth" && <AuthPage onBack={handleBackToCatalog} />}

      {/* Footer */}
      {currentView !== "auth" && (
        <footer className="bg-white border-t border-border mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="mb-4">About Us</h3>
                <p className="text-muted-foreground">
                  Samuel Adikah Enterprises - Your trusted source for premium
                  electronics and technology products.
                </p>
              </div>
              <div>
                <h3 className="mb-4">Quick Links</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">Support</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Returns
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">Legal</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
              <p>&copy; 2025 Samuel Adikah Enterprises. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

