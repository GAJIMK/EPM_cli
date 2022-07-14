import { auth } from '@/api/index';

function login(data) {
  return auth.post('/login', data);
}

export { login };
