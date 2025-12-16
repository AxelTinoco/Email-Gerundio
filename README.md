# Gerundio Email Templates

Proyecto de plantillas de correo electronico construido con [React Email](https://react.email/).

## Requisitos previos

- Node.js 18+
- pnpm (recomendado) o npm

## Instalacion

```bash
cd react-email-starter
pnpm install
# o
npm install
```

## Comandos disponibles

| Comando | Descripcion |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:3000` |
| `pnpm build` | Construye las plantillas de email |
| `pnpm export` | Exporta las plantillas para produccion |
| `pnpm send-email` | Envia un email de prueba (requiere configuracion de `.env`) |

## Estructura del proyecto

```
react-email-starter/
├── emails/                    # Plantillas de email
│   ├── t-premia/             # Emails de T-Premia
│   │   ├── capacitacion/     # Flujo de capacitacion
│   │   ├── captacion_031125/ # Campana captacion Nov
│   │   ├── bandaMS/          # Email Banda MS
│   │   ├── newslatter/       # Newsletters
│   │   └── ...
│   ├── static/               # Assets estaticos (imagenes, logos)
│   │   └── t-premia/         # Assets de T-Premia
│   ├── index.tsx             # Archivo indice
│   └── nodemailer.tsx        # Configuracion de nodemailer
├── package.json
└── tsconfig.json
```

## Crear una nueva plantilla

1. Crea un archivo `.tsx` en `emails/` o en una subcarpeta correspondiente
2. Usa los componentes de `@react-email/components`:

```tsx
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";

interface MiEmailProps {
  username?: string;
}

export const MiEmail = ({ username = "Usuario" }: MiEmailProps) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Section>
            <Text>Hola, {username}!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default MiEmail;
```

3. Ejecuta `pnpm dev` y visualiza tu plantilla en el navegador

## Componentes disponibles

Los principales componentes de `@react-email/components`:

- `Html`, `Head`, `Body` - Estructura base
- `Container`, `Section`, `Row`, `Column` - Layout
- `Text`, `Heading`, `Link` - Contenido de texto
- `Button` - Botones con enlaces
- `Img` - Imagenes
- `Tailwind` - Estilos con Tailwind CSS

## Assets e imagenes

### Opcion 1: Assets locales (desarrollo)
Coloca imagenes en `emails/static/` y referencia con:
```tsx
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

<Img src={`${baseUrl}/static/mi-imagen.png`} />
```

### Opcion 2: CDN (produccion - recomendado)
Usa URLs de Cloudinary u otro CDN:
```tsx
<Img src="https://res.cloudinary.com/tu-cuenta/image/upload/..." />
```

## Variables de entorno

Crea un archivo `.env` en la carpeta `emails/`:

```env
# Para envio de emails de prueba
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=tu-usuario
SMTP_PASS=tu-password
```

## Flujo de trabajo de desarrollo

1. Crea/modifica plantillas en `emails/`
2. Previsualiza con `pnpm dev`
3. Exporta con `pnpm export` cuando estes listo
4. Los archivos HTML exportados estaran en `.react-email/`

## Recursos

- [React Email Docs](https://react.email/docs)
- [Componentes React Email](https://react.email/docs/components)

## Licencia

MIT License
