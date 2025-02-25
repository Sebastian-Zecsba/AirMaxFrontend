import Image from "next/image";

export default function Footer() {
  return (
    <footer className="color-red py-10 p-4">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-6 lg:w-[85%] sm:w-[100%] m-auto">

        <div className="order-1">
            <Image
                src={"/MainLogoWhite.png"}
                className="flex-shrink-0 max-w-[220px] max-h-[70px] min-w-[200px] min-h-[60px]"
                alt="Air Max S.A.S"
                width={150}
                height={60}
            />
            </div>

            <div className="order-2 sm:order-3 flex gap-6">
            <a href="https://www.facebook.com/AirMaxfluidtec?rdid=OHWLnNDlP4LGt6Cc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17w8wuUaKX%2F" target="_blank" className="text-blue-600 hover:text-blue-800">
                <Image
                src={"/FacebookWhite.png"}
                alt="Air Max Facebook"
                width={38}
                height={38}
                className="flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]"
                />
            </a>
            <a href="https://www.instagram.com/airmaxcolombia" target="_blank" className="text-blue-600 hover:text-blue-800">
                <Image
                src={"/instaWhite.png"}
                alt="Air Max Instagram"
                width={38}
                height={38}
                className="flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]"
                />
            </a>
            <a href='https://wa.link/0h17sg' target="_blank" className="text-blue-600 hover:text-blue-800">
                <Image
                src={"/wassWhite.png"}
                alt="Air Max WhatsApp"
                width={38}
                height={38}
                className="flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]"
                />
            </a>
            </div>

            <div className="order-3 sm:order-2 flex flex-col sm:flex-row gap-4 text-white text-sm w-full justify-evenly">

                <div className="flex items-center gap-2">
                    <Image
                        src={"/LocationWhite.svg"}
                        alt="Ubicación Air Max"
                        width={35}
                        height={35}
                        className="sm:block flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]"
                    />
                    <div>
                    <p>Carrera 25a #12b - 01 local 3</p>
                    <p>Bogotá, Colombia</p>
                    </div>
                </div>


                <a
                    href='https://wa.link/0h17sg' 
                    className="flex items-center gap-2 hover:text-blue-300"
                    target="_blank"
                >
                    <Image
                        src={"/TelefonoWhite.svg"}
                        alt="Teléfono Air Max"
                        width={35}
                        height={35}
                        className="flex-shrink-0 lg:min-w-[50px] lg:min-h-[50px] max-w-[35px] max-h-[35]  "
                    />
                    <span>350 6092529</span>
                </a>
            </div>
        </div>
    </footer>
  );
}
