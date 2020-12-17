<template>
  <div class="layui-container fly-marginTop">
    <ul class="layui-nav layui-nav-tree layui-inline" lay-filter="demo" style="margin-right: 10px">
      <li
        class="layui-nav-item layui-nav-itemed"
        v-for="(item, index) in lists"
        :key="'center' + index"
      >
        <router-link :to="{ name: item.link }" href="javascript:;" :active-class="item.activeClass">
          <i class="layui-icon" :class="item.icon"></i>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {
      lists: [{
        name: '我的主页',
        icon: 'layui-icon-home',
        link: 'center'
      }, {
        name: '基本设置',
        icon: 'layui-icon-set',
        link: 'myinfo',
        activeClass: 'layui-this'
      }, {
        name: '我的帖子',
        icon: 'layui-icon-form',
        link: 'mypost',
        activeClass: 'layui-this'
      }, {
        name: '我的消息',
        icon: 'layui-icon-reply-fill',
        link: 'msg'
      }, {
        name: '其他设置',
        icon: 'layui-icon-set',
        link: 'others'
      }]
    }
  }
}
</script>

<style>
</style>
