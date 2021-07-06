<template>
  <div v-if="show">
    <!--    TODO: Fix Alerts showing only once    -->
    <v-alert
      v-if="$page.props.flash.success"
      type="success"
      dismissible>
      {{ $page.props.flash.success }}
    </v-alert>
    <v-alert
      v-if="$page.props.flash.notice"
      type="info"
      dismissible>
      {{ $page.props.flash.notice }}
    </v-alert>
    <v-alert
      v-if="$page.props.flash.alert"
      type="error"
      dismissible>
      {{ $page.props.flash.alert }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "FlashMessages",
  data() {
    return {
      show: true
    }
  },
  methods: {
    capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    },
  }
}
</script>