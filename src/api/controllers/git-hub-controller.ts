import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { GitHubService } from '../services/git-services';

@Controller('git')
export class GitHubController {
  @Post('/')
  public async getGitHubAPi(req: Request, resp: Response): Promise<any> {
    try {
      const { userName, repository }: { userName: string, repository: string } = req.body;
      const response = await new GitHubService().create(userName, repository)
      return resp.status(201).json(response);
    } catch (error) {
      console.log(error)
      throw new Error('Error');
    }
  }
}
