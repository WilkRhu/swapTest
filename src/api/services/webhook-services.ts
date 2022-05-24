import { App } from '../../../config/export-envs';
import { WebHookClient } from '../clients/webhook-client';
import { GitRepository } from '../repositories/git-repositories';

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
    compare.map(async (item: any, index: number) => (item >= 1
      ?
      await this.webHookClient.sendWebHook(data[index]) &&
      await this.gitRepository.remove(data[index]._id) && console.log('env for webhook')
      : console.log('Sent to database wait 24 hours to be sent to webhook') 
    ));
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
    data.map((item: string) => {
      const dataDb = Date.parse(item);
      const actualDate: any = new Date();
      response.push(Math.floor((actualDate - dataDb) / 1000 * 60 * 60 * 24));
    });
    return response;
  }
}

