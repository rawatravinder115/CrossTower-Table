import React, { useState, useEffect } from 'react';
import CoinDcx from '../Components/CoinDcx';
import CrossTower from '../Components/CrossTower';
import Zebpay from '../Components/Zebpay';
import Wazirx from '../Components/Wazirx';
import Chart from '../Components/Chart';

export default function Home() {

	const [inr , setInr] = useState();

	async function fetchData(){
		const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json")
		const data = await response.json();
		const price = parseFloat(data.inr);
		console.log('price is: ', typeof(price))
		setInr(price);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<CrossTower inr={inr} />
			<CoinDcx inr ={inr}/>
			<Wazirx inr ={inr} />
			<Zebpay inr ={inr} />
			<Chart />
		</div>
	);
}
