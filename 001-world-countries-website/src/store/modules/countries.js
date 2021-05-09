import CountriesAPI from '@/api/countries';

// initial state
const state = () => ({
	countries: null,
	country: null,
});

// getters
const getters = {
	countries: (state) => state.countries,
	country: (state) => state.country,
};

// actions
const actions = {
	/**
	 *
	 * @param {import("vuex").Store}
	 */
	async getListOfCountries({ commit, dispatch, getters, state, rootGetters, rootState }) {
		commit('ui/setLoading', true, { root: true });
		try {
			const { data: countries } = await CountriesAPI.getAllCountries();
			commit('setCountries', countries);
		} catch (err) {
			console.error(err);
		} finally {
			commit('ui/setLoading', false, { root: true });
		}
	},
	/**
	 *
	 * @param {import("vuex").Store}
	 * @param {string} countryCode
	 */
	async getCountryByAlphaCode({ commit, dispatch, getters, state, rootGetters, rootState }, countryCode) {
		commit('ui/setLoading', true, { root: true });
		try {
			const { data: country } = await CountriesAPI.getCountryByAlphaCode(countryCode);
			commit('setCountry', country);
		} catch (err) {
			console.error(err);
		} finally {
			commit('ui/setLoading', false, { root: true });
		}
	},
};

// mutations
const mutations = {
	setCountries(state, countries) {
		state.countries = countries;
	},
	setCountry(state, country) {
		state.country = country;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
