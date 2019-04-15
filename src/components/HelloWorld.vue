<template>
  <q-list class="col">
    <q-item v-for="(app, index) in amqpapps" :key="index">
      <q-collapsible group="amqp_applications" :label="wrapAppLabel(app.name)">
        <a-m-q-p-application v-model="amqpapps[index]"></a-m-q-p-application>
      </q-collapsible>
    </q-item>
  </q-list>
</template>

<style></style>

<script>
import AMQPApplication from "./AMQPApplication";
import QCollapsible from "quasar-framework/src/components/collapsible/QCollapsible";
import QList from "quasar-framework/src/components/list/QList";
import QItem from "quasar-framework/src/components/list/QItem";
export default {
  name: "HelloWorld",
  components: {QItem, QList, QCollapsible, AMQPApplication},
  data: function() {
    return {
      amqpapps: [
        {name: 'One', topics: ['one', 'two', 'three'], description: 'First', appConnection: {url: 'amqp://1.2.3.4:5672', toAppExchange: 'oneExch', fromAppQueue: 'oneQueue'}},
        {name: 'Two', topics: ['one', 'two', 'three'], description: 'Second', appConnection: {url: 'amqp://2.3.4.5:5672', toAppExchange: 'twoExch', fromAppQueue: 'twoQueue'}},
        {name: 'Three', topics: ['one', 'two', 'three'], description: 'Third', appConnection: {url: 'amqp://3.4.5.6:5672', toAppExchange: 'threeExch', fromAppQueue: 'threeQueue'}},
        {name: 'Four', topics: ['one', 'two', 'three'], description: 'Fourth', appConnection: {url: 'amqp://4.5.6.7:5672', toAppExchange: 'fourExch', fromAppQueue: 'fourQueue'}}
      ]
    };
  },
  methods: {
    wrapAppLabel: function(appName) {
      return `Application: ${appName}`;
    }
  }
};
</script>
