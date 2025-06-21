'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { Products } from "@/data";
import ProductsList from "./products";
export default function Home() {
  return (
    <div >
      <ProductsList/>
    </div>
  );
}
