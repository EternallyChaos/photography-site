"use client"

import React from "react";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Drawer from "./Drawer";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="fixed w-full z-40">
        <div className="flex justify-between">
          <div className="flex">
            <div className="absolute logo bg-transparent text-5xl font-bold text-black mix-blend-screen px-2 "></div>
          </div>
          <div className="bg-gray-300 z-50">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-700 bg-opacity-75 z-10"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <Drawer isOpen={isOpen} setOpen={setOpen} />
    </header>
  );
};

export default Header;
