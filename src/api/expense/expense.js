import { expense } from '@/api/index';

function createExpense(data) {
  return expense.put(data);
}

function fetchExpense() {}

export default { createExpense, fetchExpense };
