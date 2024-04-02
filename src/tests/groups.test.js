import supertest from 'supertest';
import server from '../server.js';

const requestWithSupertest = supertest(server);

describe('Groups endpoints', () => {
  it('GET /api/groups should return all groups', async () => {
    const res = await requestWithSupertest.get('/api/groups');

    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toBeDefined();
    expect(res.body.data).toBeDefined();
  });
});
