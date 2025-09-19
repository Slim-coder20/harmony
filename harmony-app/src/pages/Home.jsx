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

  const newProducts = [
    {
      id: 1,
      name: "NATIVE INSTRUMENTS MASCHINE MK3",
      model: "MK3",
      price: 600,
      monthly: 55,
      image: "/MK3.avif",
      badge: "NOUVEAUTÉ",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 2,
      name: "LD system",
      model: "CURV 500 PS ",
      price: 2800,
      monthly: 86,
      image: "/Ldsystem.jpg",
      badge: "NOUVEAUTÉ",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 3,
      name: "Orange",
      model: "Orange Super Crush 100 Head",
      price: 800,
      monthly: 58,
      image: "/orangeamp.webp",
      badge: "NOUVEAUTÉ",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 4,
      name: "Korg",
      model: "Korg microKey-2",
      price: 86,
      monthly: 25,
      image: "/korgmicro.jpg",
      badge: "NOUVEAUTÉ",
      stock: ["Stock Internet", "Magasins Paris"],
    },
    {
      id: 5,
      name: "Fender",
      model: "fender stratocaster",
      price: 1500,
      monthly: 45,
      image: "/stratofender.jpg",
      badge: "NOUVEAUTÉ",
      stock: ["Stock Internet", "Magasins Paris"],
    },
  ];

  const brands = [
    {
      id: 1,
      name: "Yamaha",
      image: "/yamahalogo.jpg",
    },
    {
      id: 2,
      name: "Ibanez",
      image: "/ibanezLogo.png",
    },
    {
      id: 3,
      name: "Gibson",
      image: "/gibsonlogo.png",
    },
    {
      id: 4,
      name: "Fender",
      image: "/fenderlogo.png",
    },
    {
      id: 5,
      name: "Korg",
      image: "/korglogo.webp",
    },
    {
      id: 6,
      name: "Shure",
      image: "/shurelogo.png",
    },
    {
      id: 7,
      name: "Fodera",
      image: "/fodera.gif",
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
      {/* Les meilleures ventes Card */}
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
      <div className="grid grid-cols-3 bg-black w-full min-h-[350px]">
        {/* Colonne 1 : image de fond + texte */}
        <div className="relative col-span-1 flex items-center">
          <div className="absolute inset-0 bg-[url('/carousel4.webp')] bg-cover bg-center"></div>
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
          <div className="absolute inset-0 bg-[url('/imagecarousel3.webp')] bg-cover bg-center"></div>
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
          // la carte // 
          <div
            key={product.id}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow ml-2 relative"
          >
            {/*  Badge Nouveauté */}
            <span className=" absolute top-2 left-2 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
              {product.badge}
            </span>
            {/* Image du produit  */}
            <img
              src={product.image}
              alt={product.model}
              className=" object-contain h-40 w-full mb-4"
            />
            {/* Nom et modèle */}
            <h3 className=" font-semibold text-lg">{product.name}</h3>
            <p className=" text-gray-600 text-sm mb-2">{product.model}</p>
            {/* Prix principal et prix mensuel  */}
            <div className=" flex items-center gap-2 mb-2">
              <span className=" text-2xl font-bold">{product.price}€</span>
              <h3 className=" font-semibold">
                ou
                <span className="text-blue-600 font-bold text-lg">
                  {product.monthly}€/mois
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

      {/* Section des marques les plus recherchées */}
      <h2 className="font-semibold text-center py-5 text-2xl mt-8">
        Voici les marques les plus recherchées par les musiciens
      </h2>
      {/* Container principale  */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center p-4 bg-white cursor-pointer"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-16 w-auto object-contain "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
