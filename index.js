const express = require("express");
const todoRoutes = require("./routes/todoRoutes.js");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(express.json());

app.use("/todo", todoRoutes);
