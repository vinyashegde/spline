import React from "react";
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 10,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function AboutCode() {
  return (

    <Tilt options={defaultOptions}>
    <div>
      <div class="text-3xl text-white font-semibold pb-10 pl-20 ml-10">
        About Me
      </div>
      <div className="rounded-lg shadow-xl bg-gray-900 text-white sm:w-full md:w-96">
        <div className="border-b border-gray-800 px-8 py-3">
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
        </div>
        <div
          className="px-8 py-6"
          style={{ fontFamily: "'Roboto Mono', monospace" }}
        >
          <p>
            <em className="text-blue-400">const</em>{" "}
            <span className="text-green-400">aboutMe</span>{" "}
            <span className="text-pink-500">=</span>{" "}
            <em className="text-blue-400">function</em>() &#123;
          </p>
          <p>
            &nbsp;&nbsp;<span className="text-pink-500">return</span> &#123;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
            <span className="text-yellow-300">'Vinyas Hegde'</span>,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
            <span className="text-yellow-300">'fullstack-developer'</span>,
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
            <span className="text-yellow-300">
              <a
                href="https://8z9qtn-3000.csb.app/"
                target="_blank"
                className="text-yellow-300 hover:underline focus:border-none whitespace-nowrap"
                rel="noreferrer"
              >
                https://vinyashegde.com
              </a>
            </span>
            ,
          </p>
          <p>&nbsp;&nbsp;&#125;</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  </Tilt>
  );
}
