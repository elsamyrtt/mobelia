import Image from "next/image";
import Logo_svg from "@/public/Logo_svg.svg"
import Button from "./Button";
import Contact from "./Contact";

export default function About() {
    return (
        <section>
            <Contact/>
            <div>
                <h2>Mobelia Studio ©</h2>

                <h3>¿Quiénes somos?</h3>
                <p>
                    En Mobelia Studio diseñamos espacios y mobiliario que combinan
                    funcionalidad, estética y personalidad. Creemos que cada proyecto
                    debe reflejar el estilo y las necesidades de quienes lo habitan.
                </p>

                <h3>¿Qué hacemos?</h3>
                <p>
                    Diseñamos muebles a medida, desarrollamos proyectos de interiorismo
                    y ofrecemos asesoría para transformar hogares, oficinas y espacios
                    comerciales.
                </p>

                <h3>Nuestra filosofía</h3>
                <p>
                    Cada detalle importa. Trabajamos con materiales de calidad,
                    procesos cuidadosamente seleccionados y un diseño atemporal que
                    perdure con el paso del tiempo.
                </p>
            </div>  
        </section>
    );
}