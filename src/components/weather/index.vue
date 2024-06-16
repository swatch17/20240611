<template>
  <div
    id="ww_2623cfde95359"
    v="1.3"
    loc="id"
    a='{"t":"horizontal","lang":"zh","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#303F9F","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_phw":3,"el_whr":3,"el_nme":3}'
  >
  <a href="https://weatherwidget.org/" id="ww_2623cfde95359_u" target="_blank">Html weather widget</a>
  </div>
</template>

<script>
import updateWidget from '@/libs/weather'

export default {
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      updateWidget('ww_2623cfde95359', 0)
    }
  }
}
</script>

<style scoped lang="scss">
@import './index.scss'
</style>
