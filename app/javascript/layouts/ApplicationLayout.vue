<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-menu
          v-if="$vuetify.breakpoint.mdAndUp"
          bottom
          min-width="200px"
          rounded="b-xl"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              x-large
              v-on="on"
            >
              <v-avatar
                class="mr-10"
                color="grey darken-1"
                size="32"
              >
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, n) in items"
              :key="n"
              link
              :href="item.link"
            >
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-app-bar-nav-icon
          v-else
          @click="drawer = true"
        />

        <v-btn
          v-if="$vuetify.breakpoint.mdAndUp"
          v-for="link in navbarLinks"
          :key="link.title"
          text
          :href="link.href"
        >
          {{ link.title }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive min-width="200" max-width="260" style="flex: 1">
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

    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="(link, n) in allNavigationLinks"
          :key="n"
          link
          :href="link.href"
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
    </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <v-container>
        <flash-messages />
        <v-row>
          <v-col cols="3" lg="2" v-if="$vuetify.breakpoint.mdAndUp">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="(link, n) in sidebarLinks"
                  :key="n"
                  link
                  :href="link.href"
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
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    navbarLinks () {
      return [
        { title: 'Link 1', href: '/' },
        { title: 'Link 2', href: '/' },
        { title: 'Link 3', href: '/' },
        { title: 'Link 4', href: '/' },
      ]
    },
    sidebarLinks () {
      return [
        { title: 'Link 5', href: '/' },
        { title: 'Link 6', href: '/' },
        { title: 'Link 7', href: '/' },
        { title: 'Link 8', href: '/' },
      ]
    },
    allNavigationLinks () {
      return this.navbarLinks.concat(this.sidebarLinks)
    }
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