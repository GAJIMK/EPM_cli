import {common} from '@/api/index';

function fetchPosition() {
  return common.get('/position');
}

export {fetchPosition};
