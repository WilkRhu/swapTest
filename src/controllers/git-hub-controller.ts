import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';
import { GitHubApi } from '../clients/git-hub-api';
import { GitHub } from '../repositories/entities/gitHub';

@Controller('git')
export class GitHubController {
  @Post('/')
  public async getGitHubAPi(req: Request, resp: Response): Promise<any> {
    try {
      const { userName, repository }: { userName: string, repository: string } = req.body;
      const repo = await new GitHubApi().get_repository(userName, repository);
      const issues = await new GitHubApi().get_issues(userName, repository);
      const { contributors } = await new GitHubApi().get_contributors(userName, repository);
      const git = getMongoRepository(GitHub)
      const saveGit = await git.insert({
        ...repo,
         issues,
         contributors
      })
      const returnObject = await git.findBy(saveGit.identifiers[0]._id)
      // const git = await new GitHub({
      //   ...repo,
      //   issues,
      //   contributors
      // })
      // await new WebHookClient().insertWebHook(git)

      return resp.status(201).json(returnObject);
    } catch (error) {
      console.log(error)
      throw new Error('Error');
    }
  }
}
