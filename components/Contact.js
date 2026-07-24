"use client";


import { useState } from "react";
import Logo_svg from "@/public/Logo_svg.svg"
import Button from "./Button";
import Image from "next/image";

export default function Contact(){
    const [copied, setCopied] = useState(false);
    
    const copyClipboard = async (x) => {
        await navigator.clipboard.writeText(x);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    
    return(
        <section>
            <h2>Contactanos</h2>
            <Image
                alt="Logo de Mobelia studio"
                src={Logo_svg}
            />
            <div>
                {/* Aqui tenemos que usar tailwind*/}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9302.940308438529!2d-75.59903624272462!3d6.262784231454736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1784926123428!5m2!1ses-419!2sco"
                    width={400}
                    height={300}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                />

                <span onClick={() => copyClipboard("jhondoe@gmail.com")}>Correo: {copied ? "Email Copiado" : "jhondoe@gmail.com"}</span>

                <a
                    href="https://wa.me/573043907335?text=Hola%20Mobelia%20Studio,%20quiero%20información."
                    target="_blank"
                    rel="noopener noreferrer"
                >WhatsApp: <span onClick={() => copyClipboard("3042907335")}>{copied ? "Telefono Copiado" : "3042907335"}</span></a>
            </div>

            <h3>Horario de atención</h3>

            <ul>
                <li>Lunes a Viernes: 8:00 a. m. – 8:00 p. m.</li>
                <li>Sábados: 9:00 a. m. – 4:00 p. m.</li>
                <li>Domingos y festivos: Cerrado</li>
            </ul>
            </section>
    );
}