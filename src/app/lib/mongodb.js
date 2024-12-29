import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

let client = new MongoClient(process.env.MONGODB_URI);
let clientPromise = client.connect();

export default clientPromise;