<template>
  <v-app>  
    <Navigation2/>     
    <v-main class="main">
      <Baner/>
      <div data-section="about">
        <About />
      </div>
      <v-divider color="info margin-20"></v-divider>
      <div data-section="gallery">
        <Gallery />
      </div>
      <v-divider color="info"></v-divider>
      <div data-section="offer">
        <Offer />
      </div>
      <v-divider color="info"></v-divider>
      <MovingBanner />
      <v-divider color="info"></v-divider>
      <div data-section="form">
        <Form />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation2 from './components/Navigation2.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import Gallery from './components/Gallery.vue';
import Form from './components/Form.vue';
import Baner from './components/Baner.vue';
import MovingBanner from './components/Moving-banner.vue';
import Offer from './components/Offer.vue';

export default {
  name: 'App',
  components: {
    Navigation2,
    Footer,
    About,
    Gallery,
    Form,
    Baner,
    MovingBanner,
    Offer
  },
}
</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: hidden;
}


.margin-20{
  margin-top: 7rem;
}

</style>