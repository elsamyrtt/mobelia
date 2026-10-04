# Pedidos y cotizaciones

## Tipos de compra

1. **Producto estándar:** una o más variantes del catálogo con precio y disponibilidad del servidor.
2. **Producto configurable:** opciones permitidas de material/acabado; validar combinaciones y recargos autorizados.
3. **A medida/proyecto:** solicitud con medidas, fotos opcionales y contacto; Mobelia revisa y emite una cotización versionada que el cliente acepta antes de crear/confirmar la orden.
4. **Volumen/empresa:** cotización comercial y coordinación de varios destinos/instalación; roles de comprador y aprobador empresarial no están implementados.

No mezclar una estimación visible en la calculadora actual con una cotización vinculante.

## Ciclo estándar

```text
carrito → checkout iniciado → pago pendiente → pagado/confirmado
          ↘ vencido/cancelado
confirmado → en preparación/fabricación → listo para despacho
           → despachado → entregado
excepción: requiere acción / devolución / reembolso
```

Estados internos y nombres finales se deben acordar con operación. Toda transición lleva actor, fecha, origen y motivo; el cliente solo recibe mensajes adecuados, no notas internas.

## Cotización

1. Capturar producto/medidas/materiales, cantidad, destino y datos mínimos de contacto.
2. Emitir un caso rastreable con acuse y canal de seguimiento.
3. Personal de Mobelia determina factibilidad, precio desglosado, impuestos/costos validados, vigencia y plazo estimado.
4. Guardar revisión inmutable; una modificación genera una nueva versión.
5. Cliente acepta una versión vigente; convertir a orden conservando la cotización aceptada y generando snapshots.
6. Vencer/rechazar/cancelar con motivo; proteger archivos subidos y limitar tipos/tamaño.

## Orden confirmada

- Crear orden/líneas con precio, moneda, configuración, impuestos/descuento/envío y datos de entrega snapshot.
- Revalidar precio, stock, cupón y dirección del lado servidor al checkout.
- Reservar inventario transaccionalmente; no permitir sobreventa concurrente.
- La orden no se considera pagada por una redirección del navegador: verificar respuesta/webhook autenticado e idempotente del PSP.
- Toda edición post-confirmación crea evento/auditoría. Un reembolso/cancelación no borra la orden ni el movimiento financiero.

## Experiencia del cliente

Acuse por email, número público no secuencial, estado consultable con autenticación o token restringido, tiempos realistas y canal para cambios. No exponer dirección, email, notas internas o identificadores de proveedor en URL pública.

## Enlaces

[[Clientes y cuentas]] · [[Inventario]] · [[Pagos y envíos]] · [[Esquema de datos]] · [[Integraciones]]
