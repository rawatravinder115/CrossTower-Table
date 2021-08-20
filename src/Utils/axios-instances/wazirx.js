import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://api.wazirx.com',
});
export default instance;
