import React, { useState, useEffect } from "react";
import { getZebpayData } from "../Utils/api/zebpay";
import Table from "../Components/Table";
import { parse } from "../Utils/csv-parser";

export default function Zebpay(props) {
	const fetchZebpay = async () => {
		const resp = await getZebpayData();
		const data = resp.data
			.filter((item) => {
				return item.pair === "BTC-INR";
			})
			.map((item) => {
				return { time: new Date().toLocaleString(), price: item.sell };
			});
		setArr(data);
		fetchStaticData();
	};
	const fetchStaticData = async () => {
		const data = await parse("/assets/zebpay.csv");
		setArr((old) => [...old, ...data]);
	};
	useEffect(() => {
		fetchZebpay();
		const interval = setInterval(() => setTime(Date.now()), 100000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	const [arr, setArr] = useState([]);
	const [time, setTime] = useState(Date.now());
	return (
		<div>
			<h2>Zebpay</h2>
			<div>
				<Table arr={arr} />
			</div>
		</div>
	);
}
