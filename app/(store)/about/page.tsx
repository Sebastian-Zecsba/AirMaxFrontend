import Image from "next/image"

const cards = [
  {
    title: "Mision",
    image: "/vision.png",
    description: "Nuestro objetivo es proveer a clientes y socios estratégicos productos de alta calidad que aseguren la continuidad de sus procesos productivos, utilizando componentes de vanguardia e innovadores para facilitar un óptimo desarrollo y mantenimiento de sus operaciones empresariales."
  },
  {
    title: "Vision",
    image: "/mision.png",
    description: "Aspiramos a impulsar a la industria colombiana, integrándola con las tecnologías más avanzadas del sector industrial, para fomentar el desarrollo interno de sus productos y mantener su competitividad frente a las industrias de primer nivel mundial."
  }
]

export default function About() {
  return (
    <main className="lg:w-[85%] sm:w-[100%] m-auto px-4 py-8">
        <section>
          <h1 className="font-bold text-center text-2xl pb-8 lg:text-4xl">CONOCE UN POCO MAS SOBRE NOSOTROS</h1>
          <p className="font-bold text-center lg:text-xl">Especialistas en Repuestos Neumáticos para Maquinaria Industrial
            En AIRMAX S.A.S. somos una empresa líder dedicada a proporcionar soluciones de primera calidad en repuestos neumáticos para maquinaria industrial. Con una vasta experiencia en el sector, nos enorgullecemos de ser un referente en el mercado, brindando a nuestros clientes productos de alto rendimiento y un servicio excepcional.
             
            Si buscas repuestos neumáticos confiables, soluciones personalizadas y un equipo de expertos que esté siempre dispuesto a apoyarte, has llegado al lugar adecuado. ¡Bienvenido a
            AIRMAX S.A.S</p>
        </section>
        <aside className="flex gap-7 lg:gap-28 sm:gap-16 justify-center items-center flex-wrap mt-10">
          {cards.map(item => (
            <div key={item.title} className="color-blue w-full p-5 max-w-[26rem] min-h-[35rem] rounded-2xl">
                  <h2 className="font-bold text-white text-center text-4xl">{item.title}</h2>
                  <Image 
                    src={item.image}
                    alt={item.title}
                    className="mx-auto my-8"
                    width={200}
                    height={200}
                  />
                  <p className="text-white sm:text-xl">{item.description}</p>
            </div>
          ))}
        </aside>
    </main>
  )
}
