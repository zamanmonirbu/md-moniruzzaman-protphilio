import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../images/zaman.PNG";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import x from "../images/twitter-sign.png";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-white">
      <div className="container px-4 py-6">
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/">
              <img
                src={myLogo}
                alt="my Logo"
                className="h-12 w-12 mr-2 rounded-full ml-2 md:ml-10 ring-2"
              />
            </Link>
            <Link to="/">
              <h1 className="text-xl font-bold text-black text-left p-2">
                MONIRUZZAMAN
              </h1>
            </Link>
          </div>

          <div className="flex -mx-2 mb-4 md:mb-0">
            <div className="inline-flex mx-2">
              <Link to="https://github.com/zamanmonirbu" aria-label="Github">
                <img
                  src={github}
                  alt="git"
                  className="h-8 w-8 transition-transform duration-300 hover:scale-125"
                />
              </Link>
            </div>
            <div className="inline-flex mx-2">
              <Link
                to="https://www.linkedin.com/in/mdmoniruzzamanbu/"
                aria-label="LinkedIn"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="h-8 w-8 transition-transform duration-300 hover:scale-125"
                />
              </Link>
            </div>
            <div className="inline-flex mx-2">
              <Link
                to="https://www.facebook.com/zamanmonirbu/"
                aria-label="Facebook"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  className="h-8 w-8 transition-transform duration-300 hover:scale-125"
                />
              </Link>
            </div>
            <div className="inline-flex mx-2">
              <Link to="https://twitter.com/zamanmonirbu" aria-label="Twitter">
                <img
                  src={x}
                  alt="twitter"
                  className="h-8 w-8 transition-transform duration-300 hover:scale-125"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <a
              className="p-2 font-bold hover:bg-slate-400 hover:rounded-md"
              href="https://medium.com/p/48b80bf604b8"
              target="_blank"
              rel="noreferrer"
            >
              Blogs
            </a>

            <a
              className="p-2 font-bold hover:bg-slate-400 hover:rounded-md"
              href="https://github.com/zamanmonirbu?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Projects
            </a>

            <a
              className="p-2 font-bold hover:bg-slate-400 hover:rounded-md"
              href="https://github.com/zamanmonirbu"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>

            <a
              className="p-2 font-bold hover:bg-slate-400 hover:rounded-md"
              href="mailto:monir.cse6.bu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
            <a
              className="p-2 font-bold hover:bg-slate-400 hover:rounded-md"
              href="mailto:monir.cse6.bu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Hire
            </a>
          </div>
        </div>

        <div className="pt-4">
          <p>Designed & Developed by MONIRUZZAMAN</p>
          <p>© 2020 - 2024 MONIRUZZAMAN, all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
