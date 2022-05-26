
export interface IGitHubService {
    saveOnDatabaseEnvWebHook(data: string[]): Promise<string[]>;
}
