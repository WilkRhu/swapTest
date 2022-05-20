import { Controller, Get } from "@overnightjs/core";
import { GitHubApi } from "@src/clients/git-hub-api";
import { Request, Response } from "express";

@Controller('git')
export class GitHubController {
    @Get('/:user_name/:repository')
    public async getGitHubAPi(req: Request, resp: Response): Promise<any> {
        try {
            const response = await new GitHubApi().get_api_git(req.params.user_name, req.params.repository);
            return resp.status(200).json(response)

        } catch (error) {
            throw new Error('Error')
        }
    }
}