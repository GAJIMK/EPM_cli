import {auth} from '@/api/index';

function login(data) {
  return auth.post('/login', data);
}

function getInfo(accountId) {
  return auth.get(`/findById?accountId=${accountId}`);
}


export {login , getInfo};
