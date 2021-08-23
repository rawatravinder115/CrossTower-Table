import React, { useState, useEffect } from 'react';
import { getWazirxData } from '../Utils/api/wazirx';
import Table from '../Components/Table';
import { parse } from '../Utils/csv-parser';

export default function Wazirx(props) {
	const fetchWazirx = async () => {
		const resp = await getWazirxData();
		const data = resp.data['btcinr'];
		//timestamp = data.at
		setArr([{ time: new Date().toLocaleString(), price: data.sell}]);
		fetchStaticData();
	};
	const fetchStaticData = async () => {
		const data = await parse('/assets/wazirx.csv');
		setArr((old) => [...old, ...data]);
	};

	useEffect(() => {
		fetchWazirx();
		const interval = setInterval(() => setTime(Date.now()), 100000);
    return () => {
      clearInterval(interval);
    };
	}, []);
	const [arr, setArr] = useState([]);
	const [time, setTime] = useState(Date.now());
	return (
		<div>
			<h2>Wazir X</h2>
			<div>
				<Table arr={arr} />
			</div>
		</div>
	);
}
