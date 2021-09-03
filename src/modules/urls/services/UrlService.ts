import { inject, injectable } from 'tsyringe';
import Url from '@modules/urls/infra/typeorm/entities/Url';
import HandleError from '@shared/errors/HandleError';
import { ICreateUrl } from '@modules/urls/domain/model/ICreateUrl';
import { IFindUrl } from '@modules/urls/domain/model/IFindUrl';
import { IUrlsRepository } from '@modules/urls/domain/repositories/IUrlsRepository';
import { IHashProvider } from '@modules/urls/providers/HashProvider/models/IHashProvider';

@injectable()
export class UrlService {
  constructor(
    @inject('url') private urlRepository: IUrlsRepository,
    @inject('hashProvider') private hashProvider: IHashProvider,
  ) {}

  public async createShortUrl({ path }: ICreateUrl) {
    const hash = await this.hashProvider.generateRandom();
    const newUrl = new Url();
    newUrl.reference = hash;
    newUrl.path = path;
    const { reference } = await this.urlRepository.save(newUrl);
    return { url: `${process.env.APP_API_URL}/${reference}`, reference };
  }

  public async findShortUrl({ reference }: IFindUrl) {
    const url = await this.urlRepository.findByReference(reference);
    if (!url) throw new HandleError('URL does not exist', 404);
    return url;
  }
}
