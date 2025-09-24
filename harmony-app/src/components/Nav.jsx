import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="flex justify-center items-center p-5 text-white bg-gray-900">
      <ul className="flex gap-6 items-center text-lg font-medium">
        <li>
          <Link to="/guitare" className="hover:text-blue-400 transition">
            Guitares
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Amplis / Effets
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Basses
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Batterie / Percussions 
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Clavier / Piano 
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
