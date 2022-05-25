import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Application } from 'express';
import * as http from 'http';
import '../src/utils/module-alias';
import { DbConnection } from './config/connection-typeorm';
import { App } from './config/export-envs';
import { GitHubController } from './controllers/git-hub-controller';
import { WebHookService } from './services/webhook-services';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

export class SetupServer extends Server {
  private server?: http.Server;

  constructor(
    private port = App.port
    ) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupController();
    await this.databaseSetup();
  }

  private setupExpress() {
    this.app.use(bodyParser.json());
  }

  public getApp(): Application {
    return this.app;
  }

  private async databaseSetup(): Promise<void> {
    await new DbConnection().connectionFunction();
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

  public async webHook(): Promise<void> {
    const webHookService = new WebHookService()
    return await webHookService.queueGitDatabase()
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
    this.webHook()
  }
}
