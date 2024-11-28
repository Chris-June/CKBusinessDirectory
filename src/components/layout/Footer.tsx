import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  MessageCircle,
  Bird,
  Home,
  Globe,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Directory</h3>
            <p className="text-gray-400 text-sm">
              Connecting businesses with customers through our comprehensive
              directory platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/businesses"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Browse Businesses
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  List Your Business
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href="mailto:chris.june@intellisync.ca"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  chris.june@intellisync.ca
                </a>
              </li>

              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Chatham-Kent On.</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/intellisync-solutions/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/Intelli_Sync"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Bird className="w-6 h-6" />
              </a>
              <a
                href="https://discord.gg/CrGqs9cxnM"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://intellisyncsolutions.io"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Intellisync Solutions Web App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-6 h-6" />
              </a>
              <a
                href="https://home.intellisync.solutions.io"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Intellisync Solutions Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Home className="w-6 h-6" />
              </a>
              <a
                href="https://docs.intellisyncsolutions.io"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Intellisync Solutions Documentation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Business Directory. All rights
            reserved. Powered By Intellisync Solutions.
          </div>
        </div>
      </div>
    </footer>
  );
}
