import React from 'react';
import { Products } from "@/data";

const ProductsList = () => {
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
         {Products.map((product, index) => (
           <div key={index} className="card">
             <img
               src={product.image.thumbnail} 
               alt={product.name}
               className="w-full"
             />
             <h2>{product.name}</h2>
             <p>{product.category}</p>
             <p>${product.price.toFixed(2)}</p>
           </div>
         ))}
       </div>
  );
}

export default ProductsList;
