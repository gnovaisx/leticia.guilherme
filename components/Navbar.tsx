"use client";
import lg from "@/public/lg.png";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Link href="/">
            <Image alt="Letícia e Guilherme" src={lg} />
          </Link>
        </div>
        <div className="md:flex hidden">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link href="/cerimonia" className="hover:text-green-900">
                Cerimônia
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/presentes"
            className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-900"
          >
            Presentes
          </Link>
          <Menu className="cursor-pointer md:hidden" onClick={toggleNavbar} />
        </div>
      </nav>
      {isClick && (
        <div className="md:hidden">
          <ul className="flex flex-col items-end mr-5 gap-3 pb-5">
            <li>
              <Link href="/cerimonia" className="hover:text-green-900">
                Cerimônia
              </Link>
            </li>
            <li>
              <Link href="/mensagens" className="hover:text-green-900">
                Mensagens
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
