import { board } from '@/api/index';

function fetchBoardList() {
  return board.get(`/findAll`);
}

export { fetchBoardList };
