import React from "react";
import ViewPost from "./ViewPost";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* First Row: Centered Content */}
      <div className="mb-4">
        <h1 className="font-bold text-3xl">
          From the <span className="text-[#F97316]">blog</span>
        </h1>
        <p className="font-mono text-xl pt-4">A Tech blog by MONIRUZZAMAN.</p>
      </div>

      {/* Second Row: Two Post Cards */}
     
      <div className="flex mb-4">
      <ViewPost/> 
      <ViewPost/> 
      </div>

       <Link to='/view/posts'> <button class="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
          View More Posts
        </button></Link>

    </div>
  );
};

export default Post;
