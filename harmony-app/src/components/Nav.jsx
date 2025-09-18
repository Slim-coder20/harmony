import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="flex justify-center items-center p-2 text-white bg-gray-900">
      <ul className="flex gap-6 items-center text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Guitare
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Amplis/Effets
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Basse
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Batterie-Percussion
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Clavier-Pianos
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Homestudio
          </Link>
        </li>
      </ul>
    </nav>
  );
}
