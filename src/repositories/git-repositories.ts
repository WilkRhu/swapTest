import { ObjectId } from 'bson';
import { GitHub } from '../model/git-hub-model';
import { GitDto } from './dto/git-dto';

export class GitRepository {

  public async create(data: GitDto): Promise<GitHub> {
    const git = new GitHub(data)
    return await git.save()
  }

  public async findAll(): Promise<GitHub[]> {
    return await GitHub.find()
  }

  public async remove(_id: ObjectId): Promise<any> {
    return await GitHub.remove(_id);
  }
}
