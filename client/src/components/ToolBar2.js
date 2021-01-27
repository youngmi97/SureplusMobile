//Monthly and Yearly Slider

import React from "react";

import { Button, Box, Typography } from "@material-ui/core";

import "../App.css";

function ToolBar(props) {
	const value = props.value;
	const setValue = props.setValue;
	return (
		<div style={{ width: "100%" }}>
			{/* This box encloses the entire form */}
			<Box
				display="flex"
				p={1}
				alignItems="center"
				style={{
					margin: 0,
					padding: 0,
					backgroundColor: "rgba(118, 118, 128, 0.12)",
					borderRadius: 18,
					minHeight: 36,
					width: 196,
				}}
			>
				{(() => {
					if (value == 0) {
						return (
							<Box p={1} style={{ margin: 0, padding: 0, borderRadius: 18 }}>
								<Button
									onClick={() => setValue(0)}
									style={{
										marginLeft: 2,
										padding: "6px 8px",
										Height: 32,
										minWidth: 96,
										borderRadius: "16px",
										textTransform: "none",
										backgroundColor: "white",
										boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.15)",
									}}
								>
									<Typography
										style={{
											margin: 2,
											padding: 0,
											color: "black",
											fontSize: "13px",
											fontFamily: "Avenir Next",
											fontWeight: 600,
											letterSpacing: "-0.08px",
											height: 16,
										}}
									>
										Monthly
									</Typography>
								</Button>
							</Box>
						);
					} else {
						return (
							<Box p={1} style={{ margin: 0, padding: 0 }}>
								<Button
									onClick={() => setValue(0)}
									style={{
										marginLeft: 2,
										padding: "6px 8px",
										Height: 32,
										minWidth: 96,
										borderRadius: "16px",
										textTransform: "none",
									}}
								>
									<Typography
										style={{
											margin: 0,
											padding: 0,
											color: "black",
											fontSize: "13px",
											fontFamily: "Avenir Next",
											fontWeight: 400,
											letterSpacing: "-0.08px",
											height: 16,
										}}
									>
										Monthly
									</Typography>
								</Button>
							</Box>
						);
					}
				})()}
				{(() => {
					if (value == 1) {
						return (
							<Box p={1} style={{ margin: 0, padding: 0 }}>
								<Button
									onClick={() => setValue(0)}
									style={{
										marginRight: 2,
										padding: "6px 8px",
										Height: 32,
										minWidth: 96,
										borderRadius: "16px",
										textTransform: "none",
										backgroundColor: "white",
										boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.15)",
									}}
								>
									<Typography
										style={{
											margin: 2,
											padding: 0,
											color: "black",
											fontSize: "13px",
											fontFamily: "Avenir Next",
											fontWeight: 600,
											letterSpacing: "-0.08px",
											height: 16,
										}}
									>
										Yearly
									</Typography>
								</Button>
							</Box>
						);
					} else {
						return (
							<Box p={1} style={{ margin: 0, padding: 0 }}>
								<Button
									onClick={() => setValue(1)}
									style={{
										marginRight: 2,
										padding: "6px 8px",
										Height: 32,
										minWidth: 96,
										borderRadius: "16px",
										textTransform: "none",
									}}
								>
									<Typography
										style={{
											margin: 0,
											padding: 0,
											color: "black",
											fontSize: "13px",
											fontFamily: "Avenir Next",
											fontWeight: 400,
											letterSpacing: "-0.08px",
											height: 16,
										}}
									>
										Yearly
									</Typography>
								</Button>
							</Box>
						);
					}
				})()}
			</Box>
		</div>
	);
}

export default ToolBar;
