<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <imooc-top />
        <imooc-lists />
      </div>
      <div class="layui-col-md4">
        <imooc-tips />
        <imooc-sign />
        <imooc-hotlist />
        <imooc-ads />
        <imooc-links />
      </div>
    </div>
  </div>
</template>

<script>

import Tips from '@/components/sidebar/Tips'
import Sign from '@/components/sidebar/Sign'
import HotList from '@/components/sidebar/HotList'
import Ads from '@/components/sidebar/Ads'
import Links from '@/components/sidebar/Links'
import Lists from '@/components/contents/Lists'
import Top from '@/components/contents/Top'
export default {
  components: {
    'imooc-tips': Tips,
    'imooc-sign': Sign,
    'imooc-hotlist': HotList,
    'imooc-ads': Ads,
    'imooc-links': Links,
    'imooc-lists': Lists,
    'imooc-top': Top
  }
}
</script>

<style>
</style>
