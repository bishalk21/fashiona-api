import "dotenv/config";
import express from "express";
const app = express();
// middleware
app.use(express.json());
import cors from "cors";
app.use(cors());
import helmet from "helmet";
app.use(helmet());
import morgan from "morgan";
app.use(morgan("dev"));

const PORT = 8000;

// database
import { dbConnection } from "./src/config/dbConfig.js";
dbConnection();

import productRouter from "./src/routers/productRouter.js";
import categoriesRouter from "./src/routers/categoriesRouter.js";

// api endpoint
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoriesRouter);

// routes
app.get("/", (req, res) => {
  res.json({
    message: "you have reached the api end point.",
  });
});

// error
app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.status || 404;

  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
