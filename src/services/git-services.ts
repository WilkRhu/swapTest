import { GitRepository } from '@src/repositories/git-repositories';
import { IGitHubService } from './interfaces/git-hub-service-interface';

export class GitHubService implements IGitHubService {
  public gitRepository = new GitRepository();

  public async saveOnDatabaseEnvWebHook(data: any): Promise<any> {
    try {
      const saveDataBase = await this.gitRepository.create(data);
      return saveDataBase;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
