import { IHashProvider } from '@modules/urls/providers/HashProvider/models/IHashProvider';

export class HashProviderMake implements IHashProvider {
  generateRandom(): Promise<string> {
    return Promise.resolve('zg-bo');
  }
}
