# Inventario y fabricación

## Fuente de verdad

Controlar unidades por variante/SKU. Evitar mantener un stock distinto en producto, carrito y pantalla. El saldo se obtiene de movimientos/reservas según política; si se mantiene un saldo materializado, se reconcilia con el libro auditable.

## Movimientos

Tipos sugeridos: recepción, ajuste con motivo, reserva, liberación, despacho, devolución inspeccionada, daño y consumo de material. Registrar usuario/sistema, referencia (orden/recepción), fecha y variación. No editar ni borrar movimientos confirmados: generar reverso.

## Disponibilidad

- Distinguir `disponible`, `reservado`, `en fabricación`, `dañado` y `descontinuado`.
- Una reserva tiene vencimiento; la expiración libera inventario de forma idempotente.
- Checkout reserva/crea orden en transacción para evitar vender dos veces la última unidad.
- Devoluciones regresan a disponible solo después de inspección.
- Sincronizar stock entre inventario y catálogo; no confiar en stock enviado desde cliente.

## Muebles fabricados bajo pedido

Separar stock de terminado de capacidad/lead time de fabricación. Registrar orden de producción, materiales requeridos, consumos, merma y fecha estimada si Mobelia decide adoptar esa operación. No publicar promesa automática de entrega hasta tener reglas validadas.

## Escalabilidad

Índice por SKU/variante y fecha; evitar escaneo de todos los movimientos para cada vista mediante saldo derivado/transaccional. Reconciliación periódica, alertas por stock negativo/inconsistencia y pruebas de concurrencia al reservar.

## Enlaces

[[Esquema de datos]] · [[Pedidos y cotizaciones]] · [[Catálogo de productos]] · [[Operación y despliegue]]
