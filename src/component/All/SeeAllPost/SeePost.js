import React from 'react';
import {postData} from '../Post/AllNews'
import ViewPost from '../Post/ViewPost';
const SeePost = () => {
// console.log(postData)

    return (
        <div className='w-[50%] m-auto '>
            {
                postData.map((post=><ViewPost post={post}/>))
            }
        </div>
    );
};

export default SeePost;