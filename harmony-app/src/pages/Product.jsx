import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { guitareProducts } from "@/data/guitares";
import ProductDetail from "@/components/ProductDetail";
import { homeBestSellers, homeNewProducts, popularBrands } from "@/data/home";
import { bassProducts } from "@/data/basse";

export default function Product() {
  const { productId } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    // Rechercher dans toutes les sources connues (guitares + données Home)
    const allProducts = [...guitareProducts, ...homeBestSellers, ...homeNewProducts, ...bassProducts];
    const found = allProducts.find((p) => p.id === productId);
    setItem(found);
  }, [productId]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Produit introuvable
      </div>
    );
  }

  return <ProductDetail item={item} homeBestSellers={homeBestSellers} homeNewProducts={homeNewProducts} popularBrands={popularBrands} guitareProducts={guitareProducts} bassProducts={bassProducts} />;
}