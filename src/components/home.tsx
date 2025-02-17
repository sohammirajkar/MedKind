import React from "react";
import { Link } from "react-router-dom";
import Header from "./layout/Header";
import StoreLocator from "./map/StoreLocator";
import UploadForm from "./prescription/UploadForm";

interface HomeProps {
  headerLogo?: string;
  companyName?: string;
}

const Home = ({ headerLogo = "", companyName = "MedKind" }: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header logo={headerLogo} companyName={companyName} />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold">Your Health, Our Priority</h1>
              <p className="text-lg text-blue-100">
                Find your nearest pharmacy location and easily upload your
                prescriptions online.
              </p>
            </div>
          </div>
        </section>

        {/* Store Locator Section */}
        <section id="store-locator" className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">
                Find a Pharmacy Near You
              </h2>
              <p className="text-gray-600">
                Use our interactive map to locate your nearest pharmacy and get
                directions.
              </p>
            </div>
            <StoreLocator />
          </div>
        </section>

        {/* Prescription Upload Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">
                Upload Your Prescription
              </h2>
              <p className="text-gray-600">
                Securely upload your prescription and we'll have it ready for
                pickup.
              </p>
            </div>
            <div className="flex justify-center">
              <UploadForm />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">24/7 Service</h3>
                <p className="text-gray-600">
                  Access our services anytime, anywhere through our online
                  platform.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Easy Prescription Management
                </h3>
                <p className="text-gray-600">
                  Upload and manage your prescriptions with our user-friendly
                  interface.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Expert Care</h3>
                <p className="text-gray-600">
                  Our qualified pharmacists are here to provide professional
                  guidance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p className="text-gray-400 text-sm">
                Providing quality healthcare services to our community.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("store-locator")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-white"
                  >
                    Find a Store
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-white"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document.getElementById("contact-dialog")?.click()
                    }
                    className="hover:text-white"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
