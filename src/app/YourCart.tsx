import React, { useContext } from 'react';
import Image from "next/image";
import { CartContext } from './context';

const YourCart = () => {
     const context = useContext(CartContext);
     if (!context) {
        throw new Error('useCart must be used within a CartProvider');
      }
        const { cart } = context;
    
  return (
    <div className='bg-white rounded-xl h-fit w-76 px-3 pt-3 pb-11 flex flex-col gap-5'>
     <h1 className='font-bold text-xl text-Red text-start'>  Your Cart ({cart.length}) </h1>
     {cart.length<=0 ?  <div className='flex flex-col items-center justify-center'>
                    <Image
                       src="/assets/images/illustration-empty-cart.svg"
                       alt='icon-add-to-cart'
                        width={95}
                       height={95}
                       className="border rounded  "
                    /> 
                              <p className='text-Rose-500 text-xs font-semibold'>  Your added items will appear here</p>
     </div>: 
     <div>

        {cart.map((product, index) => (
                   <div key={index} className="">
                   
                
                            <h3 className='text-xs font-extralight '>{product.category}</h3>
                            <h2 className='text-sm font-semibold '>{product.name}</h2>
                            <p className='font-semibold text-sm text-Red'>${product.price.toFixed(2)}</p>
                   
                   
                   </div>
                 ))}
        </div>}
   
    
    </div>
  );
}

export default YourCart;
