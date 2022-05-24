import { getRepository } from 'typeorm';
import { GitHub } from '../entities/gitHub';

export class GitRepository {
  gitRepository = getRepository(GitHub);

  public async create(data: any): Promise<any> {
    return await this.gitRepository.save(data);
  }

  public async findAll(): Promise<GitHub[]> {
    return await this.gitRepository.find();
  }

  public async remove(_id: string): Promise<any> {
    return await this.gitRepository.delete(_id);
  }
}
