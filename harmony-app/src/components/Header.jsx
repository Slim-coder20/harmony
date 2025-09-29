import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBlog,
  FaInfo,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Header() {
  const { totalCount } = useCart();
  const navigate = useNavigate();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileQuery, setMobileQuery] = useState("");

  function handleMobileSearchSubmit(e) {
    e.preventDefault();
    const q = mobileQuery.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setMobileSearchOpen(false);
    setMobileQuery("");
  }
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Logo */}
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 grid grid-cols-3 md:grid-cols-[auto_1fr_auto] items-center gap-3">
        {/* Gauche: Blog */}
        <div className="flex flex-row items-center gap-4 flex-1">
          <Link to="/">
            <img
              src="/home/Logo.png"
              alt="Logo Harmony"
              className="h-10 md:h-20 cursor-pointer"
            />
          </Link>
          {/* Menu blog  */}
          <Link to="/blog" className="flex items-center gap-2 ml-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded bg-gray-800 hover:bg-gray-700">
              <FaBlog size={18} />
            </span>
            <span className="hidden md:inline font-semibold">BLOG</span>
          </Link>
        </div>

        {/* Input de Recherche  */}
        <div className="flex-1 flex justify-center">
          {/* Mobile: icône loupe */}
          <button
            aria-label="Recherche"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-gray-800 hover:bg-gray-700"
            onClick={() => setMobileSearchOpen(true)}
          >
            <FaSearch />
          </button>
          {/* Desktop: input */}
          <div className="hidden md:block relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Rechercher..."
              className=" bg-white w-full p-3 border rounded pr-10 text-black"
            />
            <FaSearch
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
        {/* Le menu de connexion / pannier / a propos / favoris */}
        <div className="flex-1 flex justify-end gap-2 md:gap-3 ">
          {/* Compte */}
          <Link
            to="/register"
            className="inline-flex items-center justify-center w-10 h-10 rounded bg-gray-800 hover:bg-gray-700"
            aria-label="Compte"
          >
            <FaUser size={18} />
          </Link>

          {/* Panier */}
          <Link
            to="/order"
            className="relative inline-flex items-center justify-center w-10 h-10 rounded bg-gray-800 hover:bg-gray-700"
            aria-label="Panier"
          >
            <FaShoppingCart size={18} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full min-w-[1.25rem] h-5 px-1.5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>

          {/* À propos */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center w-10 h-10 rounded bg-gray-800 hover:bg-gray-700"
            aria-label="À propos"
          >
            <FaInfo size={18} />
          </Link>
        </div>
      </div>

      {/* Overlay de recherche mobile */}
      {mobileSearchOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileSearchOpen(false)}>
          <div className="absolute top-20 left-0 right-0 px-3" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleMobileSearchSubmit} className="bg-white rounded shadow p-2 flex flex-wrap items-center gap-2">
              <FaSearch className="text-gray-500" />
              <input
                autoFocus
                type="search"
                value={mobileQuery}
                onChange={(e) => setMobileQuery(e.target.value)}
                placeholder="Rechercher..."
                className="w-full flex-1 min-w-0 h-10 px-2 outline-none text-black"
              />
              <div className="flex w-full justify-end gap-2">
                <button type="button" onClick={() => setMobileSearchOpen(false)} className="px-3 h-10 rounded bg-gray-200 text-gray-800 text-sm">Annuler</button>
                <button type="submit" className="px-3 h-10 rounded bg-blue-600 text-white font-semibold text-sm">Rechercher</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

