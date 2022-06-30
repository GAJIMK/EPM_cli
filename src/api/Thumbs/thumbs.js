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

export { putThumbs, fetchThumbsCnt };
