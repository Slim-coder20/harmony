import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBlog,
  FaInfo,
} from "react-icons/fa";

export default function Header() {
  return (
    <header className=" bg-gray-900 py-4 text-white border-b border-b-slate-300">
      {/* Logo */}
      <div className="container mx-auto flex items-center justify-between ">
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
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Rechercher..."
              className=" bg-white w-full p-3 border rounded pr-10 "
            />
            <FaSearch
              size={18}
              className="absolute right-3 top-5 -translate-y-1/2 text-gray-300"
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
          <div className="flex flex-col items-center">
            <Link
              to="/order"
              className="flex flex-col items-center px-4 py-2 rounded hover:bg-white group transition"
            >
              <FaShoppingCart
                size={25}
                className="text-white group-hover:text-black transition"
              />
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
    </header>
  );
}
