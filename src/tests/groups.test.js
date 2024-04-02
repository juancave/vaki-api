import supertest from 'supertest';
import server from '../server.js';

const requestWithSupertest = supertest(server);

const URL = '/api/groups';

describe('Groups endpoints', () => {
  it('GET /api/groups should return 404', async () => {
    const res = await requestWithSupertest.get(URL);

    expect(res.status).toEqual(404);
  });

  it('GET /api/groups/100 should return 404', async () => {
    const res = await requestWithSupertest.get('/api/groups/100');

    expect(res.status).toEqual(404);
  });

  it('POST /api/groups should create a new group', async () => {
    const body = {
      name: 'Group example',
      color: '#FFF',
    };

    const res = await requestWithSupertest.post(URL).send(body);

    expect(res.status).toEqual(200);
  });

  it('POST /api/groups should thrown an exception when the body is not valid', async () => {
    const body = {};

    const res = await requestWithSupertest.post(URL).send(body);

    expect(res.status).toEqual(400);
  });

  it('POST /api/groups should thrown an exception when an existing group name is provided', async () => {
    const body = {
      name: 'Existing group',
      color: '#FFF',
    };

    const res = await requestWithSupertest.post(URL).send(body);

    expect(res.status).toEqual(200);

    const existingRes = await requestWithSupertest.post(URL).send(body);

    expect(existingRes.status).toEqual(409);
  });

  it('GET /api/groups should return all groups', async () => {
    const body = {
      name: 'Group example 2',
      color: '#FFF',
    };

    const createRes = await requestWithSupertest.post(URL).send(body);

    expect(createRes.status).toEqual(200);

    const res = await requestWithSupertest.get(URL);

    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toBeDefined();
    expect(res.body.data.length).not.toBe(0);
  });
});
