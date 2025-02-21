export default function Contact() {
  return (
    <main>
        <section className="flex flex-col sm:flex-row sm:justify-evenly lg:w-[85%] sm:w-[100%] py-4 px-4 m-auto">
            <div className='flex flex-col items-center justify-center sm:items-start gap-6 pb-10'>
                <h3 className='uppercase text-[#1A3672] font-bold text-center sm:text-left '>Servicio al cliente</h3>
                <h2 className='font-bold text-2xl text-center sm:text-4xl sm:text-left lg:w-[60%]'>¿Tienes alguna inquietud?</h2>
                <p className='text-center font-bold sm:text-2xl sm:text-left lg:w-[60%]'>Contactanos con nosotros para brintarte la mejor información posible</p>
                <a 
                    href='https://wa.link/kn6qml' 
                    className='color-blue text-white p-4 rounded-2xl'
                    target="_blank"
                >Lamanos al 350 6092529</a>
                <p className="text-center font-bold sm:text-2xl sm:text-left">O nos puedes escribir por correo</p>
                <button className='color-blue text-white p-4 rounded-2xl'>
                    airmaxsas.pneumatic@gmail.com
                </button>
                <p className='text-center font-bold sm:text-2xl sm:text-left lg:w-[60%]'>Tambien nos puedes visitar y aclara tus dudas</p>
            </div>
            <div className='sm:w-1/2 flex justify-center items-center'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.3169563035686!2d-74.08894797648483!3d4.610245442129054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f01e10acdf3%3A0xaa6d4c990942ae79!2sAirmax%20pneumatic%20equipament%20sas!5e0!3m2!1ses!2sco!4v1738598873702!5m2!1ses!2sco"
                className="w-full max-w-[34rem] min-w-[14rem] h-96 rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
      </section>
    </main>
  )
}
