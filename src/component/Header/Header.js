import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../images/zaman.PNG';
import header from '../images/menu.png';
import search from '../images/search.png';

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <header className="bg-white text-gray-700 py-4  flex justify-between items-center">
      <div className="flex items-center">
        <Link to='/'>
          <img src={myLogo} alt="my Logo" className="h-10 w-10 ml-4 mr-4 rounded-full md:ml-28 ring-2" />
        </Link>
        <Link to='/'>
          <h1 className="text-xl font-bold text-black">MONIRUZZAMAN</h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center md:mr-32 text-xl">
        <Link className="mr-4" to='/view/posts'>Post</Link>
        <Link className="mr-4" to='/contact'>Contact</Link>
      </div>
      <div className="flex md:hidden items-center pr-4 text-xl">
        <img src={search} className='h-8 w-8 mr-8' alt="" onClick={togglePopup} />
        <img src={header} className='h-8 w-8' alt="" onClick={togglePopup} />
      </div>

      {isPopupOpen && (
        <div className="mb-28 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="absolute top-0 right-0 left-0 bg-gray-50 p-8 rounded-md ">
            <button onClick={togglePopup} className="absolute top-0 right-0 m-4 text-xl hover:bg-gray-900 hover:text-gray-100 rounded-full">×</button>
            <Link to='/view/posts' className="block my-2 text-xl bg-slate-400 py-1 rounded-md hover:bg-gray-900 hover:text-gray-100 font-bold">Post</Link>
            <Link to='/contact' className="block my-4 text-xl bg-slate-400 font-bold py-1 rounded-md hover:bg-gray-900 hover:text-gray-100">Contact</Link>
            <button onClick={togglePopup} className="block my-4 text-xl font-bold bg-slate-400 mx-auto w-full py-1 rounded-md hover:bg-gray-900 hover:text-gray-100">Cancel</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
