# Productos

Índice del catálogo Mobelia. El objetivo es manejar muchos productos, variantes y pedidos sin codificar cada pieza en la interfaz ni fijar un máximo de registros.

## Publicación de una ficha

1. Crear producto y SKU no reutilizable.
2. Asignar una categoría válida de [[types_furniture]].
3. Completar descripción, fotos autorizadas, dimensiones y advertencias de montaje/uso.
4. Configurar variantes y materiales compatibles.
5. Validar precio base, recargos, moneda y tratamiento fiscal con administración.
6. Registrar existencia o plazo de fabricación por variante.
7. Confirmar política de entrega, garantía y cuidado.
8. Revisar accesibilidad, SEO, stock y vista de cliente antes de publicar.

## Qué es producto y qué es variante

- Producto: diseño/modelo comercial común, con URL y contenido.
- Variante: opción comprable concreta que afecta SKU, precio, stock o plazo (p. ej. dimensiones, madera, tela o acabado).
- Configuración a medida: se cotiza; no prometer precio/fecha automáticos hasta que el flujo de cotización soporte esas reglas.
- Categoría, materiales y medidas son datos; no duplicar el producto por cada opción si solo cambia una variante.

## Políticas

- Búsqueda y paginación en servidor al crecer el catálogo.
- No borrar productos referenciados en órdenes; archivarlos.
- Guardar snapshot del nombre, SKU, opciones y precio en cada compra.
- Imágenes se sirven desde almacenamiento de objetos/CDN; en PostgreSQL guardar metadatos y clave/URL protegida.
- La existencia se consulta en el servidor y se reserva atómicamente al iniciar una compra.

## Familias

[[seatings]] · [[Tablas]] · [[storage]] · [[bedroom]] · [[office]] · [[outdoor]] · [[display]] · [[accents]]

## Enlaces

- [[Base de datos]] y [[Esquema de datos]]
- [[Inventario]]
- [[Pedidos y cotizaciones]]
- Modelo de aplicación: `../models/Product.ts`
