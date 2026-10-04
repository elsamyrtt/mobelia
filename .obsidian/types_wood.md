# Tipos de madera

Catálogo abierto: puede contener las 12 variedades actuales y crecer sin límite fijo. No se crean registros ni valores técnicos hasta recibir datos verificados por Mobelia/proveedor.

## Ficha de una variedad

| Campo | Significado |
|---|---|
| `id` | ID estable, único e independiente del nombre comercial |
| `name` | Nombre comercial y, cuando se conozca, nombre botánico |
| `description` | Apariencia, uso previsto, limitaciones y notas del proveedor |
| `pricePercentage` | Recargo porcentual de material sobre el precio base del mueble, 0–100 % |
| `resistance.water` | Resistencia relativa al agua/lluvia |
| `resistance.humidity` | Resistencia relativa a humedad/absorción |
| `resistance.heat` | Resistencia relativa a calor |
| `resistance.uv` | Resistencia relativa a radiación solar/UV |

Los ratings de resistencia son enteros internos de **1 (baja) a 5 (alta)**. No son certificaciones, vida útil ni promesa de uso. La resistencia real depende de especie, secado, tratamiento, ensamblaje, recubrimiento, mantenimiento y exposición.

## Datos técnicos recomendados para el registro operativo

Además de los campos básicos de `Wood`, conservar ficha del proveedor, procedencia/cadena de custodia cuando esté disponible, tratamiento, acabado evaluado, método o norma de ensayo, fecha, responsable que aprobó la calificación y fecha de revisión. Estos metadatos no se deben omitir para afirmar aptitud exterior o uso con calor/agua.

No afirmar “impermeable”, “ignífugo”, “resistente a lluvia” o similar solo por un rating. La resistencia al fuego requiere certificación/ensayo específico; el rating de calor no equivale a clasificación ignífuga.

## Precio

`pricePercentage` es el porcentaje de recargo del material sobre `Product.basePrice`:

```text
precio con madera = redondear(precio base × (1 + porcentaje / 100))
```

Ejemplo ilustrativo: base COP 200.000 y recargo 15 % => COP 230.000. El porcentaje no es margen, impuesto ni descuento. Validar rangos 0–100 y guardar un snapshot de precio/porcentaje en la línea de la orden para preservar el histórico.

## Alta de una madera

1. Confirmar que no sea duplicada; asignar ID estable.
2. Capturar nombre, descripción, proveedor y evidencia.
3. Definir porcentaje con aprobación comercial.
4. Asignar ratings solo con fuente técnica o aprobación explícita.
5. Revisar claims comerciales, seguridad y aplicación prevista.
6. Publicar como activa; no borrar una madera usada en órdenes, solo archivarla.

## Enlaces

- Modelo: `../models/Wood.ts`
- Productos y relación: [[Base de datos]] / [[Esquema de datos]]
- Telas: [[types_fabric]]
- Muebles exteriores: [[outdoor]]
- Seguridad de datos y claims: [[Seguridad y privacidad]]
