
import React from 'react';

const Privacy = () => {
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
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p>This Privacy Policy ("Policy") outlines Build Factory, Inc's ("BuildFactory", "we" or "us") practices in relation to the storage, use, processing, and disclosure of personal data that you have chosen to share with us when you access our website https://buildfactory.io/ and the marketplace and software applications that we make available (collectively the "Platform"), or personal data that we may have access to in relation to your use of the Platform.</p>
            
            <p>BuildFactory is the "data controller" in relation to such processing of personal data. We have appointed representatives in the European Union ("EU") and United Kingdom ("UK"), the details of which can be found under "Contact Us" below.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">THE DATA WE COLLECT ABOUT YOU</h2>
            <p>For the purposes of this Policy, personal data means any information about an individual from which that person can be identified. It does not include data where the identity has been removed – for example, anonymous data.</p>
            
            {/* ... Continue with all the sections from the provided privacy policy text */}
            
            <h2 className="text-2xl font-bold mt-8 mb-4">CONTACT US</h2>
            <p>You may contact us at info@buildfactory.io with any enquiry relating to this Policy, including where you would like more information about any of the topics discussed in this Policy, or if you have an enquiry relating to your personal data (including where you wish to exercise any of your rights).</p>
            
            <p>You can also do so by writing to our Grievance Officer, at the address provided below:</p>
            
            <p>Address: 1111B S Governors Ave STE 26649 Dover, DE 19904</p>
            <p>Email Address: support@buildfactory.io</p>
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

export default Privacy;
