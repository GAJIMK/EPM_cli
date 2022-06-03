import { userFeeList } from '@/api/index';

function fetchUserList(userId, date) {
  return userFeeList.get(`/findByAccountId?accountId=${userId}&date=${date}`);
}

function fetchUserAllList(userId) {
  return userFeeList.get(`/findAll?accountId=${userId}`);
}

export { fetchUserList, fetchUserAllList };
