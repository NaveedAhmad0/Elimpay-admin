import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
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

const AdminManageRole = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(true);

	const [ittems, setItems] = useState([]);
	console.log("items is", ittems);

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios.get(`${API}/admin/get-merchant-list`).then((response) => {
					// if (response == 200) {
					const sample = [];
					for (let i = 0; i < response.data.length; i += 1) {
						sample.push({
							id: response.data[i].id,
							FirstName: response.data[i].firstName,
							email: response.data[i].email,
							status: response.data[i].mobile,
							branchredeem: response.data[i].email,
							merchantId: response.data[i].merchantId,
						});
					}
					setItems(sample);
					// }
					console.log("babla", response.data);
					setLoading(false);
					setTimeout(() => {
						setLoading(false);
					}, 3000);
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
			dataField: "status",
			text: "Mobile",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "branchredeem",
			isDummyField: true,
			text: "View user",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
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
	console.log("list of item", ittems);
	const customFunction = (cellContent, row) => {
		return (
			<h5>
				{/* <Link to="/admin/getUserProfile"> */}
				<button
					className="btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/admin/getMerchantProfile",
							state: {
								merchantdataEmail: row.email,
								merchantId: row.merchantId,
							},
						});
						console.log("sent email", row.merchantId);
					}}>
					view
				</button>
				{/* </Link> */}
			</h5>
		);
	};
	// list.map((list)=>{})

	return (
		<div>
			<h2 className="text-primary bw-bold">Merchant List</h2>

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
														<BootstrapTable
															{...props.baseProps}
															headerClasses={{ backgroundColor: "red" }}
															pagination={paginationFactory(options)}
														/>
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

export default AdminManageRole;
