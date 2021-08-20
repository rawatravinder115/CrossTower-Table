import zebpay from '../axios-instances/zebpay';

export const getZebpayData = async () => {
	const resp = await zebpay.get('/pro/v1/market/');
	return { data: resp.data };
};
