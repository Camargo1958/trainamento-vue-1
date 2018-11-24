<template lang="pug">
  .not-found
    v-alert(
      :value="true"
      type="warning"
    )
      h1 Page not found
</template>
<script>
export default {
  name: 'NotFound',
};
</script>
