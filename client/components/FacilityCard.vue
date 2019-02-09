<template>
  <v-ons-card class="facility-card">
    <img alt="SportsFacility" src="https://via.placeholder.com/120x80.png?text=No Image" width="120" height="80">
    <div class="title">
      赤羽スポーツ館
    </div>
    <div class="price">
      \1900/1h
    </div>
    <div class="vacancy-date">
      AM 11:00-14:00
    </div>
  </v-ons-card>
</template>

<script>
export default {
  name: 'FacilityCard'
}
</script>

<style scoped>
.facility-card {
  border: solid 5px #f00660;

  font-size: 12px;
  position: absolute;
  bottom: 12px;
  left: 2%;
  z-index: 1000;
  width: 160px;
  height: 185px;

  color: #f00660;
  font-weight: bold;

  text-align: center;
}

.title {
  font-size: 12px;

  color: #f00660;
  font-weight: bold;
}
</style>
