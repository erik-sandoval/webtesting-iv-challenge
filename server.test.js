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

  test('if user gets created', () => {
    return 
  });

  test('if user is deleted', () => {
    request(server)
      .post('/user')
      .send({ name: 'Erik' })
      .expect(201)
      .expect('Content-Type', /json/);

    return request(server)
      .delete('/user/1')
      .expect(200);

  });
  test('if user is not found', () => {
    return request(server)
      .delete('/user/2000')
      .expect(404);
  });
});
