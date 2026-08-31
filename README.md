# Gym Timer ⏱

Temporizadores para entrenar. Sin registro, sin login, sin anuncios, sin cuentas
y sin conexión. Abres, tocas un tiempo y a levantar.

## Qué hace

- **12 tiempos** de `00:15` a `03:00`, en saltos de 15 s. Un toque y arranca.
- **SERIES** y **DESCANSO** opcionales, arriba. En OFF vas directo al tiempo.
  Con series activas, cada botón muestra debajo lo que dura la sesión entera.
- Al acabar **suena ~3 s y se para solo**. No hay que apagar nada.
- Tres pitidos cortos en los últimos 3 segundos, para llegar con la pesa en la mano.
- Con descanso: trabajo → descanso (en azul) → siguiente serie, encadenado solo.
  Con series y sin descanso: encadena seguido, estilo EMOM.
- La pantalla no se apaga mientras corre (Wake Lock) y vibra en cada cambio.
- Todo cabe en una pantalla, en vertical y en horizontal. Sin scroll.
- Tocar = pausa · **✕** = parar · `Espacio` = pausa · `Esc` = parar.

Los ajustes de series y descanso se guardan en el navegador. No se envía nada
a ningún servidor: no hay servidor.

## Cómo está hecho

Un `index.html` de 15 KB. Sin framework, sin build, sin dependencias, sin
`npm install`. Se abre haciendo doble clic en el archivo.

La alarma **se programa por adelantado** en el Web Audio API en vez de con un
`setTimeout`, así que suena a su hora aunque el navegador frene los
temporizadores al tener la app en segundo plano.

## Desplegar (gratis)

Es un sitio estático: vale cualquier hosting. En Vercel:

1. [vercel.com/new](https://vercel.com/new) → importa este repositorio
2. Framework Preset: **Other**. No hay build command ni output directory.
3. **Deploy**

## Instalar en el móvil

- **iPhone**: Safari → Compartir → *Añadir a pantalla de inicio*
- **Android**: Chrome → ⋮ → *Añadir a pantalla de inicio*

Queda como una app más, con su icono, a pantalla completa y funcionando sin
cobertura.
