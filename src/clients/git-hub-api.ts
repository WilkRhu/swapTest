import axios, { AxiosStatic } from "axios";
import { env } from "../../config/export-envs";

export class GitHubApi {
    constructor(protected request: AxiosStatic = axios) {}

    public async get_api_git(userName: string, repository: string): Promise<void> {
        try {
            const response = await this.request.get(`${env.git}/${userName}/${repository}`)
            return response.data
        } catch (error) {
              throw new Error('Error Api')
        }
    }
}