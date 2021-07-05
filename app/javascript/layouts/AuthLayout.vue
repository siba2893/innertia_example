<template>
  <v-app id="inspire">
    <v-main>
      <div class="fill-height d-flex flex-column">
        <v-container class="pb-0">
          <flash-messages />
        </v-container>
        <v-container class="pt-0 flex-fill">
          <v-row class="fill-height">
            <v-col>
              <slot></slot>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>

import FlashMessages from '@/shared/FlashMessages'

export default {
  name: "ApplicationLayout",
  components: {
    FlashMessages,
  },
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>

<style scoped>

</style>