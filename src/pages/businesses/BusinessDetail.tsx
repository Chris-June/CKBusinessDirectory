import React from 'react';
import { useParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  Star,
} from 'lucide-react';
import { mockBusinesses } from './mockData';

export default function BusinessDetails() {
  const { id } = useParams();
  const business = mockBusinesses.find((b) => b.id === id);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-200">Business Not Found</h2>
          <p className="mt-2 text-gray-400">
            The business you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={business.coverImage}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center space-x-6">
              <img
                src={business.logo}
                alt={`${business.name} logo`}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-4xl font-bold text-blue-400 mb-2">{business.name}</h1>
                {/* Verified Badge */}
                {business.isVerified && (
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs px-2 py-1 rounded-md shadow-sm">
                    Verified
                  </span>
                )}
                {/* Ratings */}
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-blue-200 font-medium">
                    {business.ratings?.average.toFixed(1) || 'N/A'}
                  </span>
                  <span className="text-blue-200">•</span>
                  <span className="text-blue-200">{business.ratings?.count || 0} Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">About</h2>
              <p className="text-gray-400">{business.description}</p>
            </section>

            {/* Promotion */}
            {business.promotion && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">Current Promotion</h2>
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-lg shadow">
                  {business.promotion}
                </div>
              </section>
            )}

            {/* Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {business.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Categories */}
            {business.categories && business.categories.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {business.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-all"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Reviews */}
            {business.reviews && business.reviews.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">Reviews</h2>
                <ul className="space-y-4">
                  {business.reviews.map((review, index) => (
                    <li key={index} className="bg-gray-800 p-4 rounded-lg shadow">
                      <p className="text-sm text-blue-200 font-bold">{review.reviewer}</p>
                      <p className="text-gray-400">{review.comment}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Location */}
            <section>
              <h2 className="text-2xl font-bold text-gray-100 mb-4">Location</h2>
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 h-64 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                Map integration coming soon
              </div>
              <p className="text-gray-400">
                {business.location.address}, {business.location.city}, {business.location.province}{' '}
                {business.location.postalCode}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-6 rounded-lg sticky top-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Business Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Clock className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm">Mon-Fri: 9AM-6PM</p>
                    <p className="text-sm">Sat-Sun: 10AM-4PM</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={`tel:${business.contact.phone}`} className="text-blue-400 hover:text-blue-600">
                      {business.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${business.contact.email}`} className="text-blue-400 hover:text-blue-600">
                      {business.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Globe className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">Social Media</p>
                    <div className="flex space-x-3 mt-2">
                      {business.socialMedia.facebook && (
                        <a
                          href={business.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {business.socialMedia.twitter && (
                        <a
                          href={business.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {business.socialMedia.instagram && (
                        <a
                          href={business.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {business.socialMedia.linkedin && (
                        <a
                          href={business.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all">
                Contact Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}