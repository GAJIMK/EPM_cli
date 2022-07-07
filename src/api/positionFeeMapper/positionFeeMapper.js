import { positionFee } from '@/api/index';
import { DxCommonSeriesSettingsHoverStyle } from 'devextreme-vue/range-selector';

function fetchAllList() {
  return positionFee.get('/findAll');
}

function createList(data) {
  return positionFee.put('/', data);
}

function updateList(data) {
  return positionFee.post('/', data);
}

function fetchPositionList(data) {
  return positionFee.get(`findByPosition?positionCode=${data}`);
}
export { fetchAllList, updateList, createList, fetchPositionList };
