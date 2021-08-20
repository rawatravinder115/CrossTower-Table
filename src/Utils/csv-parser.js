import axios from 'axios';
export const parse = async (path) => {
	const resp = await axios.get(path);
	const arr = resp.data.split('\n').map((item) => {
		return {
			time: new Date(item.split(',')[0]).toLocaleString(),
			price: item.split(',')[1],
		};
	});
	return arr;
};
