import React from 'react';

export default function Table({ arr }) {
	return (
		<table>
			<thead>
				<th>Time</th>
				<th>Price</th>
			</thead>
			<tbody>
				{arr.map((item) => {
					return (
						<tr>
							<td>{item.time}</td>
							<td>{item.price}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
