const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

let products = [
  { id: 101, name: "Laptop" }
];

app.get("/health", (req, res) => {
  res.json({ status: "UP", app: "Node Inventory API" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

app.listen(PORT, () => {
  console.log(`Node Inventory API running on port ${PORT}`);
});