import { expenseList } from '@/api/index';

function createExpense(data) {
  return expenseList.put('/', data);
}

function fetchExpense() {
  return expenseList.get('/');
}

function updateExpense(data) {
  return expenseList.post('/', data);
}
export { createExpense, fetchExpense, updateExpense };
