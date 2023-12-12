import React from "react";
import { Link } from "react-router-dom";
import man from "../../images/man.png";

const ViewPost = ({post}) => {
    const {heading,author,date,content}=post;
   
    
  return (
    <section className="bg-[#f7f2f2] rounded-3xl  mx-8 my-8 text-left">
      <div className="lg:order-first">
        <div className="flex flex-col">
          <div className="p-8 rounded-3xl bg-[#e8e6e6] ring-1 ring-white/10 shadow-sm">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img src={man} alt="hello" className="h-6 w-6" />
                <p className="text-neutral-800 font-semibold">{author}</p>
              </div>
              <p>
                <span className="text-lg font-medium text-neutral-800 uppercase lg:text-xl">
                 {date}
                </span>
                {/* <span className="text-base font-medium text-neutral-700"> /mo</span> */}
              </p>
            </div>
            <h1 className="mt-8 mb-4 text-lg font-medium text-neutral-800 text-left">
              {heading}
            </h1>
            <p className=" text-sm font-medium text-neutral-800">
              {content}
            </p>
            <div className="flex mt-6">
              <Link
                className="items-center justify-between inline-flex w-full font-medium py-2.5 text-center text-neutral-800 duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"
                href="#"
              >
                 <Link className="text-emerald-400">See more →</Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewPost;
