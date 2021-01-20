import React from "react";

import { Box, Button } from "@material-ui/core";
import ListCard from "./ListCard3";
import { Link } from "react-router-dom";
import "../App.css";

function Subscribe(props) {
	const shortmonth = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const data = props.list;

	const dayindex = {};

	for (let index = 0; index < data.length; index++) {
		const element = data[index];
		if (element.lastDate in dayindex) {
			dayindex[element.lastDate].push(element);
		} else {
			dayindex[element.lastDate] = [element];
		}
	}

	return (
		<div
			style={{
				width: "100%",
				alignContent: "center",
				maxHeight: "77vh",
				overflow: "auto",
				paddingBottom: 10,
			}}
		>
			<div
				style={{
					marginTop: "2.956vh",
					marginRight: "24px",
					marginLeft: "24px",
				}}
			>
				{Object.keys(dayindex).map(function (key, index) {
					return (
						<Box
							style={{
								margin: 0,
								marginTop: 16,
								padding: 0,
								filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
							}}
						>
							{dayindex[key].map((array1, index1) => {
								return (
									<Button
										component={Link}
										style={{ margin: 0, padding: 0, width: "100%" }}
										to={{
											pathname: "/OneSub",
											list: array1,
											link: "/Subscription",
										}}
									>
										<ListCard
											r1="12px"
											r2="12px"
											r3="12px"
											r4="12px"
											month={shortmonth[new Date(key).getMonth()]}
											day={new Date(key).getDate()}
											src={"/Img/" + array1.name + "/[32].svg"}
											name={array1.name}
											plan={"$" + array1.cost + " / " + array1.period}
											share={0}
										></ListCard>
									</Button>
								);
							})}
						</Box>
					);
				})}
			</div>
		</div>
	);
}

export default Subscribe;
