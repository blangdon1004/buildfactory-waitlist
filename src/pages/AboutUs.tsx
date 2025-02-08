import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";

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
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-gray-600 mb-2">
              A solution born out of <strong>fab shops</strong>. Contributed to by far too many to count.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              The marketplace is for the <strong>industry</strong>, by the <strong>industry</strong>.
            </p>
            <div className="flex flex-col items-center gap-4 mb-12">
              <WaitlistForm />
            </div>
          </div>

          <div className="space-y-6 text-gray-600">
            <h2 className="text-2xl font-semibold text-gray-900">A Vision Born from Experience</h2>
            <p>
              This marketplace was built on <strong>decades of real-world experience</strong> in construction, fabrication, and technology. At <strong>Modern Piping</strong>, I sold fabrication and <strong>BIM services</strong> to contractors and owners across North America, seeing firsthand how <strong>prefabrication</strong> could dramatically improve project efficiency and profitability. Later, as the founder of <strong>MSUITE</strong>, I developed software that helped fabrication shops and contractors manage workflows, track productivity, and connect <strong>BIM, Fab, and Field teams</strong>—bringing new levels of efficiency to the industry.
            </p>
            <p>
              Through these experiences, one challenge became clear: while some fabrication shops were <strong>overloaded with work</strong>, others—often outside a project's immediate region—had <strong>untapped capacity</strong>. The industry needed a way to <strong>balance supply and demand</strong>, ensuring that every fabricator could fully utilize their production resources while giving contractors access to the highest-quality prefabricated assemblies at the best price.
            </p>

            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden my-8">
              <img
                src="/lovable-uploads/f7db9dd5-2617-42c1-aed1-0e1b8233e23b.png"
                alt="BuildFactory Team at Work"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p>
              We are <strong>transforming</strong> how fabrication services are sourced and delivered. Our marketplace is designed to help fabricators <strong>optimize their production capacity</strong>, ensuring steady, profitable work while enabling contractors and project owners to source <strong>high-quality prefabricated assemblies</strong> at competitive prices. By intelligently matching demand with capacity, we reduce inefficiencies, improve project timelines, and maximize profitability for all stakeholders.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">The Opportunity</h2>
            <p>
              The U.S. is home to more than <strong>8,000 fabrication shops</strong> and tens of thousands of commercial contractors across <strong>MEP</strong> (Mechanical, Electrical, and Plumbing), structural, drywall/framing, and concrete trades. Yet, the industry remains <strong>fragmented</strong>. Some fabrication shops struggle to keep up with demand, while others face unpredictable workloads and underutilized capacity.
            </p>
            <p>
              Our platform bridges this gap by enabling fabricators to fully leverage their <strong>production resources</strong> while helping contractors source the best prefabricated assemblies at <strong>optimized costs</strong> and lead times. This distributed fabrication network unlocks new efficiencies and creates a more resilient, high-performing supply chain for construction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">The Future of Fabrication</h2>
            <p>
              We believe that <strong>prefabrication is the future</strong> of construction, but for it to scale effectively, the industry must evolve. By leveraging <strong>technology, data, and a national network</strong> of fabrication partners, we are building a smarter, more efficient way to procure and deliver prefabricated assemblies.
            </p>
            <p>
              This isn't just a marketplace—it's a <strong>new model for construction</strong>. One that ensures fabricators stay productive and profitable while giving contractors the tools to build faster, better, and at lower cost.
            </p>
            <p className="font-semibold mt-4">
              Join us in shaping the <strong>future of construction</strong>.
            </p>

            <div className="text-left mt-16 pl-8">
              <img
                src="/lovable-uploads/90646165-5cfb-47bc-bf6f-f54caeeaa4c3.png"
                alt="Britton Langdon Signature"
                className="h-24 w-auto mb-1"
              />
              <p className="text-gray-600 text-sm ml-4">Founder & CEO</p>
            </div>

            <div className="flex justify-center mt-12">
              <Button 
                variant="secondary"
                className="text-lg h-10 px-8 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://discord.com/channels/1119885301872070706/1280461670979993613', '_blank')}
              >
                Join the Discord Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
