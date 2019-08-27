<template>
  <div id="measurements">
    <div v-if="info">
      <h2>{{info[0].garden_name}}</h2>
      <h3>{{info[0].bed_name}}</h3>
      <h4>{{info[0].measurement_time}}</h4>

      <div
        v-for="garden in info"
        v-bind:key="garden"
        class="garden"
      >
        {{garden.measurement_type}}: {{garden.measurement_value}}
      </div>

    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'Test_latest',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    this.fetchMeasurements()
    this.timer = setInterval(this.fetchMeasurements, 5000)
  },
  methods: {
    fetchMeasurements: function () {
      axios
        .get('http://kornspeicher94.internet-box.ch:31500/test_latest')
        // .get('192.168.1.31:5000/test_latest')
        .then(response => {
          this.info = response.data
        })
    }
  }
}

</script>

<style scoped>
  div {
    color:##ad399c;
    border: 3px solid #6aa719;
    background: #bcda95;
  }
  #measurements {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

  }

</style>
