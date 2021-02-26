import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DB;
const cachedDb;
const cachedClient;

if (!url) {
  throw new Error(
    'Please define the MONGODB_URI environment inside .env.local'
  );
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment inside .env.local'
  );
}

export async function connectToDatabase(){
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb}
  }

  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedDb = db;
  cachedClient = client;

  return { client, db };
}

export default connectToDatabase;