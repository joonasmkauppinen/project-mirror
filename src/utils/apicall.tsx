interface JSONReqponse {
  success: boolean,
  error?: string,
}

const BACKEND_API_URL = 'https://tucloud.fi/metropolia/peiliapi/';

var session_checked = false;
var session_token = '';
var session_id = '';


/* Convert ("Serialize") Object(any) {} to string. */
const serialize = (obj: any) : string => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}


/* Perform a Backend API Call */
const apiCall = async (operation: string, params: any = {}) => {

  return new Promise((resolve, reject) => {

    const dataParams : RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };

    if (isSession()) {
      params.session_id = session_id;
      params.token = session_token;
    }

    if (params !== {}) {
      dataParams.body = serialize(params);
    }

    try {
      fetch(BACKEND_API_URL + operation, dataParams)
      .then((r) => r.json())
      .then((r: JSONReqponse) => {
        if (r.success === false) {
          console.log(`[apiCall] WARNING: Call ${operation} failed. Error: ${r.error}`);
        }
        resolve(r);
      });
    } catch (e) {
      resolve({error: e, success: false});
    }

  });

}

/* Save a Browser Cookie */
const setCookie = (cname: string, cvalue: string) => {
  var d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


/* Clear Browser Cookie */
const getCookie = (cname: string) : string => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
  }


/* Login Backend API Call with Cookie Storing automation */
const login = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    apiCall('login', {username: username, password: password}).then((r: any) => {
      if (r.success) {
        session_token = r.token;
        session_id = r.session_id;
        session_checked = true;
        setCookie('session_token', session_token);
        setCookie('session_id', session_id);        
      }
      resolve(r);
    })
  });
}

/* Logout Backend API Call with Cookie Clearing automation */
const logout = async () => {
  return new Promise((resolve, reject) => {
    apiCall('logout').then((r: any) => {
      if (r.success) {
        session_token = '';
        session_id = '';
        session_checked = true;
        setCookie('session_token', session_token);
        setCookie('session_id', session_id);
      }
      resolve(r);
    })
  });
}


/* Get isSession value Boolean */
const isSession = () : boolean => {
  if (!session_checked) {
    session_id    = getCookie('session_id');
    session_token = getCookie('session_token');
  }
  return (session_token !== '' ? true : false);
}

export {apiCall, isSession, login, logout};