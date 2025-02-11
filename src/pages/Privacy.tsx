
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
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            
            <p className="mb-6">
              This Privacy Policy ("Policy") outlines Build Factory, Inc's ("BuildFactory", "we" or "us") practices in relation to the storage, use, processing, and disclosure of personal data that you have chosen to share with us when you access our website https://buildfactory.io/ and the marketplace and software applications that we make available (collectively the "Platform"), or personal data that we may have access to in relation to your use of the Platform.
            </p>

            <p className="mb-6">
              BuildFactory is the "data controller" in relation to such processing of personal data. We have appointed representatives in the European Union ("EU") and United Kingdom ("UK"), the details of which can be found under "Contact Us" below.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">THE DATA WE COLLECT ABOUT YOU</h2>
            <p className="mb-6">
              For the purposes of this Policy, personal data means any information about an individual from which that person can be identified. It does not include data where the identity has been removed – for example, anonymous data.
            </p>

            <p className="mb-6">
              We may collect, use, store and transfer different kinds of personal data about you to provide you with or in connection with the Platform. Such personal data includes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Identity and profile-related data, such as your first and last name, username or similar identifiers, gender, title, employer, role/position, passwords, purchases or orders, feedback, survey responses, etc.;</li>
              <li className="mb-2">Contact details, including email addresses, phone numbers, delivery addresses, business addresses, etc.;</li>
              <li className="mb-2">Transaction data, including details about payments to and from you and details of products and services you (or your employer) have purchased or sold;</li>
              <li className="mb-2">Technical data including IP addresses, browser types and versions, time zone settings and locations, operating systems, and other technology on the devices you use to access the Platform;</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">HOW DO WE COLLECT DATA ABOUT YOU?</h2>
            <p className="mb-6">
              We use different methods to collect and process data about you:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Information you give us – This is the information you provide to us when you create a profile on the Platform or by corresponding with us.</li>
              <li className="mb-2">Information we collect about you and your device – Each time you visit our Platform, we will automatically collect personal data including device and usage data.</li>
              <li className="mb-2">Information we receive from other sources – including third parties and publicly available sources.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">CONTACT US</h2>
            <p className="mb-6">
              You may contact us at info@buildfactory.io with any enquiry relating to this Policy, including where you would like more information about any of the topics discussed in this Policy, or if you have an enquiry relating to your personal data.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Office Address</h3>
              <p>1111B S Governors Ave STE 26649</p>
              <p>Dover, DE 19904</p>
              <p className="mt-4">Email: support@buildfactory.io</p>
            </div>
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
