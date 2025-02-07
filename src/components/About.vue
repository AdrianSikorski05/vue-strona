<template>
    <v-container class="my-2 about-container">
    <h2 class="about-title h2"> <v-icon icon="mdi-cupcake" size="45"></v-icon> O mnie</h2>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="5" class="text-center">           
            <v-img 
                class="about-img"
                src="./src/assets/ja.jpg"
                alt="Cukiernik" 
                cover 
                max-width="300px"
            />           
        </v-col>
        <v-col cols="12" md="7">
          <p class="about-description">
            Cześć! Mam na imię Ilona i dopiero rozpoczynam swoją słodką przygodę w świecie pieczenia tortów. 
            Każdy nowy wypiek to dla mnie wyzwanie, któremu oddaję serce i pasję. Uwielbiam uczyć się nowych technik dekorowania, 
            eksperymentować ze smakami i sprawiać, że torty nie tylko dobrze smakują, ale również zachwycają swoim wyglądem.   </p>
        <p class="about-description my-3">
            Choć jestem na początku drogi, obiecuję, że w każdy projekt włożę maksimum zaangażowania, aby 
            spełnić oczekiwania moich klientów. Wierzę, że z czasem moje umiejętności będą się rozwijały, a 
            Wasze uśmiechy będą moją największą nagrodą. Jeśli szukasz kogoś, kto stworzy tort z sercem i 
            zaangażowaniem — chętnie podejmę się tego wyzwania!
          </p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'About',
  }
  </script>
  
  <style scoped>

  .h2{
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

  /* Kontener sekcji */
  .about-container {
    padding: 2rem;   
  }
  
  
  /* Nagłówek */
  .about-title {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: white;
      font-family: 'EraCake', cursive;
      font-size: 2.5rem;
      text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.9);
    }
    
    /* Zdjęcie */
    .about-img {  
      margin: 0 auto;
      box-shadow: -20px -10px 20px 10px #ffb6c1;
      border-radius: 5%;
      
    }
    
    /* Opis */
    .about-description {
      font-family: 'Arial', sans-serif;
      font-size: 1.18rem;
      line-height: 1.8;
      color: #5c5c5c;
      text-align: justify;
      padding-right: 1rem;
    }

  </style>
  