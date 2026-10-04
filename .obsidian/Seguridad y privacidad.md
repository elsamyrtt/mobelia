# Seguridad y privacidad

## Límites de confianza

El navegador y sus datos son no confiables. El servidor valida, autoriza y calcula. PostgreSQL, proveedor de identidad y proveedores de pago son sistemas sensibles; credenciales viven en secret manager y no en Obsidian, Git, logs ni variables públicas.

## Controles mínimos antes de cobrar

- HTTPS, cookies `HttpOnly`, `Secure`, `SameSite` según flujo; protección CSRF para mutaciones cuando corresponda.
- Validación de entrada en servidor, límites de tamaño/tasa y protección contra abuso de login, cotización, formularios y checkout.
- Autorización por propietario para cada recurso cliente; staff con MFA, RBAC y mínimo privilegio.
- Consultas parametrizadas/ORM seguro; revisar XSS, CSRF, SSRF, subida de archivos, open redirects y exposición de IDs/tokens.
- Recalcular precio, descuentos, impuestos, envío y stock en servidor; transacciones e idempotencia.
- Webhooks con firma, deduplicación, ventana temporal y validación de importe/moneda/orden.
- No almacenar datos de tarjeta sensibles; limitar alcance PCI usando PSP alojado/tokenizado.
- CORS restrictivo, CSP revisada, headers seguros, dependencias actualizadas y escaneo en CI.
- Backups cifrados, rotación de secretos, alertas por abuso, registro administrativo y respuesta a incidentes.

## Datos personales

Clasificar datos (públicos, internos, personales, sensibles/secreto), recolectar lo mínimo y documentar finalidad, acceso, retención y eliminación. Direcciones y contactos se limitan a operación autorizada; exportaciones administrativas quedan auditadas. Logs redactan email/teléfono/dirección, tokens, cookies y payloads.

Validar obligaciones vigentes de Colombia (incluida protección de datos personales y derechos del titular) con asesoría responsable. Definir aviso/consentimiento, encargado/proveedores, canales de derechos, retención y notificación de incidentes. No inventar garantías de cumplimiento.

## Materiales y afirmaciones comerciales

Los ratings de madera/tela son internos y no certificaciones. Solo publicar claims de lluvia, calor, UV, fuego, carga o seguridad con evidencia vigente y revisión del producto ensamblado. Proteger datos de proveedores y documentos técnicos.

## Revisión y respuesta

Threat model antes de checkout/auth, revisión de dependencias, pruebas negativas de autorización, ejercicios de restauración y runbook para exposición de credenciales, filtración de PII, fraude de webhook e indisponibilidad. Véanse [[Operación y despliegue]] y [[Decisiones de arquitectura]].
