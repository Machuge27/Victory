import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  notificationService,
  CustomerDetails,
} from "@/lib/notificationService";
import { useState } from "react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();
  const { toast } = useToast();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: "",
    phone: "",
  });

  const handleCheckout = async () => {
    if (!customerDetails.name || !customerDetails.phone) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    try {
      await notificationService.sendOrderNotification({
        customer: customerDetails,
        items: cartItems,
        totalPrice,
      });

      toast({
        title: "Order Placed!",
        description:
          "Thank you for your purchase. We'll contact you shortly to confirm your order.",
      });

      clearCart();
      setCustomerDetails({ name: "", phone: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue placing your order. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some amazing shoes to get started!
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}`}
                className="flex gap-6 p-6 bg-secondary rounded-lg shadow-card animate-fade-in"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gold font-semibold mb-2">{item.price}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Size: {item.selectedSize}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.quantity - 1
                          )
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.quantity + 1
                          )
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-8 rounded-lg shadow-card sticky top-24 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              {/* Customer Details Form */}
              <div className="space-y-4 mb-6 p-4 bg-background rounded-lg border">
                <h3 className="font-semibold">Customer Details</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={customerDetails.name}
                      onChange={(e) =>
                        setCustomerDetails((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={customerDetails.phone}
                      onChange={(e) =>
                        setCustomerDetails((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>KSh {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-gold">
                      KSh {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                variant="gold"
                size="lg"
                className="w-full mb-4"
                onClick={handleCheckout}
              >
                Checkout
              </Button>

              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
