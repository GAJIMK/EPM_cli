import { userFeeState } from '@/api/index';

//경지본부 기준, 사용자들 리스트 달별로 가져오기
function fetchUsersByMonth(date) {
  return userFeeState.get(`/findAllByDate?date=${date}`);
}

//사용자 달별 승인상태 목록
function fetchUserMonthState(accountId) {
  return userFeeState.get(`/findAllByUser?accountId=${accountId}`);
}

function createUserFeeState(data) {
  return userFeeState.put('/', data);
}

function approveState(accountId, date) {
  return userFeeState.post(`/approve/${accountId}/date/${date}`);
}
function rejectState(accountId, date) {
  return userFeeState.post(`/reject/${accountId}/date/${date}`);
}
export {
  fetchUsersByMonth,
  fetchUserMonthState,
  createUserFeeState,
  approveState,
  rejectState,
};
