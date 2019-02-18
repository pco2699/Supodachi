<template>
  <span class="facility-marker">
    空
  </span>
</template>

<script>
export default {
  name: 'FacilityMarker'
}
</script>

<style scoped>
.facility-marker {
  display: inline-block;

  width: 40px;
  height: 40px;
  font-size: 22px;

  background-color: #f00660;
  color: #ffffff;

  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  line-height: 40px;

  text-align: center;
  vertical-align: middle;
}
</style>
