# Fake Store API

Para simular la base de datos en su lugar vamos a utilizar la API https://fakestoreapi.com/ para que nos proporcione la funcionalidad de nuestros modelos, es imperativo que seamos capaces de usar las funcionalidades básicas de la API a través de nuestra API

# Consigna

- Crear un proyecto e instalar los módulos correspondientes, crear las carpetas correspondientes para modelos, controladores y middlewares
- Crear un archivo app.js que levante el proyecto en localhost:3000, y utilice un Express.router
- Usando la API proporcionada generar modelos para Producto, Carrito y Usuario
- Crear un middleware para imprimir por consola la fecha en la que se hace cada request
- Crear un middleware que maneje los errores 404
- Crear los endpoints que se piden en la siguiente diapositiva y que cumplan sus funcionalidades

Fecha de entrega: 22 de Agosto

# Endpoints

- Todos los endpoints básicos de la API de Fakestore se deben poder acceder a través de nuestra API, ej: /products, /products/:id, y sus análogos para Categorías, carritos y usuarios
- GET /products/categories debe devolver un array de objetos que tenga el nombre de la categoria y un array con todos los productos pertenecientes a la categoria
- GET /users/firsts debe devolver los primeros 3 usuarios ordenados por ID
- GET /prices debe devolver una lista de productos que tengan id, titulo y precio de cada producto y que se pueda ordenar por precio y se pueda elegir si en orden ascendiente o descendiente a traves de un query “order”
- GET /expensive debe devolver todos los productos que sean los más caros de su categoria
- GET /bigcarts debe devolver todos los carritos que tengan más de 2 productos y que diga el nombre del usuario que ordeno ese carrito
