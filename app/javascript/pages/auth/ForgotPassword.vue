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
              v-model="email"
              label="Correo"
              type="email"
              outlined
              dense
              validate-on-blur
              :rules="emailValidation"
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
              <v-col cols="12" sm="6">
                <v-btn color="secondary" text href="/users/sign_in">
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
    resource: Object
  },
  data() {
    return {
      valid: true,
      loading: false,
      email: ""
    };
  },
  computed: {
    emailValidation () {
      return [InputValidators.required, InputValidators.validEmail];
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.$refs.form.validate()) {

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