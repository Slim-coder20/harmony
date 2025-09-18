import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="flex justify-center items-center p-2 text-white bg-gray-900 gap-4">
      <ul className=" flex gap-4 items-center ">
        <div className=" flex gap-3">
          <li>
            <Link href="/">Guitare</Link>
          </li>
          <li>
            <Link href="/">Amplis/Effets</Link>
          </li>
          <li>
            <Link href="/">Basse</Link>
          </li>
          <li>
            <Link href="/">Betterie-Percussion</Link>
          </li>
          <li>
            <Link href="/">Clavier-Pianos</Link>
          </li>
          <li>
            <Link href="/">Homestudio</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
