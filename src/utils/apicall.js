/*

     █████╗ ██████╗ ██╗ ██████╗ █████╗ ██╗     ██╗     
    ██╔══██╗██╔══██╗██║██╔════╝██╔══██╗██║     ██║     
    ███████║██████╔╝██║██║     ███████║██║     ██║     
    ██╔══██║██╔═══╝ ██║██║     ██╔══██║██║     ██║     
    ██║  ██║██║     ██║╚██████╗██║  ██║███████╗███████╗
    ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝
    
    ███ © 2019 Team Alpha █████████████████████████████
                                          
*/

import { setCookie, getCookie } from './cookies';

const BACKEND_API_URL = 'https://tucloud.fi/metropolia/peiliapi/';

let sessionChecked = false;
let sessionToken = '';
let sessionID = 0;

/* Get isSession value Boolean */
const isSession = () => {
  if (!sessionChecked) {
    sessionID = parseInt(getCookie('sessionID'), 10);
    sessionToken = getCookie('sessionToken');
  }
  return sessionToken !== '' ? true : false;
};

/* Convert ("Serialize") Object(any) {} to string. */
const serialize = obj => {
  const str = [];
  for (const p in obj)
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

/* Perform a Backend API Call */
const apiCall = async (operation, params = {}) => {
  return new Promise(resolve => {
    const dataParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    if (isSession()) {
      params.session_id = sessionID;
      params.token = sessionToken;
    }

    if (params !== {}) {
      dataParams.body = serialize(params);
    }

    try {
      fetch(BACKEND_API_URL + operation, dataParams)
        .then(r => r.json())
        .then(r => {
          if (r.success === false) {
            console.log(
              `[apiCall] WARNING: Call ${operation} failed. Error: ${r.error}`,
            );
          }
          resolve(r);
        });
    } catch (e) {
      resolve({ error: e, success: false });
    }
  });
};

/* Login Backend API Call with Cookie Storing automation */
const login = async (username, password) => {
  return new Promise(resolve => {
    apiCall('login', { username: username, password: password }).then(r => {
      if (r.success) {
        sessionToken = r.token;
        sessionID = r.session_id;
        sessionChecked = true;
        setCookie('sessionToken', sessionToken);
        setCookie('sessionID', sessionID.toString());
      }
      resolve(r);
    });
  });
};

/* Logout Backend API Call with Cookie Clearing automation */
const logout = async () => {
  return new Promise(resolve => {
    apiCall('logout').then(r => {
      if (r.success) {
        sessionToken = '';
        sessionID = 0;
        sessionChecked = true;
        setCookie('sessionToken', sessionToken);
        setCookie('sessionID', '0');
      }
      resolve(r);
    });
  });
};

export { apiCall, isSession, login, logout };
