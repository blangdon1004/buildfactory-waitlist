
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
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

      {/* Content */}
      <div className="container py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-8">LAST UPDATED: 02-01-2025</p>

            <p className="mb-6">
              These terms and conditions ("Terms") govern the use of www.BuildFactory.io ("Platform") and the services made available by BuildFactory (defined below) from time to time. These Terms also include BuildFactory's privacy policy, available at www.BuildFactory.io/privacy ("Privacy Policy"), and any guidelines, additional terms, policies, or disclaimers made available or issued by BuildFactory from time to time.
            </p>

            <p className="mb-6">
              These Terms constitute a binding and enforceable contract between BuildFactory Inc and its affiliates worldwide ("BuildFactory") and you, an end user of the Platform ("you") in relation to the Platform. You represent and warrant that you have full legal capacity and authority to agree and bind yourself to these Terms. If you are using the Platform on behalf of another party (for example: a company or an organization), you represent and warrant that you have the authority to enter into these Terms on behalf of such party and bind such party to these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">THE PLATFORM</h2>
            <p className="mb-6">
              The Platform is an intelligence enabled platform that allows users to upload 2D diagrams and 3D models and converts them to fabrication quotes for purchase. Along with these quotes, the Platform contains certain features; for example, the Platform may generate data, including benchmarking, materials takeoffs, and costs analyses in relation to the converted models, or provide interoperability options for project management. These features form an integral part of the Platform.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">USER CONTENT</h2>
            <p className="mb-6">
              (a) The Platform allows you to upload, publish, display, and analyze content which includes texts, drawings, codes, photos, and other items ("Uploaded User Content"). The data generated in connection with the Uploaded User Content through the Platform shall be referred to as "Generated User Content". Both, Uploaded User Content and Generated User Content together constitute "User Content". You own User Content, subject to the rights granted below.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">YOUR RESPONSIBILITIES</h2>
            <p className="mb-6">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">You own all intellectual property rights (or have obtained all necessary permissions) to provide User Content and to grant the licences under these Terms;</li>
              <li className="mb-2">You are solely responsible for the User Content and all activities that occur on or through the User Account;</li>
              <li className="mb-2">The User Content does not and shall not violate any of your obligations or responsibilities under other agreements;</li>
            </ul>

            {/* Continue with other sections similarly structured */}
            
            <h2 className="text-2xl font-bold mt-8 mb-4">CONTACT</h2>
            <p className="mb-6">
              All notices, requests, demands, and determinations for BuildFactory under these Terms (other than routine operational communications) shall be sent to info@BuildFactory.io.
            </p>
          </div>
        </div>
      </div>
      
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

export default Terms;
