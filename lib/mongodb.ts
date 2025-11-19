import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = {};

let client :MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) throw new Error('Please add your MongoDB URI to .env.local');

  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

// Reuse client between hot reloads in dev
if (process.env.NODE_ENV === "development") {
  // Declare global type to prevent TS errors properly


  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }

  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
  

export default clientPromise;
