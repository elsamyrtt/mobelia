const testimonials = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" id="testimonios">
      <h2 id="testimonials-title">Testimonios</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reemplaza este
        contenido de ejemplo por opiniones reales publicadas con autorización.
      </p>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <blockquote>
              <p>{testimonial}</p>
            </blockquote>
            <p>Autor de ejemplo</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
