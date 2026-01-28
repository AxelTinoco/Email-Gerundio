# Documentación de Desarrollo de Emails - T-Premia

> Guía completa de patrones, técnicas y compatibilidad con proveedores de email.

---

## Tabla de Contenidos

1. [Templates Desarrollados](#templates-desarrollados)
2. [Arquitectura y Patrones](#arquitectura-y-patrones)
3. [Manejo de Fuentes](#manejo-de-fuentes)
4. [Compatibilidad por Proveedor](#compatibilidad-por-proveedor)
5. [Imágenes y Assets](#imágenes-y-assets)
6. [Imágenes de Fondo (Background Images)](#imágenes-de-fondo-background-images) ← **NUEVO**
7. [Responsive Design](#responsive-design)
8. [Dark Mode](#dark-mode)
9. [Checklist de Desarrollo](#checklist-de-desarrollo)

---

## Templates Desarrollados

### Inventario Completo (31 templates)

| Categoría | Template | Descripción |
|-----------|----------|-------------|
| **Bienvenida** | `t-premia-bienvenida.tsx` | Email de bienvenida principal |
| | `Correo_bienvenida_8122025/bienvenida.tsx` | Versión actualizada Dic 2025 |
| **Educativos** | `t-premia-correo-educativo.tsx` | Email educativo original |
| | `Correo_Educativo_111225/correo_educativo.tsx` | Con fuentes personalizadas y Cloudinary |
| **Capacitación** | `capacitacion/01-invitacion-activar-mision.tsx` | Invitación a activar misión |
| | `capacitacion/02-revisar-mision.tsx` | Recordatorio revisar misión |
| | `capacitacion/03-invitar-terminar-mision.tsx` | Invitación terminar misión |
| | `capacitacion/04-terminar-mision.tsx` | Confirmación misión completada |
| | `capacitacion/05-reactiva-de-cuenta.tsx` | Reactivación de cuenta |
| **Captación** | `captacion_031125/*.tsx` | Campaña original (5 variantes) |
| | `captacion2daEntrega_041125/*.tsx` | Segunda entrega (3 variantes) |
| **Newsletters** | `newslatter/usa_tus_gemas.tsx` | Promoción uso de gemas |
| | `newslatter/terraza/terraza.tsx` | Newsletter Terraza (text overlays dinámicos) |
| **Gestión Cuenta** | `cuenta-suspendida/cuenta_suspendida.tsx` | Notificación cuenta suspendida |
| | `completar-perfil/completar_perfil.tsx` | Recordatorio completar perfil |
| **Comunicación** | `NPS/nps.tsx` | Encuesta Net Promoter Score |
| | `bandaMS/bandams.tsx` | Anuncio Banda MS |
| **Migración** | `migracion/template_1/HTML_activos.tsx` | Migración usuarios activos |

---

## Arquitectura y Patrones

### Estructura Base de un Template

```typescript
// 1. Imports
import {
  Body, Button, Column, Container, Head, Html,
  Img, Link, pixelBasedPreset, Row, Section,
  Tailwind, Text,
} from "@react-email/components";

// 2. Interface de Props
interface TpremiaUserEmailProps {
  username?: string;
  nombre?: string;
}

// 3. Base URL (para assets)
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://tu-ngrok-url.ngrok-free.app";

// 4. Componente Principal
export const MiEmail = ({ username }: TpremiaUserEmailProps) => {
  return (
    <Html>
      <Head>
        {/* Meta tags y estilos */}
      </Head>
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Body>
          {/* Contenido */}
        </Body>
      </Tailwind>
    </Html>
  );
};

// 5. Preview Props (para desarrollo)
MiEmail.PreviewProps = {
  username: "Usuario de Prueba",
} as TpremiaUserEmailProps;

// 6. Export
export default MiEmail;
```

### Patrón de Estilos Híbrido

Usamos **Tailwind + Inline Styles** para máxima compatibilidad:

```typescript
// Tailwind para desarrollo rápido
<Section className="bg-white px-5 py-10">

// Inline styles como respaldo para Gmail/Outlook
<Section
  className="bg-white px-5 py-10"
  style={{ backgroundColor: '#ffffff', padding: '40px 20px' }}
>
```

---

## Manejo de Fuentes

### Estrategia de Fuentes por Proveedor

| Proveedor | @font-face | Google Fonts | System Fonts |
|-----------|------------|--------------|--------------|
| **Apple Mail** | ✅ Funciona | ✅ Funciona | ✅ |
| **iOS Mail** | ✅ Funciona | ✅ Funciona | ✅ |
| **Gmail (Web)** | ❌ Ignorado | ❌ Ignorado | ✅ Fallback |
| **Gmail (App)** | ❌ Ignorado | ⚠️ Parcial | ✅ Fallback |
| **Outlook (Desktop)** | ❌ Ignorado | ❌ Ignorado | ✅ Fallback |
| **Outlook (Web)** | ❌ Ignorado | ❌ Ignorado | ✅ Fallback |
| **Outlook (App)** | ❌ Ignorado | ❌ Ignorado | ✅ Fallback |

### Implementación Actual

#### 1. Fuentes Personalizadas (@font-face)

```typescript
<Head>
  <style>{`
    /* Fuente personalizada desde Cloudinary */
    @font-face {
      font-family: 'New Order';
      src: url('https://res.cloudinary.com/dirjvoxdc/raw/upload/v1765496418/NewOrder-Regular_tqlzqd.woff') format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'New Order';
      src: url('https://res.cloudinary.com/dirjvoxdc/raw/upload/v1765496432/NewOrder-Bold_tfioeq.woff2') format('woff2');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'New Order';
      src: url('https://res.cloudinary.com/dirjvoxdc/raw/upload/v1765496432/NewOrder-Bold_tfioeq.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
  `}</style>
</Head>
```

#### 2. Google Fonts (Fallback)

```typescript
<Head>
  {/* Link tag */}
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
    rel="stylesheet"
  />

  {/* @import como respaldo */}
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  `}</style>
</Head>
```

#### 3. Cadena de Fallback Completa

```typescript
<style>{`
  body, table, td, p, a, li, blockquote {
    font-family:
      'New Order',           /* Fuente personalizada */
      'Montserrat',          /* Google Fonts */
      -apple-system,         /* macOS/iOS */
      BlinkMacSystemFont,    /* macOS Chrome */
      'Segoe UI',            /* Windows */
      'Helvetica Neue',      /* macOS antiguo */
      Arial,                 /* Universal */
      sans-serif             /* Fallback final */
      !important;
  }
`}</style>
```

### Fuentes Seguras (Web-Safe)

Estas fuentes funcionan en **TODOS** los clientes:

| Fuente | Plataforma | Uso Recomendado |
|--------|------------|-----------------|
| Arial | Universal | Cuerpo de texto |
| Helvetica | Mac/iOS | Cuerpo de texto |
| Helvetica Neue | Mac/iOS | Títulos |
| Georgia | Universal | Texto elegante |
| Times New Roman | Universal | Formal |
| Verdana | Universal | Legibilidad |
| Trebuchet MS | Universal | Moderno |

### Recomendación Final para Fuentes

```typescript
// SIEMPRE usar esta estructura:
fontFamily: "'Tu-Fuente-Custom', 'Google-Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"

// Ejemplo real del proyecto:
fontFamily: "'New Order', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
```

**Realidad práctica:**
- Solo ~30% de usuarios verán la fuente personalizada (Apple Mail, iOS)
- ~70% verán Arial o la fuente del sistema
- **Diseña pensando en que la mayoría verá Arial**

---

### Estadísticas de Alcance de Fuentes

```
┌─────────────────────────────────────────────────────────────────┐
│                    ALCANCE DE FUENTES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  @font-face / Google Fonts                                      │
│  ████████░░░░░░░░░░░░░░░░░░░░  ~30% (Apple Mail, iOS Mail)     │
│                                                                 │
│  System Fonts (Segoe UI, SF Pro, etc.)                         │
│  ████████████████████░░░░░░░░  ~65% (Gmail, Outlook)           │
│                                                                 │
│  Arial (Fallback Universal)                                     │
│  ██████████████████████████████  100% (Todos los clientes)     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Fuentes Soportadas por Proveedor

#### Apple Mail / iOS Mail (Mejor soporte)

| Tipo | Fuentes Disponibles |
|------|---------------------|
| **@font-face** | ✅ Cualquier fuente WOFF/WOFF2 |
| **Google Fonts** | ✅ Todas las fuentes de Google |
| **Sistema macOS** | San Francisco, Helvetica Neue, Helvetica, Lucida Grande |
| **Sistema iOS** | SF Pro, SF Pro Display, SF Pro Text |
| **Web-Safe** | Arial, Georgia, Times New Roman, Verdana, Trebuchet MS |

#### Gmail (Web y App)

| Tipo | Fuentes Disponibles |
|------|---------------------|
| **@font-face** | ❌ No soportado |
| **Google Fonts** | ⚠️ Solo algunas en App móvil |
| **Sistema** | Roboto (Android), SF Pro (iOS), Arial (Web) |
| **Web-Safe** | Arial, Helvetica, Georgia, Times New Roman, Verdana |

**Fuentes que Gmail renderiza mejor:**
```
Arial, Arial Black, Comic Sans MS, Courier New, Georgia,
Impact, Palatino, Tahoma, Times New Roman, Trebuchet MS, Verdana
```

#### Outlook (Desktop, Web, App)

| Tipo | Fuentes Disponibles |
|------|---------------------|
| **@font-face** | ❌ No soportado |
| **Google Fonts** | ❌ No soportado |
| **Sistema Windows** | Segoe UI, Calibri, Cambria, Consolas |
| **Sistema macOS** | Helvetica, Helvetica Neue (si está instalado) |
| **Web-Safe** | Arial, Georgia, Times New Roman, Verdana, Tahoma |

**Fuentes nativas de Outlook:**
```
Segoe UI (predeterminada en Windows)
Calibri, Cambria, Candara, Consolas, Constantia, Corbel
Arial, Times New Roman, Courier New, Georgia, Verdana, Tahoma
```

### Fuentes Recomendadas para Máxima Compatibilidad

> Para máxima compatibilidad entre todos los proveedores de email (Gmail, Outlook, Apple Mail, Yahoo, etc.), estas son las fuentes más seguras.

#### Fuentes con ~99% de Compatibilidad

##### Sans-Serif (Modernas, Limpias)

| Fuente | Windows | macOS | iOS | Android | Gmail | Outlook | Apple Mail | Yahoo | Compatibilidad |
|--------|---------|-------|-----|---------|-------|---------|------------|-------|----------------|
| **Arial** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |
| **Helvetica** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |
| **Verdana** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |
| **Tahoma** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |
| **Trebuchet MS** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |

##### Serif (Elegantes, Formales)

| Fuente | Windows | macOS | iOS | Android | Gmail | Outlook | Apple Mail | Yahoo | Compatibilidad |
|--------|---------|-------|-----|---------|-------|---------|------------|-------|----------------|
| **Georgia** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |
| **Times New Roman** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |
| **Times** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |

##### Monospace (Código, Técnico)

| Fuente | Windows | macOS | iOS | Android | Gmail | Outlook | Apple Mail | Yahoo | Compatibilidad |
|--------|---------|-------|-----|---------|-------|---------|------------|-------|----------------|
| **Courier New** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |
| **Courier** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ~99% |

#### Fuentes con Menor Compatibilidad (Evitar como primarias)

| Fuente | Compatibilidad | Problema |
|--------|----------------|----------|
| **Segoe UI** | ~60% | Solo Windows |
| **San Francisco** | ~35% | Solo Apple |
| **Roboto** | ~40% | Solo Android/Chrome |
| **Calibri** | ~55% | Solo Office/Windows |
| **Consolas** | ~60% | Solo Windows |
| **Monaco** | ~35% | Solo macOS |
| **Palatino** | ~75% | Inconsistente en Android |
| **Book Antiqua** | ~65% | No disponible en móvil |

### Cadenas de Fallback Recomendadas

```typescript
// SANS-SERIF - Máxima compatibilidad (RECOMENDADO)
fontFamily: "Arial, Helvetica, sans-serif"

// SANS-SERIF - Con fuente custom
fontFamily: "'Tu-Fuente', Arial, Helvetica, sans-serif"

// SANS-SERIF - Completa con system fonts
fontFamily: "'Tu-Fuente', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"

// SERIF - Elegante
fontFamily: "Georgia, 'Times New Roman', Times, serif"

// SERIF - Con custom
fontFamily: "'Tu-Fuente-Serif', Georgia, 'Times New Roman', serif"

// MONOSPACE - Código
fontFamily: "'Courier New', Courier, monospace"
```

### Estrategia Óptima para T-Premia

```typescript
// Títulos y headers (donde la fuente importa más visualmente)
fontFamily: "'New Order', 'Montserrat', Arial, Helvetica, sans-serif"

// Cuerpo de texto (priorizar legibilidad)
fontFamily: "Arial, Helvetica, sans-serif"

// Botones CTA
fontFamily: "Arial, Helvetica, sans-serif"
fontWeight: "bold"
```

**Por qué esta estrategia:**
1. **Títulos**: La fuente custom se ve en ~30% de usuarios, pero es donde más impacta visualmente
2. **Cuerpo**: Arial es legible en todos los clientes, no arriesgamos la lectura
3. **Botones**: Arial bold es consistente y nunca falla

### Conclusión sobre Fuentes

```
┌──────────────────────────────────────────────────────────────────┐
│  REGLA DE ORO: Diseña para Arial, celebra cuando se ve mejor    │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. SIEMPRE incluir Arial como fallback final                   │
│  2. Las fuentes custom son un "bonus" para Apple/iOS            │
│  3. Prueba tu diseño con Arial - si se ve bien, está listo      │
│  4. No dependas de pesos específicos (bold/light pueden fallar) │
│  5. Usa font-weight numéricos: 400, 600, 700                    │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Compatibilidad por Proveedor

### Apple Mail / iOS Mail ✅

**El cliente más compatible.** Soporta prácticamente todo.

| Característica | Soporte |
|----------------|---------|
| CSS en `<style>` | ✅ Completo |
| @font-face | ✅ Funciona |
| Google Fonts | ✅ Funciona |
| Media queries | ✅ Completo |
| Flexbox | ✅ Soportado |
| Dark mode | ✅ Nativo |
| Imágenes | ✅ Auto-carga |

**No requiere hacks especiales.**

---

### Gmail ⚠️

| Característica | Soporte | Solución |
|----------------|---------|----------|
| CSS en `<head>` | ⚠️ Limitado | Duplicar con inline styles |
| @font-face | ❌ Ignorado | Usar fallback |
| Google Fonts | ⚠️ Parcial | No confiar, usar fallback |
| Media queries | ⚠️ Solo App | `.mobile-only` clases |
| Dark mode | ❌ No controlable | Aceptar inversión |
| max-width | ✅ Funciona | Usar siempre |

**Técnicas implementadas:**

```typescript
// Duplicar estilos críticos
<Section
  className="bg-white"
  style={{ backgroundColor: '#ffffff' }}
>

// Gmail elimina <style> en web, pero mantiene inline
<Text style={{
  fontFamily: "Arial, sans-serif",
  fontSize: '16px',
  color: '#333333'
}}>
```

---

### Outlook ⚠️⚠️ (El más problemático)

| Característica | Problema | Solución |
|----------------|----------|----------|
| CSS en `<style>` | ⚠️ Parcial | Inline styles obligatorios |
| @font-face | ❌ Ignorado | Arial como fallback |
| Media queries | ❌ No soportado | Diseño fijo |
| Flexbox | ❌ No soportado | Usar `<table>` |
| Dark mode | ⚠️ Invierte colores | Selectores `[data-ogsc]` |
| Botones | ⚠️ Se rompen | `min-width`, `display: inline-block` |
| Padding | ⚠️ Inconsistente | Tablas anidadas |
| Imágenes | ⚠️ Bloqueadas | Alt text descriptivo |

**CSS específico para Outlook:**

```typescript
<Head>
  <style>{`
    /* Forzar colores en Outlook Dark Mode */
    [data-ogsc] .force-white-bg { background-color: #ffffff !important; }
    [data-ogsb] .force-white-bg { background-color: #ffffff !important; }
    [data-ogsc] .force-black-text { color: #000000 !important; }
    [data-ogsb] .force-black-text { color: #000000 !important; }

    /* Botones en Outlook */
    [data-ogsc] .account-button {
      display: inline-block !important;
      white-space: nowrap !important;
      min-width: 90px !important;
    }

    /* Outlook ignora padding en algunos elementos */
    .outlook-padding {
      mso-padding-alt: 20px;
    }
  `}</style>
</Head>
```

**Selectores de Outlook Dark Mode:**
- `[data-ogsc]` - Outlook con esquema de color oscuro
- `[data-ogsb]` - Outlook con fondo oscuro

---

## Imágenes y Assets

### Estrategia Principal: Cloudinary CDN

```typescript
// URL base de Cloudinary
const cloudinaryBaseUrl = 'https://res.cloudinary.com/dirjvoxdc/image/upload';

// Imagen simple
const logoUrl = `${cloudinaryBaseUrl}/v1765478921/logo_tpremia.png`;

// Imagen con transformaciones
const heroUrl = `${cloudinaryBaseUrl}/w_650,q_auto,f_auto/v1765478921/hero.png`;
```

### Text Overlays Dinámicos (Avanzado)

Usado en `terraza.tsx` para personalización:

```typescript
// Variables para el gestor de email marketing
const textLine0 = `l_text:arial_120_bold:Hola%252C,co_rgb:fff,g_north_west,y_1230,x_130`;
const textLine1 = `l_text:arial_120_bold:{nombre},co_rgb:FF1C72,g_north_west,y_1230,x_380`;

// URL final con texto superpuesto
const heroImageWithText = `${cloudinaryBaseUrl}/${textLine0}/${textLine1}/v1765589070/terraza.png`;
```

**Parámetros de Cloudinary:**
- `l_text:` - Capa de texto
- `arial_120_bold` - Fuente, tamaño, peso
- `co_rgb:FF1C72` - Color del texto
- `g_north_west` - Gravedad (posición)
- `y_1230,x_130` - Coordenadas

### Assets Locales

```typescript
// Para desarrollo local
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://tu-ngrok.ngrok-free.app";

// Uso
<Img src={`${baseUrl}/static/t-premia/logo.png`} />
```

### Estructura de Assets

```
emails/static/
├── t-premia/
│   ├── logo.png
│   ├── gema-rosa.png
│   ├── gema-dorada.png
│   ├── Banner_gema_gift.png
│   ├── Banner-mobile-gema-gift.png
│   ├── educativo/
│   │   └── hero_name.png
│   └── capacitacion/
│       └── invitacion-cuenta/
│           ├── Banner.png
│           └── hero_invitacion.png
```

---

## Imágenes de Fondo (Background Images)

### El Problema con Outlook

| Cliente | `background-image` CSS | `<img>` tag |
|---------|------------------------|-------------|
| **Apple Mail** | ✅ Funciona | ✅ |
| **iOS Mail** | ✅ Funciona | ✅ |
| **Gmail (Web)** | ✅ Funciona | ✅ |
| **Gmail (App)** | ✅ Funciona | ✅ |
| **Outlook (Desktop)** | ❌ **NO FUNCIONA** | ✅ |
| **Outlook (Web)** | ⚠️ Parcial | ✅ |
| **Outlook (App)** | ❌ **NO FUNCIONA** | ✅ |
| **Yahoo** | ✅ Funciona | ✅ |

**Problema:** Outlook Desktop usa el motor de renderizado de Microsoft Word, que NO soporta `background-image` CSS.

### Solución: El Hack de Cloudinary

En lugar de usar CSS `background-image` con texto HTML encima, **"horneamos" el texto directamente en la imagen** usando las transformaciones de Cloudinary.

```
┌──────────────────────────────────────────────────────────────────┐
│                     ENFOQUE TRADICIONAL (FALLA)                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   <Section style={{ backgroundImage: 'url(hero.png)' }}>        │
│     <Text>Hola, {nombre}</Text>  ← Texto HTML encima            │
│   </Section>                                                     │
│                                                                  │
│   ❌ Outlook: Solo ve el texto, sin imagen de fondo              │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                    HACK DE CLOUDINARY (FUNCIONA)                 │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   <Img src="cloudinary.com/.../l_text:.../hero.png" />          │
│                     ↑                                            │
│         Imagen con texto "horneado" dentro                       │
│                                                                  │
│   ✅ Outlook: Ve la imagen completa con el texto integrado       │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Implementación Paso a Paso

#### 1. URL Base de Cloudinary

```typescript
const cloudinaryBaseUrl = 'https://res.cloudinary.com/dirjvoxdc/image/upload';
```

#### 2. Text Overlay Básico

```typescript
// Estructura: l_text:FUENTE_TAMAÑO_PESO:TEXTO,co_rgb:COLOR,g_POSICION,y_Y,x_X

// Ejemplo: "Hola," en blanco, arriba-izquierda
const textLine0 = `l_text:arial_80_bold:Hola%252C,co_rgb:fff,g_north_west,y_1050,x_300`;

// Ejemplo: "{nombre}" en rosa, a la derecha del anterior
const textLine1 = `l_text:arial_80_bold:{nombre},co_rgb:FF1C72,g_north_west,y_1050,x_530`;
```

#### 3. URL Final con Transformaciones

```typescript
// Combinar todas las capas de texto
const heroImageWithText = `${cloudinaryBaseUrl}/${textLine0}/${textLine1}/v1765589070/terraza.png`;

// Resultado:
// https://res.cloudinary.com/dirjvoxdc/image/upload/l_text:arial_80_bold:Hola%252C,co_rgb:fff,g_north_west,y_1050,x_300/l_text:arial_80_bold:{nombre},co_rgb:FF1C72,g_north_west,y_1050,x_530/v1765589070/terraza.png
```

### Parámetros de Cloudinary Text Overlay

| Parámetro | Descripción | Ejemplo |
|-----------|-------------|---------|
| `l_text:` | Inicia capa de texto | `l_text:arial_80_bold:Hola` |
| `arial_80_bold` | Fuente_Tamaño_Peso | `arial`, `80`px, `bold` |
| `co_rgb:` | Color del texto (hex sin #) | `co_rgb:FF1C72` (rosa) |
| `g_` | Gravedad/Posición base | `g_north_west`, `g_center`, `g_south` |
| `y_` | Offset vertical (px) | `y_1050` |
| `x_` | Offset horizontal (px) | `x_300` |
| `%252C` | Coma codificada (URL encode doble) | `Hola%252C` = "Hola," |

### Posiciones de Gravedad (g_)

```
┌─────────────────────────────────────┐
│  north_west    north    north_east  │
│                                     │
│  west          center         east  │
│                                     │
│  south_west    south    south_east  │
└─────────────────────────────────────┘
```

### Ejemplo Avanzado: Cuadro Blanco con Texto

Usado en `bienvenida.tsx` para crear un cuadro blanco con bordes redondeados y texto encima:

```typescript
const cloudinaryBaseUrl = 'https://res.cloudinary.com/dirjvoxdc/image/upload';

// 1. Crear cuadro blanco con bordes redondeados
const whiteBoxOverlay = `l_text:Arial_1:_,co_rgb:FFFFFF,b_rgb:FFFFFF,bo_0px_solid_rgb:FFFFFF,w_1450,h_400,c_fit,r_24,g_north,y_60,o_95`;
//                       └─ Hack: texto invisible para crear el cuadro
//                                          └─ background blanco
//                                                      └─ borde blanco
//                                                                     └─ ancho
//                                                                          └─ alto
//                                                                               └─ fit
//                                                                                    └─ radius 24px
//                                                                                         └─ posición
//                                                                                              └─ offset Y
//                                                                                                   └─ opacidad 95%

// 2. Líneas de texto
const textLine1 = `l_text:arial_80_bold:[nombre],co_rgb:000000,g_north,y_120`;
const textLine2 = `l_text:arial_80_bold:${encodeURIComponent('Te damos la bienvenida a')},co_rgb:000000,g_north,y_220`;
const textLine3 = `l_text:arial_80_bold:${encodeURIComponent('bordo de tpremia.')},co_rgb:000000,g_north,y_326`;

// 3. URL final
const heroImageWithText = `${cloudinaryBaseUrl}/${whiteBoxOverlay}/${textLine1}/${textLine2}/${textLine3}/v1765230309/Header.png`;
```

**Resultado visual:**

```
┌──────────────────────────────────────────────────────────────────┐
│                        [IMAGEN HERO]                             │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                     Cuadro blanco                          │  │
│  │                                                            │  │
│  │                    [nombre]                                │  │
│  │              Te damos la bienvenida a                      │  │
│  │                 bordo de tpremia.                          │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Ejemplo: Versiones Desktop y Mobile

Usado en `terraza.tsx` para diferentes tamaños de texto:

```typescript
// Mobile (texto más pequeño)
const textLine0Mobile = `l_text:arial_80_bold:Hola%252C,co_rgb:fff,g_north_west,y_1050,x_300`;
const textLine1Mobile = `l_text:arial_80_bold:{nombre},co_rgb:FF1C72,g_north_west,y_1050,x_530`;

// Desktop (texto más grande)
const textLine0Desktop = `l_text:arial_120_bold:Hola%252C,co_rgb:fff,g_north_west,y_1230,x_130`;
const textLine1Desktop = `l_text:arial_120_bold:{nombre},co_rgb:FF1C72,g_north_west,y_1230,x_380`;

// URLs separadas
const heroMobile = `${cloudinaryBaseUrl}/${textLine0Mobile}/${textLine1Mobile}/v1765589070/terraza.png`;
const heroDesktop = `${cloudinaryBaseUrl}/${textLine0Desktop}/${textLine1Desktop}/v1765589070/terraza.png`;
```

```typescript
// En el JSX
<Img className="desktop-image" src={heroDesktop} style={{ display: 'block' }} />
<Img className="mobile-image" src={heroMobile} style={{ display: 'none' }} />
```

### Variables Dinámicas para Email Marketing

La variable `{nombre}` en la URL será reemplazada por el gestor de email marketing (Mailchimp, Sendinblue, etc.):

```typescript
// En el código
const textLine = `l_text:arial_80_bold:{nombre},co_rgb:FF1C72,g_north,y_120`;

// El gestor de email reemplaza {nombre} por el nombre real del usuario
// Juan → l_text:arial_80_bold:Juan,co_rgb:FF1C72,g_north,y_120
// María → l_text:arial_80_bold:María,co_rgb:FF1C72,g_north,y_120
```

### Fuentes Disponibles en Cloudinary

| Fuente | Código | Notas |
|--------|--------|-------|
| Arial | `arial` | Más compatible |
| Times New Roman | `times` | Serif |
| Courier | `courier` | Monospace |
| Georgia | `georgia` | Serif elegante |
| Verdana | `verdana` | Sans-serif |
| Impact | `impact` | Títulos gruesos |

**Pesos disponibles:** `bold`, `italic`, `bolditalic`

**Ejemplo:** `arial_80_bold` = Arial, 80px, negrita

### Comparativa: CSS vs Cloudinary

| Aspecto | CSS `background-image` | Cloudinary Text Overlay |
|---------|------------------------|-------------------------|
| **Outlook Desktop** | ❌ No funciona | ✅ Funciona |
| **Texto editable** | ✅ HTML editable | ❌ "Horneado" en imagen |
| **Variables dinámicas** | ✅ Fácil | ✅ Via URL |
| **Accesibilidad** | ✅ Screen readers | ⚠️ Requiere alt text |
| **Tamaño de archivo** | Pequeño | Más grande |
| **Compatibilidad** | ~70% | ~99% |

### Cuándo Usar Cada Enfoque

```
┌──────────────────────────────────────────────────────────────────┐
│  USA CSS background-image CUANDO:                                │
│  • No te importa Outlook Desktop (~15% usuarios corporativos)    │
│  • El texto necesita ser traducible/editable                     │
│  • SEO/Accesibilidad es crítico                                  │
├──────────────────────────────────────────────────────────────────┤
│  USA CLOUDINARY TEXT OVERLAY CUANDO:                             │
│  • Necesitas 99% compatibilidad (incluyendo Outlook)             │
│  • El diseño es visual/marketing (banners, heroes)               │
│  • Usas variables dinámicas simples ({nombre})                   │
│  • El texto es corto y decorativo                                │
└──────────────────────────────────────────────────────────────────┘
```

### Fallback Híbrido (VML para Outlook)

Si necesitas CSS background-image pero también Outlook, puedes usar VML (Vector Markup Language):

```html
<!--[if mso]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:400px;">
  <v:fill type="tile" src="https://tu-imagen.png" />
  <v:textbox inset="0,0,0,0">
<![endif]-->

<div style="background-image: url('https://tu-imagen.png'); width: 600px; height: 400px;">
  <!-- Tu contenido HTML aquí -->
</div>

<!--[if mso]>
  </v:textbox>
</v:rect>
<![endif]-->
```

**Nota:** VML es complejo y propenso a errores. **Recomendamos el hack de Cloudinary** por simplicidad y confiabilidad.

---

## Responsive Design

### Estrategia Mobile-First

```typescript
<Head>
  <style>{`
    /* Mobile por defecto */
    .button-mobile { display: inline-table; }
    .button-desktop { display: none; }
    .mobile-image { display: block; }
    .desktop-image { display: none; }

    /* Desktop (min-width) */
    @media screen and (min-width: 476px) {
      .button-mobile { display: none !important; }
      .button-desktop { display: inline-table !important; }
      .mobile-image { display: none !important; }
      .desktop-image { display: block !important; }
    }

    /* Ajustes específicos mobile */
    @media (max-width: 475px) {
      .banner-hero { padding-left: 110px; }
      .text-hero-name { font-size: 16px; }
      .container-main { padding: 10px !important; }
    }
  `}</style>
</Head>
```

### Imágenes Responsive

```typescript
{/* Desktop */}
<Img
  className="desktop-image"
  src={heroDesktop}
  width="650"
  style={{ display: 'block' }}
/>

{/* Mobile */}
<Img
  className="mobile-image"
  src={heroMobile}
  width="100%"
  style={{ display: 'none' }}
/>
```

### Ancho Máximo Recomendado

```typescript
<Container className="mx-auto max-w-[650px]">
  {/* 650px es el estándar para compatibilidad */}
</Container>
```

---

## Dark Mode

### Meta Tags Requeridos

```typescript
<Head>
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
</Head>
```

### CSS para Control de Dark Mode

```typescript
<style>{`
  /* Forzar modo claro */
  :root {
    color-scheme: light;
    supported-color-schemes: light;
  }

  /* Outlook Dark Mode overrides */
  [data-ogsc] .force-light {
    background-color: #ffffff !important;
    color: #000000 !important;
  }

  [data-ogsb] .force-light {
    background-color: #ffffff !important;
    color: #000000 !important;
  }

  /* Para elementos que DEBEN mantener color */
  .color-critical {
    color: #E6007E !important;
    -webkit-text-fill-color: #E6007E !important;
  }
`}</style>
```

### Tabla de Comportamiento Dark Mode

| Cliente | Comportamiento | Control |
|---------|----------------|---------|
| Apple Mail | Respeta `color-scheme` | ✅ Total |
| iOS Mail | Respeta `color-scheme` | ✅ Total |
| Gmail | Ignora, aplica su propio | ❌ Ninguno |
| Outlook | Invierte con `[data-ogsc]` | ⚠️ Parcial |

---

## Checklist de Desarrollo

### Antes de Enviar

- [ ] **Ancho máximo 650px** en el container principal
- [ ] **Inline styles** en elementos críticos (colores, fuentes)
- [ ] **Cadena de fallback** en todas las fuentes
- [ ] **Alt text** en todas las imágenes
- [ ] **Meta tags** de color-scheme
- [ ] **Selectores `[data-ogsc]`** para Outlook dark mode
- [ ] **Imágenes en Cloudinary** (no locales para producción)
- [ ] **Botones con min-width** (mínimo 90px)
- [ ] **Probado en móvil** (media queries funcionando)

### Testing Recomendado

1. **Apple Mail** (macOS) - Referencia de diseño ideal
2. **Gmail Web** - Verificar fallbacks
3. **Gmail App** (iOS/Android) - Media queries
4. **Outlook Web** - Dark mode
5. **Outlook Desktop** - Compatibilidad general

### Herramientas de Testing

- [Litmus](https://litmus.com) - Testing multi-cliente
- [Email on Acid](https://emailonacid.com) - Previews
- [PutsMail](https://putsmail.com) - Envío de prueba gratuito

---

## Comandos del Proyecto

```bash
# Desarrollo
npm run dev          # Servidor en localhost:3000

# Build
npm run build        # Compilar templates
npm run export       # Exportar para producción

# Envío de pruebas
npm run send-email   # Enviar via Nodemailer/Postmark
```

---

## Recursos Adicionales

- [React Email Docs](https://react.email/docs)
- [Can I Email](https://caniemail.com) - Compatibilidad CSS en email
- [Cloudinary Transformations](https://cloudinary.com/documentation/transformation_reference)
- [Litmus Blog](https://litmus.com/blog) - Mejores prácticas

---

*Última actualización: Diciembre 2025*
