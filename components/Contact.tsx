import Image from "next/image";
import Logo_svg from "@/public/Logo_svg.svg";
import CopyToClipboardButton from "./CopyToClipboardButton";

const phone = "3043907335";
const whatsappUrl = "https://wa.me/573043907335?text=Hola%20Mobelia%20Studio,%20quiero%20información.";
const openingHours = [
    "Lunes a Viernes: 8:00 a. m. – 8:00 p. m.",
    "Sábados: 9:00 a. m. – 4:00 p. m.",
    "Domingos y festivos: Cerrado",
];

export default function Contact() {
    return (
        <section aria-labelledby="contact-title" id="contacto">
            <h2 id="contact-title">Contacto</h2>
            <address>
                <p>Correo: pendiente de confirmar.</p>
                <p>
                    Teléfono: <a href={`tel:+57${phone}`}>{phone}</a>.
                </p>
                <p>
                    WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        abrir conversación
                    </a>
                </p>
                <p>
                    Instagram: <a href="https://www.instagram.com/mobeliastudio/" target="_blank" rel="noopener noreferrer">
                        @mobeliastudio
                    </a>
                </p>
                <CopyToClipboardButton value={phone} label="teléfono" />
            </address>
            <figure>
                <Image alt="Logotipo de Mobelia Studio" src={Logo_svg} />
                <figcaption>Mobelia Studio</figcaption>
            </figure>
            <section aria-labelledby="location-title">
                <h3 id="location-title">Ubicación</h3>
                <iframe
                    title="Ubicación de Mobelia Studio en Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9302.940308438529!2d-75.59903624272462!3d6.262784231454736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1784926123428!5m2!1ses-419!2sco"
                    width={400}
                    height={300}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            </section>
            <section aria-labelledby="hours-title">
                <h3 id="hours-title">Horario de atención</h3>
                <ul>
                    {openingHours.map((hours) => <li key={hours}>{hours}</li>)}
                </ul>
            </section>
        </section>
    );
}
