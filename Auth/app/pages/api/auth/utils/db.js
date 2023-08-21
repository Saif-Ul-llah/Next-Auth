import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://Saif-Ul-llah:saif025362@@authcluster.ytqfgf2.mongodb.net/?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return { db: cachedClient.db('your-database-name') };
  }

  const client = await MongoClient.connect(uri, options);
  cachedClient = client;

  return { db: client.db('your-database-name') };
}
