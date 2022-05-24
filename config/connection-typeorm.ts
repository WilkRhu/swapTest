import { createConnection } from 'typeorm';
import { GitHub } from '../src/api/entities/gitHub';

export class DbConnection {
    constructor() {}
    public connection = async (): Promise<any> => {
       const connect = await createConnection({
            type: "mongodb",
            url: process.env.DATA_BASE,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            synchronize: true,
            logging: true,
            entities: [GitHub]
        })
        if(connect){
            console.log("connect db")
            return connect
        }
        console.log('error on connect')
    }

}
    