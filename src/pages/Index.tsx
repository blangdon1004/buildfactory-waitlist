
import { Factory, Upload, ShoppingCart, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
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
              The Future of Off-Site Construction
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
      <section className="section-padding container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why BuildFactory?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of construction procurement with our AI-powered marketplace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Factory}
            title="Premium Fabricators"
            description="Access top-tier fabricators and their proven product catalogs"
          />
          <FeatureCard
            icon={ShoppingCart}
            title="Product Catalog"
            description="Browse and purchase pre-engineered construction solutions"
          />
          <FeatureCard
            icon={Upload}
            title="Custom Quotes"
            description="Upload your specs for instant AI-generated quotes"
          />
          <FeatureCard
            icon={Building}
            title="Quality Assured"
            description="Every product meets stringent quality standards"
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
        <div className="container flex justify-center">
        </div>
      </footer>
    </div>
  );
};

export default Index;
