import "dotenv/config";
import { connect, set } from "mongoose";
const { DB_LOCAL, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

set('strictQuery', false);

const DEPLOY_CONECTION = <string>`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
const LOCAL_CONECTION = <string>DB_LOCAL;

async function dbConnect(): Promise<void> {
  const environmentConnection = !!DB_HOST?DEPLOY_CONECTION:LOCAL_CONECTION;
  await connect(environmentConnection);
}

export default dbConnect;