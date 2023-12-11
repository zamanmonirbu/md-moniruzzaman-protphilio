import React from 'react';
import bgImage from '../../images/1.jpg'
import SlideCart from './SlideCart';

const CartAll = () => {
  return (
    <div
      className="bg-cover bg-center  flex items-center justify-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     <SlideCart/>
    </div>
  );
};

export default CartAll;
