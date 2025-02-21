import MainImage from '../../../components/home/MainImage'
import CardProducts from '../../../components/ui/CardProducts'

export default function Home() {
  return (
    <>
      <aside>
        <MainImage />
      </aside>

      <aside className='mt-16'>
        <h1 className='text-4xl text-center font-bold'>Productos mas vendidos</h1>
        <CardProducts />
      </aside>

      <article className='color-red mt-16 p-4'>
        <h2 className='text-white uppercase text-3xl lg:text-4xl font-bold text-center mt-3 mb-5 mx-auto'>Soporte y Mantenimiento</h2>
        <p className='text-white text-center text-lg lg:text-2xl lg:w-[55%] sm:w-[100%] mb-7 mx-auto'>El mantenimiento adecuado es clave para prolongar la vida útil de tus equipos neumáticos y garantizar un rendimiento excepcional. En AIRMAX S.A.S. te ofrecemos un servicio completo de mantenimiento preventivo y correctivo, con el objetivo de evitar problemas antes de que ocurran y resolver cualquier incidencia de manera rápida y eficiente. Confía en nuestros expertos para mantener tus equipos en excelente estado y optimizar tus operaciones industriales.</p>
      </article>

      <section className="flex flex-col sm:flex-row sm:justify-evenly lg:w-[85%] sm:w-[100%] py-32 px-4 m-auto">
        <div className='flex flex-col items-center justify-center sm:items-start gap-6 pb-10'>
            <h3 className='uppercase text-[#1A3672] font-bold text-center sm:text-left '>Servicio al cliente</h3>
            <h2 className='font-bold text-2xl text-center sm:text-4xl sm:text-left lg:w-[60%]'>¿Tienes alguna inquietud?</h2>
            <p className='text-center font-bold sm:text-2xl sm:text-left lg:w-[60%]'>Contactanos con nosotros para brintarte la mejor información posible</p>
            <button className='color-blue text-white p-4 rounded-2xl'>
              Lamanos al 350 6092529
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
    </>
  )
}
