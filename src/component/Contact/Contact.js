import React, { useState } from 'react';
import contact from '../images/mobile.png'
import { Link } from 'react-router-dom';

const ContactComponent = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSentClick = () => {
    console.log('Data sent:', { fullName, email, message });
  };

  return (
   <div >
     <div className='bg-gray-900 w-full h-52 '>
            <h1 className='text-4xl text-white  pt-12'>
                Contact Me
            </h1>
           
        </div>
    <div className="text-left p-2 sm:p-10 flex bg-[#354261] text-white w-[90%] items-center justify-center ml-8 md:ml-16 rounded-2xl shadow-lg -mt-12" >
      <div className="w-1/2 mr-8 ">
        <h1 className='sm:text-4xl text-xl font-bold'>
        Lets talk about everything!
        </h1>
        <p className='text-xl py-8'>Hate forms? Send me an <Link className='text-blue'>Email</Link> instead.</p>
        <img className="w-32 h-32 sm:ml-20" src={contact} alt="Some" />
      </div>
      <div className='w-1/2 '>
        <label className="block mb-2" htmlFor="fullName">
          Full Name:
        </label>
        <input
          className="w-full mb-2 p-2 border rounded"
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label className="block mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full mb-2 p-2 border rounded"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2" htmlFor="message">
          Message:
        </label>
        <textarea
          className="w-full mb-2 p-2 border rounded"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          className="bg-indigo-500 w-full text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleSentClick}
        >
          Sent
        </button>
      </div>
    </div>
   </div>
  );
};

export default ContactComponent;
