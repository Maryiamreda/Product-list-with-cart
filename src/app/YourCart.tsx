import React from 'react';
import Image from "next/image";

const YourCart = () => {
  return (
    <div className='bg-white rounded h-fit px-5 py-8'>
     <h1 className='font-bold text-xl text-Red text-start'>  Your Cart (0) </h1>
     <div className='flex flex-col items-center justify-center'>
                    <Image
                       src="/assets/images/illustration-empty-cart.svg"
                       alt='icon-add-to-cart'
                        width={100}
                       height={100}
                       className="border rounded  "
                    /> 
                              <p className='text-Rose-500 text-xs font-semibold'>  Your added items will appear here</p>
     </div>
    
    </div>
  );
}

export default YourCart;
