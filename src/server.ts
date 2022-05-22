import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import "dotenv/config";
import { Application } from 'express';
import * as http from 'http';
import { DbConnection } from '../config/connection-typeorm';
import { App } from '../config/export-envs';
import { GitHubController } from './git/controllers/git-hub-controller';
import "./utils/module-alias";

export class SetupServer extends Server {
    private server?: http.Server
    
    constructor(private port = App.port) {
        super();
    }

    public async init(): Promise<void> {
        this.setupExpress();
        this.setupController();
        this.databaseSetup();
    }

    private setupExpress() {
        this.app.use(bodyParser.json())
    }

    public getApp(): Application {
        return this.app
    }

    private async databaseSetup(): Promise<void> {
      await new DbConnection().connection()
    }

    public setupController(): void {
        const gitHubController = new GitHubController();
        this.addControllers([gitHubController])
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

    public start(): void {
        this.server = this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port)
        })
    }
}