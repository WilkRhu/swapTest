import supertest from 'supertest';
import { DbConnection } from "../src/config/connection-typeorm";
import { SetupServer } from '../src/server';

let server: SetupServer;
let connection: DbConnection;

beforeAll(async () => {
  await server.init();
  global.testRequest = supertest(server.getApp());
});

afterAll(async () => {
  await server.close()
})