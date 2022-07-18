import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    //로그인 시 대체
    // { path: "/", redirect: "/login" },
    { path: '/', redirect: '/home' },

    {
      path: '/home',
      name: 'home',
      meta: { layout: 'default' },
      component: () => import('@/view/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('@/view/Login.vue'),
    },

    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('@/components/common/SignUp.vue'),
    },
    {
      path: '/expense-list',
      name: 'expenseList',
      component: () =>
        import('@/components/management/expense/ExpenseListPage.vue'),
    },
    {
      path: '/user',
      name: 'user',
      meta: { layout: 'default' },
      component: () => import('@/view/user/UserPage.vue'),
    },
    {
      path: '/user-write',
      name: 'userWrite',
      meta: { layout: 'default' },
      component: () => import('@/view/user/UserWrite.vue'),
    },
    {
      path: '/approval',
      name: 'approval',
      meta: { layout: 'default' },
      component: () => import('@/view/user/ApprovalPage.vue'),
    },
    {
      path: '/notice-board',
      name: 'noticeBoard',
      meta: { layout: 'default' },
      component: () => import('~/src/view/notice/boardList.vue'),
    },
    {
      path: '/notice-board-upload',
      name: 'noticeBoardUpload',
      meta: { layout: 'default' },
      component: () => import('~/src/view/notice/boardUpload.vue'),
    },
    {
      path: '/bill',
      name: 'bill',
      meta: { layout: 'empty' },
      component: () => import('~/src/components/common/Bill.vue'),
    },
    {
      path: '/myPage',
      name: 'myPage',
      meta: { layout: 'default' },
      component: () => import('@/view/myPage.vue'),
    },
    {
      path: '/board-content',
      name: 'boardcontent',
      meta: { layout: 'default' },
      component: () => import('@/view/notice/boardcontent.vue'),
    },

    {
      path: '/grade-manage',
      name: 'grade',
      meta: { layout: 'default' },
      component: () => import('@/view/grade/GradePage.vue'),
    },

    {
      path: '/users-expense/:date',
      name: 'usersExpense',
      component: () => import('@/components/management/UsersExpensePage'),
    },
    {
      path: '/read-expense',
      name: 'userPersonal',
      component: () => import('@/components/PersonalFee/PersonalFeePage.vue'),
    },
    {
      path: '/submit-day',
      name: 'submitDay',
      component: () => import('@/view/SubmitDay.vue'),
    },
  ],
});
