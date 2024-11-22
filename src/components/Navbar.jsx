import logo from "../assets/khushineema.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/khushi-neema"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-purple-500"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://www.github.com/Khushi-12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-purple-500"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
