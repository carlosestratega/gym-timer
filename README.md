# Gym Timer ⏱

Temporizador de **descansos** para entrenar. Sin registro, sin login, sin cuentas,
sin anuncios y sin conexión. Abres, haces la serie, tocas el descanso y a seguir.

## La idea

La serie no se cronometra: dura lo que dure y nadie puede adivinar cuándo la
terminas. Lo que se cronometra es **el descanso**.

1. Haces la serie.
2. Al terminar, tocas el tiempo de descanso.
3. Suenan los avisos y te pones a entrenar **sin tocar la pantalla**.
4. Al terminar la siguiente serie, vuelves a tocar. Y así.

## Avisos (todos se paran solos)

- **Dos pitidos** cuando quedan 30 segundos.
- **Cinco tics** en los últimos 5 segundos.
- **Un pitido largo de 2,4 s**: listo, a entrenar. El temporizador se cierra solo
  y deja la serie ya avanzada.

Los avisos se programan por adelantado en el Web Audio API, así que suenan a su
hora aunque el navegador congele los temporizadores en segundo plano. En iOS la
sesión de audio se declara como `playback` para que suene aunque el móvil esté
con el interruptor de silencio.

## Dos formas de usarlo

**Panel rápido.** Doce descansos de `00:15` a `03:00`. Un toque y corre. Arriba
puedes fijar cuántas series haces, solo para llevar la cuenta.

**Entreno guiado.** Perfiles → días de entreno → ejercicios, cada uno con sus
series, sus repeticiones y su descanso. Durante el entreno la pantalla te dice
qué ejercicio toca, en qué serie vas y cuántas reps; das al botón al acabar cada
serie. Cuando terminas todas las series de un ejercicio, corre el último
descanso y luego esperas a tener el material del siguiente listo para tocar y
seguir.

Los perfiles son **locales de este móvil**: no hay cuentas ni servidor. Todo se
guarda en el navegador.

## Más detalles

- La pantalla no se apaga mientras corre el descanso (Wake Lock) y vibra en
  cada cambio.
- Todo cabe en una pantalla, en vertical y en horizontal. Sin scroll.
- Durante el descanso: tocar = pausa · **✕** = cortar · `Espacio` = pausa · `Esc` = cortar.

## Cómo está hecho

Un `index.html`. Sin framework, sin build, sin dependencias, sin `npm install`.
Se abre haciendo doble clic en el archivo.

## Desplegar (gratis)

Es un sitio estático: vale cualquier hosting. En Vercel:

1. [vercel.com/new](https://vercel.com/new) → importa este repositorio
2. Framework Preset: **Other**. Sin build command ni output directory.
3. **Deploy**

## Instalar en el móvil

- **iPhone**: Safari → Compartir → *Añadir a pantalla de inicio*
- **Android**: Chrome → ⋮ → *Añadir a pantalla de inicio*
