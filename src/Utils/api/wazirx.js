import wazirx from '../axios-instances/wazirx';

export const getWazirxData = async () => {
	const resp = await wazirx.get('/api/v2/tickers');
	return { data: resp.data };
};
