import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navBar py-6">
      <div className="container mx-auto flex justify-center">
        <a
          href="https://github.com/your-github-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com/your-twitter-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://facebook.com/your-facebook-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com/your-instagram-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
}
