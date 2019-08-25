<template>
  <div class="q-pa-md">

    <q-badge color="secondary">
      Model: {{ standard }} (0 to 100)
    </q-badge>

    <q-slider v-model="standard" :min="0" :max="100"/>
    <q-slider v-model="standard" :min="0" :max="100" color="green"/>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      standard: 50
    }
  }
}

</script>
