<template>
  <div class="current-marker" />
</template>

<script>
export default {
  name: 'CurrentMarker'
}
</script>

<style scoped>
.current-marker {
  width: 20px;
  height: 20px;

  background-color: #00b1f4;
  border: solid 2px #fff;

  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #00b1f4;
  -webkit-box-shadow: 0 0 0 2px #00b1f4;
  -moz-box-shadow: 0 0 0 2px #00b1f4;
}
</style>
