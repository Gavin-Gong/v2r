// import fetch from 'whatwg-fetch';

// /**
//  * @description 封装fetch
//  * @param params
//  */
// const beforeRequest = (req: object) => {};

// const afterRequest = (res: object) => {};

// let request = (url: string, params: object) => {
//   beforeRequest(url);
//   return fetch(url, {
//     method: 'GET',
//     ...params
//   }).then((res: any) => {
//     afterRequest(res);
//     return res.json(res);
//   });
// };