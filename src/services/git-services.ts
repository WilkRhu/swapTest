import { GitHubApiClient } from '@src/clients/git-hub-api-client';
import { GitHub } from '@src/entities/gitHub';
import { GitRepository } from '@src/repositories/git-repositories';
import { ObjectId } from 'mongoose';
import { IGitHubService } from './interfaces/git-hub-service-interface';
import { WebHookService } from './webhook-services';

export class GitHubService implements IGitHubService {
    constructor(
        public gitRepository = new GitRepository(),
        public webHookService = new WebHookService(),
        public gitHubApiClient = new GitHubApiClient()
    ) {
        this.gitRepository = gitRepository;
        this.webHookService = webHookService;
        this.gitHubApiClient = gitHubApiClient
    }

  public async saveOnDatabaseEnvWebHook(data: any): Promise<any> {
    try {
      const saveDataBase = await this.gitRepository.create(data);
      return saveDataBase;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async findOne(_id: ObjectId): Promise<GitHub[]> {
    return await this.findOne(_id);
  }
}
