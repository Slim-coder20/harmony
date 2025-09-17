import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-gray-100 py-4">
      {/* Logo */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-left">
          <Link to="/">Logo</Link>
          {/* Blog  */}
          <div className="flex-1 text-left inline-block m-2.5">
            <Link to="/blog">Blog</Link>
          </div>
        </div>

        {/* Input de Recherche  */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-2/3">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 border rounded-full pr-10 outline-none"
            />
            <FaSearch
              size={18}
              className=" absolute right-3 top-3 transform-translate-y-1/2 text-gray-300 "
            />
          </div>
        </div>
        {/* conexion et Inscription  */}
        <div className="flex-1 flex justify-end gap-4">
          <Link to="/register">
            <FaUser size={25} color="#555" />
          </Link>
          {/*  Lien vers la page Order */}
          <Link to="/order">
            <FaShoppingCart size={25} color="#555" />
          </Link>
        </div>
      </div>
    </header>
  );
}
