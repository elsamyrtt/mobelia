# Pagos y envíos

## Pagos

Proveedor aún por seleccionar. Crear adaptador de proveedor con operaciones de crear intención, consultar, cancelar y reembolsar, además de verificación de webhook. No acoplar estados internos a nombres de un PSP.

- El PSP hospeda/captura tarjeta; Mobelia no almacena PAN completo, CVV, PIN ni credenciales financieras.
- Guardar solo referencia/token permitido por PSP, estado, moneda, importe, timestamps y datos no sensibles.
- Verificar firma y timestamp de webhooks; rechazar replay; deduplicar por ID externo; validar orden, importe y moneda contra estado local.
- Claves de idempotencia para iniciar/capturar/reembolsar; no duplicar cobros en reintentos.
- Estados de orden separados de estados de pago; contemplar fallido, pendiente, autorizado, capturado, reembolso parcial/total y disputa.
- Las credenciales de producción van en secret manager. Definir conciliación diaria con PSP antes de operar.

## Envío, instalación y retiro

Modelar cotización de transporte separada del precio de producto. Destino/volumen/ensamble pueden cambiar coste y viabilidad. Confirmar cobertura, restricciones de acceso, fechas y responsable de instalación antes de cobrar el coste final.

Un pedido puede dividirse en varios envíos. Guardar carrier, servicio, tracking y estado/eventos; minimizar PII transmitida. No prometer integración con una transportadora hasta contratarla y validar su API.

## Moneda, impuestos y devoluciones

COP es supuesto inicial; el área financiera debe validar moneda, reglas tributarias, documento/factura electrónica, redondeos, descuentos, retenciones y tratamiento de anticipos. Capturar snapshots explicables por línea y totales.

Definir políticas autorizadas de cancelación, devolución, garantía e instalación con asesoría comercial/legal. La documentación no sustituye esa aprobación.

## Enlaces

[[Pedidos y cotizaciones]] · [[Esquema de datos]] · [[Integraciones]] · [[Seguridad y privacidad]]
