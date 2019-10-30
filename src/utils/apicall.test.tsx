import { login } from './apicall'

test('login-failure', done => {
  login('username', 'wrong-password').then((response: any) => {
    expect(response.success).toBe(false);
    done();
  })
});

test('login-success', done => {
  login('test', 'test').then((response: any) => {
    expect(response.success).toBe(true);
    expect(response.error).toBe(undefined);
    done();
  })
});
