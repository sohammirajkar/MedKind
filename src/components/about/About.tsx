import React from "react";
import Header from "../layout/Header";
import { Card } from "@/components/ui/card";
import {
  History,
  Target,
  TrendingUp,
  Users,
  Building2,
  Award,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, description, icon }: MetricCardProps) => (
  <Card className="p-6 bg-white">
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-blue-100 rounded-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-2xl font-bold text-blue-600 my-1">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </Card>
);

interface AboutProps {
  companyName?: string;
  foundedYear?: number;
  locations?: number;
  employees?: number;
  annualRevenue?: string;
  patientsServed?: string;
}

const About = ({
  companyName = "MedKind",
  foundedYear = 1995,
  locations = 250,
  employees = 5000,
  annualRevenue = "$500M",
  patientsServed = "2M+",
}: AboutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold">About {companyName}</h1>
              <p className="text-xl text-blue-100">
                Leading the way in modern healthcare solutions since{" "}
                {foundedYear}
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Target className="w-12 h-12 text-blue-600 mx-auto" />
              <h2 className="text-3xl font-semibold text-gray-900">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To provide accessible, high-quality healthcare solutions while
                fostering innovation in pharmaceutical services and patient
                care.
              </p>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <History className="w-12 h-12 text-blue-600 mx-auto" />
                <h2 className="text-3xl font-semibold text-gray-900">
                  Our History
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-blue-600 font-semibold">
                      {foundedYear}
                    </span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-blue-200 pl-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Company Founded
                    </h3>
                    <p className="text-gray-600">
                      {companyName} was established with a vision to
                      revolutionize pharmaceutical care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-blue-600 font-semibold">2005</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-blue-200 pl-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Digital Innovation
                    </h3>
                    <p className="text-gray-600">
                      Launched our first online prescription management system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-blue-600 font-semibold">2023</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-blue-200 pl-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Nationwide Expansion
                    </h3>
                    <p className="text-gray-600">
                      Reached {locations} locations across the country, serving
                      millions of patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto" />
              <h2 className="text-3xl font-semibold text-gray-900">
                Business Metrics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MetricCard
                title="Locations"
                value={locations.toString()}
                description="Pharmacies nationwide"
                icon={<Building2 className="w-6 h-6 text-blue-600" />}
              />
              <MetricCard
                title="Employees"
                value={employees.toLocaleString()}
                description="Healthcare professionals"
                icon={<Users className="w-6 h-6 text-blue-600" />}
              />
              <MetricCard
                title="Annual Revenue"
                value={annualRevenue}
                description="In pharmaceutical services"
                icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
              />
              <MetricCard
                title="Patients Served"
                value={patientsServed}
                description="Annual patient interactions"
                icon={<Users className="w-6 h-6 text-blue-600" />}
              />
              <MetricCard
                title="Years of Service"
                value={`${new Date().getFullYear() - foundedYear}+`}
                description="Years of healthcare excellence"
                icon={<History className="w-6 h-6 text-blue-600" />}
              />
              <MetricCard
                title="Service Quality"
                value="98%"
                description="Patient satisfaction rate"
                icon={<Award className="w-6 h-6 text-blue-600" />}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
