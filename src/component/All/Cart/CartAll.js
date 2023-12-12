import React from 'react';
import bgImage from '../../images/1.jpg'
import SlideCart from './SlideCart';
import ChatMain from '../Chat/ChatMain';

const CartAll = () => {
  return (
    <div
      className="bg-cover bg-center items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >      
      <SlideCart/>
      <ChatMain/>       
    </div>
  );
};

export default CartAll;
