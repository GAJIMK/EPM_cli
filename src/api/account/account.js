import { account } from '@/api/index';

function accountInfo(accountId) {
  return account.get(`/findAll/${accountId}`);
}

export { accountInfo };
