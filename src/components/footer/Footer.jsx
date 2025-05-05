import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import footerimg from '../../assets/images/footerimg.png';
import esewa from '../../assets/images/esewa.png';
import khalti from '../../assets/images/khalti.png';

export const Footer = () => {
  return (
    <div className="bg-dark-brown text-white py-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-6 md:px-10">
        {/* Logo & Description */}
        <div>
          <img src={footerimg} alt="Mira Logo" className="mb-6 w-[180px]" />
          <p className="mt-2 leading-relaxed font-ligh mb-6">
            At Mira, we believe every dessert tells a story. From delicate pastries to indulgent chocolate creations,
            our handcrafted treats are made with the finest ingredients and a touch of love. Whether you’re celebrating
            a special moment or simply satisfying a craving, we’re here to make life sweeter—one bite at a time.
          </p>
          <div className="flex space-x-6 mt-4">
            <a href="#"><FaFacebookF className="text-4xl text-white p-2 rounded-md" /></a>
            <a href="#"><FaInstagram className="text-4xl text-white p-2 rounded-md" /></a>
            <a href="#"><FaXTwitter className="text-4xl text-white p-2 rounded-md" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mt-5 mb-6">Quick Lines</h3>
          <ul className="space-y-3 font-light ">
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="font-bold text-xl mt-5 mb-6">Customer Services</h3>
          <ul className="space-y-3 font-light ">
            <li>Shipping and Delivery</li>
            <li>Return & Refund</li>
            <li>Privacy and Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold text-lg mt-5 mb-6">Contact Information</h3>
          <ul className="space-y-6 font-light ">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                <strong>Address:</strong><br />
                123 Dessert Lane, Sweet City, XY123
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1" />
              <span>
                <strong>Phone Number</strong><br />
                +977-9990009889, +977-289987467839
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaEnvelope className="mt-1" />
              <span>
                <strong>Email Address</strong><br />
                Mira@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-8 text-center font-light ">
        <h3 className="font-bold mt-5 mb-6">Payment Method</h3>
        <div className="flex justify-center space-x-12">
          <div className="flex items-center space-x-3">
            <img src={khalti} alt="Khalti" className="w-13 h-auto object-contain" />
            <span>Khalti</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={esewa} alt="eSewa" className="w-10 h-auto object-contain" />
            <span>eSewa</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center font-light">
        © 2025 Mira Desserts. All rights reserved.
      </div>
    </div>
  );
};
