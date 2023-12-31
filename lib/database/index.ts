import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

let cached = (global as any).mongoose || { connection: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.connection) {
    return cached.connection;
  }

  if (!MONGODB_URL) {
    throw new Error('MONGODB_URL is missing!');
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'eventlive',
      bufferCommands: false,
    });

  cached.connection = await cached.promise;

  return cached.connection;
};
