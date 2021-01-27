import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import ListCard2 from "./ListCard7";

import "../App.css";

const useStyles = makeStyles((theme) => ({
	ListItemSize2: {
		color: "#666666",
		padding: 0,
		backgroundColor: "white",
		fontSize: "11px",
		margin: 0,
		borderRadius: "12px 12px 0px 0px",
	},
}));

function Subscribe(props) {
	const classes = useStyles();

	const data = props.list;

	function get_time(day1) {
		const day = new Date(day1.getTime() + day1.getTimezoneOffset() * 60 * 1000);

		return (
			day.getMonth() +
			1 +
			"/" +
			day.getDate() +
			" " +
			day.getHours() +
			":" +
			day.getMinutes()
		);
	}

	const dayindex = {};

	for (let i = 0; i < 3; i++) {
		for (let index1 = 0; index1 < data.length; index1++) {
			const element = data[data.length - 1 - index1];
			const index = new Date(element.lastDate);
			index.setMonth(index.getMonth() - i);
			if (index in dayindex) {
				dayindex[index].push(element);
			} else {
				dayindex[index] = [element];
			}
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
			{Object.keys(dayindex).map(function (key, index) {
				const day1 = new Date(key);
				const day = new Date(
					day1.getTime() + day1.getTimezoneOffset() * 60 * 1000
				);
				return (
					<div
						style={{
							marginTop: "2.956vh",
							marginRight: "24px",
							marginLeft: "24px",
							backgroundColor: "white",
							borderRadius: "12px 12px 12px 12px",
							boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
						}}
					>
						<div
							style={{
								margin: 0,
								padding: 0,
							}}
						>
							<div
								style={{
									position: "relative",
									display: "flex",
									flexDirection: "row",

									paddingLeft: 20,
									paddingTop: 20,
									alignItems: "center",
									borderRadius: "12px 12px 0px 0px",
								}}
							>
								<Typography className={classes.ListItemSize2}>
									{day.getFullYear() +
										"." +
										(day.getMonth() + 1) +
										"." +
										day.getDate()}
								</Typography>
								<hr
									style={{
										borderTop: "0.6px solid #bbb",
										position: "absolute",
										bottom: 0,
										right: 0,
										width: "70%",
										height: 0,
									}}
								/>
							</div>
						</div>
						{dayindex[key].map((array, index) => {
							return (
								<ListCard2
									r1="0px"
									r2="0px"
									r3="0px"
									r4="0px"
									src={"/Img/" + array.name + "/[32].svg"}
									name={array.name}
									plan={get_time(new Date(array.lastDate))}
									price={"- $" + array.cost}
								></ListCard2>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default Subscribe;
