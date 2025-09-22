import React from "react";
import { Link } from "react-router-dom";
export default function HorizontalMenu() {
  
  return (
    <div className=" w-full bg-blue-800 p-8 text-white font-normal mt-0">
      {/* Navigation menu about  */}
      <ul className=" flex justify-center gap-10 ">
        <li>
          <Link
            to="/about"
            className="text-2xl hover:font-bold transition duration-300"
          >
            QUI SOMMES NOUS ?
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-2xl hover:font-bold transition duration-300"
          >
            CONTACT
          </Link>
        </li>
        <li>
          <Link
            to="/equipe"
            className="text-2xl hover:font-bold transition duration-300"
          >
            L'ÉQUIPE{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/harmony-store"
            className="text-2xl hover:font-bold transition duration-300"
          >
            HARMONY STORE
          </Link>
        </li>
        <li>
          <Link
            to="/logistique"
            className="text-2xl hover:font-bold transition duration-300"
          >
            LOGISTIQUE
          </Link>
        </li>
      </ul>
    </div>
  );
}
