# Clientes y cuentas

## Modelo

Mobelia es una tienda, no una plataforma multiempresa. Una cuenta representa a un comprador; no existe aislamiento por tenant/tienda. El catálogo es público; perfil, direcciones, carrito y órdenes requieren comprobar propiedad en cada operación.

Soportar:

- Navegación y cotización inicial sin cuenta cuando sea viable.
- Cuenta opcional para historial, direcciones y seguimiento.
- Checkout invitado con contacto verificable y token aleatorio limitado a una orden.
- Compra de empresa/persona jurídica mediante datos de facturación, sin conceder por ello permisos administrativos.
- Varios pedidos/direcciones por comprador; consentimiento y preferencias de comunicación separados.

## Identidad y autorización

- Preferir proveedor de identidad mantenido; no implementar almacenamiento casero de contraseñas.
- Vincular `customers.id` al subject estable del proveedor, no al email mutable.
- Staff de Mobelia usa autenticación reforzada/MFA y roles mínimos. Separar permisos de soporte, catálogo, inventario, finanzas y administración.
- Autorizar en el servidor cada acceso a direcciones, carritos, quotes, pagos y órdenes: la UI y un UUID difícil de adivinar no son control de acceso.
- Limitar recuperación de cuenta, login y verificación contra enumeración y abuso.

## Datos personales

Guardar solo contacto y dirección requeridos para la operación. Separar direcciones guardadas de snapshots históricos requeridos para facturación/entrega. Definir retención y borrado/anonimización conforme a obligaciones legales. No usar datos de pedido en analítica pública.

El responsable debe aprobar aviso de privacidad, base legal, consentimiento, canal para titulares y tratamiento con proveedores según legislación colombiana aplicable. No asumir plazos legales en este documento.

## Tablas y relación

`customers` → `customer_addresses`, `carts`, `quotes`, `customer_orders`. Detalle en [[Esquema de datos]]. Flujos de compra: [[Pedidos y cotizaciones]]. Controles: [[Seguridad y privacidad]].

## Enlaces

[[Inicio]] · [[Arquitectura]] · [[Pagos y envíos]] · [[Operación y despliegue]]
