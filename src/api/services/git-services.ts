import { GitHubApiClient } from '@src/api/clients/git-hub-api';
import { ObjectId } from 'mongoose';
import { GitHub } from '../entities/gitHub';
import { GitRepository } from '../repositories/git-repositories';
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
