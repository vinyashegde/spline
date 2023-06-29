import React from "react";

export default function AboutCode() {
  return (
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
              href="https://2xvksw-3000.csb.app/"
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
  );
}
