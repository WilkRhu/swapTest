// test/db.ts
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';


/**
 * Connect to mock memory db.
 */
export const connect = async () => {
    const mongod = await MongoMemoryServer.create()
    await mongoose.connect(mongod.getUri(), { dbName: process.env.DATA_BASE})
}

/**
 * Close db connection
 */
export const closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    const mongod = await MongoMemoryServer.create()
    await mongod.stop();
}

/**
 * Delete db collections
 */
export const clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
}