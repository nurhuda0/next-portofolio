import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">Ready to collaborate </span>and create
          something impactful?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in touch today, and let&apos;s explore how I can help you reach
          your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col items-center">
        {/* Copyright Text */}
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Arka&apos;an Nurhuda
        </p>
        {/* Fixed-width spacer to push icons slightly to the left */}
        <div className="w-80"></div>{" "}
        {/* Adjust the width (e.g., w-20) as needed */}
        {/* Social Media Icons */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link} // Use the link property for the href
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security measure
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
        {/* Spacer to balance the layout */}
        <div className="flex-grow"></div>
      </div>
    </footer>
  );
};

export default Footer;
