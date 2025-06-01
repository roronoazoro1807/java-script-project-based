#  Pokemon Search App

This is a simple web app that lets users **search for Pokemon** by name using a **GraphQL API**. It fetches and displays the sprite, species, Pokédex number, and color of the entered Pokemon.

## Features

- Search any Pokémon by name
- Uses the [Favware GraphQL Pokémon API](https://graphqlpokemon.favware.tech/)
- Displays:
  - Sprite (image)
  - Pokédex number
  - Species name
  - Color

## Tech Stack

- HTML
- CSS
- JavaScript (Async/Await)
- GraphQL API

## How It Works

1. User types a Pokémon name.
2. The app sends a `POST` request to the GraphQL API.
3. If found, the Pokémon's data is displayed.


## Concepts Learned

Through this project, I learned:

- DOM Manipulation using JavaScript
- Using **Async/Await** for API calls
- Making **POST requests** using `fetch`
- Constructing and using **GraphQL queries**
- Error handling and user input validation
- Dynamically updating HTML content
- Basics of clean UI layout with HTML/CSS

---

## Some Questions & Answers regarding this that will be useful in interview

### 1. What is GraphQL and how is it different from REST?
**Answer:**  
GraphQL is a query language for APIs that allows the client to request exactly the data it needs. Unlike REST, which requires multiple endpoints for different resources, GraphQL uses a single endpoint to handle various types of queries and mutations.

---

### 2. How do you fetch data using GraphQL in JavaScript?
**Answer:**  
We send a `POST` request to the GraphQL endpoint with a JSON body that contains the GraphQL query string. Example:  
```js
fetch('https://graphql-endpoint.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: 'your-query' })
});
```

---

### 3. Why use async/await instead of .then()?
**Answer:**  
`async/await` makes asynchronous code look synchronous, avoiding nested callbacks and making error handling with `try/catch` simpler.

---

