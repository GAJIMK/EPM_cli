import { userFeeState } from '@/api/index'

//경지본부 기준, 사용자들 리스트 달별로 가져오기
function fetchUsersByMonth(date) {
  return userFeeState.get(`/findAllByDate?date=${date}`)
}
//조직장 기준, 사용자들 리스트 달별로 가져오기
function fetchUsersByMonthAndManager(date) {
  return userFeeState.get(`/manager/findAllByDate?date=${date}`)
}

//사용자 달별 승인상태 목록
function fetchUserMonthState(accountId) {
  return userFeeState.get(`/findAllByUser?accountId=${accountId}`)
}
//사용자 달별, 승인번호별 승인상태 목록
function fetchUserMonthAndLv(lv, date) {
  return userFeeState.get(`/findAllByLvAndDate?acceptLv=${lv}&date=${date}`)
}

function createUserFeeState(data) {
  return userFeeState.put('/', data)
}

function changeState(accountId, date, state) {
  return userFeeState.post(`/${accountId}/date/${date}/state/${state}`)
}
export {
  fetchUsersByMonth,
  fetchUsersByMonthAndManager,
  fetchUserMonthState,
  createUserFeeState,
  changeState,
  fetchUserMonthAndLv,
}
