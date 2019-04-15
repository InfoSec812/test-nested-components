<template>
  <div>
    <q-input type="text" v-model="value.name" float-label="Name" />
    <q-input type="text" v-model="value.description" float-label="Description" />
    <q-field :error="hasInvalidTopics" error-label="Invalid Topic">
      <q-chips-input v-model="value.topics" float-label="Topics" spellcheck="false"/>
    </q-field>
    <a-m-q-p-connection v-model="value.appConnection" />
  </div>
</template>

<script>
import QInput from "quasar-framework/src/components/input/QInput";
import AMQPConnection from "./AMQPConnection";
import QChipsInput from "quasar-framework/src/components/chips-input/QChipsInput";
import QField from "quasar-framework/src/components/field/QField";
const queuePattern = /^[a-z][a-z0-9A-Z_.-]+$/;

export default {
  name: "AMQPApplication",
  components: { QChipsInput, AMQPConnection, QInput, QField },
  props: {
    value: Object
  },
  computed: {
    hasInvalidTopics: function() {
      for (let x = 0; x < this.$props.value.topics.length; x++) {
        if (!queuePattern.test(this.$props.value.topics[x])) return true;
      }

      return false;
    }
  }
};
</script>
