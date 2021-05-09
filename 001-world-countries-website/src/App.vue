<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss">
main {
  height: 100%;
  min-height: calc(100vh - 3.25rem);
}
</style>
