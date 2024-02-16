import express from "express";
import { PORT, mongodbURL } from "./config.js";
import cors from "cors";
// import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import mongoose from "mongoose";
const app = express();
app.use(cors());
//app.use(cors({origin: "http://localhost:3000", method: ['GET','POST','PUT','DELETE'], headers: ['Content-type']}))
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ message: "welcome to bookstore" });
});
app.use("/books", booksRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
