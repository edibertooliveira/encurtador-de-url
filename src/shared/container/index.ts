import { container } from 'tsyringe';
import { UrlsRepository } from '@modules/urls/typeorm/repositories/UrlsRepository';

container.registerSingleton<UrlsRepository>('url', UrlsRepository);
