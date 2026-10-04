# SEO Mobelia

## Estado

La web actualmente implementa solo la portada (`/`). No hay páginas de categoría/producto, búsqueda, sitemap de URLs comerciales, dominio público documentado ni contenido de productos definitivo. El metadata actual describe muebles para hogares, hoteles y restaurantes basándose en el contenido y notas de Mobelia.

Técnico implementado en Next.js:

- `app/layout.tsx`: idioma español, title/description, Open Graph y Twitter.
- `app/page.tsx`: canonical de la portada y URL social cuando existe el dominio configurado; JSON-LD `Organization`/`WebSite` con nombre e Instagram confirmados.
- `app/robots.ts`: permite rastreo público e incluye el sitemap solo si `SITE_URL` está configurado.
- `app/sitemap.xml/route.ts`: sitemap dinámico con las rutas indexables implementadas (por ahora, `/`); responde HTTP 503 con instrucciones si falta `SITE_URL`.
- `SITE_URL`: origen HTTPS canónico, debe estar definido tanto al construir como al ejecutar en producción.
- `SEO_INDEXING_ENABLED=true`: habilitar solo para el dominio de producción ya confirmado. Si falta, la portada lleva `noindex,follow` y el sitemap no se anuncia.

Todavía no están configurados/verificados: dominio canonical, Search Console/Bing Webmaster Tools, analítica/consentimiento, imagen social real, favicon final ni datos de negocio local confirmados.

## Antes de publicar

1. Confirmar dominio y variante canónica (con/sin `www`), configurar DNS/TLS y `SITE_URL` en build + runtime; establecer `SEO_INDEXING_ENABLED=true` solo para ese entorno.
2. Verificar que `/`, `/robots.txt` y `/sitemap.xml` respondan en el dominio canónico; canonical y sitemap deben usar exactamente esa variante HTTPS.
3. Enviar sitemap a Google Search Console y Bing Webmaster Tools; inspeccionar la portada, renderizado, canonical elegida y cobertura.
4. Sustituir productos, descripciones, precios, materiales e imágenes de demostración por información aprobada. No indexar fichas sin contenido útil/disponibilidad verificada.
5. No mostrar testimonios Lorem ipsum como reseñas reales. Incorporar opiniones solo con texto/nombre autorizados; no usar Review/AggregateRating schema para reseñas ficticias.
6. Confirmar nombre, teléfono, correo, dirección y horarios del negocio antes de usar `LocalBusiness`, `PostalAddress`, `GeoCoordinates` u `OpeningHoursSpecification`. Hoy solo hay Instagram y otros datos visibles pendientes de verificación.
7. Crear imagen Open Graph/Twitter original con marca e imágenes autorizadas cuando exista un activo aprobado; actualmente el SVG público es un círculo genérico, no una pieza social adecuada.
8. Revisar title/description únicos, headings y contenido útil por cada nueva URL. Evitar páginas vacías, duplicadas o creadas para repetir keywords.
9. Medir Core Web Vitals en móvil y campo; optimizar fotografías reales, fuentes y el iframe externo de mapas según mediciones.
10. Probar enlaces internos, 404/redirects, sitemap, robots, metadatos sociales y structured data después de cada publicación.

## Arquitectura de búsquedas y contenido

Prioridad de temas basada en contenido actual, no en volúmenes externos no investigados:

- Muebles para hogares, hoteles y restaurantes.
- Muebles a medida y proyectos de interiorismo (solo en el alcance real de Mobelia).
- Categorías futuras: asientos, mesas, almacenamiento, dormitorio, oficina, exterior, exhibición y complementos.

Las categorías deben tener inventario/contenido real antes de publicarse. Cada futura ficha indexable debería responder intención comercial con especificaciones, dimensiones, materiales, opciones, precio/estado cuando sea publicable, envío/garantía y enlaces relacionados. Los detalles de negocio deben salir de [[Catálogo de productos]], [[types_wood]] y [[types_fabric]].

No se añadieron `meta keywords` porque no son un factor de ranking útil; no existe una promesa de primera posición. SEO ayuda a rastreo, comprensión y experiencia, pero el posicionamiento depende también de competencia, autoridad, demanda y contenido útil.

## Datos estructurados

Actualmente solo es razonable `Organization`/`WebSite` para nombre y perfil social verificables. No se declara `LocalBusiness` porque no hay ubicación oficial confirmada; no se declaran `Product`/`Offer` hasta que precio y disponibilidad reales estén visibles y respaldados; no se declara `Review` para el Lorem ipsum. Cada schema debe corresponder a contenido visible y actualizado.

[[Inicio]] · [[Arquitectura]] · [[Catálogo de productos]] · [[Seguridad y privacidad]]
