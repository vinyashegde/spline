import React from "react";
import { FaGithub } from "react-icons/fa";
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 10,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


export default function GithubCard(props) {
  const { title, imageUrl, htmlText, cssText, jsText, githubLink } = props;

  return (

    <Tilt options={defaultOptions} >
      <div><div className="max-w-sm rounded overflow-hidden shadow-lg bg-navBar text-white">
        <div className="px-6 py-3">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
        <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
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
      </div></div>
    </Tilt>

  );
}
