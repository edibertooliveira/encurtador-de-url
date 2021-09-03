import request from 'supertest';
import { Connection, getConnection } from 'typeorm';
import createConnection from '@shared/typeorm';
import app from '@shared/api/app';
import Url from '@modules/urls/infra/typeorm/entities/Url';

describe('endpoint para acesso "/"', () => {
  let connection: Connection;
  const url = new Url();

  beforeAll(async () => {
    connection = await createConnection('test-app-ioasys');
    await connection.query('DROP TABLE IF EXISTS URL CASCADE');
    await connection.query('DROP TABLE IF EXISTS migrations CASCADE');

    await connection.runMigrations();
  });

  beforeEach(async () => {
    await connection.query('DELETE FROM URL CASCADE');
    await connection.query(
      `INSERT INTO URL (path, reference)
       values ('localhost.com', 'zg-bo')`,
    );
    url.path = 'localhost.com';
    url.reference = 'zg-bo';
  });

  afterAll(async () => {
    const mainConnection = getConnection();
    await connection.close();
    await mainConnection.close();
  });

  it('Será validado que retorna status 200', () => {
    request(app)
      .post('/')
      .then(response => expect(response.status).toEqual(200));
  });
});
