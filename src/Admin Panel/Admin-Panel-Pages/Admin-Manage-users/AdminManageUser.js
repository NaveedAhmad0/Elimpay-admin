import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
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

const AdminManageUser = () => {
	const history = useHistory();
	const [ittems, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	console.log("items is", ittems);
	const token = sessionStorage.getItem("token");

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(`${API}Admin/get-all-users`, {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`,
						},
						// withCredentials: true,
					})
					.then((response) => {
						console.log("RES", response);
						const sample = [];

						for (let i = 0; i < response.data.data.data.length; i += 1) {
							sample.push({
								id: response.data.data.data[i].id,
								FirstName: response.data.data.data[i].name,
								email: response.data.data.data[i].email,
								mobile: response.data.data.data[i].mobileNum,
								balance: response.data.data.data[i].balance,
								redemptiondate: response.data.data.data[i].email,
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
			dataField: "FirstName",
			text: "First Name",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "email",
			text: "Email",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "mobile",
			text: "Mobile",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "balance",
			text: "Users Balance",
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
							pathname: "/admin/getUserProfile",
							state: { dataEmail: row.email },
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
			<h2 className="text-primary bw-bold">Registered Users</h2>

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
			)}
		</div>
	);
};

export default AdminManageUser;
