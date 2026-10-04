# Integraciones

Proveedores aún no seleccionados, salvo PostgreSQL gestionado como dirección de persistencia. Definir contrato de negocio primero; mantener adaptadores para reducir acoplamiento.

| Integración | Uso | Contrato/seguridad |
|---|---|---|
| Identidad | Cuenta comprador y personal | OIDC/OAuth mantenido; MFA para staff; subject estable; callbacks exactos |
| PSP | Autorizar/capturar/reembolsar | Hosted fields/checkout tokenizado; webhook firmado; idempotencia; sandbox/conciliación |
| Correo/SMS | Acuses, cotización, cambios de orden | Plantillas aprobadas; evitar PII excesiva; rebotes y reintentos |
| Transporte | Cotizar envío, generar guía y tracking | Validar cobertura/costo; claves en secret manager; webhooks autenticados |
| Almacenamiento/CDN | Fotografías y documentos técnicos | Bucket privado/origin protegido; URLs firmadas si privado; validación MIME/tamaño |
| Analítica | Métricas comerciales/uso | Consentimiento/política; anonimizar; no enviar PII ni datos de pago |
| PostgreSQL | Registro de negocio | TLS, acceso privado, pooler, backup/PITR, roles separados runtime/migración |

## Requisitos para proveedor

Evaluar cobertura en Colombia, COP y liquidación, tarifas/reembolsos, SLA, residencia/transferencia de datos, soporte, exportabilidad, límites API, sandbox, recuperación y costos. No elegir un PSP, auth provider o carrier solo por facilidad de integración.

## Diseño de adaptador

- Interfaz de dominio propia; modelo y estados de Mobelia independientes del SDK.
- Timeouts, límites, retries con backoff/jitter solo para operaciones idempotentes.
- Firmas de webhook validadas antes de parsear/actuar; deduplicar evento.
- Credenciales separadas por ambiente y rotables.
- Logs sin token, dirección, PAN, CVV ni payload completo.
- Contrato probado con fixtures/sandbox; conciliación de eventos atrasados/fuera de orden.

## Fallos

Si un proveedor externo falla, el pedido queda en estado explícito pendiente/acción requerida; no fingir pago o envío exitoso. Operación puede reintentar de forma segura y auditable.

[[Pagos y envíos]] · [[Seguridad y privacidad]] · [[Operación y despliegue]]
