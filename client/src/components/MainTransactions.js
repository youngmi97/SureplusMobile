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
				maxHeight: "79.0365vh",
				overflow: "auto",
				paddingBottom: 24,
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
							borderRadius: 8,
							// boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
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
										border: "1px solid #C8C7CC",
										position: "absolute",
										bottom: 0,
										right: 0,
										width: "59.4667vw",
										height: 0,
										opacity: "30%",
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
									plan={"$" + array.cost + " / " + array.period}
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
