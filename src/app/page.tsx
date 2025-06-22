'use client';

import ProductsList from "./products";
import YourCart from "./YourCart";
export default function Home() {
  return (
    <div className="flex gap-10" >
      <ProductsList/>
      <YourCart/>
    </div>
  );
}
