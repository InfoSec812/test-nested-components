<template>
  <div>
    <q-field :error="isInvalidUrl" error-label="Invalid URL">
      <q-input v-model="value.url" float-label="URL" spellcheck="false"/>
    </q-field>
    <q-field :error="isInvalidExchange" error-label="Invalid Exchange">
      <q-input v-model="value.toAppExchange" float-label="To App Exchange" spellcheck="false"/>
    </q-field>
    <q-field :error="isInvalidQueue" error-label="Invalid Queue">
      <q-input v-model="value.fromAppQueue" float-label="From App Queue" spellcheck="false" ref="from_app_queue"/>
    </q-field>
  </div>
</template>

<script>
import QInput from "quasar-framework/src/components/input/QInput";
import QField from "quasar-framework/src/components/field/QField";

const topicValidation = /^[a-zA-Z0-9_.-]+[^.-]$/;

const urlValidation = /^[a-z]{4,5}:\/\/[a-z0-9-.]+(:[0-9]{1,5})?$/;

export default {
  name: "AMQPConnection",
  components: { QField, QInput },
  props: {
    value: Object
  },
  computed: {
    isInvalidUrl: function() {
      return !urlValidation.test(this.$props.value.url);
    },
    isInvalidExchange: function() {
      return !topicValidation.test(this.$props.value.toAppExchange);
    },
    isInvalidQueue: function() {
      return !topicValidation.test(this.$props.value.fromAppQueue);
    }
  }
};
</script>
