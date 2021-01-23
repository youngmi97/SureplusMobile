import React from "react";

import "../App.css";
import AppBar from "../components/Appbar3";
import Main from "../components/MainSubscribe2";
import gql from "graphql-tag";

import { serviceByUser } from "../graphql/queries";

import BottomNavigation from "../components/BottomNavigation";

function Subscription(props) {
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
	const [value, setValue] = React.useState(1);
	return (
		<div style={{ width: "100%", alignContent: "center", height: "100vh" }}>
			<div
				style={{
					width: "100%",
					height: "11.4vh",
					backgroundColor: "white",
				}}
			>
				<AppBar
					Text={"Subscriptions"}
					Tab1="List"
					Tab2="Calendar"
					Link="Subscription"
					state={1}
				/>
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

export default Subscription;
