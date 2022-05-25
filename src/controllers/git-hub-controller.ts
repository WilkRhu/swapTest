import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { GitHubApiClient } from '../clients/git-hub-api-client';
import { GitHubService } from '../services/git-services';

@Controller('git')
export class GitHubController {
  @Post()
  public async getGitHubAPi(req: Request, resp: Response): Promise<any> {
    try {
      const { userName, repository }: { userName: string, repository: string } = req.body;
      const response = await new GitHubApiClient().responseClient(userName, repository)
      const saveResponse = await new GitHubService().saveOnDatabaseEnvWebHook(response)
      if(saveResponse) return resp.status(201).json(saveResponse);
    } catch (error) {
      return resp.status(400).json(`${error}`)
    }
  }
}
