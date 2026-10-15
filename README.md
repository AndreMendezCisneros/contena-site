# Centro Quiropráctico Conteña

Sitio multipágina del centro en Ayacucho. Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4.

La propuesta visual de referencia sigue en la carpeta hermana `centro-contena-web/`. Este proyecto no la reemplaza.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La raíz redirige a `/es`.

Idiomas: `/es`, `/en`, `/quy`. El quechua de Ayacucho (`quy`) es una traducción de trabajo y conviene revisarla con un hablante.

## Scripts

- `npm run dev` — desarrollo con Turbopack
- `npm run build` — build de producción (`output: "standalone"`)
- `npm run start` — sirve el build
- `npm run lint` — ESLint

## Contacto

El botón y el formulario abren WhatsApp (`wa.me/51976367843`). Si defines estas variables, el formulario también envía un correo con Resend:

```
NEXT_PUBLIC_SITE_URL=https://centrocontena.com
CONTACT_TO_EMAIL=carloscontena@gmail.com
CONTACT_FROM_EMAIL=notificaciones@tu-dominio.com
RESEND_API_KEY=
```

Sin esas claves, la cita sigue saliendo por WhatsApp.

## Contenido

Teléfonos, horario, servicios y testimonios salen de lo publicado en centrocontena.com. No hay precios ni títulos académicos hasta que el centro los confirme. Fotos y videos viven en `public/` para no depender del sitio anterior.
