import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
}

export const ProductCard = ({ id, image, name, price }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`}>
      <Card className="group cursor-pointer overflow-hidden border-border shadow-card hover:shadow-hover transition-all duration-300">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-secondary aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-gold transition-colors">
            {name}
          </h3>
          <p className="text-2xl font-bold text-gold">{price}</p>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};
