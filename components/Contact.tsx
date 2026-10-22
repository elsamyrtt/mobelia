import Image from "next/image";
import Logo_svg from "@/public/Logo_svg.svg";
import CopyToClipboardButton from "./CopyToClipboardButton";
import { businessEmail, businessInstagram, businessPhoneNational } from "@/lib/business";
import { buildWhatsAppMessageUrl } from "@/lib/quote-message";

const phone = businessPhoneNational;
const whatsappUrl = buildWhatsAppMessageUrl("Hola Mobelia Studio, quiero información.");
const openingHours = [
    "Lunes a Viernes: 7:30 a. m. – 8:00 p. m.",
    "Sábados: 9:00 a. m. – 3:00 p. m.",
    "Domingos y festivos: 10:00 a. m. – 2:00 p. m.",
];

export default function Contact() {
    return (
        <section
            aria-labelledby="contact-title"
            id="contacto"
            className="bg-[var(--color-ghost-white)] px-5 py-16 text-carbon-black sm:px-6 sm:py-20 lg:px-8 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">
                <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
                    <p className="section-kicker">
                        Estamos para ayudarte
                    </p>
                    <h2 id="contact-title" className="section-heading">
                        Contacto
                    </h2>
                    <p className="section-copy mx-auto">
                        Cuéntanos sobre tu espacio y conversemos sobre cómo podemos acompañar tu proyecto.
                    </p>
                    <div aria-hidden="true" className="section-divider mx-auto" />
                </header>

                <div className="grid gap-7 rounded-3xl border border-carbon-black/8 bg-white p-5 shadow-[0_16px_48px_rgba(28,22,17,0.06)] sm:gap-8 sm:p-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:rounded-4xl lg:p-10">
                    <div className="grid content-start gap-5">
                        <section className="p-1">
                            <h3 className="text-2xl font-medium tracking-tight">Hablemos de tu proyecto</h3>
                            <address className="mt-6 space-y-5 not-italic">
                                <p className="m-0">
                                    <span className="block text-xs font-medium uppercase tracking-[0.16em] text-carbon-black/55">Correo</span>
                                    <a className="mt-1 inline-flex min-h-11 items-center break-all text-carbon-black/80 underline decoration-carbon-black/20 underline-offset-4 hover:decoration-brass" href={`mailto:${businessEmail}`}>{businessEmail}</a>
                                </p>
                                <p className="m-0">
                                    <span className="block text-xs font-medium uppercase tracking-[0.16em] text-carbon-black/55">Teléfono</span>
                                    <a className="mt-1 inline-flex min-h-11 items-center text-lg text-carbon-black underline decoration-carbon-black/30 underline-offset-4 transition-colors hover:text-[#8a6533] hover:decoration-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass" href={`tel:+57${phone}`}>
                                        {phone}
                                    </a>
                                </p>
                                <p className="m-0">
                                    <span className="block text-xs font-medium uppercase tracking-[0.16em] text-carbon-black/55">WhatsApp</span>
                                    {whatsappUrl && (
                                        <a className="mt-1 inline-flex min-h-11 items-center text-carbon-black underline decoration-carbon-black/30 underline-offset-4 transition-colors hover:text-[#8a6533] hover:decoration-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            Abrir conversación
                                        </a>
                                    )}
                                </p>
                                <p className="m-0">
                                    <span className="block text-xs font-medium uppercase tracking-[0.16em] text-carbon-black/55">Instagram</span>
                                    <a className="mt-1 inline-flex min-h-11 items-center text-carbon-black underline decoration-carbon-black/30 underline-offset-4 transition-colors hover:text-[#8a6533] hover:decoration-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass" href={businessInstagram} target="_blank" rel="noopener noreferrer">
                                        @mobeliastudio
                                    </a>
                                </p>
                            </address>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <CopyToClipboardButton
                                    value={phone}
                                    label="teléfono"
                                    className="inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-carbon-black underline decoration-carbon-black/25 underline-offset-4 transition-colors hover:text-[#8a6533] hover:decoration-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass motion-reduce:transition-none"
                                />
                            </div>
                        </section>

                        <section aria-labelledby="hours-title" className="border-t border-carbon-black/10 pt-6">
                            <h3 id="hours-title" className="text-2xl font-medium tracking-tight">Horario de atención</h3>
                            <ul className="mt-5 space-y-3 p-0 text-sm leading-relaxed text-carbon-black/75">
                                {openingHours.map((hours) => (
                                    <li key={hours} className="flex gap-3">
                                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" />
                                        {hours}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="grid gap-5">
                        <figure className="flex items-center gap-5 py-2">
                            <span className="flex size-16 shrink-0 items-center justify-center p-2">
                                <Image className="size-full object-contain" alt="Logotipo de Mobelia Studio" src={Logo_svg} />
                            </span>
                            <figcaption>
                                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-carbon-black/55">Diseño para vivirlo</span>
                                <span className="mt-1 block text-2xl font-semibold tracking-[-0.04em] text-carbon-black">Mobelia Studio</span>
                            </figcaption>
                        </figure>

                        <section aria-labelledby="location-title" className="overflow-hidden border-t border-carbon-black/10 pt-6">
                            <div className="pb-5">
                                <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-carbon-black/55">Encuéntranos</p>
                                <h3 id="location-title" className="text-2xl font-medium tracking-tight">Ubicación</h3>
                            </div>
                            <a
                                className="inline-flex min-h-12 items-center underline decoration-carbon-black/25 underline-offset-4 transition-colors hover:text-[#8a6533] hover:decoration-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
                                href="https://www.google.com/maps?q=6.262784,-75.599036"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Abrir ubicación en Google Maps
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
