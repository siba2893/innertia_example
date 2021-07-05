<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in navbarLinks"
          :key="link.title"
          text
          :href="link.href"
        >
          {{ link.title }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            placeholder="Buscar"
            dense
            flat
            hide-details
            rounded
            solo-inverted
            append-icon="fas fa-search"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <flash-messages />
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="(link, n) in sidebarLinks"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ link.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <inertia-link
                  :href="$routes.destroy_user_session()"
                  method="delete"
                  as="v-list-item"
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Cerrar Sesión
                    </v-list-item-title>
                  </v-list-item-content>
                </inertia-link>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <slot></slot>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
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
  computed: {
    navbarLinks: () => ([
      { title: 'Link 1', href: '/'},
      { title: 'Link 2', href: '/'},
      { title: 'Link 3', href: '/'},
      { title: 'Link 4', href: '/'},
    ]),
    sidebarLinks: () => ([
      { title: 'Link 5', href: '/'},
      { title: 'Link 6', href: '/'},
      { title: 'Link 7', href: '/'},
      { title: 'Link 8', href: '/'},
    ]),
    allNavigationLinks: () => (this.navbarLinks.concat(this.sidebarLinks))
  },
  methods: {
    handleSignOut () {
      this.$inertia.delete(this.$routes.destroy_user_session())
    }
  }
}
</script>

<style scoped>

</style>