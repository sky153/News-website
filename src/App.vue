<template>
    <div id="app">
      <div style="width: 1080px; margin: 0 auto;">
        <Header></Header>
        <div class="container">
            <router-view></router-view>
          </div>
      </div>
    </div>
</template>

<script>

import Header from "./components/Header"
export default {
    components: {
      Header
    },
}
</script>
<style scoped>
  .container{
    margin-top: 30px;
  }
</style>
