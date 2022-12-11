import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/index"

require('../src/config/mongo.ts');
const server = express();

server.use(cors());
server.use(express.json());
server.use(router);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

module.exports = server;