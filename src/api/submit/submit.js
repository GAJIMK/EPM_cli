import { submitDay } from '@/api/index';

function putDay(submitContent) {
  let data = {
    startDay: submitContent.startDay,
    endDay: submitContent.endDay,
  };
  return submitDay.put('/', data);
}

export { putDay };
