import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Application } from 'express';
import * as http from 'http';
import { App } from './config/export-envs';
import { GitHubController } from './controllers/git-hub-controller';
import * as database from './database';
import { WebHookService } from './services/webhook-services';
import './utils/module-alias';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

export class SetupServer extends Server {
  private server?: http.Server;

  constructor(
    private port = App.port,
    ) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupController();
    await this.databaseSetup();
    this.webHook()
  }

  private setupExpress() {
    this.app.use(bodyParser.json());
  }

  public getApp(): Application {
   
      return this.app;
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  public setupController(): void {
    const gitHubController = new GitHubController();
    this.addControllers([gitHubController]);
  }

  public async close(): Promise<void> {
    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server?.close((err) => {
          if (err) {
            return reject(err);
          }
          resolve(true);
        });
      });
    }
  }

  public async webHook(): Promise<any> {
    return await new WebHookService().queueGitDatabase()
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}
