import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiLeetcode, SiKaggle } from "react-icons/si";
import { personalInfo } from "@/constants";

const Footer = () => {
  return (
    <footer className="container-padding py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-purple-500 transition-colors"
            >
              <FaGithub />
            </Link>
            <Link
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={personalInfo.socialLinks.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-400 transition-colors"
            >
              <SiKaggle />
            </Link>
            <Link
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-orange-400 transition-colors"
            >
              <SiLeetcode />
            </Link>
            <Link
              href={personalInfo.socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-400 transition-colors"
            >
              <FaMedium />
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
