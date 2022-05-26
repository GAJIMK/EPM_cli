import { userFeeList } from '@/api/index';

function fetchUserList(userId, date) {
  return userFeeList.get(`/findByAccountId?accountId=${userId}&date=${date}`);
}

export { fetchUserList };
