<script>
export default {
  name:'WHeader',
  components:{

  },
  props:{
    logo: {
      type: String,
      default: '',
    },
    title:{
      type:String,
      default:'大屏'
    }
  },
  data(){
    return {

    }
  },
  computed:{},
  methods:{}
}
</script>

<template>
  <div class='w-header'>
    <div class="logo">
      <img src="logo" alt="">
    </div>
    <div class="title-container">
      <dv-decoration7>
        <div class="title">{{ title }}</div>
      </dv-decoration7>
    </div>
    <div class="info">
      <span>个人信息</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss'
</style>