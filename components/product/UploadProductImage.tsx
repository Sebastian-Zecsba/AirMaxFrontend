"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadImage } from "../../actions/upload-image-action";
import Image from "next/image";
import { getImagePath } from "@/utils";
import { toast } from "react-toastify";

export default function UploadProductImage({
  currentImage = [],
}: {
  currentImage?: string[];
}) {
  // Inicializamos el estado con las imágenes actuales (si hay)
  const [images, setImages] = useState<string[]>(currentImage);

  // Función para remover una imagen del arreglo
  const handleRemoveImage = (indexToRemove: number) => {
    setImages((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  // Función que maneja el drop de archivos
  const onDrop = useCallback(
    async (files: File[]) => {
      // Verificar que no excedamos 3 imágenes
      if (files.length + images.length > 3) {
        toast.error("Solo se permiten hasta 3 imágenes");
        return;
      }

      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));

      try {
        // Sube las imágenes al backend y recibe un arreglo de URLs
        const uploadedImages = await uploadImage(formData);
        // Agregar las nuevas imágenes al estado
        setImages((prev) => [...prev, ...uploadedImages]);
      } catch (error) {
        console.error("Error al subir imágenes:", error);
      }
    },
    [images]
  );

  // Configuración de react-dropzone
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    accept: {
      "image/jpeg": [".jpg"],
      "image/png": [".png"],
    },
    onDrop,
    maxFiles: 3, // Máximo de 3 archivos
  });

  return (
    <>
      <div className="space-y-1">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Imágenes del Producto (máximo 3)
        </label>
        <div
          {...getRootProps({
            className: `
              py-20 border-2 border-dashed text-center
              ${
                isDragActive
                  ? "border-gray-900 text-gray-900 bg-gray-200"
                  : "border-gray-400 text-gray-400 bg-white"
              }
              ${isDragReject ? "border-none bg-white" : "cursor-not-allowed"}
            `,
          })}
        >
          <input {...getInputProps()} />
          {isDragAccept && <p>Suelta las imágenes</p>}
          {isDragReject && <p>Archivo no válido</p>}
          {!isDragActive && <p>Arrastra y suelta hasta 3 imágenes aquí</p>}
        </div>
      </div>

      {/* Mostrar las imágenes subidas o actuales */}
      {images.length > 0 && (
        <div className="py-5 space-y-3">
          <p className="font-bold">Imágenes seleccionadas</p>
          <div className="flex space-x-4">
            {images.map((img, index) => (
              <div key={index} className="w-[150px] h-[150px] relative">
                <Image
                  src={getImagePath(img)}
                  alt={`Imagen ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
                {/* Botón para eliminar la imagen */}
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inputs ocultos para enviar las imágenes al backend */}
      {images.map((img, index) => (
        <input
          key={index}
          type="hidden"
          name={`images[${index}]`}
          value={img}
        />
      ))}
    </>
  );
}
