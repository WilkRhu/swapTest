import axios, { AxiosStatic } from "axios";
import { App } from "../../../config/export-envs";
import { GitHubApiService } from "../services/git-hub-api-services";
const { transformContributorsQuantityCommits, transformIssues, transformUseRepo } = new GitHubApiService()
export class GitHubApi {
    constructor(protected request: AxiosStatic = axios) {}

    public async get_repository(userName: string, repo: string): Promise<object> {
        try {
            const { data } = await this.request.get(`${App.git}/${userName}/${repo}`)
            const response = await transformUseRepo(data)
            return response

        } catch (error) {
              throw new Error('Error Api Git')
        }
    }

    public async get_issues(userName: string, repo: string): Promise<any> {
        try {
        const { data } = await this.request.get(`${App.git}/${userName}/${repo}/issues`)
        const response = await transformIssues(data)
        return response
        } catch (error) {
            throw new Error('Error Api Git Issues')
        }
    }

    public async get_contributors(userName: string, repo: string): Promise<any> {
        try {
        const { data } = await this.request.get(`${App.git}/${userName}/${repo}/contributors`)
        const response = await transformContributorsQuantityCommits(data)
        return {contributors: response}
        } catch (error) {
            throw new Error('Error Api Git Contributors')
        }
    }
}