import React from 'react';

const Button = (props) => {
  return (
    <div>
        <button className='mx-auto lg:mx-0 flex gap-2 items-center bg-gradient-to-r from-[#FF62B7] to-[#9F53FF] border border-1 border-txt_grad text-white text-center text-lg rounded-full px-3 py-2 md:text-xl'>
            {props.children}
        </button>
    </div>
  )
};

export default Button;