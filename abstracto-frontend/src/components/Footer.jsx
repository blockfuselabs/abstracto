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
              href="https://www.linkedin.com/company/blockfuse-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-purple-400 text-black"
            >
              <FaLinkedinIn className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562117006926&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-purple-400 text-black"
            >
              <FaFacebookF className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com/blockfuselabs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-purple-400 text-black"
            >
              <FaInstagram className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://x.com/blockfuselabs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-purple-400 text-black"
            >
              <FaXTwitter className="text-sm sm:text-xl" />
            </a>
            <a
              href="https://www.youtube.com/@blockfuselabs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-2 rounded-full bg-purple-400 text-black"
            >
              <FaYoutube className="text-sm sm:text-xl" />
            </a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Blockfuse Labs. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;