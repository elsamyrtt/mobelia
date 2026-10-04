# Categorías de muebles

Las categorías son una taxonomía de navegación, no una tabla de inventario. Cada producto pertenece a una categoría principal y puede llevar etiquetas adicionales. Los identificadores en inglés son valores estables para datos/API; los nombres en español son de presentación.

| ID | Nombre | Incluye | Nota |
|---|---|---|---|
| `seatings` | Asientos | sillas, sofás, bancos, butacas | [[seatings]] |
| `tables` | Mesas | mesas de comedor, auxiliares, escritorios | [[Tablas]] |
| `storage` | Almacenamiento | estanterías, armarios, cómodas, módulos | [[storage]] |
| `bedroom` | Dormitorio | camas, mesas de noche, cabeceros | [[bedroom]] |
| `office` | Oficina | escritorios, sillas de oficina, archivadores | [[office]] |
| `outdoor` | Exterior | muebles diseñados y acabados para intemperie | [[outdoor]] |
| `display` | Exhibición | vitrinas, exhibidores y muebles comerciales | [[display]] |
| `accents` | Complementos | piezas auxiliares y decoración mobiliaria | [[accents]] |

No inferir resistencia exterior por pertenecer a `outdoor`: deben existir datos técnicos del material, tratamiento y acabado. Véanse [[types_wood]] y [[types_fabric]].

## Reglas de catálogo

- Una categoría principal por producto; las categorías no sustituyen variantes, materiales ni etiquetas.
- No crear categorías por cada tamaño/color. Representar las opciones comprables con variantes.
- Los nombres pueden cambiar; los IDs persistidos no deben renombrarse sin una migración.
- Agregar nuevas familias a este índice, al tipo `ProductCategory` y al filtro/búsqueda en un cambio coordinado.
- Evitar categorías vacías como destino final: cada ficha publicada debe tener fotos, descripción, precio validado y disponibilidad coherente.

## Enlaces

- Índice general: [[Inicio]]
- Productos: [[products]]
- Esquema/relaciones: [[Base de datos]] y [[Esquema de datos]]
- Plan de publicación: [[Catálogo de productos]]
