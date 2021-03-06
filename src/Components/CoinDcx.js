import React, { useState, useEffect } from "react";
import { getCoinDcxData } from "../Utils/api/coindcx";
import Table from "../Components/Table";
import { parse } from "../Utils/csv-parser";

export default function CoinDcx(props) {
	const fetchCoinDcx = async () => {
		const resp = await getCoinDcxData();
		const data = resp.data
			.filter((item) => {
				return item["market"] === "BTCINR";
			})
			.map((item) => {
				// const d1 = new Date();
				// const date = new Date(
				// 	new Date(d1.getFullYear(), d1.getMonth()).getTime() +
				// 		item.timestamp
				// );
				const date = new Date();
				return { time: date.toLocaleString(), price: item.ask };
			});

		setArr(data);
		fetchStaticData();
	};
	const fetchStaticData = async () => {
		const data = await parse("/assets/coindcx.csv");
		setArr((old) => [...old, ...data]);
	};
	useEffect(() => {
		fetchCoinDcx();
		const interval = setInterval(() => setTime(Date.now()), 100000);
    return () => {
      clearInterval(interval);
    };
	}, []);
	const [arr, setArr] = useState([]);
	const [time, setTime] = useState(Date.now());
	return (
		<div>
			<h2>Coin DCX</h2>
			<div>
				<Table arr={arr} />
			</div>
		</div>
	);
}
