<template>
  <v-app-bar app color="primary" class="px-10">
    <!-- Logo -->
    <img src="@/assets/logo.png" alt="Logo" style="max-width: 80px;" />

    <!-- Tytuł strony -->
    <v-toolbar-title class="text-title d-md-inline white--text v-toolbar-title">{{ isMobile ? 'DIC' : 'Delicje i Ciasta' }}</v-toolbar-title>

    <!-- Nawigacja dla większych ekranów -->
    <div class="d-none d-md-flex">
      <v-btn @click="scrollToTop" class="font-weight-bold white--text" text>
        <v-icon class="mx-1" icon="mdi-home-circle" size="22"></v-icon> Strona główna
      </v-btn>
      <v-btn @click="scrollToSection('about')" class="font-weight-bold white--text" text>
        <v-icon class="mx-1" icon="mdi-account-circle" size="22"></v-icon> O mnie
      </v-btn>
      <v-btn @click="scrollToSection('gallery')" class="font-weight-bold white--text" text>
        <v-icon class="mx-1" icon="mdi-image-area" size="22"></v-icon> Galeria
      </v-btn>
      <v-btn @click="scrollToSection('form')" class="font-weight-bold white--text" text>
        <v-icon class="mx-1" icon="mdi-phone" size="22"></v-icon> Kontakt
      </v-btn>
    </div>

    <!-- Nawigacja w szufladzie dla mniejszych ekranów -->
    <v-menu activator="#menu-activator">
      <template v-slot:activator="{ props }">
        <v-btn class="d-md-none white--text" icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
      </template>

      
        <v-list class="list">
          <v-list-item class="list-item">
            <v-btn @click="scrollToTop" text block class="font">
              <v-icon color="primary" class="mx-2" icon="mdi-home-circle" size="22"></v-icon> Strona główna
            </v-btn>
          </v-list-item>

          <v-list-item class="list-item">
            <v-btn @click="scrollToSection('about')" text block class="font">
              <v-icon color="primary" class="mx-2" icon="mdi-account-circle" size="22"></v-icon> O mnie
            </v-btn>
          </v-list-item>

          <v-list-item class="list-item">
            <v-btn @click="scrollToSection('gallery')" text block class="font">
              <v-icon color="primary" class="mx-2" icon="mdi-image-area" size="22"></v-icon> Galeria
            </v-btn>
          </v-list-item>

          <v-list-item class="list-item">
            <v-btn @click="scrollToSection('form')" text block class="font">
              <v-icon color="primary" class="mx-2" icon="mdi-phone" size="22"></v-icon> Kontakt
            </v-btn>
          </v-list-item>
        </v-list>
    </v-menu>
  </v-app-bar>


</template>


<script>
export default {
  name: 'Navigation2',
  data() {
    return {
      isMobile: false,
      drawer: false, // Kontroluje otwieranie i zamykanie nawigacji
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.querySelector(`[data-section="${sectionId}"]`);
      if (element) {
        const offset = 80; // przesunięcie o 20px w górę
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 530;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    // Sprawdź przy ładowaniu strony
    this.checkScreenSize();
    // Dodaj nasłuchiwacza na zmiany rozmiaru
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};

</script>

<style>
  .list-item{
    padding: 0 !important;
    margin: 0 !important;
  }
  .list{
    width: 100vw;
  padding: 0 !important;
  margin: 0 !important;
  left: 0 !important;
  position: absolute; /* Użyj pozycji absolutnej, aby przesunąć pod nawigację */
  top: 64px; /* Odległość od górnej krawędzi (dopasuj do wysokości nawigacji) */
  z-index: 10;
  }

  .font{
    
    text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.4);
    font-family: "EraCake", serif; 
  }
  .white--text {
    color: white !important;
  }
  .text-title {
    font-size: 34px !important;
  } 
</style>


