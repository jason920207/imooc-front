import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import store from './store'

const Login = () => import(/* webpackChunkName: 'login' */ './views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */ './views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'forget' */ './views/Forget.vue')
const Index = () => import(/* webpackChunkName: 'index' */ './views/channels/index.vue')
const Template1 = () => import(/* webpackChunkName: 'template1' */ './views/channels/Template1.vue')
const Center = () => import(/* webpackChunkName: 'template1' */ './views/Center.vue')
const UserCenter = () => import(/* webpackChunkName: 'user-center' */ './components/user/Center.vue')
const Settings = () => import(/* webpackChunkName: 'settings' */ './components/user/Settings.vue')
const Posts = () => import(/* webpackChunkName: 'user-post' */ './components/user/Posts.vue')
const Msg = () => import(/* webpackChunkName: 'user-post' */ './components/user/Msg.vue')
const Others = () => import(/* webpackChunkName: 'others' */ './components/user/Others.vue')
const User = () => import(/* webpackChunkName: 'others' */ './views/User.vue')

const MyInfo = () => import(/* webpackChunkName: 'myinfo' */ './components/user/common/MyInfo.vue')
const PicUpload = () => import(/* webpackChunkName: 'picupload' */ './components/user/common/PicUpload.vue')
const Password = () => import(/* webpackChunkName: 'password' */ './components/user/common/Password.vue')
const Accounts = () => import(/* webpackChunkName: 'accounts' */ './components/user/common/Accounts.vue')
const MyPost = () => import(/* webpackChunkName: 'mypost' */ './components/user/common/MyPost.vue')
const MyCollection = () => import(/* webpackChunkName: 'mycollection' */ './components/user/common/MyCollection.vue')

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'layui-this',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: '/index/:catelog',
          name: 'catelog',
          component: Template1
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
      beforeEnter: (to, from, next) => {
        if (from.name === 'login') {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/user/:uid',
      name: 'user',
      props: true,
      component: User
    },
    {
      path: '/center',
      component: Center,
      meta: { requireAuth: true },
      linkActiveClass: 'layui-this',
      children: [
        {
          path: '',
          name: 'center',
          component: UserCenter
        },
        {
          path: 'set',
          name: 'set',
          component: Settings,
          children: [
            {
              path: '',
              name: 'myinfo',
              component: MyInfo
            },
            {
              path: 'picupload',
              name: 'picupload',
              component: PicUpload
            },
            {
              path: 'password',
              name: 'password',
              component: Password
            },
            {
              path: 'accounts',
              name: 'accounts',
              component: Accounts
            }
          ]
        },
        {
          path: 'posts',
          name: 'posts',
          component: Posts,
          children: [
            {
              path: '',
              name: 'mypost',
              component: MyPost
            },
            {
              path: 'mycollection',
              name: 'mycollection',
              component: MyCollection
            }
          ]
        },
        {
          path: 'msg',
          name: 'msg',
          component: Msg
        },
        {
          path: 'others',
          name: 'others',
          component: Others
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (token !== '' && token !== null) {
    store.commit('setToken', token)
    store.commit('setUserInfo', userInfo)
    store.commit('isLogin', true)
  }
  if (to.matched.some(record => record.meta.requireAuth)) {
    const isLogin = store.state.isLogin

    if (isLogin) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
