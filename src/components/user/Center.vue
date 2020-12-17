<template>
  <div class='panel'>
    <div class='msg'>hi admin</div>
    <div class="layui-row layui-col-space20">
      <div class="layui-col-md6">
        <div class="panel">
          <div class="title">我的会员信息</div>
          <div class="content">你的积分有：60</div>
        </div>
      </div>
      <div class="layui-col-md6">
        <sign></sign>
      </div>
    </div>
  </div>
</template>

<script>
import Sign from '@/components/sidebar/Sign.vue'
export default {
  name: 'user-center',
  components: {
    Sign
  }
}
</script>

<style>
</style>
