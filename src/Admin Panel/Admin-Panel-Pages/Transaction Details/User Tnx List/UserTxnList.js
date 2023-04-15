import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import API from "../../../../backend";
import { DataGrid } from "@material-ui/data-grid";

// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
// 	{ field: "id", headerName: "ID", width: 70 },
// 	{ field: "firstName", headerName: "First name", width: 130 },
// 	{ field: "lastName", headerName: "Last name", width: 130 },
// 	{
// 		field: "age",
// 		headerName: "Age",
// 		type: "number",
// 		width: 90,
// 	},
// 	{
// 		field: "fullName",
// 		headerName: "Full name",
// 		description: "This column has a value getter and is not sortable.",
// 		sortable: false,
// 		width: 160,
// 		valueGetter: (params) =>
// 			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
// 	},
// ];

const options = {
	paginationSize: 4,
	pageStartIndex: 1,
	alwaysShowAllBtns: true, // Always show next and previous button
	withFirstAndLast: false, // Hide the going to First and Last page button
	hideSizePerPage: true, // Hide the sizePerPage dropdown always
	hidePageListOnlyOnePage: true, // Hide the pagination list when only one page

	showTotal: false,

	disablePageTitle: true,
};

const TxnList = ({ mobileNum }) => {
	const history = useHistory();
	const [ittems, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	console.log("items is", ittems);
	const token = sessionStorage.getItem("token");

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(
						`${API}transaction/transaction-of-user/authenticate_for_admin/${mobileNum}`,
						{
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${token}`,
							},
							// withCredentials: true,
						}
					)
					.then((response) => {
						console.log("RES", response);
						const sample = [];

						for (let i = 0; i < response.data.length; i += 1) {
							sample.push({
								id: response.data[i].id,
								senderNum: response.data[i].senderNum,
								recieverNum: response.data[i].recieverNum,
								amount: response.data[i].amount,
								tsxSuccessful:
									response.data[i].tsxSuccessful === true
										? "Success"
										: "Failed",
								redemptiondate: response.data[i].recieverNum,
							});
						}
						setItems(sample);
						setLoading(false);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
						// console.log(response.data[i].id);
					});
			} catch (error) {
				console.log(error);
			}
		};

		(async () => await getUserDetails())();
	}, []);

	const { SearchBar } = Search;

	const columns = [
		{
			dataField: "id",
			text: "Id",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "senderNum",
			text: "Sender Number",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "recieverNum",
			text: "Reciever Number",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "amount",
			text: "Amount",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "tsxSuccessful",
			text: "Txn Status",
			headerClasses: "deal-header",
		},
		{
			dataField: "branchredeem",
			isDummyField: true,
			text: "View Profile",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
	];

	const customFunction = (cellContent, row) => {
		return (
			<h5>
				{/* <Link to="/admin/getUserProfile"> */}
				<button
					alt="issueimageload"
					className="btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/admin/TxnDetails",
							state: { txnid: row.id },
						});
						// console.log(row.email);
					}}>
					view
				</button>
				{/* </Link> */}
			</h5>
		);
	};
	console.log("list of item", ittems);
	// list.map((list)=>{})

	return (
		<div>
			<h2 className="text-primary bw-bold">Transactions of the User</h2>

			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12 grid-margin">
								<div className="card">
									<div className="card-body">
										<div className="table-responsive">
											<ToolkitProvider
												keyField="id"
												data={ittems}
												columns={columns}
												search>
												{(props) => (
													<div>
														<h3>Search:</h3>
														<SearchBar
															{...props.searchProps}
															className="custome-search-field"
															style={{ color: "white" }}
															delay={500}
															placeholder="Search ..."
														/>
														<hr />
														{ittems.length > 0 ? (
															<BootstrapTable
																{...props.baseProps}
																headerClasses={{ backgroundColor: "red" }}
																pagination={paginationFactory(options)}
															/>
														) : (
															// <DataGrid
															// 	rows={ittems}
															// 	columns={columns}
															// 	pageSize={5}
															// 	rowsPerPageOptions={[5]}
															// 	checkboxSelection
															// />
															<div className="text-center text-danger">
																<h4>No Entries Found !</h4>
															</div>
														)}
													</div>
												)}
											</ToolkitProvider>
											{/* <DataGrid
												rows={ittems}
												columns={columns}
												pageSize={5}
												// checkboxSelection
												disableSelectionOnClick
											/> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="row"></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default TxnList;
