import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LINKS } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center text-4xl font-bold text-neutral-300">
        AK
      </div>
      <div>
        {LINKS.map((link, index) => (
          <div
            key={index}
            className="flex items-center justrify-center gap-4 text-2xl"
          >
            <a href={link.linkedin}>
              <FaLinkedin />
            </a>
            <a href={link.github}>
              <FaGithub />
            </a>
            <a href={link.x}>
              <FaSquareXTwitter />
            </a>
            <FaInstagram />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
