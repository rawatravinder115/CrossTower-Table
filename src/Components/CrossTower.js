import React, { useState, useEffect } from "react";
import { getCrossTowerData } from "../Utils/api/crosstower";
import Table from "../Components/Table";
import { parse } from "../Utils/csv-parser";

export default function CrossTower(props) {
	const fetchCrossTower = async () => {
		const resp = await getCrossTowerData();
		const data = resp.data.map((item) => {
			const date = new Date(item.timestamp).toLocaleString();
			return { time: date, price: Math.round(item.price*74.35) };
		});
		setArr(data);
		fetchStaticData();
	};
	const fetchStaticData = async () => {
		const data = await parse("/assets/crosstower.csv");
		setArr((old) => [...old, ...data]);
	};
	useEffect(async () => {
		fetchCrossTower();
		const interval = setInterval(() => setTime(Date.now()), 100000);
    return () => {
      clearInterval(interval);
    };
	}, []);
	const [arr, setArr] = useState([]);
	const [time, setTime] = useState(Date.now());
	return (
		<div>
			<h2>Cross Tower</h2>
			<div>
				<Table arr={arr} />
			</div>
		</div>
	);
}
