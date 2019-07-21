<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github-circle">
        {{ ping }}
        <input v-model="str" />
        <button @click="echo">{{ echoStr || 'click me' }}</button>
        <a href="https://github.com/buefy/buefy">GitHub</a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey">Every</b>
        component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with
        <a href="https://vuejs.org/">Vue.js</a>
        and
        <a href="http://bulma.io/">Bulma</a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">No other internal dependency</card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '../components/Card.vue';
// import pingGql from '../gql/ping';
import gql from 'graphql-tag';
import 'vue-apollo';

@Component({  components: { Card }, apollo: {
    ping: gql`
      query {
        ping
      }
    `,
  }})
export default class HomePage extends Vue {
  str: string = '';
  echoStr: string = '';
  ping!: string;

  async echo() {
    // Call to the graphql mutation
    const response = await this.$apollo.mutate({
      // Query
      mutation: gql`
          mutation($message: String!) {
            echo(message: $message)
          }
        `,
      // Parameters
      variables: {
        message: this.str
      }
    });
    this.echoStr = response.data.echo;
    console.log(this.echoStr);
  }

};
</script>
