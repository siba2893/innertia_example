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
              v-model="form.firstname"
              label="Nombre"
              outlined
              dense
              validate-on-blur
              :rules="validations.firstname"
              @keydown.enter="handleSubmit"
            ></v-text-field>

            <v-text-field
              v-model="form.lastname"
              label="Apellidos"
              outlined
              dense
              validate-on-blur
              :rules="validations.lastname"
              @keydown.enter="handleSubmit"
            ></v-text-field>

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
                  Crear Cuenta
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  color="secondary"
                  class="white--text"
                  :loading="loading"
                  :disabled="loading"
                  href="/users/password/new"
                >
                  Iniciar Sesión
                </v-btn>
              </v-col>
            </v-row>
            <v-row no-gutters justify="space-between" class="mt-3">
              <v-spacer></v-spacer>
              <v-col cols="auto">
                <v-btn href="/users/password/new" text class="pa-0">
                  Olvide mi contraseña
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import InputValidators from "@/utils/helpers/input-validators"

export default {
  name: "Registration",
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
        firstname: [InputValidators.required],
        lastname: [InputValidators.required],
        email: [InputValidators.required, InputValidators.validEmail],
        password: [InputValidators.required, InputValidators.min(8)]
      };
    }
  },
  methods: {
    async handleSubmit () {
      try {
        if (this.$refs.form.validate()) {
          this.$inertia.post(this.$routes.user_registration(), { user: this.form })
        }
      } catch (e) {
        this.loading = false;
      }
    }
  },
  mounted () {
    console.log(this.form)
  }
}
</script>

<style scoped>

</style>