import { WebHookClient } from '@src/clients/webhook-client';
import { App } from '@src/config/export-envs';
import { GitRepository } from '@src/repositories/git-repositories';

export class WebHookService {
  webHookClient = new WebHookClient();
  gitRepository = new GitRepository();
  

  public autoInterval: any = setInterval(() => {
    this.queueGitDatabase()
  }, App.timeout)

  
  public async queueGitDatabase(): Promise<any> {
    const queueGitDatabase = await this.gitRepository.findAll();
    return await this.insertFunctionWebhook(queueGitDatabase);
  }

  public async insertFunctionWebhook(data: any): Promise<any> {
    const compare = await this.searchDateDataBase(data);
    const responseNoEnv: any[] = []
    compare.map(async (item: any, index: number) => (item > 0
      ?
      await this.webHookClient.sendWebHook(data[index]) &&
      await this.gitRepository.remove(data[index]._id) && console.log('env for webhook')
      : responseNoEnv.push('Sent to database wait 24 hours to be sent to webhook') 
    ));
    console.log(new Set([...responseNoEnv]))
  }

  public async searchDateDataBase(data: any): Promise<any> {
    const dataOnDatabase: any[] = [];
    await data.map((item: { created_at: any; }) => {
      dataOnDatabase.push(item.created_at);
    });
    
    return this.diffData(dataOnDatabase);
  }

  public diffData(data: any) {
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

