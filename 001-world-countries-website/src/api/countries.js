import axios from 'axios';

const getAllCountries = () => {
	return axios.get('https://restcountries.com/v3.1/all');
};

const getCountryByAlphaCode = (countryCode) => {
	return axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
};

export default { getAllCountries, getCountryByAlphaCode };
