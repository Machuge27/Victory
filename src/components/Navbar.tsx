import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import iconImage from "@/assets/icon.jpg";

export const Navbar = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={iconImage} alt="Victory Icon" className="h-8 w-8 rounded transition-transform group-hover:scale-110" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Victory</h1>
              <p className="text-xs text-muted-foreground -mt-1">Shoe Collection</p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isActive("/") ? "text-gold" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isActive("/products") ? "text-gold" : "text-foreground"
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isActive("/about") ? "text-gold" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-gold ${
                isActive("/contact") ? "text-gold" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="gold" size="default" asChild className="hidden md:inline-flex">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/"
                className={`block text-sm font-medium transition-colors hover:text-gold ${
                  isActive("/") ? "text-gold" : "text-foreground"
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`block text-sm font-medium transition-colors hover:text-gold ${
                  isActive("/products") ? "text-gold" : "text-foreground"
                }`}
                onClick={closeMobileMenu}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`block text-sm font-medium transition-colors hover:text-gold ${
                  isActive("/about") ? "text-gold" : "text-foreground"
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block text-sm font-medium transition-colors hover:text-gold ${
                  isActive("/contact") ? "text-gold" : "text-foreground"
                }`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Button variant="gold" size="default" asChild className="w-full">
                <Link to="/products" onClick={closeMobileMenu}>Shop Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
