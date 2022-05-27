
export interface IGitHubService {
    saveOnDatabaseEnvWebHook(data: object): Promise<object>;
}
