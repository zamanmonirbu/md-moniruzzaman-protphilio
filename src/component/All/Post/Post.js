import React from "react";
import ViewPost from "./ViewPost";
import { Link } from "react-router-dom";
import { postData } from "./AllNews";

const Post = () => {
  const limitedPosts = postData.slice(0, 2);
  return (
    <div className="md:flex flex-col items-center justify-center p-4 mt-28">
      {/* First Row: Centered Content */}
      <div className="mb-10">
        <h1 className="font-bold text-3xl">
          From the <span className="text-[#F97316]">blog</span>
        </h1>
        <p className="font-mono text-xl pt-4">A Tech blog by MONIRUZZAMAN.</p>
      </div>

      {/* Second Row: Two Post Cards */}
     
      <div className="md:flex mb-4">
      {
        limitedPosts?.map((post=><ViewPost key={post.id} post={post}/>))
            }
     
      </div>

       <Link to='/view/posts'> <button className="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
          View More Posts
        </button></Link>

    </div>
  );
};

export default Post;
