import React from "react";
import { postData } from "../MyPosts/AllPostData";
import ViewPost from "../MyPosts/ViewPosts";
import NewsletterCard from "./NewsLetter";
const SeePost = () => {
  return (
    <div>
      <div className="bg-gray-900 w-full h-52">
        <h1 className="text-2xl text-white  pt-12">Posts</h1>
        <p className="text-xl text-white pt-2">A Tech blog by MONIRUZZAMAN</p>
      </div>
      <div className="md:flex">
        <div className="w-2/3 ml-[10%] ">
          {postData?.map((post) => (
            <ViewPost key={post.id} post={post} />
          ))}
        </div>
        <div className="md:w-1/3 ">
          <NewsletterCard />
        </div>
      </div>
    </div>
  );
};

export default SeePost;
