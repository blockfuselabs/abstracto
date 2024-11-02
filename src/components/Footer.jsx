import React from 'react';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 ">
      <div className="mx-auto text-center space-y-4">
      <div className="flex flex-wrap flex-col space-y-4 justify-center mt-2">
          <div className='flex justify-center items-center'>
            <h1 className='font-bold text-2xl'>Abstractor</h1>
          </div>
          <p>Account Abstraction helper</p>
          <div className="flex justify-center space-x-2 sm:space-x-4">
            <a
              href="https://ng.linkedin.com/company/national-seafarers-welfare-board-of-nigeria "
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaLinkedinIn className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.facebook.com/NSWBN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaFacebookF className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaInstagram className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaXTwitter className="text-sm sm:text-xl" />
            </a>
            <a
              href="http://www.youtube.com/@NSWBN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-white text-black"
            >
              <FaYoutube className="text-sm sm:text-xl" />
            </a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Abstractor. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;