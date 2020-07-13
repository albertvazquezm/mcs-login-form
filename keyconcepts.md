# WebPack

Webpack es un empaquetador de módulos o "bundler"

Cuando programamos aplicaciones más complejas en JavaScript, queremos dividir nuestro código en diversos ficheros / módulos para que sea fácil mantenerlo. A nivel nativo, esta función todavía no está 100% adoptada por todos los navegadores.

Webpack nos permite importar ficheros JS dentro de otros JS. Él los va a juntar luego en un único fichero, lo va a minificar, ofuscar etc. También se pueden importar CSS o otros tipos de ficheros y webpack los va a incluir en la carpeta de salida.

Por eso veréis que al hacer cambios, tarda un poco en compilar de nuevo. Cuando queramos subir la app a producción, se tiene que compilar antes y subir al servidor web los assets generados por webpack.

# Diseño de apps basadas en componentes

Es la filosofía de frontend actual. Es la que implementan React, Vue, Angular etc. El concepto: Que nuestro código esté dividido en componentes (botones, cabeceras, menús, páginas) todo son componentes que luego dentro pueden tener más componentes.

Un componente tiene el HTML, el CSS y el JS que necesita para mostrarse correctamente. Un componente insertado en sitios diferentes de una página debe mostrarse igual.

Cómo modificamos / nos comunicamos con el componente:

- Pasamos propiedades para decir como es: color, textos, enlace.
- Se comunica mediante eventos: Me han clicado en un botón, el mouse ha hecho hover en una imagen etc.

Cómo organizamos nuestros componentes: Hay más de una forma, depende de lo grande que vaya a ser tu aplicación y demás. Una forma bastante extendida es:

- Componentes de página: Se muestran reaccionando a una ruta en concreto.
- Componentes smart: Tienen conexiones a API. Como un formulario de contacto.
- Componentes dumb: Sólo presentación y se comunican con propiedades y eventos. Botón, Input de formulario.