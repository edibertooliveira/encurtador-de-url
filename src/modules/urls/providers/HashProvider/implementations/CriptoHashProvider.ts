import * as crypto from 'crypto';
import { IHashProvider } from '@modules/urls/providers/HashProvider/models/IHashProvider';

export class CriptoHashProvider implements IHashProvider {
  async generateRandom(): Promise<string> {
    return crypto.randomBytes(2).toString('hex').substr(0, 4);
  }
}
