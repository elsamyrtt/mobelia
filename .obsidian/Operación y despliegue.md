# Operación y despliegue

## Ambientes

- Local: datos ficticios, sin secretos productivos ni callbacks de pago reales.
- CI: formato/lint, chequeo estricto, pruebas unitarias/integración, build y escaneo de dependencias.
- Staging: infraestructura comparable a producción, datos sintéticos, credenciales sandbox.
- Producción: acceso restringido, secretos gestionados, alertas y runbooks.

No copiar PII de producción a local/staging. No desplegar si migraciones/checks fallan.

## Release de base de datos

1. Revisión de cambio y plan de impacto; confirmar FK/índices/locks.
2. Backup verificable y rollback/forward plan.
3. Migración versionada con usuario DDL restringido.
4. Expand/contract para despliegues graduales: primero esquema compatible, luego app, luego limpieza posterior.
5. Smoke test del catálogo, cotización, checkout, pago sandbox y webhook.
6. Vigilar errores, latencia, conexiones, locks, stock y colas; abortar/rollback según runbook.

## Backups y recuperación

Habilitar backups cifrados administrados y PITR con retención aprobada; definir RPO/RTO con dirección antes de seleccionar tier/proveedor. Ejecutar restore drills periódicos en ambiente aislado y medir tiempos; backup no probado no es recuperación. Documentar acceso break-glass y rotación después de incidente.

## Observabilidad

- Logs estructurados con request/correlation ID, sin secretos ni PII innecesaria.
- Métricas: tasa de error/latencia por ruta, conexiones y saturación PostgreSQL, deadlocks/locks, tiempo de query, checkout abandonado, fallos PSP/webhook, reservas vencidas y retraso outbox.
- Trazas entre web/servicios/proveedores sin incluir payloads sensibles.
- Alertas con umbral derivado del SLO aprobado y guía accionable/runbook.
- Estado operacional independiente de mensajes al comprador; no mostrar errores internos.

## Capacidad

No hay promesa de “muchos clientes” sin volumen objetivo. Antes de lanzamiento medir patrón pico: visitas simultáneas, búsqueda, checkout, órdenes/minuto, imágenes, conexiones. Hacer load test gradual, establecer SLO y capacity budget; luego escalar instancias stateless, CDN/pooler/workers según cuello real.

## Continuidad

Plan para indisponibilidad de PSP, correo, transporte, DB y object storage; reintentos con backoff/jitter, DLQ o cola de fallidos, idempotencia y reconciliación. No reintentar pagos ciegamente. Responsable y canal de incidentes deben ser definidos por Mobelia.

## Índice operativo

[[Arquitectura]] · [[Base de datos]] · [[Seguridad y privacidad]] · [[Integraciones]] · [[Decisiones de arquitectura]]
