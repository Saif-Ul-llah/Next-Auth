const mongoose = require('mongoose');

// Replace the connection string with your MongoDB URL
const mongoUrl = 'mongodb+srv://Saif-Ul-llah:saif025362%40@authcluster.ytqfgf2.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;


// import { MongoClient } from 'mongodb';

// const uri = 'mongodb://localhost:27017'; // Your MongoDB URI
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectToDatabase() {
//   if (!client.isConnected()) {
//     await client.connect();
//   }
//   return client.db('Auth');
// }

// export { connectToDatabase };
// // 0

