
<template>
    <v-footer color="primary" class="text-center white--text">
    <p class="white--text footer-title">&copy; {{ new Date().getFullYear() }} Delicje i ciasta</p>
    <v-spacer></v-spacer>
    <div class="footer-btn-container">
    <v-btn
            v-for="icon in socialLinks"
            :key="icon.name"
            :href="icon.link"
            target="_blank"
            class="white--text footer-btn"
            size="30"
            variant="plain">
            <v-icon class="icon-title">{{ icon.icon }}</v-icon>
      </v-btn>
    </div>
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

.footer-btn-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
}
v-footer {
  width: 100%;
}
</style>