import { SetupServer } from '@src/server';
import supertest from 'supertest';
import { DbConnection } from '../config/connection-typeorm';

let server = new SetupServer();
let connect = new DbConnection();
beforeAll(async () => {
  const server = new SetupServer();
  await server.init();
  global.testRequest = supertest(server.getApp());
});

afterAll(async () => {
  await server.close()
  await connect.disconnectDb()
});