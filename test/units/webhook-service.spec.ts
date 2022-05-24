import { GitRepository } from '@src/api/repositories/git-repositories';
import { WebHookService } from '@src/api/services/webhook-services';
import { SetupServer } from '@src/server';
import { mockInsertWebHook } from '../mocks/gitMock';

describe('Unit test WebHook Service', () => {
  beforeAll(async () => {
    const server = new SetupServer();
    await server.init();
  });
  it('should return success', async () => {
    const gitRepository = new GitRepository();
    gitRepository.create(mockInsertWebHook);
    const response = await new WebHookService().insertFunctionWebhook(mockInsertWebHook);
    console.log(response);
  });
});
