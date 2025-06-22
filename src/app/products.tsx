import React from 'react';
import { Products } from "@/data";
import Image from "next/image";

const ProductsList = () => {
  return (
     <div className="">
        <h1 className='font-bold text-3xl text-start mb-5 '>  Desserts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
           {Products.map((product, index) => (
           <div key={index} className="">
            <div className=''>
               <Image
                  src={product.image.desktop} 
                   alt={product.name}
                   width={180}
                  height={180}
               className="border rounded  "
                         /> 
                         <div
                          className='
                          cursor-pointer
                          border rounded-2xl  border-Red 
                          py-1.5 w-30 bg-white 
                          text-Red text-xs
                          flex justify-center items-center gap-2 
                          relative bottom-4 left-7
                          '> 
                <Image
                  src="/assets/images/icon-add-to-cart.svg"
                   alt={product.name}
                   width={20}
                  height={20}
               className="border rounded  "
                         /> 
                          Add To Cart
                          </div>  
            </div>
            <div className='text-start '>
                    <h3 className='text-xs font-extralight '>{product.category}</h3>
                    <h2 className='text-sm font-semibold '>{product.name}</h2>
                    <p className='font-medium text-Red'>${product.price.toFixed(2)}</p>
            </div>
           
           </div>
         ))}
        </div>
        
       </div>
  );
}

export default ProductsList;
