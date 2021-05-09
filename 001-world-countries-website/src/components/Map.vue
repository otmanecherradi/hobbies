<template>
  <div class="mapContainer">
    <l-map
      class="map"
      :zoom="zoom"
      :center="currentCenter"
      :options="mapOptions"
    >
      <l-tile-layer :url="tileURL" :attribution="attribution"></l-tile-layer>

      <l-marker :lat-lng="currentCenter">
        <l-popup>
          <div>{{ country.name }}</div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
	data() {
		return {
			tileURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			zoom: 5,
			mapOptions: {
				zoomSnap: 0.5,
				zoomControls: false,
				scrollWheelZoom: false
			}
		};
	},
	props: ['currentCountry'],
	computed: {
		country() {
			return this.$props.currentCountry;
		},
		currentCenter() {
			if (!this.country) {
				return [0, 0];
			} else {
				return this.country.latlng;
			}
		}
	},
	methods: {},
	components: {
		LMap,
		LTileLayer,
		LMarker,
		LPopup
	}
};
</script>

<style lang="scss">
.mapContainer {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
}
.map {
  height: 100%;
}
</style>
