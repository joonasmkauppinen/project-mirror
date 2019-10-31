/*

    █████╗ ██████╗ ██╗ ██████╗ █████╗ ██╗     ██╗     
    ██╔══██╗██╔══██╗██║██╔════╝██╔══██╗██║     ██║     
    ███████║██████╔╝██║██║     ███████║██║     ██║     
    ██╔══██║██╔═══╝ ██║██║     ██╔══██║██║     ██║     
    ██║  ██║██║     ██║╚██████╗██║  ██║███████╗███████╗
    ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝
    
    By Team ALPHA for:
                    _
    Project    /\/\ (_)_ __ _ __ ___  _ __ 
              /    \| | '__| '__/ _ \| '__|
              / /\/\ \ | |  | | | (_) | |   
              \/    \/_|_|  |_|  \___/|_|   
                                          
*/

import JSONReqponse from '../interfaces/jsonresponse';
import LoginSuccess from '../interfaces/loginsuccess';

const BACKEND_API_URL = 'https://tucloud.fi/metropolia/peiliapi/';

let sessionChecked = false;
let sessionToken = '';
let sessionID = 0;

/* Save a Browser Cookie */
const setCookie = (cname: string, cvalue: string): void => {
  const d = new Date();
  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

/* Clear Browser Cookie */
const getCookie = (cname: string): string => {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

/* Get isSession value Boolean */
const isSession = (): boolean => {
  if (!sessionChecked) {
    sessionID = parseInt(getCookie('sessionID'), 10);
    sessionToken = getCookie('sessionToken');
  }
  return sessionToken !== '' ? true : false;
};

/* Convert ("Serialize") Object(any) {} to string. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const serialize = (obj: any): string => {
  const str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

/* Perform a Backend API Call */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const apiCall = async (operation: string, params: any = {}): Promise<any> => {
  return new Promise(resolve => {
    const dataParams: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    if (isSession()) {
      params.sessionID = sessionID;
      params.token = sessionToken;
    }

    if (params !== {}) {
      dataParams.body = serialize(params);
    }

    try {
      fetch(BACKEND_API_URL + operation, dataParams)
        .then(r => r.json())
        .then((r: JSONReqponse) => {
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
const login = async (
  username: string,
  password: string,
): Promise<LoginSuccess> => {
  return new Promise(resolve => {
    apiCall('login', { username: username, password: password }).then(
      (r: LoginSuccess) => {
        if (r.success) {
          sessionToken = r.token;
          sessionID = r.sessionID;
          sessionChecked = true;
          setCookie('sessionToken', sessionToken);
          setCookie('sessionID', sessionID.toString());
        }
        resolve(r);
      },
    );
  });
};

/* Logout Backend API Call with Cookie Clearing automation */
const logout = async (): Promise<JSONReqponse> => {
  return new Promise(resolve => {
    apiCall('logout').then((r: JSONReqponse) => {
      if (r.success) {
        sessionToken = '';
        sessionID = 0;
        sessionChecked = true;
        setCookie('sessionToken', sessionToken);
        setCookie('sessionID', sessionID.toString());
      }
      resolve(r);
    });
  });
};

export { apiCall, isSession, login, logout };
