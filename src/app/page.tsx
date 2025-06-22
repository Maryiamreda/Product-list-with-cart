'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { Products } from "@/data";
import ProductsList from "./products";
import YourCart from "./YourCart";
export default function Home() {
  return (
    <div className="flex" >
      <ProductsList/>
      <YourCart/>
    </div>
  );
}
