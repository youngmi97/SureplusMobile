import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Box } from "@material-ui/core";

import ListCard2 from "./ListCard7";
import ListCard3 from "./ListCard6";
import { Link } from "react-router-dom";
import "../App.css";

const useStyles = makeStyles((theme) => ({
	ListItemSize2: {
		color: "#666666",
		padding: 0,
		backgroundColor: "white",
		fontSize: "11px",
		margin: 0,
		borderRadius: "12px 12px 0px 0px",
		paddingLeft: 20,
		paddingTop: 20,
	},
}));

function Subscribe(props) {
	const today = new Date();

	function get_date(today, day) {
		day.setMonth(day.getMonth() + 1);
		return parseInt((day - today) / 86400000);
	}

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

	const classes = useStyles();

	return (
		<div
			style={{
				width: "100%",
				alignContent: "center",
				maxHeight: "77vh",
				overflow: "auto",
			}}
		>
			<div
				style={{
					marginTop: "2.956vh",
					marginRight: "24px",
					marginLeft: "24px",

					boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
					borderRadius: "12px",
				}}
			>
				<div
					style={{
						margin: 0,
						padding: 0,
					}}
				>
					{/* <ListCard1
            r1="12px"
            r2="12px"
            r3="0px"
            r4="0px"
            text="This Week"
            second="$11.8"
            src="Recurring.svg"
          ></ListCard1> */}
					<Typography className={classes.ListItemSize2}>
						Upcoming Subscriptions
					</Typography>
					{props.list.slice(0, 2).map((array, index) => {
						return (
							<div>
								<Button
									component={Link}
									style={{ margin: 0, padding: 0, width: "100%" }}
									to={{ pathname: "/OneSub", list: array, link: "/" }}
								>
									<ListCard3
										r1="0px"
										r2="0px"
										r3="0px"
										r4="0px"
										src={"/Img/" + array.name + "/[32].svg"}
										name={array.name}
										plan={"$" + array.cost + " / " + array.period}
										day={get_date(today, new Date(array.lastDate))}
									></ListCard3>
								</Button>
							</div>
						);
					})}

					<Button
						component={Link}
						to="/Subscription"
						style={{
							padding: 0,
							borderTopLeftRadius: "0px",
							borderTopRightRadius: "0px",
							borderBottomLeftRadius: "12px",
							borderBottomRightRadius: "12px",
							width: "100%",

							marginTop: 1,
							backgroundColor: "white",
							height: "5.08vh",
							textTransform: "none",
							paddingLeft: 20,
						}}
					>
						<Box
							display="flex"
							p={1}
							style={{
								margin: 0,
								padding: 0,
								alignItems: "center",
								width: "100%",
							}}
						>
							<Box
								p={1}
								flexGrow={1}
								style={{ margin: 0, padding: 0, textAlign: "left" }}
							>
								<Typography
									style={{
										fontSize: "1.82vh",
										color: "#000000",
									}}
								>
									View All
								</Typography>
							</Box>

							<Box p={1} style={{ margin: 0, padding: 0, marginRight: 16 }}>
								<img
									alt="name"
									src="chevron.right -s.svg"
									style={{
										width: "3vh",
										height: "3vh",
										margin: 0,
										padding: 0,
									}}
								></img>
							</Box>
						</Box>
					</Button>
				</div>
			</div>
			<div
				style={{
					marginTop: "2.956vh",
					marginRight: "24px",
					marginLeft: "24px",

					boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
					borderRadius: "12px",
				}}
			>
				<div
					style={{
						margin: 0,
						padding: 0,
					}}
				>
					{/* <ListCard1
            r1="12px"
            r2="12px"
            r3="0px"
            r4="0px"
            text="This Week"
            second="$11.8"
            src="Recurring.svg"
          ></ListCard1> */}
					<Typography className={classes.ListItemSize2}>
						Wallet Activity
					</Typography>
					{props.list.slice(0, 2).map((array, index) => {
						return (
							<ListCard2
								r1="0px"
								r2="0px"
								r3="0px"
								r4="0px"
								day="4"
								src={"/Img/" + array.name + "/[32].svg"}
								name={array.name}
								plan={get_time(new Date(array.lastDate))}
								price={"- $ " + array.cost}
							></ListCard2>
						);
					})}

					<Button
						component={Link}
						to="/WalletActivity"
						style={{
							padding: 0,
							borderTopLeftRadius: "0px",
							borderTopRightRadius: "0px",
							borderBottomLeftRadius: "12px",
							borderBottomRightRadius: "12px",
							width: "100%",
							marginTop: 1,
							height: "5.08vh",
							textTransform: "none",
							backgroundColor: "white",
							paddingLeft: 20,
						}}
					>
						<Box
							display="flex"
							p={1}
							style={{
								margin: 0,
								padding: 0,
								alignItems: "center",
								width: "100%",
							}}
						>
							<Box
								p={1}
								flexGrow={1}
								style={{ margin: 0, padding: 0, textAlign: "left" }}
							>
								<Typography
									style={{
										fontSize: "1.82vh",
										color: "#000000",
									}}
								>
									View All
								</Typography>
							</Box>

							<Box p={1} style={{ margin: 0, padding: 0, marginRight: 16 }}>
								<img
									alt="name"
									src="chevron.right -s.svg"
									style={{
										width: "3vh",
										height: "3vh",
										margin: 0,
										padding: 0,
									}}
								></img>
							</Box>
						</Box>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Subscribe;
