import { GitHub } from '@src/entities/gitHub';
import { ObjectId } from 'mongoose';

export interface IGitHubService {
    saveOnDatabaseEnvWebHook(userName: string, repository: string): Promise<string>;
    findOne(_id: ObjectId): Promise<GitHub[]>
}