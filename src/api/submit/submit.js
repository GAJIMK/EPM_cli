import { submitDay } from '@/api/index';

function putDay(submitContent) {
  let data = {
    startDay: submitContent.printSday,
    endDay: submitContent.printEday,
    totalDay: submitContent.totalDay,
  };
  return submitDay.put('/', data);
}

export { putDay };
