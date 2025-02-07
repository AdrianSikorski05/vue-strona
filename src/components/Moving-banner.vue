<template>
    <div class="moving-banner">
      <div class="banner-content" ref="bannerTrack">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" class="banner-image" />
      <!-- Duplikujemy obrazy -->
      <img v-for="(image, index) in images" :key="'copy-' + index" :src="image.src" :alt="image.alt" class="banner-image" />
      </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      images: [
        { src: 'src/assets/cake-images/tort1.jpg', alt: 'Tort 1' },
        { src: 'src/assets/cake-images/tort2.jpg', alt: 'Tort 2' },
        { src: 'src/assets/cake-images/tort3.jpg', alt: 'Tort 3' },
        { src: 'src/assets/cake-images/tort4.jpg', alt: 'Tort 4' },
        { src: 'src/assets/cake-images/tort5.jpg', alt: 'Tort 5' },
        { src: 'src/assets/cake-images/tort6.jpg', alt: 'Tort 1' },
        { src: 'src/assets/cake-images/tort7.jpg', alt: 'Tort 2' },
        { src: 'src/assets/cake-images/tort8.jpg', alt: 'Tort 3' },
        { src: 'src/assets/cake-images/tort9.jpg', alt: 'Tort 4' },
        { src: 'src/assets/cake-images/tort10.jpg', alt: 'Tort 5' },
        { src: 'src/assets/cake-images/tort11.jpg', alt: 'Tort 1' },
        { src: 'src/assets/cake-images/tort12.jpg', alt: 'Tort 2' },
        { src: 'src/assets/cake-images/tort13.jpg', alt: 'Tort 3' },
        { src: 'src/assets/cake-images/tort14.jpg', alt: 'Tort 4' },
        { src: 'src/assets/cake-images/tort15.jpg', alt: 'Tort 5' },
        { src: 'src/assets/cake-images/tort16.jpg', alt: 'Tort 1' },
        { src: 'src/assets/cake-images/tort17.jpg', alt: 'Tort 2' },
        { src: 'src/assets/cake-images/tort18.jpg', alt: 'Tort 3' },
        { src: 'src/assets/cake-images/tort19.jpg', alt: 'Tort 4' },
        { src: 'src/assets/cake-images/tort20.jpg', alt: 'Tort 5' },
        { src: 'src/assets/cake-images/tort21.jpg', alt: 'Tort 3' },
        { src: 'src/assets/cake-images/tort22.jpg', alt: 'Tort 4' },
        { src: 'src/assets/cake-images/tort23.jpg', alt: 'Tort 5' }
      ]
    };
  },
  mounted() {
    this.startInfiniteScroll();
  },
  methods: {
    startInfiniteScroll() {
      const track = this.$refs.bannerTrack;
      let scrollAmount = 0;

      function scroll() {
        scrollAmount -= 0.3; // Przesuwanie o 1px na cykl
        if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
          scrollAmount = 0; // Resetuj do początku, gdy przesuniemy połowę
        }
        track.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scroll); // Wywołanie nieskończonej animacji
      }

      scroll(); // Rozpocznij animację
    }
  }
}
</script>
  
  <style scoped>
  .moving-banner {
    bottom: 0;
    width: 100%;
    overflow: hidden;
    padding: 10px 0;
  }
  
  .banner-content {
    display: flex;
  gap: 20px;
  animation: scroll-left 30s linear infinite;
  }
  
  .banner-image {
    height: 15rem;
    width: auto;
    object-fit: cover;
    border-radius: 10px;
  }
  </style>
  