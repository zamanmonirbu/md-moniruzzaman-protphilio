import React from "react";
import profilePic from "../images/aboutMe.png"; 
import resume from "../images/MONIRUZZAMAN_RESUME.pdf";

const AboutMe = () => {
  return (
    <div>
      <div className="bg-gray-900 w-full h-52 flex items-center justify-center">
        <h1 className="text-4xl text-white pt-4 sm:pt-12">About Me</h1>
      </div>
      <div className="flex flex-wrap bg-[#354261] text-white w-[90%] items-center justify-center mx-auto p-4 sm:p-10 rounded-2xl shadow-lg -mt-12">
        <div className="w-full sm:w-1/3 flex justify-center mb-6 sm:mb-0">
          <img
            className="w-64 h-auto rounded-md shadow-md transition-all duration-300"
            src={profilePic}
            alt="Profile"
          />
        </div>
        <div className="w-full sm:w-2/3 sm:ml-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-emerald-500">
            Hi, I'm MONIRUZZAMAN
          </h1>
          <p className="text-lg sm:text-xl py-6 text-justify">
            I am a passionate Full Stack Developer with a Bachelor's degree in Computer Science and Engineering from the University of Barishal. 
            My web development journey has honed my expertise in the MERN stack and problem-solving skills. With a strong foundation in 
            Data Structures and Algorithms, I have tackled over 300 problems on various online judges.
            <br /> <br />
            I am committed to continuous learning and innovation, aiming to make impactful contributions in the tech industry. 
            My skillset includes HTML, CSS, Tailwind CSS, React JS, Redux, Express JS, REST APIs, MongoDB, and Mongoose.
          </p>
          <div className="flex flex-wrap">
            <div className="w-1/2 text-left">
              <div className="name">Name: <span className="text-emerald-500">MD. MONIRUZZAMAN</span></div>
              <div className="">Age: <span className="text-emerald-500">24</span></div>
              <div className="address">Address: <span className="text-emerald-500">Barishal, Bangladesh</span></div>
            </div>
            <div className="w-1/2 text-left">
              <div className="email">Email: <span className="text-emerald-500">monir.cse6.bu@gmail.com</span></div>
              <div className="mobile">Mobile: <span className="text-emerald-500">01400650261</span></div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap">
            <a href={resume} target="_blank" rel="noreferrer">
              <button className="mr-4 mt-4 bg-gray-200 hover:bg-gray-600 text-gray-500 font-semibold hover:text-white py-2 px-6 ring-2 rounded-3xl">
                Download My Resume
              </button>
            </a>
            <a href="mailto:monir.cse6.bu@gmail.com" target="_blank" rel="noreferrer">
              <button className="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl mt-4">
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
