# DI UNIDAD 2, ACTIVIDAD 4
## Ejercicio 1: dividir una lista en dos
En List.js muestra una lista de todas las personas.

Cambiala para mostrar dos listas separadas, una detrás de otra : Químicos y Todos los demás. Como antes, puedes saber que persona es química comprobando si person.profession === 'químico'.

## Ejercicio 2: lista anidadas en un componente
¡Haz una lista de recetas desde RecipeList.js! Por cada receta en el array, coloca su nombre en un h2 y lista sus ingredientes en un ul.

## Ejercicio 3: extraer un componente de elemento de lista 
En el componente RecipeList2 contiene dos llamadas map anidadas. Para simplificarlo, extrae un componente Recipe de el que aceptará las props id, name, y ingredients. ¿Dónde colocarías la key exterior y por qué?

## Ejercicio 4: extraer un componente de elemento de lista 
Este ejemplo renderiza un famoso haiku de Tachibana Hokushi, con cada línea envuelta en una etiqueta p. Tu trabajo consiste en insertar un separador hr entre cada párrafo.

Un haiku solo tiene tres líneas, pero tu solución debería funcionar con cualquier número de líneas. Fíjate que los elementos hr solo aparecen entre los elementos p, ¡no en el inicio o el final! Código en Poem.js