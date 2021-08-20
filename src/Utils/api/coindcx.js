import coindcx from '../axios-instances/coindcx';

export const getCoinDcxData = async () => {
	const resp = await coindcx.get('/exchange/ticker');
	return { data: resp.data };
};
