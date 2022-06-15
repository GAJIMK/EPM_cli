import { userFeeList } from '@/api/index';

function fetchUserList(userId, date) {
  return userFeeList.get(`/findByAccountId?accountId=${userId}&date=${date}`);
}
function fetchPartList(userId, date, part) {
  return userFeeList.get(
    `/findByPartId?accountId=${userId}&date=${date}&part=${part}`,
  );
}

function fetchUserAllList(userId) {
  return userFeeList.get(`/findAll?accountId=${userId}`);
}

function createList(data) {
  return userFeeList.put(`/`, data);
}

function updateList(data) {
  return userFeeList.post('/', data);
}

function deleteList(id) {
  return userFeeList.delete(`/${id}`);
}
export {
  fetchUserList,
  fetchPartList,
  fetchUserAllList,
  createList,
  updateList,
  deleteList,
};
