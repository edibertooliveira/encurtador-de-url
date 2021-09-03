import { container } from 'tsyringe';
import { IHashProvider } from '@modules/urls/providers/HashProvider/models/IHashProvider';
import { CriptoHashProvider } from '@modules/urls/providers/HashProvider/implementations/CriptoHashProvider';

container.registerSingleton<IHashProvider>('hashProvider', CriptoHashProvider);
