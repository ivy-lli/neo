const headers: HeadersInit = { 'X-Requested-With': 'neo', Authorization: btoa('Basic Developer:Developer') };

const BASE = 'http://localhost:3000/';
// const BASE = 'http://localhost:8081/api/web-ide/';
// const BASE = 'http://192.168.3.88:8082/api/web-ide/';

export const get = (url: string) => {
  // const r = new Request(`${BASE}${url}`);
  // r.headers.append('X-Requested-By', 'neo');
  // const h = new Headers();
  // h.append('X-Requested-By', 'neo');
  // h.append('Authorization', btoa('Developer:Developer'));
  // h.append('Origin', 'http://localhost');
  return fetch(`${BASE}${url}`, { headers });
};
