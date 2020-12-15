<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8"><imooc-lists /></div>
      <div class="layui-col-md4">
        <imooc-hotlist />
        <imooc-ads />
        <imooc-links />
      </div>
    </div>
  </div>
</template>

<script>
import HotList from '@/components/sidebar/HotList'
import Ads from '@/components/sidebar/Ads'
import Links from '@/components/sidebar/Links'
import Lists from '@/components/contents/Lists'

export default {
  components: {
    'imooc-hotlist': HotList,
    'imooc-ads': Ads,
    'imooc-links': Links,
    'imooc-lists': Lists
  }
}
</script>

<style>
</style>
