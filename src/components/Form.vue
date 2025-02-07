

<template>
    <v-container class="my-12">
      <h2 class="font-weight-bold form-text"> <v-icon icon="mdi-cupcake" size="45"></v-icon>Skontaktuj się ze mną</h2>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="name"
          label="Twoje imię"
          :rules="[rules.required]"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          label="Twój e-mail"
          :rules="[rules.required, rules.email]"
          required
        ></v-text-field>
  
        <v-textarea
          v-model="message"
          label="Wiadomość"
          :rules="[rules.required]"
          rows="4"
          required
        ></v-textarea>
  
        <v-btn @click="submit" :disabled="!valid" color="primary" class="mt-4">
          Wyślij wiadomość
        </v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Form',
    data: () => ({
      valid: false,
      name: '',
      email: '',
      message: '',
      rules: {
        required: value => !!value || 'To pole jest wymagane',
        email: value => /.+@.+\..+/.test(value) || 'Nieprawidłowy e-mail'
      }
    }),
    methods: {
      submit() {
        if (this.valid) {
          alert('Wiadomość została wysłana!');
        }
      }
    }
  }
  </script>
  
  <style scoped>

    h2{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 10px;
    }
    .form-text{
        color: white;
        font-family: 'EraCake', cursive;
        font-size: 2rem;
        text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.9);
    }
  </style>
  