import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { GitHubApi } from '../clients/git-hub-api';

@Controller('git')
export class GitHubController {
  @Post('/')
  public async getGitHubAPi(req: Request, resp: Response): Promise<any> {
    try {
      const { userName, repository }:{userName: string, repository: string} = req.body;
      const repo = await new GitHubApi().get_repository(userName, repository);
      const issues = await new GitHubApi().get_issues(userName, repository);
      const {contributors} = await new GitHubApi().get_contributors(userName, repository);

      return resp.status(200).json({
        ...repo,
        issues,
        contributors,
      });
    } catch (error) {
      throw new Error('Error');
    }
  }
}
