import express from "express";
const app = express();
const port = 3000;

// HTTP Request
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>")
})

app.get("/contact", (req, res) => {
  res.send("<h2>About</h2>")
})

app.get("/about", (req, res) => {
  res.send("<p>Prueba pagina Sobre mi</p>")
})

// START PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
