import React from "react";
import profilePic from "../images/aboutMe.jpg"; 
import resume from "../images/MONIRUZZAMAN_RESUME.pdf";

const AboutMe = () => {
  return (
    <div>
      <div className="bg-gray-900 w-full h-52">
        <h1 className="text-4xl text-white pt-12">About Me</h1>
      </div>
      <div className="text-left p-2 sm:p-10 flex bg-[#354261] text-white w-[90%] items-center justify-center ml-8 md:ml-16 rounded-2xl shadow-lg -mt-12">
      <div className="w-1/4">
          <img className="w-64 h-64 sm:ml-20 rounded-md shadow-md hover:h-72 hover:w-72" src={profilePic} alt="Profile" />
        </div>
        <div className="w-3/4 mr-8">
          <h1 className="sm:text-4xl text-xl font-bold text-emerald-500">Hi, I am MOIRUZZAMAN</h1>
          <p className="text-xl py-8">
          A passionate Full Stack Developer completed my Bachelor's degree in Computer Science and Engineering from the University of Barishal. My journey in web development has equipped me with expertise in various technologies. I have solved 300+ problems in different online Jugdes. I am highly interested with Data structure and algorithm. <br /> <br />
          Committed to continuous learning and excellence, I thrive on making meaningful contributions in the dynamic world of technology. My career aspiration is to excel as a MERN stack developer, leveraging my skills in HTML, CSS, Tailwind CSS, React JS, Redux, Express JS, REST APIs, MongoDB, and Mongoose.
          </p>
         <div className="flex">
           <div className="w-1/2">
           <div className="name">Name: <span className="text-emerald-500">MD. MONIRUZZAMAN</span></div>
           <div className="age">Age: <span className="text-emerald-500">24</span></div>
           <div className="address">Address: <span className="text-emerald-500">Barishal, Bangladesh</span></div>
          
           
           </div>
           <div className="w-1/2">
           <div className="email">Email: <span className="text-emerald-500">monir.cse6.bu@gmail.com</span></div>
           <div className="mobile">Mobile: <span className="text-emerald-500">01400650261</span></div>
           </div>
         </div>
         <div className="mt-12">
            <a href={resume} target="_blank" rel="noreferrer">
              <button className="mr-4 mt-4 bg-gray-200 hover:bg-gray-600 text-gray-500 font-semibold hover:text-white py-2 px-6 border-emerald-500 ring-2 rounded-3xl hover:border-transparent mb-8">
                Download my Resume
              </button>
            </a>
            <a
             href="mailto:monir.cse6.bu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
                Hire Me Now
              </button>
            </a>
          </div>
        </div>
       
       
      </div>
    </div>
  );
};

export default AboutMe;
