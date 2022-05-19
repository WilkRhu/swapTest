import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import "dotenv/config";
import { Application } from 'express';
import * as http from 'http';

export class SetupServer extends Server {
    private server?: http.Server
    
    constructor(private port = process.env.PORT) {
        super();
    }

    public init(): void {
        this.setupExpress();
    }

    private setupExpress() {
        this.app.use(bodyParser.json())
    }

    public getApp(): Application {
        return this.app
    }

    public start(): void {
        this.server = this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port)
        })
    }
}