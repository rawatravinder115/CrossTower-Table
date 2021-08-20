import crosstower from '../axios-instances/crosstower';

export const getCrossTowerData = async () => {
	const resp = await crosstower.get('/api/3/public/trades/BTCUSD?sort=DESC');
	return { data: resp.data };
};
