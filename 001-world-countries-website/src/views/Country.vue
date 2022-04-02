<template>
  <div class="country" v-if="!isLoading">
    <Map :currentCountry="country" class="map" />
    <div class="container a">
      <div class="content">
        <h1 class="is-size-1">{{ country.name.official }}</h1>
        <h4>Capital: {{ country.capital?.join(", ") }}</h4>
        <p>Region: {{ country.region }}</p>
        <p>Population: {{ country.population }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';

import Map from '@/components/Map';

export default {
  name: 'Country',
  data() {
    return {};
  },
  computed: {
    ...mapState('ui', ['isLoading']),
    ...mapGetters('countries', ['country'])
  },
  async created() {
    await this.getCountryByAlphaCode(this.$route.params.countryCode);
  },
  unmounted() {
    this.setCountry(null);
  },
  methods: {
    ...mapActions('countries', ['getCountryByAlphaCode']),
    ...mapMutations('countries', ['setCountry'])
  },
  components: {
    Map
  }
};
</script>

<style lang="scss" scoped>
.map {
  height: 43vh;
}

.a {
  padding: 1rem 0;
}
</style>
