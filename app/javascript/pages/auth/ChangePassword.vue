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
              v-model="form.password"
              label="Contraseña"
              type="password"
              outlined
              dense
              validate-on-blur
              :rules="validations.password"
            ></v-text-field>

            <v-text-field
              v-model="form.password_confirmation"
              label="Confirmar Contraseña"
              type="password"
              outlined
              dense
              validate-on-blur
              :rules="validations.passwordConfirmation"
            ></v-text-field>

            <v-row no-gutters justify="space-between">
              <v-col cols="12" md="6">
                <v-btn
                  color="#4261FF"
                  class="white--text"
                  @click="handleSubmit"
                  :disabled="loading"
                  :loading="loading"
                >
                  Recuperar contraseña
                </v-btn>
              </v-col>
            </v-row>
            <v-row no-gutters justify="space-between" class="mt-3">
              <v-col cols="auto">
                <v-btn href="/users/sign_in" text class="pa-0">
                  Recorde mi contraseña
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
  name: "ForgotPassword",
  layout: AuthLayout,
  props: {
    resource: Object,
    token: String,
  },
  data() {
    return {
      valid: true,
      loading: false,
      form: {}
    };
  },
  computed: {
    validations() {
      return {
        password: [InputValidators.required, InputValidators.min(8)],
        passwordConfirmation: [
          InputValidators.required,
          InputValidators.min(8),
          InputValidators.sameAs(this.form.password, "Contraseña")
        ]
      };
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.$refs.form.validate()) {
          this.form.reset_password_token = this.token
          this.$inertia.put(this.$routes.user_password(), { user: this.form })
        }
      } catch (e) {
        this.loading = false;
      }
    }
  },
  mounted () {
    console.log(this.$props)
  }
}
</script>

<style scoped>

</style>