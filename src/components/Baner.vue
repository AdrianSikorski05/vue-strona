<template>
    <v-container fluid class="hero-section responsive-bg">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="hero-title"> Witaj w świecie słodkich wypieków!
            
          </h1>
          <p class="hero-subtitle">Tworzymy wyjątkowe torty na każdą okazję. Skontaktuj się z nami i zaplanuj swoją wymarzoną słodycz!</p>
          <v-btn @click="scrollToSection('form')" class="hero-btn" color="pink" large rounded>Skontaktuj się
            <v-icon
                icon="mdi-phone"
                end></v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  

<script>
export default {
  name: 'Baner', 
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
  }
};

</script>


  <style scoped>
  .hero-section {      
    background-color:hsla(350,100%,85%,1);
    background-image:
        radial-gradient(at 94% 57%, hsla(317,36%,65%,0.35) 0px, transparent 50%),
        radial-gradient(at 91% 90%, hsla(185,0%,100%,0.65) 0px, transparent 50%),
        radial-gradient(at 8% 88%, hsla(359,100%,47%,0.14) 0px, transparent 50%),
        radial-gradient(at 93% 2%, hsla(287,100%,100%,0.23) 0px, transparent 50%);
    padding: 4rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.4);
  }
  
  .hero-title {
    font-size: 3rem;
    font-family: 'EraCake', cursive;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  .hero-btn {
    font-size: 1.25rem;
    font-weight: bold;
  }
  </style>
  