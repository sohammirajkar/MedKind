import React from "react";
import Header from "../layout/Header";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            This Cookie Policy explains how we use cookies and similar tracking
            technologies on our website.
          </p>
          {/* Add more content as needed */}
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
