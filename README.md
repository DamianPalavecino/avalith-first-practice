# Fake Store API

To simulate the database, we are instead going to use the API https://fakestoreapi.com/ which will provide us with the functionality of our models. It is imperative that we are able to use the basic functionalities of the API through our API.

# Task

- Create a project and install the corresponding modules, create the corresponding folders for models, drivers and middlewares.
- Create an app.js file that hosts the project on localhost:3000 and uses an Express.router
- Using the provided API generate models for Product, Cart and User
- Create a middleware to print by console the date on which each request is made
- Create a middleware to handle 404 errors
- Create the requested endpoints with their functionalities.

# Endpoints

- All basic Fakestore API endpoints must be accessible through our API, e.g. /products, /products/:id, and their analogues for Categories, Carts and Users.
- GET /products/categories must return an array of objects that has the category name and an array with all the products belonging to the category.
- GET /users/firsts should return the first 3 users sorted by ID.
- GET /prices should return a list of products that have id, title and price of each product and that can be sorted by price and you can choose if in ascending or descending order through a query "order".
- GET /expensive should return all products that are the most expensive in their category.
- GET /bigcarts should return all carts that have more than 2 products and the name of the user who ordered that cart.

# How to run this project

1. Clone the repository

```bash
git clone https://github.com/DamianPalavecino/avalith-first-practice.git
```

2. Access the main folder

```bash
cd .\avalith-first-practice\
```

3. Install npm packages

```bash
npm install
```

4. Run the project

```bash
npm start
```
