"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MainNavAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 color-bg">
      <div className="content-center color-bg w-full lg:w-[85%] sm:w-[100%] h-28 m-auto ">
        <div className="w-full flex justify-between items-center px-4">
            <Image
                src="/MainLogo.png"
                alt="Air Max S.A.S"
                className="flex-shrink-0 max-w-[220px] max-h-[70px] min-w-[200px] min-h-[60px]"
                width={150}
                height={60}
            />

          <div className="hidden sm:flex w-full sm:justify-between items-center space-x-4 text-sm">
              <div className="flex justify-evenly w-full">
                <div className="sm:flex hidden text-sm">
                    <Image
                    src={"/location.svg"}
                    alt="Telefono Air Max"
                    width={35}
                    height={35}
                    className="hidden sm:block flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]  "
                    />

                    <div>
                        <p className="lg:text-[1.15rem] text-[1rem]">Carrera 25a #12b - 01 local 3</p>
                        <p className="lg:text-[1.15rem] text-[1rem]">Bogota, Colombia</p>
                    </div>
                </div>

                    <a
                        href='https://wa.link/0h17sg' 
                        className="flex items-center space-x-1 hover:text-blue-700"
                        target="_blank"
                    >
                        <Image
                            src={"/phone.svg"}
                            alt="Telefono Air Max"
                            width={35}
                            height={35}
                            className="flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]  "
                        />

                        <span className="lg:text-[1.15rem] text-[1rem]">350 6092529</span>
                    </a>
              </div>

            <div className="flex lg:gap-5 sm:gap-3">
                <a href="https://www.facebook.com/AirMaxfluidtec?rdid=OHWLnNDlP4LGt6Cc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17w8wuUaKX%2F" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <Image
                        src={"/facebook.png"}
                        alt="Air Max Facebook"
                        width={38}
                        height={38}
                        className="flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]"
                    />
                </a>
                <a href="https://www.instagram.com/airmaxcolombia" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <Image
                        src={"/instagram.png"}
                        alt="Air Max Facebook"
                        width={38}
                        height={38}
                        className="flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]"
                    />
                </a>
                <a href='https://wa.link/0h17sg' target="_blank" className="text-blue-600 hover:text-blue-800">
                    <Image
                        src={"/whatsapp.png"}
                        alt="Air Max Facebook"
                        width={38}
                        height={38}
                        className="flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]"
                    />
                </a>
            </div>
          </div>

          <button
            className="sm:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-10 w-10 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav className="color-red ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden sm:flex justify-evenly space-x-8 py-2 text-white font-semibold">
            <Link href="/home" target="_blank" className="hover:text-gray-200 text-2xl">
              Ver Pagina
            </Link>
            <Link href="/admin/products" className="hover:text-gray-200 text-2xl">
              Productos
            </Link>
            <Link href="/admin/categories" className="hover:text-gray-200 text-2xl">
              Categorias
            </Link>
          </div>

          <div
            className={`
              sm:hidden 
              overflow-hidden 
              transition-all 
              duration-300 
              ease-in-out 
              ${isOpen ? "max-h-48" : "max-h-0"}
            `}
          >
            <div className="flex flex-col items-start space-y-2 py-2 text-white font-semibold">
              <Link href="/home" target="_blank" className="block hover:text-gray-200">
                Ver Pagina
              </Link>
              <Link href="/admin/products" className="block hover:text-gray-200">
              Productos
              </Link>
              <Link href="/admin/categories" className="block hover:text-gray-200">
                Productos
              </Link>
              <Link href="/contact" className="block hover:text-gray-200">
                Categorias
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
