<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github-circle">
        {{ping}}
        <input v-model="str" />
        <button @click="echo">{{echoStr||'click me'}}</button>
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

<script>
import Card from "~/components/Card";
import pingGql from "../gql/ping";
import gql from "graphql-tag";

export default {
  name: "HomePage",

  components: {
    Card
  },

  data() {
    return {
      str: undefined,
      echoStr: undefined
    };
  },

  apollo: {
    ping: gql`
      query {
        ping
      }
    `
  },
  methods: {
    async echo() {
      // Call to the graphql mutation
      this.echoStr = await this.$apollo.mutate({
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
      this.echoStr = this.echoStr.data.echo;
      console.log(this.echoStr);
    }
  }
};
</script>
