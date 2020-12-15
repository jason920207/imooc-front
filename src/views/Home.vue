<template>
  <div class="fly-panel fly-column">
    <div class="layui-container">
      <ul class="layui-clear">
        <li class="layui-hide-xs layui-this"><a href="/">首页</a></li>
        <li><a href="jie/index.html">提问</a></li>
        <li>
          <a href="jie/index.html">分享<span class="layui-badge-dot"></span></a>
        </li>
        <li><a href="jie/index.html">讨论</a></li>
        <li><a href="jie/index.html">建议</a></li>
        <li><a href="jie/index.html">公告</a></li>
        <li><a href="jie/index.html">动态</a></li>
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
          <span class="fly-mid"></span>
        </li>

        <!-- 用户登入后显示 -->
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
          <a href="user/index.html">我发表的贴</a>
        </li>
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
          <a href="user/index.html#collection">我收藏的贴</a>
        </li>
      </ul>

      <div class="fly-column-right layui-hide-xs">
        <span class="fly-search"><i class="layui-icon"></i></span>
        <a href="jie/add.html" class="layui-btn">发表新帖</a>
      </div>
      <div
        class="layui-hide-sm layui-show-xs-block"
        style="margin-top: -10px; padding-bottom: 10px; text-align: center"
      >
        <a href="jie/add.html" class="layui-btn">发表新帖</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.panel {
  position: relative;
  height: 50px;
  line-height: 50px;
  margin-bottom: 15px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

ul {
  li {
    display: inline-block;
    a {
      padding: 0 20px;
    }
  }
}

.line {
  display: inline-block;
  height: 10px;
  width: 1px;
  background: #e2e2e2;
  vertical-align: middle;
  margin: 0 20px;
}

.right {
  position: absolute;
  right: 0;
  top: 0;
  .layui-icon-search {
    margin-right: 10px;
  }
}
</style>
