import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://api.crosstower.com',
});
export default instance;
