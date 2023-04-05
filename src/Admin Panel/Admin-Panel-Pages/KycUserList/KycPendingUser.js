import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";

import { useHistory } from "react-router-dom";
import API from "../../../backend";
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

function KycPendingUser() {
	const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [ittems, setItems] = useState([]);
	// const [invoiceRefId, setInvoiceRefId] = useState("");

	console.log("items is", ittems);
	const token = sessionStorage.getItem("token");

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(`${API}/Admin/kyc-pending-users`, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`,
						},
						// withCredentials: true,
					})
					.then((response) => {
						// if (response == 200) {
						// console.log("skldhf", response.data);
						const sample = [];
						for (let i = 0; i < response.data.data.length; i += 1) {
							sample.push({
								user_id: response.data.data[i].user_id,
								email: response.data.data[i].email,

								mobileNum: response.data.data[i].mobileNum,
								name: response.data.data[i].name,
								occupation: response.data.data[i].occupation,
								payerName: response.data.data[i].payerName,
								amount: response.data.data[i].amount,
							});
							// setInvoiceRefId(response.data[i].t_id);
						}
						// console.log("babla", response.data.data.length);
						setItems(sample);
						setLoading(false);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
						// }
						// const listItems = response.json();
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
			dataField: "user_id",
			text: "user_id",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "name",
			text: "Name",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "email",
			text: "Email",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "mobileNum",
			text: "Mobile Number",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "occupation",
			text: "Occupation",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		// {
		// 	dataField: "View",
		// 	isDummyField: true,
		// 	text: "Transaction Details",
		// 	headerClasses: "deal-header",
		// 	formatter: (cellContent, row) => {
		// 		return customFunction(cellContent, row);
		// 	},
		// },
		// {
		// 	dataField: "name",
		// 	isDummyField: true,
		// 	text: "Edit role",
		// 	headerClasses: "deal-header",
		// 	formatter: (cellContent, row) => {
		// 		return customFunction(cellContent, row);
		// 	},
		// },
	];
	// console.log("list of item", ittems);
	const customFunction = (cellContent, row) => {
		return (
			<h5>
				<button
					href
					alt="issueimageload"
					className="btn btn-success"
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/admin/TransactionDetails",
							state: {
								id: row,
							},
						});
						console.log("sent email", row.date);
					}}>
					view
				</button>
			</h5>
		);
	};
	return (
		<div>
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						<h4 className="page-title">Kyc Pending Users</h4>
					</div>
				</div>
			</div>

			{/* <MerchantForm /> */}
			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div>
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
																<div className="text-center text-danger">
																	<h4>No Users Found !</h4>
																</div>
															)}
														</div>
													)}
												</ToolkitProvider>
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
				</div>
			)}
		</div>
	);
}
export default KycPendingUser;
