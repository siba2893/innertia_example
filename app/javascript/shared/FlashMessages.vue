<template>
  <div v-if="alert">
    <v-alert
      v-if="alert.success"
      v-model="show"
      type="success"
      dismissible>
      {{ alert.success }}
    </v-alert>
    <v-alert
      v-if="alert.notice"
      v-model="show"
      type="info"
      dismissible>
      {{ alert.notice }}
    </v-alert>
    <v-alert
      v-if="alert.alert"
      v-model="show"
      type="error"
      dismissible>
      {{ alert.alert }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "FlashMessages",
  data() {
    return {
      show: true,
      alert: null
    }
  },
  watch: {
    '$page.props.flash' (v) {
      this.alert = v ? { ...v } : null
      this.show = !!v
    }
  }
}
</script>