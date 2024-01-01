import React from "react";
import { useParams } from "react-router-dom";
import { postData } from "../MyPosts/AllPostData";

const SinglePost = () => {
  const { id } = useParams();
  const intId = parseInt(id);

  const selectedPost = postData.find((post) => post.id === intId);

  return (
    <div className=" ">
      {selectedPost ? (
        <>
          <div className="bg-gray-900 w-full h-52">
            <h1 className="text-2xl text-white  pt-12 text-center">
              {selectedPost.heading}
            </h1>
          </div>

          <div className="mx-[10%] -mt-10 bg-blue-200 rounded-2xl shadow-xl p-12">
            <p>{selectedPost.content}</p>
          </div>
        </>
      ) : (
        <p>No post found with the specified ID.</p>
      )}
    </div>
  );
};

export default SinglePost;
