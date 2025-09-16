import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
export default function Header() {
  return (
    <header className="border-b border-gray-300 bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-left">
          <Link to="/">Logo</Link>
        </div>
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-2/3 p-2 border rounded-full"
          />
        </div>
        <div className="flex-1 flex justify-end gap-4">
          <Link to="/login">
            <FaUser size={25} color="#555" />
          </Link>
          <Link to="/order">
            <FaShoppingCart size={25} color="#555" />
          </Link>
        </div>
      </div>
    </header>
  );
}
