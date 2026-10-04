# Decisiones de arquitectura

Registro corto de decisiones para no confundir una propuesta con una implementación.

## Aprobadas

### ADR-001 — Modelo de negocio

- **Estado:** aprobado por el usuario, 2026-10-03.
- **Decisión:** una sola empresa Mobelia vende a muchos compradores.
- **Consecuencia:** no diseñar tenancy multiempresa ni agregar `tenant_id` preventivamente; separar datos personales por propietario y roles de staff.

### ADR-002 — Base relacional objetivo

- **Estado:** aprobado por el usuario, 2026-10-03.
- **Decisión:** PostgreSQL gestionado con proveedor intercambiable.
- **Consecuencia:** usar SQL/PostgreSQL estándar, capa de acceso a datos, migraciones revisables, TLS, pooler y backups gestionados. No se ha contratado ni desplegado proveedor.

### ADR-003 — Catálogo de madera ampliable

- **Estado:** dirección aprobada.
- **Decisión:** no limitar a 12 variedades; el catálogo admite altas futuras.
- **Consecuencia:** IDs estables, productos referencian registros de madera; claims de resistencia necesitan evidencia y los ratings internos no son certificación.

## Pendientes antes de implementar checkout

| Tema | Opción provisional de documentación | Responsable de aprobación |
|---|---|---|
| Proveedor de PostgreSQL/hosting | Gestionado, exportable, región/backup por evaluar | Dirección/ingeniería |
| Autenticación cliente y staff | Proveedor mantenido; MFA staff | Dirección/ingeniería |
| PSP y cobertura Colombia/COP | Comparar proveedores, tasas y conciliación | Finanzas/dirección |
| Impuestos/facturación electrónica | Confirmar reglas vigentes y proveedor/flujo | Contabilidad/asesoría |
| Envío, instalación, cobertura y garantías | Definir tarifa, SLA y carriers contratados | Operaciones |
| Guest checkout y retención de PII | Definir con política comercial/legal | Dirección/privacidad |
| Porcentajes/rating de materiales | Cargar solo valores aprobados con evidencia | Compras/calidad |
| RPO/RTO, SLO y capacidad pico | Acordar objetivos y ejecutar load test | Dirección/operaciones |
| Servicio de correo/documentos | Comparar coste, región y tratamiento de PII | Operaciones/privacidad |

No bloquear diseño lógico con estas decisiones, pero no afirmar cumplimiento/operación ni usar valores placeholder como precio real.

## Fuera del alcance aprobado

- SaaS multiempresa/marketplace.
- Guardar datos de tarjeta en Mobelia.
- Microservicios, Kubernetes o particionamiento antes de tener mediciones.
- Afirmar que la app tiene DB, auth, inventario, pagos o procesos productivos.

## Revisiones

Cambiar una decisión con fecha, motivo, alternativas, seguridad/datos afectados, migración y responsable. Enlaces: [[Arquitectura]] · [[Base de datos]] · [[Seguridad y privacidad]]
