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
          @keyup="inputLocation"
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
    <v-ons-row>
      {{ facilities }}
    </v-ons-row>
    <v-ons-row class="search-item">
      <v-ons-col>
        <flat-pickr v-model="date" @on-change="request" />
      </v-ons-col>
    </v-ons-row>
    <v-ons-row class="search-item">
      <v-ons-col>
        <v-ons-range v-model="range" style="width: 80%;" />
        <br>
        <span>Time: {{ timeRange }}</span>
      </v-ons-col>
    </v-ons-row>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import axios from 'axios'

export default {
  name: 'SearchBox',
  components: {
    flatPickr
  },
  data() {
    return {
      selected: 0,
      date: 'aaa',
      facilities: null,
      range: '50',
      stack: 0
    }
  },
  computed: {
    timeRange: function() {
      const range = Number(this.range)
      const time = range * 14.4
      const hours = Math.floor(time / 60)
      let minutes = Math.floor(time - hours * 60)
      if (minutes < 10) minutes = '0' + minutes
      return hours + ':' + minutes
    }
  },
  mounted() {
    this.request()
  },
  methods: {
    inputLocation: function(location) {
      this.date = location
      this.request(location)
      this.stack += 1 // 入力ごとに値を追加する
      setTimeout(function() {
        this.stack -= 1 // 中身を一つ取り出す
        this.date = 'bbbbbbbbbbb'
        if (this.stack === 0) {
          this.date = 'cccccccccc'
          this.request(location)
          this.stack = 0 // 一応stackを初期化
        }
      }, 300)
    },
    // request: function(pickedDate) {
    request: function(pickedDate) {
      // let dateVal = new Date()
      // if (pickedDate) dateVal = Date(pickedDate[0])
      // if (pickedDate) dateVal = Date(pickedDate)
      axios
        .get('http://127.0.0.1:3100/api/v1/map', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + 'hogehoge'
          },
          params: {
            date: this.date
          }
        })
        .then(response => {
          this.facilities = response.data
        })
    }
  }
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
  height: 200px;

  left: 10%;
  right: 10%;
  bottom: 30px;

  border-radius: 20px;

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
