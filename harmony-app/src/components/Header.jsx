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
    <header className=" bg-gray-900 py-4 text-white sticky top-0 z-50">
      {/* Logo */}
      <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 md:grid-cols-[auto_1fr_auto] items-center gap-3">
        {/* Gauche: Blog */}
        <div className="flex flex-row items-center gap-4 flex-1">
          <Link to="/">
            <img
              src="/home/Logo.png"
              alt="Logo Harmony"
              className="h-20 cursor-pointer"
            />
          </Link>
          {/* Menu blog  */}
          <Link
            to="/blog"
            className=" px-4 py-2 rounded hover:bg-white hover:text-black transition ml-2 "
          >
            <div className=" flex flex-col items-center">
              <FaBlog size={25} />
            </div>
            BLOG
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
        <div className="flex-1 flex justify-end gap-3 ">
          <div className="flex flex-col items-center gap-1">
            <Link
              to="/register"
              className="flex flex-col items-center px-4 py-2 rounded hover:bg-white group transition"
            >
              <FaUser
                size={25}
                className="text-white group-hover:text-black transition"
              />
              <span className="text-xs mt-1 text-white group-hover:text-black transition">
                COMPTE
              </span>
            </Link>
          </div>
          {/* Menu pannier  */}
          <div className="flex flex-col items-center relative">
            <Link
              to="/order"
              className="flex flex-col items-center px-4 py-2 rounded hover:bg-white group transition"
            >
              <div className="relative">
                <FaShoppingCart
                  size={25}
                  className="text-white group-hover:text-black transition"
                />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 text-white group-hover:text-black transition">
                PANIER
              </span>
            </Link>
          </div>
          {/* Menu a propos  */}
          <div className="flex flex-col items-center">
            <Link
              to="/about"
              className="flex flex-col items-center px-4 py-2 rounded hover:bg-white group transition"
            >
              <FaInfo
                size={25}
                className="text-white group-hover:text-black transition"
              />
              <span className="text-xs mt-1 text-white group-hover:text-black transition">
                À PROPOS
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay de recherche mobile */}
      {mobileSearchOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileSearchOpen(false)}>
          <div className="absolute top-16 left-0 right-0 px-4" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleMobileSearchSubmit} className="bg-white rounded shadow p-3 flex items-center gap-2">
              <FaSearch className="text-gray-500" />
              <input
                autoFocus
                type="search"
                value={mobileQuery}
                onChange={(e) => setMobileQuery(e.target.value)}
                placeholder="Rechercher..."
                className="flex-1 h-10 px-2 outline-none text-black"
              />
              <button type="button" onClick={() => setMobileSearchOpen(false)} className="px-3 h-10 rounded bg-gray-200 text-gray-800">Annuler</button>
              <button type="submit" className="px-3 h-10 rounded bg-blue-600 text-white font-semibold">Rechercher</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

