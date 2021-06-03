<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  mounted () {
    this.$request.user.editContact().then((res) => {
      console.log(res);
    });
  }
};
</script>
<style lang='scss' scope>

</style>
