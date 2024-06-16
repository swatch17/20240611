<template>
  <dv-full-screen-container class="full-container">
    <!-- 加载 -->
    <dv-loading v-if="false"> 
      Loading...
    </dv-loading>
    <!-- 头部 -->
     <w-header title="顶部标题" />
     <div class="main">
      <div class="main-left">
        <dv-border-box13>
          <div dv-bg ><WLeft /></div>
        </dv-border-box13>
      </div>
      <div class="main-right"></div>
     </div>

  </dv-full-screen-container>
</template>

<script>
import WHeader from '@/layouts/header/index.vue'
import WLeft from '@/components/left/index.vue'

export default {
  name: 'Index',
  components:{WHeader,WLeft},
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
@import './index.scss'
</style>
