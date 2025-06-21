import React from 'react';
import { Products } from "@/data";
import Image from "next/image";

const ProductsList = () => {
  return (
     <div className="">
        <h1>  Desserts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
           {Products.map((product, index) => (
           <div key={index} className="flex flex-col w-100">
                  <Image
               src={product.image.desktop} 
               alt={product.name}
             width={100}
             height={100}
               className=""
/>          
             <h2>{product.name}</h2>
             <p>{product.category}</p>
             <p>${product.price.toFixed(2)}</p>
           </div>
         ))}
        </div>
        
       </div>
  );
}

export default ProductsList;
