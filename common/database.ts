/* eslint-disable import/no-anonymous-default-export */
import { Db, MongoClient } from 'mongodb';
let db:Db;

async function intializeClient():Promise<Db> {
  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  return client.db();
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await intializeClient();
  }
  return db;
};