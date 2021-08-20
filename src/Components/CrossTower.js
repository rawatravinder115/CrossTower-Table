import React, { useState, useEffect } from "react";
import { getCrossTowerData } from "../Utils/api/crosstower";
import Table from "../Components/Table";
import { parse } from "../Utils/csv-parser";

export default function CrossTower(props) {
	const fetchCrossTower = async () => {
		const resp = await getCrossTowerData();
		const data = resp.data.map((item) => {
			const date = new Date(item.timestamp).toLocaleString();
			return { time: date, price: item.price };
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
	}, []);
	const [arr, setArr] = useState([]);
	return (
		<div>
			<h2>Cross Tower</h2>
			<div>
				<Table arr={arr} />
			</div>
		</div>
	);
}
