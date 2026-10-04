# Tipos de tela

Catálogo extensible de telas y tapizados. No hay un número máximo de referencias. Una tela no debe considerarse apta para exterior, fácil de limpiar o resistente al fuego sin respaldo técnico.

## Datos recomendados

- ID estable, SKU/código de proveedor y nombre comercial.
- Proveedor, colección, composición, color y textura.
- Descripción, fotografías autorizadas y disponibilidad/lead time.
- Recargo o ajuste de precio, con unidad y moneda claramente definidos.
- Ancho/consumo mínimo para fabricación y compatibilidad con productos.
- Instrucciones de limpieza y mantenimiento.
- Resultados documentados de abrasión, pilling, solidez del color, humedad y UV cuando existan.
- Método/norma, valor, fecha, laboratorio/proveedor y aprobador de cada resultado.
- Clasificación de fuego solo con certificación aplicable y vigente.
- Estado: en evaluación, activo, agotado o archivado.

Los ensayos pueden usar unidades y escalas diferentes: guardar resultado, unidad y norma como evidencia, no reducir datos externos a un rating universal sin una política aprobada. No almacenar credenciales ni datos personales del proveedor innecesarios.

## Relación con productos

Un producto puede permitir cero, una o varias telas; una tela puede estar disponible para muchos productos. Registrar compatibilidad y ajuste de precio por combinación de variante/material. `Product.fabricId` en el modelo TypeScript actual es un identificador opcional simplificado; el objetivo relacional se describe en [[Esquema de datos]].

## Proceso de alta

Verificar muestra, código del proveedor, coste, stock/lead time y claims antes de habilitarla para compra. Retirar del selector una referencia agotada sin cambiar órdenes pasadas.

## Enlaces

- [[types_wood]]
- [[Base de datos]]
- [[Catálogo de productos]]
- [[Seguridad y privacidad]]
