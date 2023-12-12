import React from 'react';
import { postData } from '../Post/AllNews';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  const intId=parseInt(id);
  console.log(postData,id)

  // Find the post with the matching id
  const selectedPost = postData.find(post => post.id === intId);

  return (
    <div className=' '>
      {selectedPost ? (
        <>
        <div className='bg-gray-900 w-full h-52'>
            <h1 className='text-2xl text-white  pt-12 text-center'>
            {selectedPost.heading}
            </h1>
            
        </div>

        <div className='mx-[10%] -mt-10 bg-blue-200 rounded-2xl shadow-xl p-12'>

          <p >{selectedPost.content}</p>
          {/* Render other details of the selected post */}
        </div>
        </>
        
      ) : (
        <p>No post found with the specified ID.</p>
      )}
    </div>
  );
};

export default SinglePost;
