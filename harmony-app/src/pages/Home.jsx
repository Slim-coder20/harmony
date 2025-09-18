import React from "react";
import {
  FaFlag,
  FaCreditCard,
  FaBoxes,
  FaSmile,
  FaStore,
  FaTruck,
} from "react-icons/fa";
export default function Home() {
  /* Variable : je créé un tableau d'objets de produits qui me permettra d'afficher dynamiquement 
les cartes des meilleurs ventes des produits en utilisant la méthode map() : cette méthode permet 
facilement d'itérer sur des données et de retourner un tableau d'éléments
*/

  const products = [
    {
      id: 1,
      name: "Yamaha",
      model: "Etude Cs40 3-4",
      price: 300,
      monthly: 30,
      image: "/trompete1.jpg",
      badge: "TOP VENTES",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 2,
      name: "Fodera ",
      model: "Etude Cs40 3-4",
      price: 3500,
      monthly: 120,
      image: "/fodera1.jpg",
      badge: "TOP VENTES",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 3,
      name: "Ibanez",
      model: "AS 113 BS ",
      price: 2500,
      monthly: 30,
      image: "/ibanez1.jpg",
      badge: "TOP VENTES",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 4,
      name: "Ibanez ",
      model: "PF 15 NT",
      price: 178,
      monthly: 25,
      image: "/ibanez2.jpg",
      badge: "TOP VENTES",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 5,
      name: "DW",
      model: "Etude Cs40 3-4",
      price: 2500,
      monthly: 85,
      image: "/dw1.webp",
      badge: "TOP VENTES",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 6,
      name: "Imperial",
      model: "Piano a queue ",
      price: 5000,
      monthly: 250,
      image: "/pianoimperial.jpg",
      badge: "TOP VENTES",
      stock: ["Stock Internet", "Magasins Paris"],
    },
  ];

  return (
    <div className=" bg-white py-9">
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
      {/* Les meilleures ventes */}
      <div className=" grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap mt-5 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col relative"
          >
            {/*  Badge */}
            <span className=" absolute top-2 left-2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
              TOP VENTES
            </span>
            {/* Image du produit  */}
            <img
              src={product.image}
              alt={product.model}
              className=" object-contain h-40 w-full mb-4"
            />
            {/* Nom et modèle */}
            <h3 className=" font-semibold text-lg">{product.name}</h3>
            {/* Prix principal et prix mensule  */}
            <div className=" flex items-center gap-2 mb-2">
              <span className=" text-2xl font-bold">{product.price}€</span>
              <h3 className=" font-semibold">
                ou
                <span className="text-blue-600 font-bold text-lg">
                  {product.monthly}
                </span>
              </h3>
            </div>
            {/* Stock et disponibilité */}
            <div className="flex flex-col gap-1 text-green-500 text-xs mb-2">
              {product.stock.map((s, i) => (
                <span key={i}>● {s}</span>
              ))}
            </div>
            {/* Bouton favori */}
            <button className="absolute bottom-2 right-2 bg-white rounded-full shadow p-2 cursor-pointer ">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className=""
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09
                C13.09 4.01 14.76 3 16.5 3
                19.58 3 22 5.42 22 8.5
                c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      {/* Banniere publicitaire 1  */}
      <div className=" bg-blue-500 w-full p-24 mt-14">
        <h2 className=" text-4xl text-white text-center font-light">
          Livraison <span className=" font-bold">gratuite</span> dès{" "}
          <span className=" font-bold">69€</span> d'achat en France
          Métropolitaine.
        </h2>
      </div>
      {/* Banniere publicitaire  2 */}
      <div className="grid grid-cols-3 bg-black w-full p-48 min-h-2">
       <p>Venez nous rendre visite !</p>
          
      </div>
    </div>
  );
}
