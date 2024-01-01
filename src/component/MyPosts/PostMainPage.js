import React from "react";
import ViewPost from './ViewPosts'
import { Link } from "react-router-dom";
import { postData } from "./AllPostData";

const Post = () => {
  const limitedPosts = postData.slice(0, 2);
  return (
    <div className="mx-12 md:flex flex-col items-center justify-center p-4 mt-28">
      <div className="mb-10">
        <h1 className="font-bold text-3xl">
          Some <span className="text-[#ec8642]">Blogs</span> <span>Of Our Page</span>
        </h1>
      </div>     
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
