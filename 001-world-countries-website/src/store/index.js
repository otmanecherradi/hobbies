import { createStore } from 'vuex';

import ui from './modules/ui';
import countries from './modules/countries';

export default createStore({
  modules: {
    ui,
    countries,
  },
});
