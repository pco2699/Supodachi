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
        <v-ons-icon class="switch-icon" icon="fa-futbol" size="30px" />
        <v-ons-icon class="switch-icon" icon="fa-futbol" size="30px" />
        <v-ons-icon class="switch-icon" icon="fa-futbol" size="30px" />
      </v-ons-col>
    </v-ons-row>
    <v-ons-row class="search-item">
      <v-ons-col>
        <input type="range" class="time-range">
      </v-ons-col>
    </v-ons-row>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      selected: 0
    }
  },
  methods: {}
}
</script>

<style scoped>
.selected {
  border-color: orangered;
}
.switch-icon {
  padding: 2px;
  border-radius: 50%;
  border-style: solid;
  border-color: #7f828b;
}
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
