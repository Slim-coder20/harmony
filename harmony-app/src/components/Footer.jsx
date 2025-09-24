import React, { useState } from "react";
import { FaSearch, FaTruck, FaPhone, FaBoxes, FaStore } from "react-icons/fa";

export default function Footer() {
  // State //
  const [currentSlide, setCurrentSlide] = useState(0);

  // Variable //
  const carouselItems = [
    {
      id: 1,
      icon: FaSearch,
      title: "QUI SE CACHE DERRIÈRE HARMONY MUSIC",
      description: "80 musiciens à votre service !",
    },
    {
      id: 2,
      icon: FaTruck,
      title: "LIVRAISON GRATUITE",
      description: "dès 50€ d'achat en France Métropolitaine",
    },
    {
      id: 3,
      icon: FaPhone,
      title: "QUESTION / CONSEILS",
      description: "01 56 65 21 22",
    },
    {
      id: 4,
      icon: FaStore,
      title: "4 HARMONY MUSIC STORE",
      description: " Oubliez toutes vos références 700m2 d'espace musical",
    },
    {
      id: 5,
      icon: FaBoxes,
      title: "GARANTIE 3 ANS ",
      description: "Une garantie de 3 ans pour tout article acheté ",
    },
  ];

  // Fonction : ces fonctions vont nous permettre de rendre le
  // fonction pour aller au slide suivant
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= carouselItems.length - 3 ? 0 : prev + 1
    );
  };

  // Fonction pour aller au slide précédent
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 3 : prev - 1
    );
  };

  return (
    <footer className="p-12 border-t bg-gray-900 text-white w-full ">
      {/* Carrousel rotatif  */}
      <div className=" relative overflow-hidden">
        {/* Flèche gauche  */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          ←
        </button>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
        >
          {carouselItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 text-center px-4"
              >
                <IconComponent className="text-blue-400 text-3xl mx-auto mb-2" />
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-300 text-xs">{item.description}</p>
              </div>
            );
          })}
        </div>
        {/* Flèche de droite  */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          →
        </button>
      </div>
      {/* Section informations - 2 colonnes  */}

      <div className=" grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
        {/* Informations et conditions générales */}
        <div className="mt-10">
          <h4 className="font-bold mb-2">INFORMATIONS</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <a href="/qui-sommes-nous">Qui sommes-nous ?</a>
            </li>
            <li>
              <a href="/nos-magasins">Nos magasins</a>
            </li>

            <li>
              <a href="/conditions-generales">Conditions générales de vente</a>
            </li>
            <li>
              <a href="/mentions-legales">Mentions légales</a>
            </li>
            <li>
              <a href="/politique-confidentialite">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
        {/* Horraires d'ouverture */}
        <div className="mt-10">
          <h4 className="font-bold mb-2">HORAIRES D'OUVERTURE</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Lundi - Vendredi: 10h - 19h</li>
            <li>Samedi: 10h - 18h</li>
            <li>Dimanche: Fermé</li>
          </ul>
        </div>
        {/* Service client */}
        <div className="mt-10">
          <h4 className="font-bold mb-2">SERVICE CLIENT</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <a href="/livraison">Livraison</a>
            </li>
            <li>
              <a href="/retours">Retours</a>
            </li>
            <li>
              <a href="/contact">Contactez-nous</a>
            </li>
          </ul>
        </div>
        {/* Informations */}
        <div className="mt-10">
          <h4 className="font-bold mb-2">ESPACE PRO</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Devenir partenaire</li>
            <li>Demande de devis</li>
          </ul>
        </div>
        {/* Reseaux sociaux */}
        <div className="mt-10">
          <h4 className="font-bold mb-2">SUIVEZ-NOUS</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://www.youtube.com">YouTube</a>
            </li>
            <li>
              <a href="https://www.linkedin.com">LinkedIn</a>
            </li>
          </ul>
        </div>
        {/* newsletter */}
        <div className="mt-10">
          <h4 className="font-bold mb-2">NEWSLETTER</h4>
          <p className="text-sm text-gray-300 mb-2">
            Inscrivez-vous à notre newsletter pour recevoir les dernières
            actualités et offres.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 p-2 border border-gray-300 rounded-l"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r cursor-pointer">
              S'inscrire
            </button>
          </form>
        </div>
        {/* Logo */}
        <div className="mt-10">
          <img
            src="home/Logo.png"
            alt="Logo"
            className="mx-auto w-32 flex items-center"
          />
        </div>
      </div>
    </footer>
  );
}
