import React from 'react';
import { MapPin, Star, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Business } from '../../types/business';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="relative h-48">
        <img
          src={business.coverImage}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
          <img
            src={business.logo}
            alt={`${business.name} logo`}
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{business.name}</h3>
          <div className="flex items-center">
            {/* Use ratings.average instead of rating */}
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-600">
              {business.ratings?.average.toFixed(1) || 'N/A'}
            </span>
            <span className="text-sm text-gray-500 ml-2">
              ({business.ratings?.count || 0} reviews)
            </span>
          </div>
        </div>

        {/* Verified Badge */}
        {business.isVerified && (
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md mb-2">
            Verified
          </span>
        )}

        {/* Promotion */}
        {business.promotion && (
          <div className="mb-4 p-2 bg-yellow-100 text-yellow-800 text-sm rounded-md">
            {business.promotion}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">{business.description}</p>

        {/* Categories */}
        {business.categories && business.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {business.categories.map((category) => (
              <span
                key={category}
                className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Location and Contact Info */}
        <div className="space-y-2 mt-4">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{business.location.city}, {business.location.province}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">{business.contact.phone}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Globe className="w-4 h-4 mr-2" />
            <a
              href={`mailto:${business.contact.email}`}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {business.contact.email}
            </a>
          </div>
        </div>

        {/* Reviews Section */}
        {business.reviews && business.reviews.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-bold text-gray-800 mb-2">Recent Reviews</h4>
            <ul className="space-y-2">
              {business.reviews.slice(0, 3).map((review, index) => (
                <li key={index} className="text-sm text-gray-600">
                  <strong>{review.reviewer}:</strong> {review.comment}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* View Details Button */}
        <Link
          to={`/businesses/${business.id}`}
          className="mt-6 block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
