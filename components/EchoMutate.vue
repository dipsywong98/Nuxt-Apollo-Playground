<template>
  <ApolloMutation
    :mutation="require('../gql/mutations/echo.gql')"
    :variables="{
    message
  }"
    @done="onDone"
  >
    <template v-slot="{ mutate, loading, error }">
      <input v-model="message" />
      <button :disabled="loading" @click="mutate()">Click me</button>
      <p v-if="error">An error occurred: {{ error }}</p>
    </template>
  </ApolloMutation>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {    return {
      message: '',
    }  },
  methods: {
    onDone(...data) {
      console.log(...data)
    }
  }
})
</script>
