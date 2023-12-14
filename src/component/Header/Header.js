import React from 'react';
import myLogo from '../images/zaman.PNG'
import { Link } from 'react-router-dom';
import header from '../images/menu.png'
import search from '../images/search.png'
const Header = () => {
  return (
    <header className="bg-white text-gray-700 py-4  flex justify-between items-center">
      <div className=" flex items-center">
        <Link to='/'><img src={myLogo} alt="my Logo" className="h-10 w-10 ml-4 mr-4 rounded-full md:ml-28 ring-2" /></Link>
        <Link to='/'> <h1 className="text-xl font-bold text-black ">MONIRUZZAMAN</h1></Link>
       
      </div>
      <div className="hidden md:flex items-center md:mr-32 text-xl">
      <Link className="mr-4" to='/view/posts'>Post</Link>
      <Link className="mr-4" to='/contact'>Contact</Link>
      
      </div>
      <div className="flex md:hidden items-center pr-4 text-xl">
      <img src={search} className='h-8 w-8 mr-8' alt="" />
      <img src={header} className='h-8 w-8' alt="" />
      
      </div>
    </header>
  );
};

export default Header;
