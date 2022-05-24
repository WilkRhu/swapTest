export interface IWebHookService {
    postOnWebhook(data: object): Promise<string>;
    queueGitDatabase(_id: string): Promise<any>;
    recursiveFunctionWebHook(data: any): Promise<any>;
    searchDateDataBase(data: any): Promise<any>;
    diffData(data: any): {}
}
