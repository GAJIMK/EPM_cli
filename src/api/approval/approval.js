import { approve } from '@/api/index';

function fetchStep(teamNo) {
  return approve.get(`/${teamNo}`);
}

export { fetchStep };
