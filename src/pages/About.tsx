import { Award, Heart, TrendingUp } from "lucide-react";
import iconImage from "@/assets/icon.jpg";

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src={iconImage} alt="Victory icon" className="h-16 w-16 rounded-lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Victory</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where style meets performance
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Victory Shoe Collection was founded with a simple mission: to create premium footwear 
              that doesn't compromise on style, comfort, or performance. We believe that the right 
              pair of shoes can transform not just your outfit, but your entire day.
            </p>
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each pair of Victory shoes is crafted with meticulous attention to detail, using only 
              the finest materials and latest technology. From the boardroom to the running track, 
              from casual outings to special occasions, we've got your feet covered.
            </p>
          </div>
          
          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-4 p-6 rounded-lg bg-card shadow-card animate-fade-in">
              <div className="inline-flex p-4 bg-gradient-gold rounded-full">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-muted-foreground">
                Premium materials and expert craftsmanship in every pair
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-card shadow-card animate-fade-in animate-delay-200">
              <div className="inline-flex p-4 bg-gradient-gold rounded-full">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Comfort</h3>
              <p className="text-muted-foreground">
                Designed for all-day wear with superior cushioning and support
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-card shadow-card animate-fade-in animate-delay-400">
              <div className="inline-flex p-4 bg-gradient-gold rounded-full">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Performance</h3>
              <p className="text-muted-foreground">
                Built to enhance your performance in every situation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
