import { GitHub } from "@src/api/entities/gitHub";
import { ObjectId } from "mongoose";

export interface IGitHubService {
    create(userName: string, repository: string): Promise<GitHub>;
    findOne(_id: ObjectId): Promise<GitHub[]>
}