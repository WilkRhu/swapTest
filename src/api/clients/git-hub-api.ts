import axios, { AxiosStatic } from 'axios';
import { App } from '../../../config/export-envs';
import { TransformDatasRepo } from '../../utils/transforms-datas-repo';

export class GitHubApiClient {
  constructor(
      protected request: AxiosStatic = axios,
      private readonly transformData = new TransformDatasRepo()
      ) { }

  public async get_repository(userName: string, repo: string): Promise<any> {
    try {
      const { data } = await this.request.get(`${App.git}/${userName}/${repo}`);
      const response = this.transformData.transformUseRepo(data);
      if (response) return response;
    } catch (error) {
      throw new Error(`Error Api Git ${error}`);
    }
  }

  public async get_issues(userName: string, repo: string): Promise<any> {
    try {
      const { data } = await this.request.get(`${App.git}/${userName}/${repo}/issues`);
      const response = this.transformData.transformIssues(data);
      if (response) return response;
    } catch (error) {
      throw new Error(`Error Api Git Issues ${error}`);
    }
  }

  public async get_contributors(userName: string, repo: string): Promise<any> {
    try {
      const { data } = await this.request.get(`${App.git}/${userName}/${repo}/contributors`);
      const response = this.transformData.transformContributorsQuantityCommits(data);
      if (response) return { contributors: response };
    } catch (error) {
      throw new Error(`Error Api Git Contributors ${error}`);
    }
  }

  public async responseClient(userName: string, repository: string): Promise<any> {
    try {
      const repo = await this.get_repository(userName, repository);
      const issues = await this.get_issues(userName, repository);
      const { contributors } = await this.get_contributors(userName, repository);
      const response = {
        ...repo,
        issues,
        contributors,
      };
      return response
    } catch (error) {
      throw new Error("Error api github");
      
    }
  }
}
