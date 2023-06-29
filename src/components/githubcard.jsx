import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GithubCard(props) {
  const { title, imageUrl, htmlText, cssText, jsText, githubLink } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-navBar text-white">
      <div className="px-6 py-3">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <img src={imageUrl} alt={title} className="w-full" />
      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2">
            {htmlText}
          </span>
          <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2">
            {cssText}
          </span>
          <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
            {jsText}
          </span>
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
}
