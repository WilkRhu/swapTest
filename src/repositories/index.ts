import { createConnection } from 'typeorm';
import { GitHub } from './entities/gitHub';

export class DbConnection {
    constructor() {}
    public connection =  () => {
        createConnection({
            type: "mongodb",
            url: process.env.DATA_BASE,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            synchronize: true,
            logging: true,
            entities: [GitHub]
        }).then(() => console.log('connected to db'))
        .catch((error) => console.log(error))
    }
}
    