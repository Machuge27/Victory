// Air/Athletic Shoes
import air1 from "@/assets/products/air1.jpeg";

// Brogue Shoes
import brogue1 from "@/assets/products/brogue1.jpeg";

// Calvin Collection
import calvin from "@/assets/products/calvin.jpeg";
import calvin1 from "@/assets/products/calvin1.jpeg";

// Chelsea Boots
import chelsea1 from "@/assets/products/chelsea1.jpeg";

// Cracks Collection
import cracks1 from "@/assets/products/cracks1.jpeg";
import cracks2 from "@/assets/products/cracks2.jpeg";
import cracks3 from "@/assets/products/cracks3.jpeg";
import cracks4 from "@/assets/products/cracks4.jpeg";
import cracks6 from "@/assets/products/cracks6.jpeg";
import cracks7 from "@/assets/products/cracks7.jpeg";
import cracks8 from "@/assets/products/cracks8.jpeg";

// Doll Collection
import doll1 from "@/assets/products/doll1.jpeg";

// Dunks
import dunks1 from "@/assets/products/dunks1.jpeg";

// Ladies Collection
import ladies1 from "@/assets/products/ladies1.jpeg";

// Leather Boots
import lboots1 from "@/assets/products/lboots1.jpeg";

// Nike Shox
import nikeshox from "@/assets/products/nikeshox.jpeg";
import nikeshox2 from "@/assets/products/nikeshox (2).jpeg";

// Oxford Shoes
import oxford1 from "@/assets/products/oxford1.jpeg";

// Paris Collection
import paris1 from "@/assets/products/paris1.jpeg";
import paris2 from "@/assets/products/paris2.jpeg";
import paris3 from "@/assets/products/paris3.jpeg";
import paris4 from "@/assets/products/paris4.jpeg";

// Philipp Collection
import philipp from "@/assets/products/philipp.jpeg";

// Rerrex Collection
import rerrex6 from "@/assets/products/rerrex6.jpeg";

// Sneakers
import sneakers2 from "@/assets/products/sneakers2.jpeg";
import sneakers3 from "@/assets/products/sneakers3.jpeg";
import sneakers4 from "@/assets/products/sneakers4.jpeg";
import sneakers5 from "@/assets/products/sneakers5.jpeg";

// Sport Collection
import sport1 from "@/assets/products/sport1.jpeg";
import sport2 from "@/assets/products/sport2.jpeg";
import sport3 from "@/assets/products/sport3.jpeg";
import sport4 from "@/assets/products/sport4.jpeg";
import sport5 from "@/assets/products/sport5.jpeg";

// Stacked Heels
import stackedH from "@/assets/products/stackedH.jpeg";

// Taiyu Collection
import taiyu from "@/assets/products/taiyu.jpeg";

// Terrex Collection
import terrex1 from "@/assets/products/terrex1.jpeg";
import terrex2 from "@/assets/products/terrex2.jpeg";
import terrex3 from "@/assets/products/terrex3.jpeg";
import terrex4 from "@/assets/products/terrex4.jpeg";
import terrex5 from "@/assets/products/terrex5.jpeg";

// Vans
import vans from "@/assets/products/vans.jpeg";

// Wellington Boots
import wellingtonBoots from "@/assets/products/wellington boots.jpeg";

// Winter Collection
import winter1 from "@/assets/products/winter1.jpeg";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  // Air/Athletic Collection
  {
    id: 1,
    name: "Air Athletic Runner",
    price: "KSh 18,500",
    image: air1,
    description: "Premium athletic runners designed for performance and style.",
    features: ["Air cushioning", "Breathable mesh", "Lightweight design", "Performance sole"]
  },
  
  // Brogue Collection
  {
    id: 2,
    name: "Classic Brogue Oxford",
    price: "KSh 22,000",
    image: brogue1,
    description: "Elegant brogue oxfords perfect for formal occasions.",
    features: ["Genuine leather", "Brogue detailing", "Comfortable fit", "Classic design"]
  },
  
  // Calvin Collection
  {
    id: 3,
    name: "Calvin Casual Sneaker",
    price: "KSh 16,500",
    image: calvin,
    description: "Modern casual sneakers with contemporary styling.",
    features: ["Premium materials", "Comfortable sole", "Stylish design", "Versatile wear"]
  },
  {
    id: 4,
    name: "Calvin Sport Edition",
    price: "KSh 17,200",
    image: calvin1,
    description: "Sport edition Calvin sneakers for active lifestyle.",
    features: ["Sport design", "Enhanced grip", "Durable construction", "Athletic comfort"]
  },
  
  // Chelsea Boots
  {
    id: 5,
    name: "Chelsea Boot Classic",
    price: "KSh 24,500",
    image: chelsea1,
    description: "Timeless Chelsea boots for sophisticated style.",
    features: ["Elastic side panels", "Premium leather", "Ankle height", "Classic silhouette"]
  },
  
  // Cracks Collection
  {
    id: 6,
    name: "Cracks Urban Style",
    price: "KSh 15,800",
    image: cracks1,
    description: "Urban style sneakers with unique crack pattern design.",
    features: ["Unique design", "Comfortable fit", "Urban style", "Quality materials"]
  },
  {
    id: 7,
    name: "Cracks Street Edition",
    price: "KSh 16,200",
    image: cracks2,
    description: "Street edition with distinctive crack pattern styling.",
    features: ["Street style", "Distinctive pattern", "Comfortable wear", "Modern design"]
  },
  {
    id: 8,
    name: "Cracks Premium",
    price: "KSh 17,500",
    image: cracks3,
    description: "Premium version of the popular Cracks collection.",
    features: ["Premium materials", "Enhanced comfort", "Stylish pattern", "Quality construction"]
  },
  {
    id: 9,
    name: "Cracks Sport",
    price: "KSh 16,800",
    image: cracks4,
    description: "Sport variant with crack pattern and athletic features.",
    features: ["Athletic design", "Sport comfort", "Unique styling", "Performance sole"]
  },
  {
    id: 10,
    name: "Cracks Elite",
    price: "KSh 18,200",
    image: cracks6,
    description: "Elite edition with advanced crack pattern design.",
    features: ["Elite design", "Advanced comfort", "Premium finish", "Distinctive style"]
  },
  {
    id: 11,
    name: "Cracks Professional",
    price: "KSh 17,800",
    image: cracks7,
    description: "Professional grade with sophisticated crack styling.",
    features: ["Professional grade", "Sophisticated design", "Quality materials", "Comfortable fit"]
  },
  {
    id: 12,
    name: "Cracks Signature",
    price: "KSh 19,200",
    image: cracks8,
    description: "Signature edition featuring the finest crack pattern design.",
    features: ["Signature design", "Premium quality", "Unique pattern", "Exceptional comfort"]
  },
  
  // Doll Collection
  {
    id: 13,
    name: "Doll Elegant Heel",
    price: "KSh 21,500",
    image: doll1,
    description: "Elegant heeled shoes perfect for special occasions.",
    features: ["Elegant design", "Comfortable heel", "Premium materials", "Sophisticated style"]
  },
  
  // Dunks
  {
    id: 14,
    name: "Classic Dunks",
    price: "KSh 19,800",
    image: dunks1,
    description: "Classic dunk-style sneakers with retro appeal.",
    features: ["Retro design", "Classic styling", "Comfortable fit", "Durable construction"]
  },
  
  // Ladies Collection
  {
    id: 15,
    name: "Ladies Comfort Sneaker",
    price: "KSh 16,800",
    image: ladies1,
    description: "Comfortable sneakers designed specifically for women.",
    features: ["Women's fit", "Comfort design", "Stylish appearance", "All-day wear"]
  },
  
  // Leather Boots
  {
    id: 16,
    name: "Leather Boot Premium",
    price: "KSh 26,500",
    image: lboots1,
    description: "Premium leather boots for durability and style.",
    features: ["Premium leather", "Durable construction", "Weather resistant", "Classic boot design"]
  },
  
  // Nike Shox
  {
    id: 17,
    name: "Nike Shox Classic",
    price: "KSh 23,500",
    image: nikeshox,
    description: "Classic Nike Shox with signature cushioning technology.",
    features: ["Shox cushioning", "Nike quality", "Athletic performance", "Iconic design"]
  },
  {
    id: 18,
    name: "Nike Shox Elite",
    price: "KSh 24,800",
    image: nikeshox2,
    description: "Elite version of Nike Shox with enhanced features.",
    features: ["Elite cushioning", "Enhanced performance", "Premium materials", "Advanced design"]
  },
  
  // Oxford Shoes
  {
    id: 19,
    name: "Oxford Formal",
    price: "KSh 21,200",
    image: oxford1,
    description: "Classic Oxford shoes for formal and business wear.",
    features: ["Formal design", "Leather construction", "Business appropriate", "Classic styling"]
  },
  
  // Paris Collection
  {
    id: 20,
    name: "Paris Elegance",
    price: "KSh 20,500",
    image: paris1,
    description: "Elegant Parisian-inspired footwear for sophisticated style.",
    features: ["Parisian style", "Elegant design", "Sophisticated look", "Quality materials"]
  },
  {
    id: 21,
    name: "Paris Chic",
    price: "KSh 21,800",
    image: paris2,
    description: "Chic Parisian style shoes for the fashion-forward.",
    features: ["Chic design", "Fashion forward", "Parisian inspiration", "Stylish comfort"]
  },
  {
    id: 22,
    name: "Paris Luxury",
    price: "KSh 23,200",
    image: paris3,
    description: "Luxury edition of the Paris collection.",
    features: ["Luxury materials", "Premium design", "Parisian elegance", "Exceptional quality"]
  },
  {
    id: 23,
    name: "Paris Signature",
    price: "KSh 24,500",
    image: paris4,
    description: "Signature Paris collection with exclusive design.",
    features: ["Signature design", "Exclusive styling", "Premium comfort", "Parisian luxury"]
  },
  
  // Philipp Collection
  {
    id: 24,
    name: "Philipp Designer",
    price: "KSh 28,500",
    image: philipp,
    description: "Designer shoes from the exclusive Philipp collection.",
    features: ["Designer quality", "Exclusive design", "Premium materials", "Luxury finish"]
  },
  
  // Rerrex Collection
  {
    id: 25,
    name: "Rerrex Performance",
    price: "KSh 19,200",
    image: rerrex6,
    description: "High-performance shoes from the Rerrex collection.",
    features: ["Performance design", "Athletic comfort", "Durable materials", "Sport functionality"]
  },
  
  // Sneakers Collection
  {
    id: 26,
    name: "Classic White Sneaker",
    price: "KSh 16,900",
    image: sneakers2,
    description: "Timeless white sneakers for everyday wear.",
    features: ["Classic white", "Everyday comfort", "Versatile style", "Quality construction"]
  },
  {
    id: 27,
    name: "Urban Casual Sneaker",
    price: "KSh 15,600",
    image: sneakers3,
    description: "Urban casual sneakers for modern lifestyle.",
    features: ["Urban style", "Casual comfort", "Modern design", "All-day wear"]
  },
  {
    id: 28,
    name: "Sport Sneaker Pro",
    price: "KSh 17,800",
    image: sneakers4,
    description: "Professional sport sneakers for active individuals.",
    features: ["Sport performance", "Professional grade", "Active lifestyle", "Enhanced support"]
  },
  {
    id: 29,
    name: "Premium Sneaker Elite",
    price: "KSh 18,500",
    image: sneakers5,
    description: "Elite premium sneakers with superior quality.",
    features: ["Premium quality", "Elite design", "Superior comfort", "Luxury materials"]
  },
  
  // Sport Collection
  {
    id: 30,
    name: "Sport Runner Basic",
    price: "KSh 14,800",
    image: sport1,
    description: "Basic sport runners for everyday training.",
    features: ["Basic sport design", "Training comfort", "Everyday use", "Affordable quality"]
  },
  {
    id: 31,
    name: "Sport Runner Advanced",
    price: "KSh 16,500",
    image: sport2,
    description: "Advanced sport runners with enhanced features.",
    features: ["Advanced design", "Enhanced features", "Sport performance", "Improved comfort"]
  },
  {
    id: 32,
    name: "Sport Runner Pro",
    price: "KSh 18,200",
    image: sport3,
    description: "Professional sport runners for serious athletes.",
    features: ["Professional grade", "Athlete performance", "Advanced technology", "Superior support"]
  },
  {
    id: 33,
    name: "Sport Runner Elite",
    price: "KSh 20,800",
    image: sport4,
    description: "Elite sport runners with cutting-edge technology.",
    features: ["Elite performance", "Cutting-edge tech", "Maximum comfort", "Professional quality"]
  },
  {
    id: 34,
    name: "Sport Runner Signature",
    price: "KSh 22,500",
    image: sport5,
    description: "Signature sport runners with premium features.",
    features: ["Signature design", "Premium features", "Top performance", "Luxury comfort"]
  },
  
  // Stacked Heels
  {
    id: 35,
    name: "Stacked Heel Fashion",
    price: "KSh 19,800",
    image: stackedH,
    description: "Fashionable stacked heel shoes for style-conscious individuals.",
    features: ["Stacked heel design", "Fashion forward", "Stylish comfort", "Modern appeal"]
  },
  
  // Taiyu Collection
  {
    id: 36,
    name: "Taiyu Comfort",
    price: "KSh 17,500",
    image: taiyu,
    description: "Comfortable shoes from the Taiyu collection.",
    features: ["Comfort focus", "Quality materials", "Ergonomic design", "All-day comfort"]
  },
  
  // Terrex Collection
  {
    id: 37,
    name: "Terrex Outdoor Basic",
    price: "KSh 18,800",
    image: terrex1,
    description: "Basic outdoor shoes from the Terrex collection.",
    features: ["Outdoor design", "Durable construction", "Weather resistant", "Trail ready"]
  },
  {
    id: 38,
    name: "Terrex Hiking Pro",
    price: "KSh 21,200",
    image: terrex2,
    description: "Professional hiking shoes with advanced features.",
    features: ["Hiking performance", "Advanced grip", "Weather protection", "Professional grade"]
  },
  {
    id: 39,
    name: "Terrex Adventure",
    price: "KSh 19,500",
    image: terrex3,
    description: "Adventure-ready shoes for outdoor enthusiasts.",
    features: ["Adventure ready", "Outdoor comfort", "Rugged design", "Trail performance"]
  },
  {
    id: 40,
    name: "Terrex Explorer",
    price: "KSh 20,800",
    image: terrex4,
    description: "Explorer edition for serious outdoor activities.",
    features: ["Explorer design", "Serious outdoor use", "Enhanced durability", "Adventure comfort"]
  },
  {
    id: 41,
    name: "Terrex Summit",
    price: "KSh 23,500",
    image: terrex5,
    description: "Summit edition for extreme outdoor conditions.",
    features: ["Summit performance", "Extreme conditions", "Maximum durability", "Professional outdoor"]
  },
  
  // Vans
  {
    id: 42,
    name: "Classic Vans Style",
    price: "KSh 16,200",
    image: vans,
    description: "Classic Vans-style sneakers with timeless appeal.",
    features: ["Classic Vans style", "Timeless design", "Skateboard culture", "Casual comfort"]
  },
  
  // Wellington Boots
  {
    id: 43,
    name: "Wellington Rain Boots",
    price: "KSh 12,500",
    image: wellingtonBoots,
    description: "Waterproof Wellington boots for wet conditions.",
    features: ["Waterproof design", "Rain protection", "Durable rubber", "Weather resistant"]
  },
  
  // Winter Collection
  {
    id: 44,
    name: "Winter Warm Boot",
    price: "KSh 24,800",
    image: winter1,
    description: "Warm winter boots for cold weather protection.",
    features: ["Winter warmth", "Cold weather protection", "Insulated design", "Weather resistant"]
  },
];
