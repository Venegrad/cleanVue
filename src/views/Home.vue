<template lang="pug">
  .page
    page-section(v-for="section in sections" :name="section")
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      sections: [
        'HelloI18n'
      ]
    }
  }
}
</script>
