import axios from 'axios';
// import { setInterceptors } from '@/api/common/interceptors';

axios.defaults.withCredentials = true;

// 일반적인 axios 인스턴스 사용시에 사용
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// request를 보내면서 항상 같이 보내야할 정보가 있는 경우에 사용 - userid
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstanceWithAuth('');
export const login = createInstanceWithAuth('login');
export const expense = createInstanceWithAuth('expense-list');

//export const [API_Name] = createInstanceWithAuth([API]);

// CREATE - project
// POST - project
// PUT - project {id}
// DELETE - project {id}
