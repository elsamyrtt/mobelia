import Image from "next/image";
import Logo_svg from "@/public/Logo_svg.svg";

export default function Process() {
  return (
    <section>
      <h2>Proceso de trabajo</h2>

      <p>
        Cada proyecto sigue un proceso cuidadosamente planificado para garantizar
        calidad, funcionalidad y acabados excepcionales.
      </p>

      <div>
        <article>
          <span>01</span>

          <Image
            src={Logo_svg}
            alt="Selección de materiales"
          />

          <h3>Selección de materiales</h3>

          <p>
            Elegimos maderas y materiales de alta calidad para garantizar
            resistencia, durabilidad y una excelente apariencia.
          </p>
        </article>

        <article>
          <span>02</span>

          <Image
            src={Logo_svg}
            alt="Diseño del proyecto"
          />

          <h3>Diseño</h3>

          <p>
            Creamos propuestas personalizadas según las necesidades, el espacio
            y el estilo de cada cliente.
          </p>
        </article>

        <article>
          <span>03</span>

          <Image
            src={Logo_svg}
            alt="Fabricación del mobiliario"
          />

          <h3>Fabricación</h3>

          <p>
            Fabricamos cada pieza con precisión, cuidando cada detalle durante
            todo el proceso de producción.
          </p>
        </article>

        <article>
          <span>04</span>

          <Image
            src={Logo_svg}
            alt="Instalación del proyecto"
          />

          <h3>Instalación</h3>

          <p>
            Instalamos el mobiliario y verificamos que todo cumpla con nuestros
            estándares de calidad antes de entregar el proyecto.
          </p>
        </article>
      </div>
    </section>
  );
}