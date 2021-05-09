<template>
  <div class="home container">
    <div class="countries" v-if="!isLoading">
      <div class="country" v-for="country in countries" :key="country.alpha2">
        <router-link :to="'/' + country.alpha2Code">
          <div class="countryImage">
            <figure class="image is-5by4">
              <img
                class="image"
                :src="country.flag"
                :alt="country.name + ' flag'"
              />
            </figure>
          </div>
          <div class="countryContent">
            <p class="title is-4">{{ country.name }}</p>
            <p class="subtitle is-6">{{ country.capital }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
	name: 'Home',
	data() {
		return {};
	},
	computed: {
		...mapState('ui', ['isLoading']),
		...mapGetters('countries', ['countries'])
	},
	beforeMount() {
		this.getListOfCountries();
	},
	methods: {
		...mapActions('countries', ['getListOfCountries'])
	},
	components: {}
};
</script>

<style lang="scss">
.home {
  padding-left: 1.5rem;
  padding-top: 1.5rem;
}
.countries {
  display: flex;
  flex-wrap: wrap;

  .country {
    height: 18.375rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    overflow: hidden;
    width: 15.75rem;
    background-color: #fff;
    border-radius: 0.5rem;
    transition: 130ms;
  }

  .country:hover,
  .country:focus {
    box-shadow: 0 0 9px 0 #eee;
  }

  .countryImage {
    overflow: hidden;
  }
  .countryImage img {
    height: 100%;
  }

  .countryContent {
    padding: 1rem;
  }
}
</style>
