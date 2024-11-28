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

export default function BusinessDetail() {
  const { id } = useParams();
  const business = mockBusinesses.find((b) => b.id === id);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Business not found</h2>
          <p className="mt-2 text-gray-600">
            The business you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={business.coverImage}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center space-x-6">
              <img
                src={business.logo}
                alt={`${business.name} logo`}
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {business.name}
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-white">4.8</span>
                  </div>
                  <span className="text-white">•</span>
                  <span className="text-white">150 Reviews</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">{business.description}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {business.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="bg-gray-100 h-64 rounded-lg mb-4">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map integration coming soon
                </div>
              </div>
              <p className="text-gray-600">
                {business.location.address}, {business.location.city},{' '}
                {business.location.state} {business.location.zipCode}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Business Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm">Mon-Fri: 9AM-6PM</p>
                    <p className="text-sm">Sat-Sun: 10AM-4PM</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${business.contact.phone}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {business.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${business.contact.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {business.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-medium">Social Media</p>
                    <div className="flex space-x-3 mt-2">
                      {business.socialMedia.facebook && (
                        <a
                          href={business.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {business.socialMedia.twitter && (
                        <a
                          href={business.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {business.socialMedia.instagram && (
                        <a
                          href={business.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {business.socialMedia.linkedin && (
                        <a
                          href={business.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Contact Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}