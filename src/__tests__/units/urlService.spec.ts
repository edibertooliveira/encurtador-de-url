import 'reflect-metadata';
import { UrlService } from '@modules/urls/services/UrlService';
import { UrlsRepositoryMake } from '../mocks/UrlsRepositoryMake';
import { IUrlsRepository } from '@modules/urls/domain/repositories/IUrlsRepository';
import { HashProviderMake } from '../mocks/HashProviderMake';
import { IHashProvider } from '@modules/urls/providers/HashProvider/models/IHashProvider';
import Url from '@modules/urls/infra/typeorm/entities/Url';
import HandleError from '@shared/errors/HandleError';

describe('ListUsersService', () => {
  const url = new Url();
  let hashProviderMake: IHashProvider;
  let urlsRepositoryMake: IUrlsRepository;
  let urlService: UrlService;

  beforeEach(async () => {
    urlsRepositoryMake = new UrlsRepositoryMake();
    hashProviderMake = new HashProviderMake();
    urlService = new UrlService(urlsRepositoryMake, hashProviderMake);

    url.path = 'http://localhost.com';
    url.reference = 'zg-bt';
  });

  it('Será possível criar um encurtador com sucesso', async () => {
    const path = await urlService.createShortUrl({ path: url.path });
    expect(path).toHaveProperty('reference');
  });

  it('Será possível buscar um encurtador com sucesso', async () => {
    const { reference } = await urlService.createShortUrl({
      path: url.path,
    });
    const { path } = await urlService.findShortUrl({ reference });
    expect(path).toEqual(url.path);
  });

  it('Será impossível buscar um encurtador que não existe', async () => {
    await expect(async () => {
      await urlService.findShortUrl({ reference: url.reference });
    }).rejects.toBeInstanceOf(HandleError);
  });
});
