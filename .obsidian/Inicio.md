# Mobelia · documentación del negocio y del sistema

Vault de referencia para el catálogo Mobelia, su operación y la arquitectura objetivo de comercio electrónico.

> [!warning] Estado del producto
> La aplicación en el repositorio es un prototipo Next.js. El selector/calculadora usa productos de demostración; no guarda clientes, pedidos, inventario ni pagos. Las notas de PostgreSQL describen una arquitectura futura aprobada como dirección, no servicios desplegados ni capacidades disponibles hoy.

## Empezar aquí

1. [[Arquitectura]] — situación actual, arquitectura destino y crecimiento.
2. [[Decisiones de arquitectura]] — decisiones confirmadas y pendientes antes de implementar.
3. [[Base de datos]] — persistencia objetivo y mapa de tablas.
4. [[Esquema de datos]] — relaciones, restricciones, índices y migraciones.
5. [[Catálogo de productos]] — cómo administrar productos, variantes y publicación.
6. [[Clientes y cuentas]] — compradores, cuentas, direcciones y privacidad.
7. [[Pedidos y cotizaciones]] — compra estándar y mobiliario personalizado.
8. [[Inventario]] — existencias, reservas y fabricación.
9. [[Pagos y envíos]] — proveedor de pago y ciclo de entrega.
10. [[Seguridad y privacidad]] — controles, información personal y cumplimiento.
11. [[Operación y despliegue]] — ambientes, observabilidad, copias y recuperación.
12. [[Integraciones]] — contratos con servicios externos.
13. [[SEO]] — estado técnico, contenido y checklist de publicación.

## Catálogo Mobelia

- [[types_furniture]] — taxonomía común.
- [[seatings]] · [[Tablas]] · [[storage]] · [[bedroom]] · [[office]] · [[outdoor]] · [[display]] · [[accents]]
- [[types_wood]] · [[types_fabric]] — materiales y reglas para afirmaciones de resistencia.
- [[products]] — índice y proceso de alta.

## Convenciones

- Notas y contenido operativo en español; nombres de campos/IDs técnicos estables en inglés.
- Una nota de categoría describe reglas del catálogo, no existencias o productos concretos.
- No inventar especies, precios, ratings, certificaciones, impuestos, plazos ni garantías. Marcar pendientes hasta obtener datos de Mobelia/proveedor.
- Toda relación debe tener enlace interno y, cuando ya exista, referencia al modelo fuente.
- Separar siempre **implementado**, **decidido** y **propuesto/pendiente**.
