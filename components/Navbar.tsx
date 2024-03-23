"use client";
import lg from "@/public/lg.png";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const toggleNavbar = () => {
    console.log("cliquei");
    setIsClick(!isClick);
  };
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Image alt="Letícia e Guilherme" src={lg} />
        </div>
        <div
          className={`md:static absolute bg-white md:min-h-fit min-h-[20vh] left-0 md:w-auto w-full flex items-center px-5 ${!isClick ? "top-[100%]" : "top-[9%]"}`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-green-900" href="">
                Cerimônia
              </a>
            </li>
            <li>
              <a className="hover:text-green-900" href="">
                Mensagens
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-900">
            Presentes
          </button>
          <Menu className="cursor-pointer md:hidden" onClick={toggleNavbar} />
        </div>
      </nav>
    </header>
  );
}
