import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import ProductCard from '@/components/ProductCard';
import { guitareProducts } from "@/data/guitares";

export default function Product() {
  let params = useParams(); 
  let {productId} = params;
  const [item, setItem] = useState()

  useEffect(() => {
    const item = guitareProducts.find((p) => p.id === productId);
    setItem(item);
  }, [productId])


  return (
    <div>
      Product
      {item && <ProductCard item={item} />}
    </div>
  )
}
