export interface IHashProvider {
  generateRandom(): Promise<string>;
}
