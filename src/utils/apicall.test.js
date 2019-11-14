import { apiCall, login } from './apicall';

test('login-failure', done => {
  login('username', 'wrong-password').then(response => {
    expect(response.success).toBe(false);
    done();
  });
});

test('login-success', done => {
  login('test', 'test').then(response => {
    expect(response.success).toBe(true);
    expect(response.error).toBe(undefined);
    done();
  });
});

test('not-found-this-operation', done => {
  apiCall('not-found-this-oper')
    .then(response => {
      expect(response.success).toBe(false);
      done();
    })
    .catch(() => {
      expect(true).toBe(true);
      done();
    });
});
