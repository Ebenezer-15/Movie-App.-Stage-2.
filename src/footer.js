import React from 'react';
import './index.css'; // Import the Tailwind CSS styles
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">

      {/*social media*/ }
      <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.facebook.com">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.youtube.com">
            <FaYoutube size={30} />
          </a>
        </div>


        {/*text*/ }
        <div className="mt-4 flex justify-center space-x-4">
        <p>Condition of Use</p>
        <p>Privacy and Policy</p>
        <p>Press Room</p>
        </div>

        {/*Copyright*/ }
        <p className="mt-4">&copy; {new Date().getFullYear()} MovieBox by Ebenezer Osa-Erhabor.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
