<template>
  <div class="search-box">

    <v-ons-input
      class="input station"
      placeholder="駅で検索"
      modifier="underbar"
      float
    />
    <v-ons-input
      class="genre input"
      placeholder="競技で検索"
      modifier="underbar"
      float
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBox'
}
</script>

<style scoped>
.search-box {
  position: absolute;
  z-index: 1000;

  width: 96%;
  height: 200px;

  left: 2%;
  right: 2%;
  bottom: 30px;

  background-color: #ffffff;

  text-align: center;
}

.input {
  margin: auto;
  width: 240px;
  display: block;
}
</style>
