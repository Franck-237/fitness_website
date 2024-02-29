import React from 'react';

const Button = (props) => {
  return (
    <div>
        <button className='flex gap-2 items-center bg-gradient-to-r from-[#FF62B7] to-[#9F53FF] border text-white text-center text-lg rounded-full px-3 py-2 md:text-xl'>
            {props.children}
        </button>
    </div>
  )
};

export default Button;