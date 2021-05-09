// initial state
const state = () => ({
	isLoading: null,
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
	setLoading(state, status) {
		state.isLoading = status;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
