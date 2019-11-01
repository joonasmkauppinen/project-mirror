import { login } from './apicall';
import JSONRLoginSuccess from '../interfaces/jsonrloginsuccess';
import JSONReqponse from '../interfaces/jsonresponse';

test('login-failure', done => {
  login('username', 'wrong-password').then((response: JSONReqponse) => {
    expect(response.success).toBe(false);
    done();
  });
});

test('login-success', done => {
  login('test', 'test').then((response: JSONRLoginSuccess) => {
    expect(response.success).toBe(true);
    expect(response.error).toBe(undefined);
    done();
  });
});
