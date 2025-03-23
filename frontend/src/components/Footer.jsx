import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const FooterLinks = [
  { name: "Hero", path: "/" },
  { name: "Banner", path: "/banner" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "dashboard", path: "/Dashboard" }
];

const ResourceLinks = ["Student Resources", "Campus Map", "Event Calendar", "FAQ", "Support"];

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-r text-white">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12">
          
          {/* Campus Events Logo & Info */}
          <div className="space-y-4">
            <span className="text-3xl font-bold tracking-wider">
              Campus<span className="text-yellow-400">Events</span>
            </span>
            <p className="text-gray-200 mt-2">
              Connecting students through inspiring events, workshops, and academic opportunities across campus.
            </p>
            <div className="pt-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 py-2 px-6 rounded-full text-black font-medium text-sm">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {FooterLinks.map((link, index) => (
                <li key={index} className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> 
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-500 pb-2">Resources</h3>
            <ul className="space-y-2">
              {ResourceLinks.map((title, index) => (
                <li key={index} className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> {title}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-500 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdLocationOn className="text-yellow-400 text-xl mr-3 mt-1" />
                <span>University Campus, Building 4, <br />Main Avenue, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-yellow-400 text-xl mr-3" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-yellow-400 text-xl mr-3" />
                <span>events@campus.edu</span>
              </li>

              {/* Social Media Icons Without Anchor Tags */}
              <li className="mt-6">
                <div className="flex space-x-4">
                  <div className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    <FaFacebook className="text-2xl" />
                  </div>
                  <div className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    <FaInstagram className="text-2xl" />
                  </div>
                  <div className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <div className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    <FaLinkedin className="text-2xl" />
                  </div>
                  <div className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    <FaYoutube className="text-2xl" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-700 py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CampusEvents. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Privacy Policy</li>
                <li className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Terms of Service</li>
                <li className="cursor-pointer hover:text-yellow-400 transition-colors duration-300">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
