import product1 from "@/assets/products/sneakers2.jpeg";
import product2 from "@/assets/products/air1.jpeg";
import product3 from "@/assets/products/sneakers3.jpeg";
import product4 from "@/assets/products/chelsea1.jpeg";
import product5 from "@/assets/products/sport1.jpeg";
import product6 from "@/assets/products/ladies1.jpeg";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Victory White",
    price: "KSh 16,900",
    image: product1,
    description: "Timeless white sneakers crafted with premium materials for everyday elegance and comfort.",
    features: ["Premium leather upper", "Cushioned insole", "Durable rubber outsole", "Classic design"]
  },
  {
    id: 2,
    name: "Gold Rush Runner",
    price: "KSh 19,500",
    image: product2,
    description: "Stand out with these eye-catching runners featuring gold accents and superior performance.",
    features: ["Lightweight mesh", "Gold metallic details", "Enhanced breathability", "Performance sole"]
  },
  {
    id: 3,
    name: "Urban Gray Casual",
    price: "KSh 15,600",
    image: product3,
    description: "Versatile gray casual shoes perfect for any occasion, combining style with all-day comfort.",
    features: ["Soft suede finish", "Padded collar", "Flexible sole", "All-day comfort"]
  },
  {
    id: 4,
    name: "Heritage Leather Boot",
    price: "KSh 26,000",
    image: product4,
    description: "Premium leather boots built to last, offering exceptional quality and timeless style.",
    features: ["Full-grain leather", "Water-resistant", "Sturdy construction", "Classic boot design"]
  },
  {
    id: 5,
    name: "Victory Navy Elite",
    price: "KSh 20,800",
    image: product5,
    description: "Elite performance footwear in sophisticated navy, engineered for those who demand the best.",
    features: ["Advanced cushioning", "Breathable fabric", "Athletic support", "Premium finish"]
  },
  {
    id: 6,
    name: "Rose Gold Performance",
    price: "KSh 22,100",
    image: product6,
    description: "Stylish performance shoes with rose gold accents, perfect for the modern athlete.",
    features: ["Responsive cushioning", "Rose gold details", "Lightweight design", "Superior grip"]
  },
];
