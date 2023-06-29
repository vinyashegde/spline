import React from "react";

export default function GithubCard(props) {
  const { title, description, htmlText, cssText, jsText } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-navBar text-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
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
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Open Code
        </span>
      </button>
    </div>
  );
}
