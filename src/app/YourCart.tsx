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
                       className="border rounded "
                    /> 
                              <p className='text-Rose-500 text-xs font-semibold'>  Your added items will appear here</p>
     </div>: 
     <div className='flex flex-col gap-5'>

        {cart.map((product, index) => (
                   <div key={index} className="border-b-[0.08px] border-b-light-grayish-blue">
                            <h2 className='text-xs font-semibold  text-start'>{product.name}</h2>
                            <div className='flex gap-2 pt-2 '>
                            <p className='font-semibold text-sm text-Red'>{product.amount}x</p>
                            <p className='  text-Rose-400 text-sm '><span className='text-xs'>@</span> ${product.price.toFixed(2)}</p>
                            <p className='text-Rose-500 font-semibold'>${product.amount * product.price}</p>

                            </div>
                   
                   
                   </div>
                 ))}
        </div>
        }
   
    
    </div>
  );
}

export default YourCart;
