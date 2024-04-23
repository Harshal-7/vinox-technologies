import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);

    connection.isConnected = db.connections[0].readyState;
    console.log("Mongodb Connected!");
  } catch (error) {
    console.log("Mongodb Error: ", error);
  }
}

export default dbConnect;
