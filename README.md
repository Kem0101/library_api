# Library / Biblioteca

- [Instrucciones en Español](README_ES.md)
- [Instructions in English](README_EN.md)

### General info

El archivo seeder.js es mas que nada un ejemplo si quisieramos popular la base de datos local a partir
del JSON Books en la carpeta data, solo tendriamos que al crear el proyecto de inicio usar el seeder como archivo principal
(app) desde este requerir nuestro modelo, hacer la conexión a la base de datos y luego leer el JSON
crear una función que genere dicho modelo y guarde los datos.

npm run seed

NOTA:
Los métodos de listar libros y ver los libros por página y formato deseado fueron testeados consumiendo datos de una base de datos en mongodb cloud

### Setup

npm install
npm start
