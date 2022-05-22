import { getConnectionManager } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { GitHub } from '../src/git/entities/gitHub';
import { App } from './export-envs';

let connectManage = getConnectionManager()
const options: MongoConnectionOptions = {
    type: "mongodb",
    url: App.urlDatabase,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: true,
    entities: [GitHub]
}

export class DbConnection {
    public connection = async (): Promise<void> => {
        const connection = connectManage.create(options)
        await connection.connect();
        console.log('Connect database')
    }
    public disconnectDb = async (): Promise<any> => {
        const desConnect = connectManage.create(options)
        await desConnect.close()
        console.log('Disable connections on database')
    }

}
    