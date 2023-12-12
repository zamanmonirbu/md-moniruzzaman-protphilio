import React from 'react';
import CartAll from './Cart/CartAll';
import Collaboration from './Collaboration/Collaboration';
import SmoothSailing from './Smooth/SmoothSailing';
import FlowLess from './FlowLess/FlowLess';

const MakeTogether = () => {
    return (
        <div className='bg-gray-100'>
            <CartAll/>
            <Collaboration/>
            <SmoothSailing/>
            <FlowLess/>
        </div>
    );
};

export default MakeTogether;