import { getConnectionManager } from 'typeorm';
import { GitHub } from '../entities/gitHub';
import { App } from './export-envs';

export class DbConnection {
    constructor(
        private connectionMange = getConnectionManager()
    ){}

    connection = this.connectionMange.create({
        type: "mongodb",
        url: App.urlDatabase,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        synchronize: true,
        logging: true,
        entities: [GitHub]
    })

    public connectionFunction = async (): Promise<any> => {
        console.log('connect db')
        await this.connection.connect() 
    }

    public desConnectFunction = async (): Promise<void> => {
        console.log('disconnect db')
        await this.connection.close()
    }

}
    