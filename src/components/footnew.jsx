import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navBar py-6">
      <div className="container mx-auto flex justify-center">
        <a
          href="https://github.com/vinyashegde"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com/vinyasvasant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com/in/vinyas-hegde-519b18147"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white mx-2"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
