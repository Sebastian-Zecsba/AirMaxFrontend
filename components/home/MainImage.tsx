import Image from 'next/image'
import Link from 'next/link'


export default function MainImage() {
  return (
    <section className="relative w-full h-[400px] sm:h-[600px] lg:h-[80vh] overflow-hidden">
      <Image
        src="/FrontImage.png"
        alt="Air Max Local"
        fill    
        style={{ objectFit: 'fill', objectPosition: 'center' }}
        priority 
      />


      <div className="absolute inset-0 bg-gray-500 opacity-60" />

      <div className="relative z-10 flex flex-col justify-center items-start h-full mx-auto lg:px-32 px-4 gap-3">
        <h1 className="text-white lg:text-6xl text-4xl font-bold">
          Optimización 
        </h1>
        <h2 className="text-white lg:text-6xl text-4xl font-bold">
          y rendimiento mediante 
        </h2>
        <h2 className="text-white lg:text-6xl text-4xl font-bold">
          sistemas neumáticos
        </h2>
        <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 lg:text-3xl text-xl font-mono cursor-pointer">
          <Link
            href={'/categories'}
          >
            PRODUCTOS
          </Link>
        </button>
      </div>
    </section>
  )
}
