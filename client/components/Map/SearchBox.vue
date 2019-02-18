<template>
  <div class="search-box">
    <v-ons-row class="search-item">
      <v-ons-col>
        <img src="../../assets/pinB.png" width="15px" alt="">
        <v-ons-input
          v-model="location"
          class="input station"
          placeholder="駅で検索"
          modifier="underbar"
          float
          @keyup.enter="inputLocation(location)"
        />
      </v-ons-col>
    </v-ons-row>
    <v-ons-row class="search-item">
      <v-ons-col>
        <img src="../../assets/T-gr.png" width="40px" alt="">
        <img src="../../assets/B-red.png" width="40px" alt="">
        <img src="../../assets/S-gr.png" width="40px" alt="">
      </v-ons-col>
    </v-ons-row>
    <v-ons-row class="search-item">
      <v-ons-col>
        <img src="../../assets/calendar.png" width="15px" alt="">
        <flat-pickr v-model="date" class="text-input--underbar" @on-change="changeDate" />
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

export default {
  name: 'SearchBox',
  components: {
    flatPickr
  },
  data() {
    return {
      selected: 0,
      date: new Date(),
      event: 'tennis',
      facilities: null,
      location: '田町駅',
      range: '50',
      stack: 0
    }
  },
  computed: {
    timeRange() {
      const range = Number(this.range)
      const time = range * 14.4
      const hours = Math.floor(time / 60)
      let minutes = Math.floor(time - hours * 60)
      if (minutes < 10) minutes = '0' + minutes
      return hours + ':' + minutes
    }
  },
  mounted() {
    const params = {
      date: this.date,
      event: this.event,
      location: this.location
    }
    this.$emit('deleteAllMarker')
    this.$emit('request', params)
  },
  methods: {
    inputLocation(text) {
      const params = {
        date: this.date,
        event: this.event,
        location: text
      }
      this.$emit('deleteAllMarker')
      this.$emit('request', params)
      this.$emit('requestGeocoding', params.location)
    },
    changeDate(date) {
      const params = {
        date: date,
        event: this.event,
        location: this.text
      }
      this.$emit('deleteAllMarker')
      this.$emit('request', params)
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
