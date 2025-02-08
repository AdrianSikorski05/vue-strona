

<template>
  <h2 class="font-weight-bold gallery-text">
    <v-icon class="icon-title" icon="mdi-cupcake" size="45"></v-icon>
    Galeria tortów
  </h2>
  <v-container class="my-5 d-flex justify-center">
    <div class="container-custom">
    <v-row>
      <v-col
        v-for="(cake, index) in cakes"
        :key="index"
        cols="12"
        md="6"
        lg="4"
        >
        <v-slide-y-transition>
        <v-card
          class="mx-auto my-4"
          max-width="374"
          data-aos="fade-right"         
        >          
        <v-img :src="cake.img" height="250" class="img-custom" cover @click="openImage(cake.img)"></v-img>
          <v-card-text>
            <div class="my-4 text-subtitle-1 title-card">
              {{ cake.title }}
            </div>

            <div class="text-subtitle-2">
              {{ cake.description }}
            </div>
          </v-card-text>
        </v-card>
       </v-slide-y-transition>
      </v-col>
    </v-row>
  </div>
</v-container>
<v-dialog v-model="dialog" max-width="800">
  <v-card class="dialog-card">
    <!-- Przycisk zamknięcia -->
    <v-btn
      icon
      class="close-btn"
      @click="dialog = false"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-img :src="selectedImage" height="max" contain></v-img>
  </v-card>
</v-dialog>
  
</template>

<script>
import 'aos/dist/aos.css';
import AOS from 'aos';

  export default {
    name: 'Gallery',
    data() {
      return {
        loading: false,
        dialog: false,
        selectedImage: '',
        cakes: [
        {
          img: 'src/assets/cake-images/tort11.jpg',
          title: 'Tort Sportowy',
          description: 'Dekorowany motywem sportowym z zielonym kremem i piłką.'
        },
        {
          img: 'src/assets/cake-images/tort21.jpg',
          title: 'Czekoladowa Rozkosz',
          description: 'Bogaty tort czekoladowy z truskawkami i czekoladowym dripem.'
        },
        {
          img: 'src/assets/cake-images/tort4.jpg',
          title: 'Ferrero Delight',
          description: 'Tort udekorowany Ferrero Rocher, świeżymi owocami i kremem.'
        },
        {
          img: 'src/assets/cake-images/tort8.jpg',
          title: 'Owocowy Bukiet',
          description: 'Bogaty w owoce tort na bazie biszkoptu i lekkiego kremu.'
        },
        {
          img: 'src/assets/cake-images/tort10.jpg',
          title: 'Urodzinowy Drip',
          description: 'Tort udekorowany różowym i czekoladowym dripem, świeżymi kwiatami, truskawkami i mini butelką likieru.'
        },
        {
          img: 'src/assets/cake-images/tort23.jpg',
          title: 'Różana Elegancja',
          description: 'Delikatny tort z różowym dripem, malinami, różami i elegancką dekoracją sylwetkową.'
        
        },
        {
          img: 'src/assets/cake-images/tort20.jpg',
          title: 'Czekoladowe Marzenie',
          description: 'Bogaty tort czekoladowy z Ferrero Rocher, świeżymi truskawkami, malinami i borówkami.'
        },
        {
          img: 'src/assets/cake-images/tort17.jpg',
          title: 'Czekoladowa Fantazja',
          description: 'Tort z białym kremem, czekoladowym dripem, dekorowany Rafaello, Oreo, malinami i kawałkami czekolady.'
        },
        {
          img: 'src/assets/cake-images/tort18.jpg',
          title: 'Czekoladowe Serce',
          description: 'Tort w kształcie serca z czekoladowym kremem, truskawkami, malinami, borówkami i dekoracjami z pralinek.'
        },
        {
          img: 'src/assets/cake-images/tort15.jpg',
          title: 'Kwiatowa Malina',
          description: 'Tort z różowym dripem, dekorowany malinami, różami i elegancką sylwetką na wierzchu.'
        },
        {
          img: 'src/assets/cake-images/tort13.jpg',
          title: 'Truskawkowa Klasyka',
          description: 'Lekki biszkopt z warstwą śmietankowego kremu, udekorowany świeżymi truskawkami.'
        },
        {
          img: 'src/assets/cake-images/tort2.jpg',
          title: 'Placek Kruszonkowy',
          description: 'Tradycyjny placek z owocowym nadzieniem, posypany chrupiącą kruszonką i cukrem pudrem.'
        },
        {
          img: 'src/assets/cake-images/tort3.jpg',
          title: 'Mini Bezy z Owocami',
          description: 'Delikatne mini bezy udekorowane truskawkami, malinami, czekoladą, Oreo i Ferrero Rocher.'
        },
        {
          img: 'src/assets/cake-images/tort5.jpg',
          title: 'Owocowa Pavlova',
          description: 'Delikatna beza udekorowana malinami, borówkami i kawałkami kiwi, idealna na letnie okazje.'
        },
        {
          img: 'src/assets/cake-images/tort6.jpg',
          title: 'Ciastka Pistacjowe',
          description: 'Delikatne ciastka z kremem pistacjowym, udekorowane malinami, pistacjami i czekoladowymi dodatkami.'
        },
        {
          img: 'src/assets/cake-images/tort7.jpg',
          title: 'Babka Cytrusowa',
          description: 'Puszysta babka z lukrem cytrynowym, posypana migdałami i kandyzowaną skórką pomarańczową.'
        },
        {
          img: 'src/assets/cake-images/tort9.jpg',
          title: 'Bezy z Oreo i Owocami',
          description: 'Delikatne bezy udekorowane kremem, świeżymi truskawkami, malinami, kawałkami czekolady i Oreo.'
        },
        
        {
          img: 'src/assets/cake-images/tort1.jpg',
          title: 'Pavlova Deluxe',
          description: 'Duża beza z owocami oraz zestaw mini bez udekorowanych truskawkami, malinami i borówkami.'
        },
        {
          img: 'src/assets/cake-images/tort12.jpg',
          title: 'Mini Babeczki Cytrynowe',
          description: 'Zestaw puszystych mini babeczek z lukrem, migdałami i kolorowymi posypkami.'
        },
        {
          img: 'src/assets/cake-images/tort14.jpg',
          title: 'Urodzinowa Pavlova',
          description: 'Duża beza udekorowana świeżymi owocami: malinami, borówkami i kiwi, z urodzinową dekoracją.'
        },
        {
          img: 'src/assets/cake-images/tort22.jpg',
          title: 'Owocowy Sernik na Zimno',
          description: 'Sernik na zimno z galaretką, udekorowany świeżymi malinami i borówkami.'
        },
      ]
    };
  },
  methods: {
    openImage(image) {
      this.selectedImage = image;
      this.dialog = true;
    }
  },
  mounted() {
  AOS.init({
    duration: 800, // Czas trwania animacji w ms
    offset: 100,   // Odległość od widoku do rozpoczęcia animacji
  });
}
};

</script>
  <style scoped>
  .img-custom{
    cursor: pointer;
  }
  h2{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .gallery-text
  {
    color: white;
    font-family: 'EraCake', cursive;
    font-size: 2rem;
    text-shadow: 2px 2px 8px rgba(255, 105, 180, 0.9);
    justify-content: center;
    margin-top: 15px;
  }

  .title-card{
    font-family: 'EraCake', cursive;
    color: rgba(255, 105, 180, 0.9);

    font-size: large !important;
    font-weight: 600 !important;
  }

  .container-custom{
    display: flex;
    align-items: center;
    width: 65%;
  }

  .dialog-card {
  position: relative; 
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 2;
}
  </style>
  