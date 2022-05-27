
import { GitRepository } from '../../src/repositories/git-repositories';
import * as dbHandler from '../db';
import { mockInsertWebHook } from '../mocks/gitMock';
jest.setTimeout(5000)


beforeAll(async () => {
    await dbHandler.connect();
});

afterEach(async () => {
    await dbHandler.clearDatabase()
});

afterAll(async () => {
    await dbHandler.closeDatabase()
});

describe('Test gitRepository', () => {
    it('should success create on repository gitHub', async () => {
        const response = await new GitRepository().create(mockInsertWebHook)  
        expect(response.user).toBe(mockInsertWebHook.user)
        expect(response.repository).toBe(mockInsertWebHook.repository)
    });

    it('should success on findAll on repository gitHub', async () => {
        const gitCreate = await new GitRepository().create(mockInsertWebHook) 
        const response = await new GitRepository().findAll()
        expect(response[0].user).toBe(gitCreate.user)
        expect(response[0].repository).toBe(gitCreate.repository)
    });

    it('should success remove git repository', async () => {
        const gitCreate  = await new GitRepository().create(mockInsertWebHook) 
        const remove = await new GitRepository().remove(gitCreate._id)
        expect(remove).toStrictEqual({ acknowledged: true, deletedCount: 1 })
    })
});