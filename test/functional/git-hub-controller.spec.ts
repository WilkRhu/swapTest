import axios from 'axios';
import supertest from "supertest";
import { GitHubApiClient } from "../../src/clients/git-hub-api-client";
import { SetupServer } from "../../src/server";
import * as dbHandler from '../db';
import { gitMockRepo } from "../mocks/gitMock";

jest.mock('axios');
describe('Controller GitHub', () => {
    let server: SetupServer;

    beforeAll(async () => {
        server = new SetupServer();
        await server.init();
        await dbHandler.connect();
        global.testRequest = supertest(server.getApp())
    });
    
    afterEach(async () => {
        await dbHandler.clearDatabase()
    });
    
    it('Should success save', async () => {
        const mockEnv = { userName: 'Fulano', repo: 'testRepository' };
        const mockAxios = axios as jest.Mocked<typeof axios>;
        mockAxios.get.mockResolvedValue({ data: gitMockRepo });
        await new GitHubApiClient(axios).get_repository(mockEnv.userName, mockEnv.repo)

        const response = global.testRequest.post('/git').send({userName: mockEnv.userName, repository: mockEnv.repo});
        console.log(response)
    })


    afterAll(async () => {
        await server.close()
        await dbHandler.closeDatabase()
    })
})