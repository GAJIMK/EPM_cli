import {board} from '@/api/index';

function fetchBoardList() {
  return board.get(`/findAll`);
}

function fetchBoardPage(page) {
  return board.get(`/findBypage?page=${page}`);
}

function fetchBoard(id) {
  return board.get(`/findById?id=${id}`);
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

export {fetchBoardList, putBoardList, fetchBoard, fetchBoardPage};
