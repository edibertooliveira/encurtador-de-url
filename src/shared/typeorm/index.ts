import 'dotenv/config';
import { createConnection, getConnectionOptions, Connection } from 'typeorm';
export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const NODE_ENV = process.env.NODE_ENV;
  return createConnection(
    Object.assign(defaultOptions, {
      name,
      url:
        NODE_ENV === 'test'
          ? process.env.DATABASE_URL_TEST
          : process.env.DATABASE_URL,
    }),
  );
};
