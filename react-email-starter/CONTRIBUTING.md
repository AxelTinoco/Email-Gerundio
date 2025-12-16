# Guia de Contribucion

## Conventional Commits

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial de commits limpio y generar changelogs automaticamente.

### Formato del mensaje de commit

```
<tipo>(<alcance>): <descripcion>

[cuerpo opcional]

[footer opcional]
```

### Tipos de commits

| Tipo | Descripcion | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad o plantilla | `feat(Email): Add newsletter template` |
| `fix` | Correccion de bug | `fix(Email): Fix image alignment in mobile` |
| `docs` | Cambios en documentacion | `docs: Update README with new instructions` |
| `style` | Cambios de formato (espacios, comas, etc.) | `style(Email): Format code with prettier` |
| `refactor` | Refactorizacion sin cambio de funcionalidad | `refactor(Email): Simplify button styles` |
| `test` | Agregar o modificar tests | `test: Add email rendering tests` |
| `chore` | Tareas de mantenimiento | `chore: Update dependencies` |

### Alcance (scope)

El alcance indica el modulo o area afectada:

- `Email` - Plantillas de email
- `Config` - Configuracion del proyecto
- `Assets` - Imagenes y recursos estaticos

### Ejemplos de buenos commits

```bash
# Nueva plantilla
feat(Email): Add BandaMS promotional email

# Correccion
fix(Email): Fix newsletter mobile responsiveness

# Multiples cambios relacionados
feat(Email): Create welcome email template

- Add header section with logo
- Include dynamic username
- Add CTA button

# Con referencia a issue
fix(Email): Resolve image loading issue

Closes #123
```

### Ejemplos de commits a evitar

```bash
# Muy vago
fix: fixes

# Sin tipo
Newsletter update

# Mensaje en espanol (mantener consistencia en ingles)
feat: Agregar nueva plantilla
```

## Flujo de trabajo con Git

### Ramas

| Rama | Proposito |
|------|-----------|
| `main` | Produccion - codigo estable |
| `develop` | Desarrollo - integracion de features |
| `feat/*` | Nuevas funcionalidades |
| `fix/*` | Correcciones de bugs |

### Crear una nueva rama

```bash
# Desde develop
git checkout develop
git pull origin develop

# Nueva feature
git checkout -b feat/nombre-descriptivo

# Fix
git checkout -b fix/descripcion-del-bug
```

### Flujo de desarrollo

1. **Crear rama** desde `develop`
   ```bash
   git checkout -b feat/new-newsletter
   ```

2. **Desarrollar** y hacer commits siguiendo Conventional Commits
   ```bash
   git add .
   git commit -m "feat(Email): Add newsletter header section"
   ```

3. **Mantener actualizado** con develop
   ```bash
   git fetch origin
   git rebase origin/develop
   ```

4. **Push** a remoto
   ```bash
   git push origin feat/new-newsletter
   ```

5. **Crear Pull Request** hacia `develop`

### Pull Requests

Al crear un PR:

1. **Titulo**: Seguir formato de Conventional Commits
   - `feat(Email): Add newsletter template`

2. **Descripcion**: Incluir:
   - Resumen de cambios
   - Screenshots si hay cambios visuales
   - Checklist de pruebas

3. **Revisar** antes de solicitar review:
   - Ejecutar `pnpm dev` y verificar que funciona
   - Verificar responsividad en el preview

### Template de PR

```markdown
## Descripcion
Breve descripcion de los cambios.

## Tipo de cambio
- [ ] Nueva plantilla de email
- [ ] Correccion de bug
- [ ] Actualizacion de assets
- [ ] Otro: ___

## Screenshots
(Si aplica)

## Checklist
- [ ] Probe en el preview local
- [ ] Verifique responsividad mobile
- [ ] Las imagenes cargan correctamente
- [ ] No hay errores en consola
```

## Revision de codigo

### Como revisor

1. Verificar que el commit sigue Conventional Commits
2. Probar localmente con `pnpm dev`
3. Revisar responsividad
4. Verificar que las imagenes usen CDN en produccion
5. Aprobar o solicitar cambios

### Como autor

1. Responder a todos los comentarios
2. Hacer los cambios solicitados
3. Re-solicitar review cuando este listo

## Contacto

Si tienes dudas, contacta al equipo de desarrollo.
