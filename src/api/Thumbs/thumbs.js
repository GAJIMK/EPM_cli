import { thumbs } from '@/api/index';

function putThumbs(thumbsContent) {
  let data = {
    id: thumbsContent.id,
    accountId: thumbsContent.accountId,
  };
  return thumbs.put('/', data);
}

function fetchThumbsCnt(id) {
  return thumbs.get(`/countById?id=${id}`);
}

function fetchThumbstop5() {
  return thumbs.get(`/selectTop5`);
}

export { putThumbs, fetchThumbsCnt, fetchThumbstop5 };
