import { submitDay } from '@/api/index';

function putDay(data) {
  return submitDay.put('/', data);
}

function fetchBoardDay() {
  return submitDay.get(`/findAll`);
}

export { putDay, fetchBoardDay };
