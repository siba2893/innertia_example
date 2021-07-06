<template>
  <v-row class="fill-height" justify="center">
    <v-col cols="12" sm="8" lg="5" xl="4" align-self="center">
      <v-row justify="center" class="pa-3">
        <v-img
          src="https://f000.backblazeb2.com/file/up-routes-production/app-resources/logo-v2.png"
          aspect-ratio="1.7"
          alt=""
          contain
          max-width="200px"
          style="cursor: pointer;"
        ></v-img>
      </v-row>
      <v-row>
        <v-col>
          <v-form
            v-model="valid"
            ref="form"
            lazy-validation
            class="pa-3"
            @submit.prevent
          >
            <v-text-field
              v-model="form.email"
              label="Correo"
              type="email"
              name="email"
              outlined
              dense
              validate-on-blur
              :rules="validations.email"
              @keydown.enter="handleSubmit"
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              label="Contraseña"
              type="password"
              name="password"
              outlined
              dense
              validate-on-blur
              :rules="validations.password"
              @keydown.enter="handleSubmit"
            ></v-text-field>

            <v-row no-gutters justify="space-between">
              <v-col cols="auto">
                <v-btn
                  color="#4261FF"
                  class="white--text"
                  :loading="loading"
                  :disabled="loading"
                  @click="handleSubmit"
                >
                  Ingresar
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  color="secondary"
                  class="white--text"
                  :loading="loading"
                  :disabled="loading"
                  href="/users/sign_up"
                >
                  Crear Cuenta
                </v-btn>
              </v-col>
            </v-row>
            <v-row no-gutters justify="space-between" class="mt-3">
              <v-col cols="auto">
                <v-btn href="/users/password/new" text class="pa-0">
                  Olvide mi contraseña
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-alert
            border="left"
            colored-border
            type="info"
            elevation="4"
            color="green"
            max-width="550"
            style="margin: 0 auto;"
          >
            Si deseas ser parte de nuestra creciente lista de socios cuentanos un
            poco sobre ti y tu negocio, <a href="mailto:info@up-routes.com">escribenos aqui</a> :)
          </v-alert>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import InputValidators from "@/utils/helpers/input-validators"

export default {
  name: "Login",
  layout: AuthLayout,
  props: {
    resource: Object
  },
  data () {
    return {
      valid: true,
      loading: false,
      form: this.resource
    }
  },
  computed: {
    validations () {
      return {
        email: [InputValidators.required, InputValidators.validEmail],
        password: [InputValidators.required, InputValidators.min(8)]
      };
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.$refs.form.validate()) {
          this.$inertia.post(this.$routes.user_session(), { user: this.form })
        }
      } catch (e) {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>

</style>