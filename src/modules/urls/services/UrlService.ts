import { inject, injectable } from 'tsyringe';
import { UrlsRepository } from '@modules/urls/typeorm/repositories/UrlsRepository';
import Url from '@modules/urls/typeorm/entities/Url';
import HandleError from '@shared/errors/HandleError';
import * as crypto from 'crypto';

@injectable()
export class UrlService {
  constructor(@inject('url') private urlRepository: UrlsRepository) {}

  public async createShortUrl(path: string) {
    const hash = crypto.randomBytes(2).toString('hex');
    const newUrl = new Url();
    newUrl.reference = hash;
    newUrl.path = path;
    const { reference } = await this.urlRepository.save(newUrl);
    return { url: `${process.env.APP_API_URL}/${reference}`, reference };
  }

  public async findShortUrl(reference: string) {
    const url = await this.urlRepository.findByReference(reference);
    console.log(url);
    if (!url) throw new HandleError('URL does not exist', 404);
    return url;
  }
}
