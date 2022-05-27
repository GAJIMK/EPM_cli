import { board } from '@/api/index';

function fetchBoardList() {
  return board.get(`/findAll`);
}

function putBoardList(boardContent) {
  let data = {
    id: '10',
    date: '',
    content: boardContent.content,
    title: boardContent.title,
  };
  return board.put('/', data);
}

export { fetchBoardList, putBoardList };
