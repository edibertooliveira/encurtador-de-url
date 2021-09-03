import { v4 as uuidv4 } from 'uuid';
import Url from '@modules/urls/infra/typeorm/entities/Url';
import { IUrlsRepository } from '@modules/urls/domain/repositories/IUrlsRepository';

export class UrlsRepositoryMake implements IUrlsRepository {
  private urls: Url[] = [];

  public async findByReference(reference: string): Promise<Url | undefined> {
    return this.urls.find(url => url.reference === reference);
  }

  public async save(url: Url): Promise<Url> {
    url.id = uuidv4();
    this.urls.push(url);
    return url;
  }
}
