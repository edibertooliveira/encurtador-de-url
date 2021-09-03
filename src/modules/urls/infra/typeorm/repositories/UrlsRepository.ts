import { getRepository, Repository } from 'typeorm';
import Url from '../entities/Url';
import { IUrlsRepository } from '@modules/urls/domain/repositories/IUrlsRepository';

export class UrlsRepository implements IUrlsRepository {
  private ormRepository: Repository<Url>;

  constructor() {
    this.ormRepository = getRepository(Url);
  }

  public async findByReference(reference: string): Promise<Url | undefined> {
    return await this.ormRepository.findOne({
      where: {
        reference,
      },
    });
  }

  public async save(url: Url): Promise<Url> {
    return await this.ormRepository.save(url);
  }
}
