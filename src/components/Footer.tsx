import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="container-padding py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link
              href="https://github.com/Sanyuktatuti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-purple-500 transition-colors"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sanyukta-tuti-343ba5201/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://leetcode.com/u/sanyuktatuti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-yellow-500 transition-colors"
            >
              <SiLeetcode />
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sanyukta Tuti • NYU '26 •
              VibeCoder • Building Intelligent Systems with ML & AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
