
export interface IGitHubService {
    saveOnDatabaseEnvWebHook(userName: string, repository: string): Promise<string>;
}
