
import { Users, Upload, ShoppingCart, Building, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50">
        <div className="container h-full flex items-center justify-between">
          <img 
            src="/lovable-uploads/2ce219f4-ccff-4e6b-ad09-3454e4dff9b7.png" 
            alt="BuildFactory Logo" 
            className="h-24 w-auto"
          />
          <a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-4 mt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          <img
            src="/lovable-uploads/03cfef6b-ae75-41ac-a15c-bc79147494de.png"
            alt="Manufacturing Facility"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="animate-fadeIn space-y-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              The BuildFactory Marketplace
            </h1>
            <p className="text-xl text-gray-200">
              Buy from the world's first truly open, AI-driven construction marketplace
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <WaitlistForm />
            <Button variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a
                href="https://discord.gg/wMTm83kS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Join our Discord Community
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why BuildFactory?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of construction procurement with our AI-powered marketplace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Users}
            title="Premium Suppliers"
            description="Access top-tier BIM teams and Fabricators"
          />
          <FeatureCard
            icon={ShoppingCart}
            title="Product Catalog"
            description="Browse and purchase pre-engineered construction solutions"
          />
          <FeatureCard
            icon={Upload}
            title="Custom Quotes"
            description="Upload your .DWG, or .RVT, and your specifications for a quote"
          />
          <FeatureCard
            icon={Hammer}
            title="Premium Hardware"
            description="Buy & Sell New & Used Off-Site Hardware, Tools, and Machinery"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Construction Process?</h2>
          <div className="flex flex-col items-center gap-4">
            <WaitlistForm />
            <p className="text-sm text-muted-foreground">
              Be among the first to experience the future of construction procurement
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <a href="/about" className="hover:text-foreground transition-colors">
              About Us
            </a>
            <span className="hidden md:inline">•</span>
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span className="hidden md:inline">•</span>
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
