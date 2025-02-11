
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
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-sm text-gray-600 mt-2 mb-8">LAST UPDATED: 02-01-2025</p>

            <p className="mb-6">
              These terms and conditions ("Terms") govern the use of www.BuildFactory.io ("Platform") and the services made available by BuildFactory (defined below) from time to time. These Terms also include BuildFactory's privacy policy, available at www.BuildFactory.io/privacy ("Privacy Policy"), and any guidelines, additional terms, policies, or disclaimers made available or issued by BuildFactory from time to time.
            </p>

            <p className="mb-6">
              These Terms constitute a binding and enforceable contract between BuildFactory Inc and its affiliates worldwide ("BuildFactory") and you, an end user of the Platform ("you") in relation to the Platform. You represent and warrant that you have full legal capacity and authority to agree and bind yourself to these Terms. If you are using the Platform on behalf of another party (for example: a company or an organization), you represent and warrant that you have the authority to enter into these Terms on behalf of such party and bind such party to these Terms.
            </p>

            <p className="mb-8">
              By using the Platform, you agree that you have read, understood, and to be bound by these Terms as amended from time to time, and that you comply with the requirements listed herein. If you do not agree to all of these Terms or comply with the requirements herein, please do not access or use the Platform.
            </p>

            <h2 className="text-2xl font-bold mb-4">THE PLATFORM</h2>
            <p className="mb-6">
              The Platform is an intelligence-enabled platform that allows users to upload 2D diagrams and 3D models and converts them to fabrication quotes for purchase. Along with these quotes, the Platform contains certain features; for example, the Platform may generate data, including benchmarking, materials takeoffs, and costs analyses in relation to the converted models, or provide interoperability options for project management. These features form an integral part of the Platform.
            </p>

            <p className="mb-6">
              To use the Platform, you will have the opportunity to choose one of the subscription plans offered by BuildFactory ("Subscription Plan"). Your use of and access to the Platform may be subject to your completion of the process of purchase of the Subscription Plan and payment of applicable fees. BuildFactory reserves the right to offer its users free trials and evaluation products. These Terms would continue to apply to the use of such free trials or evaluation products.
            </p>

            <p className="mb-6">
              Once you have selected a Subscription Plan, you will have to create and operate an account on the Platform ("User Account"). BuildFactory might require you to share information, including information pertaining to your identification in the process of creation of the User Account. You agree that all information provided in this regard is complete, true, and accurate. Separately, you should ensure the confidentiality of details of the User Account, including usernames and passwords. Please note that all personal information shared with BuildFactory shall be treated and processed in accordance with the Privacy Policy.
            </p>

            <p className="mb-6">
              Subject to the features of your Subscription Plan, you may designate one or more "Administrators" who shall be responsible for the operation of a User Account. Administrators shall have the right to create sub-accounts under the User Account and grant authorized parties the right to use the Platform in accordance with the Terms. For clarity, all sub-accounts shall form an integral part of the User Account.
            </p>

            <p className="mb-8">
              You are responsible and liable for all activities that take place on or through the User Account. BuildFactory is not liable for any unauthorized access to the Platform, including but not limited to hacking and security breaches. BuildFactory reserves, at its sole discretion, the right to suspend a User Account if it believes that the User Account is being accessed by an unauthorized party.
            </p>

            <h2 className="text-2xl font-bold mb-4">USER CONTENT</h2>
            <p className="mb-4">
              (a) The Platform allows you to upload, publish, display, and analyze content which includes texts, drawings, codes, photos, and other items ("Uploaded User Content"). The data generated in connection with the Uploaded User Content through the Platform shall be referred to as "Generated User Content". Both Uploaded User Content and Generated User Content together constitute "User Content". You own User Content, subject to the rights granted below.
            </p>

            <p className="mb-4">
              (b) Notwithstanding anything to the contrary, BuildFactory shall have the right to collect and analyze data and other information relating to the provision, use, and performance of various aspects of the Platform and related systems and technologies (including, without limitation, User Content and data derived therefrom), and BuildFactory will be free (during and after the term hereof) to (i) use such information and data to improve and enhance the Platform and for other development, diagnostic, and corrective purposes in connection with the Platform and other BuildFactory offerings, (ii) use User Content for the purposes of advertising and promoting the Platform, (iii) use, store, host, communicate, modify, adapt, translate, and create derivative works of the User Content for the Platform's machine learning features and marketplace processes, and (iv) disclose such data solely in aggregate or other de-identified form in connection with its business. No rights or licenses are granted except as expressly set forth herein.
            </p>

            <p className="mb-4">
              (c) In connection with these Terms and the licenses granted under this Clause, you hereby waive any claims against BuildFactory arising out of any moral rights or other similar rights relating to the User Content.
            </p>

            <p className="mb-8">
              (d) The Platform allows you to download Generated User Content in formats specified in the Subscription Plan only.
            </p>

            <h2 className="text-2xl font-bold mb-4">YOUR RESPONSIBILITIES</h2>
            <p className="mb-4">(a) You represent and warrant that:</p>
            <ul className="list-disc pl-8 mb-6">
              <li className="mb-2">you own all intellectual property rights (or have obtained all necessary permissions) to provide User Content and to grant the licenses under these Terms;</li>
              <li className="mb-2">you are solely responsible for the User Content and all activities that occur on or through the User Account;</li>
              <li className="mb-2">the User Content does not and shall not violate any of your obligations or responsibilities under other agreements;</li>
              <li className="mb-2">the User Content does not and shall not violate, infringe, or misappropriate any intellectual property right or other proprietary right;</li>
              <li className="mb-2">the User Content does not and shall not contain any viruses, corrupted data, or other harmful, disruptive, or destructive files or content; and</li>
              <li className="mb-2">the User Content shall not violate any third-party rights.</li>
            </ul>

            {/* Additional sections follow the same pattern... */}

            <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
            <p className="mb-6">
              All notices, requests, demands, and determinations for BuildFactory under these Terms (other than routine operational communications) shall be sent to{' '}
              <a href="mailto:info@buildfactory.io" className="text-blue-600 hover:text-blue-800">
                info@buildfactory.io
              </a>
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
