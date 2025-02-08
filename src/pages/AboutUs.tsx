
import { Building } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50">
        <div className="container h-full flex items-center justify-between">
          <a href="/">
            <img 
              src="/lovable-uploads/2ce219f4-ccff-4e6b-ad09-3454e4dff9b7.png" 
              alt="BuildFactory Logo" 
              className="h-24 w-auto"
            />
          </a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a>
        </div>
      </header>

      {/* Main Content */}
      <div className="container pt-32 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About BuildFactory</h1>
            <p className="text-lg text-gray-600 mb-8">
              BuildFactory is revolutionizing the construction industry by connecting builders with top-tier fabricators through our AI-powered marketplace.
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/03cfef6b-ae75-41ac-a15c-bc79147494de.png"
              alt="BuildFactory Manufacturing"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-gray-600">
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p>
              We're on a mission to transform the construction industry by making it easier than ever to source high-quality, pre-engineered building components. Our platform connects general contractors and developers with vetted manufacturers, streamlining the procurement process and ensuring quality at every step.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900">For Builders</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access to premium fabricators</li>
                  <li>Streamlined procurement process</li>
                  <li>Quality-assured products</li>
                  <li>Competitive pricing</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900">For Manufacturers</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Expanded market reach</li>
                  <li>Simplified bidding process</li>
                  <li>Reduced marketing costs</li>
                  <li>Quality-focused partnerships</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
            <p>
              We envision a future where construction procurement is seamless, transparent, and efficient. By leveraging AI technology and our extensive network of manufacturers, we're making this vision a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
