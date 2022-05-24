import { SetupServer } from '@src/server';
import supertest from 'supertest';

jest.setTimeout(3000);

beforeAll(async () => {
  const server = new SetupServer();
  await server.init();
  global.testRequest = supertest(server.getApp());
});

// afterAll(async () => {
//   await server.close()
// });
