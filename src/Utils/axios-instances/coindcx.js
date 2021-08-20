import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://api.coindcx.com',
});
export default instance;
