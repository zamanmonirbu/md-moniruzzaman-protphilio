import React from 'react';
import myLogo from '../images/zaman.PNG'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-white text-gray-700 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to='/'><img src={myLogo} alt="my Logo" className="h-8 w-8 mr-2 rounded-2xl ml-11" /></Link>
        <Link to='/'> <h1 className="text-xl font-bold text-black">MONIRUZZAMAN</h1></Link>
       
      </div>
      <div className="flex items-center">
      <Link className="mr-4" to='/contact'>Contact</Link>
      <Link className="mr-4" to='/post'>Post</Link>
        
      </div>
    </header>
  );
};

export default Header;
