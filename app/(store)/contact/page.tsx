import Maps from "../../../components/ui/Maps";

export default function Contact() {
  return (
    <main>
        <section className="flex flex-col sm:flex-row sm:justify-evenly lg:w-[85%] sm:w-[100%] py-4 px-4 m-auto">
            <div className='flex flex-col items-center justify-center sm:items-start gap-6 pb-10'>
                <h3 className='uppercase text-[#1A3672] font-bold text-center sm:text-left '>Servicio al cliente</h3>
                <h2 className='font-bold text-2xl text-center sm:text-4xl sm:text-left lg:w-[60%]'>¿Tienes alguna inquietud?</h2>
                <p className='text-center font-bold sm:text-2xl sm:text-left lg:w-[60%]'>Contactanos con nosotros para brintarte la mejor información posible</p>
                <a 
                    href='https://wa.link/0h17sg' 
                    className='color-blue text-white p-4 rounded-2xl'
                    target="_blank"
                >Lamanos al 350 6092529</a>
                <p className="text-center font-bold sm:text-2xl sm:text-left">O nos puedes escribir por correo</p>
                <button className='color-blue text-white p-4 rounded-2xl'>
                    airmaxsas.pneumatic@gmail.com
                </button>
                <p className='text-center font-bold sm:text-2xl sm:text-left lg:w-[60%]'>Tambien nos puedes visitar y aclara tus dudas</p>
            </div>
            <Maps />
      </section>
    </main>
  )
}
