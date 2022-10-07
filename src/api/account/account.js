import {account, appoint} from '@/api/index';

function accountInfo(accountId) {
  return account.get(`/findAll/${accountId}`);
}

function accountTeamNo(accountId) {
  return appoint.get(`/findTeamNo?accountId=${accountId}`);
}

function accountTeamNm(accountId) {
  return appoint.get(`/findTeamNm?accountId=${accountId}`);
}

function changePw(data) {
  return account.post('/', data);
}

export {accountInfo, accountTeamNo , accountTeamNm, changePw};
