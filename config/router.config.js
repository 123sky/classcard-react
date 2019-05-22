export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/home', authority: ['admin', 'user'] },
      {
        path: '/home',
        name: '首页',
        icon: 'home',
        component: './Home/Home'
      },
      {
        path: '/media',
        name: '媒体内容',
        icon: 'alert',
        routes: [
          {
            path: '/media/album',
            name: '图片管理',
            icon: 'picture',
            component: './Media/Album/List',
          },
          {
            path: '/media/video',
            name: '视频管理',
            icon: 'video-camera',
            component: './Home/Home',
          },
          {
            path: '/media/notice',
            name: '通知管理',
            icon: 'notification',
            component: './Home/Home',
          },
          {
            path: '/media/news',
            name: '新闻管理',
            icon: 'read',
            component: './Home/Home',
          }
        ]
      },
      {
        path: '/attendance',
        name: '假勤管理',
        icon: 'carry-out',
        routes: [
          {
            path: '/attendance/check',
            name: '考勤管理',
            icon: 'calendar',
            component: './Home/Home',
          },
          {
            path: '/attendance/leave',
            name: '请假管理',
            icon: 'shaoping-cart',
            component: './Home/Home',
          }
        ]
      },
      {
        path: '/score',
        name: '成绩管理',
        icon: 'profile',
        component: './Home/Home'
      },
      {
        path: '/mode',
        name: '模式管理',
        icon: 'align-left',
        component: './Home/Home'
      },
      {
        path: '/setting',
        name: '系统定制',
        icon: 'setting',
        component: './Home/Home'
      }
    ]
  },
];
