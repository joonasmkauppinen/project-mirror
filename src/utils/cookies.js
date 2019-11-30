/*

     ██████╗ ██████╗  ██████╗ ██╗  ██╗██╗███████╗███████╗
    ██╔════╝██╔═══██╗██╔═══██╗██║ ██╔╝██║██╔════╝██╔════╝
    ██║     ██║   ██║██║   ██║█████╔╝ ██║█████╗  ███████╗
    ██║     ██║   ██║██║   ██║██╔═██╗ ██║██╔══╝  ╚════██║
    ╚██████╗╚██████╔╝╚██████╔╝██║  ██╗██║███████╗███████║
     ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝                                                   
    
    ███ © 2019 Team Alpha ██████████████████████████████
                                          
*/

/* Delete Stored Cookie */
const deleteCookie = cname => {
  setCookie(cname, '', -1);
};

/* Save a Browser Cookie */
const setCookie = (cname, cvalue, ctime = 2592000000) => {
  const d = new Date();
  d.setTime(d.getTime() + ctime);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

/* Get a Stored Browser Cookie */
const getCookie = cname => {
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

export { deleteCookie, setCookie, getCookie };
