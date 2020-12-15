<template>
  <div>
    <imooc-panel />
    <router-view></router-view>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  name: 'home',
  components: {
    'imooc-panel': Panel
  }
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
