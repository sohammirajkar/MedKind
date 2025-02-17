import React from "react";
import Header from "../layout/Header";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            By using our services, you agree to these terms. Please read them
            carefully.
          </p>
          {/* Add more content as needed */}
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
