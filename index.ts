import "dotenv/config";
const server = require("./src/app")
const { PORT } = process.env;
import db from "./src/config/mongo";

db().then(() => console.log("Server is ready to use..."));

server.listen(PORT, () => {
  console.log(`Server is booting at PORT: ${PORT}, please wait... `);
})