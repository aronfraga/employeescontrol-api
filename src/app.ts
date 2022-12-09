import "dotenv/config";
import express from "express";
import cors from "cors";
const { PORT } = process.env;
import { router } from "./routes/index"
import db from "./config/mongo";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db().then(() => console.log("Server is ready to use..."))
app.listen(PORT, () => {
  console.log(`Server is booting at PORT: ${PORT}, please wait... `);
})
