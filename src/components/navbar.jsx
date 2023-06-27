"use client";

import { Button, Navbar } from "flowbite-react";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded className="bg-navBar">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Vinyas Hegde
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="text-white">Resume</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#" className="text-white">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
