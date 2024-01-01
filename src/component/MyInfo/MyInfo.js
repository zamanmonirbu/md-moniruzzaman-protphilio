import React from "react";
import frontEnd from "../images/ux.png";
import backEnd from "../images/backend.png";
import task from "../images/task.png";
import startup from "../images/start-up.png";
import resume from '../images/MONIRUZZAMAN_RESUME.pdf'

const Cv = () => {
  return (
    <div>
      <div className="text-center md:flex mb-8">
        <div className="md:w-1/2 p-4  ">
          <h1 className="font-bold text-3xl">
            What do <span className="text-[#F97316]">I Do?</span>
          </h1>
          <div>
            <a href={resume}  target="_blank" rel="noreferrer">
            <button className="mr-4 mt-4 bg-gray-200 hover:bg-gray-600 text-gray-500 font-semibold hover:text-white py-2 px-6 border-emerald-500 ring-2 rounded-3xl hover:border-transparent mb-8">
              Download my Resume
            </button>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtDsVFpkmGrRpTHZDPVJnRJNDHRXnMScXcLvcdJrkpSxsQklwRCHvcCthMDKBpphMPcdcTJb"  target="_blank" rel="noreferrer" >
            <button className="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
              Hire Me Now
            </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center my-10 md:justify-start md:mb-0">
          <div className="border shadow-2xl w-52 py-16">
            <img
              src={frontEnd}
              alt="frontEnd "
              className="mx-auto h-10 w-10 "
            />
            <h1 className="font-semibold pt-6 text-gray-800">FrontEnd</h1>
            <p className="text-gray-500">React</p>
            <p className="text-gray-500">Tailwind Css</p>
            <p className="text-gray-500">Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="w-1/4 p-4  "></div>
        <div className="md:w-1/4 p-4 flex  items-center justify-center">
          <div className="border shadow-2xl w-52 py-16">
            <img src={backEnd} alt="frontEnd " className="mx-auto h-10 w-10 " />
            <h1 className="font-semibold pt-6 text-gray-800">BackEnd</h1>
            <p className="text-gray-500">NodeJS</p>
          </div>
        </div>
        <div className="md:w-1/4 p-4  flex  items-center justify-center">
          <div className="border shadow-2xl w-52 py-16">
            <img src={task} alt="frontEnd " className="mx-auto h-10 w-10 " />
            <h1 className="font-semibold pt-6 text-gray-800">Team Leader</h1>
            <p className="text-gray-500">Planning Team</p>
            <p className="text-gray-500">Leading Development & Execution</p>
          </div>
        </div>
        <div className="md:w-1/4 p-4  flex  items-center justify-center">
          <div className="border shadow-2xl w-52 py-16">
            <img src={startup} alt="frontEnd " className="mx-auto h-10 w-10 " />
            <h1 className="font-semibold pt-6 text-gray-800">Start Up</h1>
            <p className="text-gray-500 p-2">
              Invite me in your team! Let's grow together. Let's grow bigger!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
