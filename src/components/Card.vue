//Card.vue
<template>
  <div class="card">
    <div class="card-block">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ text }}</p>
      <p class="card-text"><small class="text-muted">Added On {{ footer }}</small></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['title', 'text', 'footer']
  }
</script>

<style scoped>

</style>
