import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://www.zebapi.com',
});
export default instance;
