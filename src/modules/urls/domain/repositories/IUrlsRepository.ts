import { IUrl } from '@modules/urls/domain/model/IUrl';
import Url from '@modules/urls/infra/typeorm/entities/Url';

export interface IUrlsRepository {
  findByReference(reference: string): Promise<IUrl | undefined>;
  save(url: Url): Promise<Url>;
}
