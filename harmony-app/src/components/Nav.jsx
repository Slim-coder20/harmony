import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="flex justify-center items-center p-5 text-gray-700 gap-4">
      <ul className=" flex gap-4 items-center">
        <li>
          <Link href="/">Guitare</Link>
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
      </ul>
    </nav>
  );
}
