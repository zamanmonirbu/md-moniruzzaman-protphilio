import React from 'react';
import CartAll from './Cart/CartAll';
import Collaboration from './Collaboration/Collaboration';
import SmoothSailing from './Smooth/SmoothSailing';
import FlowLess from './FlowLess/FlowLess';
import Cv from './Cv/Cv';
import Post from './Post/Post';

const MakeTogether = () => {
    return (
        <div className='bg-gray-100'>
            <CartAll/>
            <Collaboration/>
            <SmoothSailing/>
            <FlowLess/>
            <Cv/>
            <Post/>
        </div>
    );
};

export default MakeTogether;