import { GitHubApi } from '@src/api/clients/git-hub-api';
import { ObjectId } from "mongoose";
import { getMongoRepository } from "typeorm";
import { GitHub } from "../entities/gitHub";
import { IGitHubService } from "./interfaces/git-hub-service-interface";

export class GitHubService implements IGitHubService {
    gitRepository = getMongoRepository(GitHub)
    public async create(userName: string, repository: string): Promise<GitHub> {
        const repo = await new GitHubApi().get_repository(userName, repository);
        const issues = await new GitHubApi().get_issues(userName, repository);
        const { contributors } = await new GitHubApi().get_contributors(userName, repository);
        const response = {
            ...repo,
            issues,
            contributors
        }
        return await this.gitRepository.save(response)
    }

    public async findOne(_id: ObjectId): Promise<GitHub[]> {
        return await this.findOne(_id)
    }
}
