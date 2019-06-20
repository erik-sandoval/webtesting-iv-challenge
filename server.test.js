const request = require('supertest');

const server = require('./server');

describe('POST /users', () => {
  test('if user gets created', () => {
    return request(server)
      .post('/user')
      .send({ name: 'Erik' })
      .expect(201)
      .expect('Content-Type', /json/);
  });
  test('if user is required', () => {
    return request(server)
      .post('/user')
      .send({ name: '' })
      .expect(400)
      .expect('Content-Type', /json/);
  });
});

describe('DELETE /users/:id', () => {
  test('if user is deleted', () => {
    return request(server)
      .delete('/user/1')
      .expect(200);
  });
});
