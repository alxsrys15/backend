const request = require('supertest');

const app = require('../../../index')

describe('User settings endpoint', () => {
  it('should return a user setting', async () => {
    const response = await request(app).get('/user/1/settings');
    expect(response.statusCode).toBe(200);
  });
  it('should be able to update or create a setting', async () => {
    const body = {
      preferredTheme: 'system',
      resultsPerPage: 20,
      sendEmail: true,
    };

    const response = await request(app).post('/user/2/settings').send(body);

    expect(response.statusCode).toBe(200)

  });
});
