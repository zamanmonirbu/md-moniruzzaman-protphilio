import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../images/zaman.PNG';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import x from '../images/twitter-sign.png';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-white">
      <div className="container px-4 py-6 ">
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to='/'>
              <img src={myLogo} alt="my Logo" className="h-12 w-12 mr-2 rounded-full ml-2 md:ml-10 ring-2" />
            </Link>
            <Link to='/'>
              <h1 className="text-xl font-bold text-black text-left p-2">MONIRUZZAMAN</h1>
            </Link>
          </div>

          <div className="flex -mx-2 mb-4 md:mb-0">
            <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
              <img src={github} alt="git" className='h-10 w-10' />
            </Link>
            <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
            <img src={linkedin} alt="git" className='h-10 w-10' />
            </Link>
            <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
            <img src={facebook} alt="git" className='h-10 w-10' />
            </Link>
            <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
            <img src={x} alt="git" className='h-10 w-10' />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row">
            <Link className='p-2 font-bold' to='projects'>Blogs</Link>
            <Link className='p-2 font-bold' to='projects'>Projects</Link>
            <Link className='p-2 font-bold' to='projects'>About</Link>
            <Link className='p-2 font-bold' to='projects'>Contact</Link>
            <Link className='p-2 font-bold' to='projects'>Hire</Link>
          </div>
        </div>

        <div className='pt-4'>
          <p>Designed & Developed by MONIRUZZAMAN</p>
          <p>© 2020 - 2023 MONIRUZZAMAN, all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
