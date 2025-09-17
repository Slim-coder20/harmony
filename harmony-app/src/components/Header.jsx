import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
export default function Header() {
  return (
    <header className=" bg-gray-900 py-4 text-white">
      {/* Logo */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-left">
          <Link to="/">Logo</Link>
          {/* Blog  */}
          <div className="flex-1 text-left inline-block m-2.5">
            <Link to="/blog">BLOG</Link>
          </div>
        </div>

        {/* Input de Recherche  */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-2/">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-[800px] px-4 py-2 border rounded-full pr-10 outline-none"
            />
            <FaSearch
              size={18}
              className=" absolute right-3 top-3 transform-translate-y-1/2 text-gray-300 "
            />
          </div>
        </div>
        {/* Le menu de connexion / pannier / a propos / favoris */}
        <div className="flex-1 flex justify-end gap-4 ">
          <div className="flex flex-col items-center">
            <button className="flex flex-col items-center px-4 py-2 rounded hover:bg-white group transition">
              <FaUser
                size={25}
                className="text-white group-hover:text-black transition"
              />
              <span className="text-xs mt-1 text-white group-hover:text-black transition">
                COMPTE
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button className="flex flex-col items-center px-4 py-2 rounded hover:bg-white group transition">
              <FaShoppingCart
                size={25}
                className="text-white group-hover:text-black transition"
              />
              <span className="text-xs mt-1 text-white group-hover:text-black transition">
                PANIER
              </span>
            </button>
          </div>
          {/* Ajoute d'autres icônes ici */}
        </div>
      </div>
    </header>
  );
}
