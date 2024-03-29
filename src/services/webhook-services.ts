import { WebHookClient } from '../../src/clients/webhook-client';
import { App } from '../../src/config/export-envs';
import { GitRepository } from '../../src/repositories/git-repositories';

export class WebHookService {
  public webHookClient = new WebHookClient();
  public gitRepository = new GitRepository();

  

  public autoInterval: any = setInterval(() => {
    this.queueGitDatabase()
  }, App.timeout)

  
  public async queueGitDatabase(): Promise<any> {
    const queueGitDatabase = await this.gitRepository.findAll();
    return await this.insertFunctionWebhook(queueGitDatabase);
  }

  public async insertFunctionWebhook(data: any): Promise<void> {
    const compare = await this.searchDateDataBase(data);
    const responseNoEnv: any[] = []
    compare.map(async (item: any, index: number) => (item > 0
      ?
      await this.webHookClient.sendWebHook(data[index]) &&
      await this.gitRepository.remove(data[index]._id) &&  console.log({message: 'env for webhook'})
      : responseNoEnv.push(`have ${compare.length} item queued to send directly to webhook`) 
    ));
    console.log({message: new Set([...responseNoEnv])})
  }

  public async searchDateDataBase(data: any): Promise<number[]> {
    const dataOnDatabase: string[] = [];
    await data.map((item: { createdAt: any; }) => {
      dataOnDatabase.push(item.createdAt);
    });
    
    return this.diffData(dataOnDatabase);
  }

  public diffData(data: string[]): number[] {
    const response: any[] = [];
    const divider = 1000 * 60 * 60 * 24
    data.map((item: string) => {
      const dataDb = Date.parse(item);
      const actualDate: any = new Date();
      response.push(Math.floor((actualDate - dataDb) / divider));
    });
    return response;
  }
}

