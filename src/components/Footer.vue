
<template>
    <v-footer color="primary" class="text-center white--text">
    <p class="white--text">&copy; {{ new Date().getFullYear() }} Delicje i ciasta</p>
    <v-spacer></v-spacer>

    <v-btn
            v-for="icon in socialLinks"
            :key="icon.name"
            :href="icon.link"
            target="_blank"
            class="mx-7 white--text"
            size="30"
            variant="plain">
            <v-icon>{{ icon.icon }}</v-icon>
        </v-btn>
    
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      socialLinks: [
        { name: 'Facebook', icon: 'mdi-facebook', link: 'https://www.facebook.com/twojafirma' },
        { name: 'Twitter', icon: 'mdi-twitter', link: 'https://www.twitter.com/twojafirma' },
        { name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/twojafirma' },
        { name: 'Instagram', icon: 'mdi-instagram', link: 'https://www.instagram.com/twojafirma' },
      ],
    }),
  }
</script>


<style>
.white--text {
  color: white !important;
}

v-footer {
  width: 100%;
}
</style>