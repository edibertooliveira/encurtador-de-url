import { container } from 'tsyringe';
import { UrlsRepository } from '@modules/urls/infra/typeorm/repositories/UrlsRepository';
import '@modules/urls/providers/HashProvider';

container.registerSingleton<UrlsRepository>('url', UrlsRepository);
