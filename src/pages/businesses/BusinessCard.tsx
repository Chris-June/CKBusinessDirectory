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
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-600">4.8</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{business.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{business.location.city}, {business.location.state}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">{business.contact.phone}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Globe className="w-4 h-4 mr-2" />
            <a href={`mailto:${business.contact.email}`} className="text-sm text-blue-600 hover:text-blue-800">
              {business.contact.email}
            </a>
          </div>
        </div>
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