import React from 'react';
import CartAll from './Cart/CartAll';
import ChatMain from './Chat/ChatMain';
import Collaboration from './Collaboration/Collaboration';

const MakeTogether = () => {
    return (
        <div>
            <CartAll/>
            <ChatMain/>
            <Collaboration/>
        </div>
    );
};

export default MakeTogether;