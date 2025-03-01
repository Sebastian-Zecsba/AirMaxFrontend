"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Image from "next/image";
import { getImagePath } from "@/utils";

interface CarouselProps {
  images: string[];
}

export default function CarruselImages({ images }: CarouselProps) {
  // Guarda la instancia del Swiper de thumbnails
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="relative flex flex-col items-center w-full max-w-[600px] gap-4">
      {/* Swiper principal */}
      <Swiper
        modules={[Navigation, Thumbs]}
        slidesPerView={1}
        loop
        // Enlazamos la navegación a los botones personalizados
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-[400px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            {/* Imagen principal con esquinas redondeadas */}
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
              <Image
                src={getImagePath(img)}
                alt={`Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botón Prev */}
      <button
        type="button"
        className="btn-prev absolute top-1/2 left-2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/70 text-black hover:bg-white transform -translate-y-1/2 shadow transition-colors"
      >
        <span className="text-2xl">&lt;</span>
      </button>

      {/* Botón Next */}
      <button
        type="button"
        className="btn-next absolute top-1/2 right-2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/70 text-black hover:bg-white transform -translate-y-1/2 shadow transition-colors"
      >
        <span className="text-2xl">&gt;</span>
      </button>

      {/* Swiper de miniaturas (thumbnails) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        spaceBetween={10}
        className="w-full h-[80px]"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="
              thumb-slide
              cursor-pointer
              rounded-md
              border-2
              border-transparent
              hover:border-gray-300
              transition-colors
              duration-300
            "
          >
            <div className="relative w-full h-full">
              <Image
                src={getImagePath(img)}
                alt={`Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos globales para la opacidad y el filtro de las miniaturas */}
      <style jsx global>{`
        /* Todas las miniaturas por defecto: opacas y en escala de grises */
        .thumb-slide {
          opacity: 0.6;
          filter: grayscale(60%);
          transition: all 0.3s ease;
        }
        /* Hover: se quita algo de opacidad y el filtro */
        .thumb-slide:hover {
          opacity: 0.9;
          filter: none;
        }
        /* Miniatura activa (la que está sincronizada con la imagen principal) */
        .thumb-slide.swiper-slide-thumb-active {
          opacity: 1;
          filter: none;
          border-color: #ccc; /* Borde gris para destacar la miniatura seleccionada */
        }
        /* Oculta flechas nativas de Swiper (si las vieras por duplicado) */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
