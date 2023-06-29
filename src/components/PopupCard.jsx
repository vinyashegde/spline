import React from "react";
import { MdClose } from "react-icons/md";

export default function PopupCard({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="max-w-3xl max-h-3xl w-full h-full bg-white rounded-lg p-4 relative overflow-auto">
        {/* Render the content here, such as the iframe for the PDF */}
        <iframe
          className="w-full h-full pt-8"
          src="https://www.dropbox.com/scl/fi/9qk0k7ednx9crx682xd0j/Vinyas-Hegde-WEB-Resume_compressed.pdf"
        ></iframe>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <MdClose size={24} />
        </button>
      </div>
    </div>
  );
}
