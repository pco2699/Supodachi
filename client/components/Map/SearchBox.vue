<template>
  <div class="search-box">
    <v-ons-row class="search-item">
      <v-ons-col>
        <v-ons-icon class="icon" icon="fa-search" />
        <v-ons-input
          class="input station"
          placeholder="駅で検索"
          modifier="underbar"
          float
        />
      </v-ons-col>
    </v-ons-row>
    <v-ons-row class="search-item">
      <v-ons-col>
        <v-ons-icon class="icon" icon="fa-futbol" />
        <v-ons-input
          class="genre input"
          placeholder="競技で検索"
          modifier="underbar"
          float
        />
      </v-ons-col>
    </v-ons-row>
    <v-ons-row class="search-item">
      <v-ons-col>
        <v-ons-range v-model="volume" style="width: 35%;" />
      </v-ons-col>
    </v-ons-row>
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

  width: 80%;
  height: 150px;

  left: 10%;
  right: 10%;
  bottom: 30px;

  background-color: #ffffff;

  text-align: center;
}

.icon {
  margin: 0 0 0 auto;
  vertical-align: center;
}

.search-item {
  margin-top: 10px;
  margin-bottom: 10px;
}

.input {
  margin: 0 0 0 auto;
  vertical-align: middle;
}
</style>
