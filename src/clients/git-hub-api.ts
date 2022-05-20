import { transformFirstData, transformIssues } from "@src/utils/transform-response-git";
import axios, { AxiosStatic } from "axios";
import { env } from "../../config/export-envs";

export class GitHubApi {
    constructor(protected request: AxiosStatic = axios) {}

    public async get_repository(userName: string, repo: string): Promise<object> {
        try {
            const { data } = await this.request.get(`${env.git}/${userName}/${repo}`)
            const response = await transformFirstData(data)
            return response

        } catch (error) {
              throw new Error('Error Api Git')
        }
    }

    public async get_issues(userName: string, repo: string): Promise<any> {
        try {
        const { data } = await this.request.get(`${env.git}/${userName}/${repo}/issues`)
        const response = await transformIssues(data)
        return response
        } catch (error) {
            throw new Error('Error Api Git Issues')
        }
    }
}