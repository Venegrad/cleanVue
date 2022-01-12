<template lang="pug">
  #app.g
    frame-head
    router-view
    frame-footer
</template>

<script>
import frameHead from "@/components/frames/frameHead"
import frameFooter from "@/components/frames/frameFooter"
export default {
  components: { frameHead, frameFooter }
}
</script>

<style lang="stylus" scoped>
.g
  display flex
  flex-direction column
  min-height 100vh
</style>