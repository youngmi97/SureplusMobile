import React from "react";

import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import ListCard2 from "./ListCard7";

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

function Wallet(props) {
	const ind = props.ind;
	const setIndex = props.setIndex;
	const classes = useStyles();

	return (
		<div
			style={{
				width: "100%",
				alignContent: "center",
				maxHeight: "90vh",
				overflow: "auto",
			}}
		>
			<div
				style={{
					marginRight: "24px",
					marginLeft: "24px",
				}}
			>
				<Box
					display="flex"
					p={1}
					alignItems="center"
					alignContent="center"
					justifyContent="center"
					justifyItems="center"
					style={{
						margin: 0,
						padding: 0,
					}}
				>
					<div
						// Shadow
						style={{
							position: "absolute",
							backgroundColor: "rgba(118, 16, 235, 0.4)",
							marginTop: "4.17vh",

							height: "145.7px",
							width: "237px",
							filter: "blur(10px)",
							borderRadius: "9.22px",
						}}
					></div>
					{(() => {
						if (ind != 0) {
							return (
								<Button
									onClick={() => {
										setIndex(0);
									}}
									style={{
										minWidth: 0,
										minHeight: 0,
										padding: 0,
										margin: 0,
										marginTop: "2.08vh",
										position: "absolute",
										left: "24px",
									}}
								>
									<img src="left.svg" style={{}} />
								</Button>
							);
						}
					})()}

					{(() => {
						if (ind != 1) {
							return (
								<Button
									onClick={() => {
										setIndex(1);
									}}
									style={{
										minWidth: 0,
										minHeight: 0,
										padding: 0,
										margin: 0,
										marginTop: "2.08vh",
										position: "absolute",
										right: "24px",
									}}
								>
									<img src="right.svg" style={{}} />
								</Button>
							);
						}
					})()}
					<div
						style={{
							position: "relative",
							backgroundColor: "#7610EB",
							marginTop: "4.17vh",
							height: "158px",
							width: "257px",
							borderRadius: "10px",
							overflow: "hidden",
						}}
					>
						<img
							alt="name"
							src="/Mastercard.svg"
							style={{
								position: "absolute",

								left: 189,
								top: 109,

								width: "47.5px",
								height: "29.28px",
							}}
						/>
						<Typography
							style={{
								margin: 0,
								padding: 0,
								marginLeft: 16,
								marginTop: "16px",
								color: "white",
								fontWeight: 400,
							}}
						>
							Sureplus Pro
						</Typography>
					</div>
				</Box>

				<Button
					// Transaction Button
					to="/Transaction"
					component={Link}
					style={{
						padding: 0,
						marginTop: "4.17vh",
						backgroundColor: "white",
						borderRadius: "12px 12px 0px 0px",

						width: "100%",
						height: "8.33vh",
						textTransform: "none",
						// Drop Shadow / Default
					}}
				>
					<Box
						display="flex"
						p={1}
						alignItems="center"
						style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
					>
						<Box
							p={1}
							flexGrow={1}
							style={{ margin: 0, padding: 0, marginLeft: 16 }}
						>
							<Typography
								style={{
									fontSize: "2.1vh",
									fontWeight: "500",
									textAlign: "left",
								}}
							>
								Subscriptions
							</Typography>
						</Box>
						<Box p={1} style={{ margin: 0, padding: 0, marginRight: 20 }}>
							<Typography>3</Typography>
						</Box>
					</Box>
				</Button>
				<Button
					// Transaction Button
					to="/Transaction"
					component={Link}
					style={{
						padding: 0,
						marginTop: "1px",
						backgroundColor: "white",
						borderRadius: "0px 0px 12px 12px",

						width: "100%",
						height: "8.33vh",
						textTransform: "none",
						// Drop Shadow / Default
					}}
				>
					<Box
						display="flex"
						p={1}
						alignItems="center"
						style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}
					>
						<Box
							p={1}
							flexGrow={1}
							style={{ margin: 0, padding: 0, marginLeft: 16 }}
						>
							<Typography
								style={{
									fontSize: "2.1vh",
									fontWeight: "500",
									textAlign: "left",
								}}
							>
								Total
							</Typography>
						</Box>
						<Box p={1} style={{ margin: 0, padding: 0, marginRight: 20 }}>
							<Typography>$ 32.97</Typography>
						</Box>
					</Box>
				</Button>
			</div>
			<div
				style={{
					marginRight: "24px",
					marginLeft: "24px",
					marginTop: "4.17vh",
					borderRadius: "12px 12px 0px 0px",
					backgroundColor: "white",
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
					<div
						style={{
							position: "relative",
							display: "flex",
							flexDirection: "row",
							backgroundColor: "white",
							paddingLeft: 20,
							paddingTop: 20,
							alignItems: "center",
							borderRadius: "12px 12px 0px 0px",
						}}
					>
						<Typography className={classes.ListItemSize2}>
							2021.01.02
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

					<ListCard2
						r1="0px"
						r2="0px"
						r3="0px"
						r4="0px"
						month="Mar"
						day="4"
						src="/Img/Aaptiv/[32].svg"
						name="Aaptiv"
						plan="12:30"
						price="- $ 5.9"
					></ListCard2>
					<ListCard2
						r1="0px"
						r2="0px"
						r3="0px"
						r4="0px"
						month="Mar"
						day="4"
						src="/Img/AppleMusic/[32].svg"
						name="AppleMusic"
						plan="12:30"
						price="- $ 5.9"
					></ListCard2>
				</div>
			</div>
			<div
				style={{
					marginRight: "24px",
					marginLeft: "24px",
					backgroundColor: "white",
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
					<div
						style={{
							position: "relative",
							display: "flex",
							flexDirection: "row",
							backgroundColor: "white",
							paddingLeft: 20,
							paddingTop: 20,
							alignItems: "center",
							borderRadius: "0px 0px 12px 12px",
						}}
					>
						<Typography className={classes.ListItemSize2}>
							2021.01.02
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

					<ListCard2
						r1="0px"
						r2="0px"
						r3="0px"
						r4="0px"
						month="Mar"
						day="4"
						src="/Img/Aaptiv/[32].svg"
						name="Aaptiv"
						plan="12:30"
						price="- $ 5.9"
					></ListCard2>
					<ListCard2
						r1="0px"
						r2="0px"
						r3="0px"
						r4="0px"
						month="Mar"
						day="4"
						src="/Img/AppleMusic/[32].svg"
						name="AppleMusic"
						plan="12:30"
						price="- $ 5.9"
					></ListCard2>
				</div>
			</div>
		</div>
	);
}

export default Wallet;
