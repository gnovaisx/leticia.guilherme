import heroImage from "@/public/hero.jpeg";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[40%] flex flex-col items-center justify-center">
        <div>
          <h3 className="text-green-700 text-3xl">22.06.2024</h3>
          <h1 className="text-green-800 text-6xl">
            Letícia & <br />
            Guilherme
          </h1>
          <p className="text-green-700">Hoje, amanhã e sempre</p>
        </div>
      </div>
      <div className="w-[60%] bg-red-400">
        <div className="h-full w-full">
          <Image src={heroImage} alt="hero" className="h-full" />
        </div>
      </div>
    </div>
  );
}
