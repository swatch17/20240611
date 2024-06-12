<template>
  <dv-full-screen-container class="full-container">
    <!-- 加载 -->
    <dv-loading v-if="false"> 
      Loading...
    </dv-loading>
    <!-- 头部 -->
     <w-header title="顶部标题" />

  </dv-full-screen-container>
</template>

<script>
import WHeader from '@/layouts/header/index.vue'

export default {
  name: 'Index',
  components:{WHeader},
  data () {
    return {}
  }
}
</script>
