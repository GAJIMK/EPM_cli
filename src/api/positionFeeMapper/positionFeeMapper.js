import { positionFee } from '@/api/index';
import { DxCommonSeriesSettingsHoverStyle } from 'devextreme-vue/range-selector';

function fetchAllList() {
  return positionFee.get('/findAll');
}

function createList(data) {
  return positionFee.put('/', data);
}

function updateList(data) {
  console.log('넘어옴');
  return positionFee.post('/', data);
}
export { fetchAllList, updateList };
