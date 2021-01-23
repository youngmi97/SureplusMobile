import React from "react";

import "../App.css";

import gql from "graphql-tag";
import { serviceByUser } from "../graphql/queries";
import AppBar from "../components/AppbarProfile";
import Main from "../components/MainProfile";
import BottomNavigation from "../components/BottomNavigation";

function Wallet(props) {
	const [data, setData] = React.useState([]);

	try {
		props.client
			.query({
				query: gql(serviceByUser),
				variables: { userID: props.userData.sub },
			})
			.then(({ data }) => {
				setData(data.serviceByUser.items);
			});
	} catch (e) {
		console.log("query error", e);
	}

	const [value, setValue] = React.useState(0);
	return (
		<div
			style={{
				width: "100%",
				alignContent: "center",
				height: "100vh",
				backgroundColor: "white",
			}}
		>
			<div
				style={{
					width: "100%",
					height: "25vh",
					backgroundColor: "white",
				}}
			>
				<AppBar name={props.userData.name} />
			</div>
			<div
				style={{
					width: "100%",
					alignContent: "center",
				}}
			>
				<Main list={data} />
			</div>
			<BottomNavigation value={value} setValue={setValue} />
		</div>
	);
}

export default Wallet;
