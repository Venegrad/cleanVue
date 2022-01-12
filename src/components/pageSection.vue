<template lang="pug">
  .section(v-if="name" :class="cls")
    component(:is="comp" )
</template>

<script>
export default {
  computed: {
    comp () {
        return () => import(`@/components/sections/${this.name}.vue`)
    }
  },
  props: {
    name: {
      type: String
    },
    cls: {
      type: String
    }
  },
}
</script>