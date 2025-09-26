import React from "react";
import {
  FaFlag,
  FaCreditCard,
  FaBoxes,
  FaSmile,
  FaStore,
  FaTruck,
} from "react-icons/fa";
import Carrousel from "../components/Carrousel";
import ProductCard from "@/components/ProductCard";
import { guitareProducts } from "@/data/guitares";
import { homeBestSellers, homeNewProducts, popularBrands } from "@/data/home";

export default function Home() {
  // Construire la liste "meilleures ventes" à partir des guitares et des entrées spécifiques à la home
  const products = [
    ...guitareProducts,
    ...homeBestSellers,
  ];

  // Nouveautés
  const newProducts = homeNewProducts;

  // Marques populaires
  const brands = popularBrands;

  return (
    <div className=" bg-white py-9">
      {/* Carrousel */}
      <Carrousel />

      <h1 className="text-center text-3xl mt-4">
        Bienvenue chez <span className="text-blue-900">Harmony</span> !
      </h1>
      <div className=" flex justify-center gap-12 mt-5">
        {/* Réferencment  */}
        <div className=" flex flex-col items-center text-center ">
          <FaFlag className=" text-blue-500" size={48} />
          <span className=" font-bold mt-2">N°1 français</span>
          <span>des ventes d'instruments de musique</span>
        </div>
        {/* Paiement facilité  */}
        <div className=" flex flex-col items-center text-center ">
          <FaCreditCard className=" text-blue-500" size={48} />
          <span className=" font-bold mt-2">3x, 4x sans frais</span>
          <span>des ventes d'instruments de musique</span>
          <span>
            dès 50€ ou financez <br />
            jusqu'a 12x
          </span>
        </div>
        {/* disponibilité des articles  */}
        <div className=" flex flex-col items-center text-center ">
          <FaBoxes className=" text-blue-500" size={48} />
          <span className=" font-bold mt-2">1 millions d'articles </span>
          <span>en stock</span>
        </div>
        {/* Garantie  */}
        <div className=" flex flex-col items-center text-center ">
          <FaBoxes className=" text-blue-500" size={48} />
          <span className=" font-bold mt-2">Garantie 3 ans </span>
        </div>
        {/* Livraison gratuite  */}
        <div className="flex flex-col items-center text-center">
          <FaTruck className="text-blue-500" size={48} />
          <span className="font-bold mt-2">Livraison gratuite</span>
          <span>dès 50€ d'achat</span>
        </div>
        {/* Satisfait ou rembourssé  */}
        <div className="flex flex-col items-center text-center">
          <FaSmile className="text-blue-500" size={48} />
          <span className="font-bold mt-2">30 jours</span>
          <span>satisfait ou remboursé</span>
        </div>
        {/* harmony store  */}
        <div className="flex flex-col items-center text-center">
          <FaStore className="text-blue-500" size={48} />
          <span className="font-bold mt-2">4 Harmony Stores</span>
          <span>à Paris</span>
        </div>
      </div>
      {/* Section des produits Meilleurs ventes */}
      <h2 className="font-semibold text-center py-5 text-2xl mt-3">
        Découvrez ici les meilleures ventes par univers !
      </h2>
      {/* Les meilleures ventes Card */}
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 flex-wrap mt-5 ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            item={product}
            topVente={product.badge === "TOP VENTES"}
          />
        ))}
      </div>
      {/* Banniere publicitaire 1  */}
      <div className=" bg-blue-500 w-full p-24 mt-14">
        <h2 className=" text-4xl text-white text-center font-light">
          Livraison <span className=" font-bold">gratuite</span> dès{" "}
          <span className=" font-bold">50€</span> d'achat en France
          Métropolitaine.
        </h2>
      </div>
      {/* Banniere publicitaire  2 */}
      <div className="grid grid-cols-3 bg-black w-full min-h-[350px]">
        {/* Colonne 1 : image de fond + texte */}
        <div className="relative col-span-1 flex items-center">
          <div className="absolute inset-0 bg-[url('/home/carousel4.webp')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 p-12">
            <p className="text-white text-3xl font-light">
              Venez nous rendre visite ! Harmony vous propose le plus grand
              espace musical de Paris.
            </p>
          </div>
        </div>
        {/* Colonne 2 et 3 : tes autres éléments */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          {/* ...contenu à droite... */}
          <span className=" text-6xl text-white font-bold border-b-4  border-blue-800">
            Harmony
          </span>
          <span className=" text-2xl text-white mt-2">STORES</span>
        </div>
        <div className="relative col-span-1 flex items-center">
          <div className="absolute inset-0 bg-[url('/home/imagecarousel3.webp')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 p-12">
            <p className="text-white text-3xl font-light text-center ">
              4 Harmony stores à Paris d'espace musical
            </p>
          </div>
        </div>
      </div>

      {/* Section des nouveaux produits */}
      <h2 className="font-semibold ml-2 py-5 text-2xl mt-8">
        Découvrez nos dernières nouveautés !
      </h2>
      {/* Les nouveaux produits Card */}
      <div className=" flex overflow-x-auto gap-4 pb-4 scrollbar-hide ">
        {newProducts.map((product) => (
          <ProductCard
            key={product.id}
            item={product}
            topVente={product.badge === "TOP VENTES"}
          />
        ))}
      </div>

      {/* Section des marques les plus recherchées */}
      <h2 className="font-semibold text-center py-5 text-2xl mt-8">
        Voici les marques les plus recherchées par les musiciens
      </h2>
      {/* Container principale  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center p-4 bg-white cursor-pointer"
          >
            <img
              src={brand.image?.startsWith("/") ? brand.image : `/${brand.image}`}
              alt={brand.name}
              className="h-16 w-auto object-contain "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
