import React from "react";
import { CONTACT } from "../constants";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer className="w-full pt-5 pb-10">
      <div className="flex flex-col items-center">
        <h1 className="my-10 text-center text-4xl
        text-neutral-900
        dark:text-neutral-100">Get in Touch</h1>
        {/* <div className="text-center tracking-tighter"> */}
        {/* <a href="mailto:uakirpach@gmail.com" className="border-b">
          {CONTACT.email}
        </a> */}
        <a href="mailto:uakirpach@gmail.com" className="flex-shrink-0">
          <MagicButton
            title="Email"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </footer>

    // </div>
  );
};

export default Contact;
