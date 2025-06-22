import React from 'react';
import Image from "next/image";

const YourCart = () => {
  return (
    <div className='bg-white rounded-xl h-fit w-80 px-3 pt-3 pb-9 flex flex-col gap-5'>
     <h1 className='font-bold text-xl text-Red text-start'>  Your Cart (0) </h1>
     <div className='flex flex-col items-center justify-center'>
                    <Image
                       src="/assets/images/illustration-empty-cart.svg"
                       alt='icon-add-to-cart'
                        width={95}
                       height={95}
                       className="border rounded  "
                    /> 
                              <p className='text-Rose-500 text-xs font-semibold'>  Your added items will appear here</p>
     </div>
    
    </div>
  );
}

export default YourCart;
