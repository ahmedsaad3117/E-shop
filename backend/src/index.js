const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
require("./db/mongoose");

const productRouter = require("./router/product");
const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.use(productRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
