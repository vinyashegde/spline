"use client";

import { Button, Navbar } from "flowbite-react";
import PopupCard from "./PopupCard";
import { useEffect, useState } from "react";

export default function NavbarWithCTAButton() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div>
        {/* Render other components or content */}

        {showPopup && <PopupCard onClose={handleClosePopup} />}
      </div>

      <Navbar fluid rounded className="bg-navBar">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Vinyas Hegde
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="text-white" onClick={handleOpenPopup}>
            Resume
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#homee" className="text-white">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#aboutt" className="text-white">
            About
          </Navbar.Link>
          <Navbar.Link href="#projectss" className="text-white">
            Projects
          </Navbar.Link>
          <Navbar.Link href="#contactuss" className="text-white">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
