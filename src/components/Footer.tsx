import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import logoImage from "@/assets/logo.jpeg";

export const Footer = () => {
  const socialLinks = {
    email: "nj239332@gmail.com",
    facebook: "", // Add Facebook URL here
    instagram: "", // Add Instagram URL here
    twitter: "", // Add Twitter URL here
    youtube: "" // Add YouTube URL here
  };
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex gap-4">
            <img src={logoImage} alt="Victory Logo" className="h-32 w-32 rounded object-cover flex-shrink-0" />
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">Victory Shoes Collection</h3>
              <p className="text-sm opacity-80">
                Step Up Your Game with premium footwear designed for style, comfort, and performance.
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Contact Info</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+254725871820</li>
              <li>+254787123634</li>
              <li>Based Machakos & Nairobi</li>
              <li>Delivery Country Wide</li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href={`mailto:${socialLinks.email}`}
                className="opacity-80 hover:opacity-100 hover:text-gold transition-all hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-gold transition-all hover:scale-110"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-gold transition-all hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-gold transition-all hover:scale-110"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-gold transition-all hover:scale-110"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          © 2025 Victory Shoe Collection. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
