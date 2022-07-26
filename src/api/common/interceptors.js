// import store from '@/store/index';
import {router} from '@/router/index';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      // config.headers.Userid = store.state.userid;
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      let {data} = error.response;
      if (data.code === 101) {
        // 세션이 종료된 경우 로그아웃 처리후 로그인 화면으로 이동한다.
        store.dispatch('LOGOUT').then(function(data) {
          if (data && data.hasOwnProperty('data') && data.data.code === 102)
            router.push('login');
        });
      } else if (data.code === 205) {
        router.push('bad-request');
      }

      return Promise.reject(error);
    },
  );
  return instance;
}
