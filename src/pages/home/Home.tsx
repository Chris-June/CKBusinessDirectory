import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Search,
  TrendingUp,
  Users,
  Zap,
  Globe,
  BarChart3,
  Shield,
} from 'lucide-react';
import StatCard from './StatCard';
import FeatureCard from './FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=2400&h=1600&fit=crop"
            alt="Chatham-Kent aerial view"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Discover{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Chatham-Kent's
              </span>{' '}
              Thriving Business Community
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Connect with over 2,000 local businesses, access exclusive
              opportunities, and be part of our growing economic ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/businesses"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Businesses
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors"
              >
                <Building2 className="w-5 h-5 mr-2" />
                List Your Business
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<Building2 className="w-6 h-6 text-blue-400" />}
              number="2,000+"
              label="Local Businesses"
            />
            <StatCard
              icon={<Users className="w-6 h-6 text-blue-400" />}
              number="50,000+"
              label="Monthly Visitors"
            />
            <StatCard
              icon={<TrendingUp className="w-6 h-6 text-blue-400" />}
              number="15%"
              label="YoY Growth"
            />
            <StatCard
              icon={<Globe className="w-6 h-6 text-blue-400" />}
              number="100+"
              label="Industry Categories"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Chatham-Kent Chamber of Commerce?
            </h2>
            <p className="text-gray-400">
              Empowering local businesses and consumers with modern tools and
              connections for sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-blue-400" />}
              title="Instant Connections"
              description="Connect directly with businesses through our platform. Message, call, or email with just one click."
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6 text-blue-400" />}
              title="Business Analytics"
              description="Get detailed insights about your business listing performance, visitor statistics, and engagement metrics."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-blue-400" />}
              title="Verified Listings"
              description="All businesses are verified by the Municipality of Chatham-Kent for your peace of mind."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&h=800&fit=crop"
                alt="Business district"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 mix-blend-multiply" />
            </div>
            <div className="relative py-16 px-8 sm:px-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Join Chatham-Kent's Chamber of Commerce business directory and connect with
                  thousands of potential customers.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}