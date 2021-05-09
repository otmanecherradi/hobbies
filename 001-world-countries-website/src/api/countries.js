import axios from 'axios';

const getAllCountries = () => {
	return axios.get('https://restcountries.eu/rest/v2/all');
};

const getCountryByAlphaCode = (countryCode) => {
	return axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
};

export default { getAllCountries, getCountryByAlphaCode };
