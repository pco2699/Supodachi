<template>
  <v-ons-page>
    <v-ons-row>
      <v-ons-col>
        <div class="center">
          <v-ons-input
            placeholder="地名"
            float
          />
        </div>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <div class="center">
          <v-ons-input
            type="date"
            float
          />
        </div>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <v-ons-input
          type="time"
          float
        />
      </v-ons-col>
      <v-ons-col class="text" width="20px" vertical-align="center">
        ~
      </v-ons-col>
      <v-ons-col>
        <v-ons-input
          type="time"
          float
        />
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <v-ons-input
          placeholder="種目"
        />
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
export default {
  name: 'Search'
}
</script>
<style scoped>
ons-col {
  border: 1px solid #ccc;
  background: #fff;
  overflow: hidden;
  padding: 4px;
  margin: 4px;
  color: #999;
}

ons-col.text {
  background-color: initial;
  border: none;
  text-align: center;
}
</style>
