import React from "react";
import Header from "../layout/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your personal information.
          </p>
          {/* Add more content as needed */}
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
