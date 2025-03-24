import React, { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Home", "Mock Test", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {};

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex item-center gap-7">
            <img src="/images/mcet-logo.jpg" alt="logo" className="w-30" />
            <Button
              id="Login-button"
              title="Login"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden  itmes-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              >
                {[1, 2, 3, 4].map((bar) => (
                  <div key={bar} className="indicator-line"></div>
                ))}
              </audio>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
