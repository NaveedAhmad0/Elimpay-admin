import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useHistory } from "react-router-dom";
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

const ProjectList = () => {
	const history = useHistory();

	const [ittems, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [deleteOk, setDeleteOk] = useState(false);
	console.log("items is", ittems);
	const token = sessionStorage.getItem("token");

	const getUserDetails = async () => {
		try {
			await axios
				.get(`${API}Admin/get-all-projects`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					// withCredentials: true,
				})
				.then((response) => {
					// if (response == 200) {
					console.log("res is", response);

					const sample = [];
					for (let i = 0; i < response.data.length; i += 1) {
						sample.push({
							id: response.data[i].id,
							projectName: response.data[i].projectName,
							QR: (
								<img
									src={`data:image/png;base64,${response.data[i].qrImage}`}
									alt="QR"
									width={190}
									style={{ borderRadius: "0" }}
								/>
							),
							description: response.data[i].description,
							// status:
							// 	response.data[i].status === true ? "completed" : "pending",
							redemptiondate: response.data[i].projectName,
						});
						// setInvoiceRefId(response.data[i].invoiceRefId);
					}
					// console.log("babla", invoiceRefId);
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
	useEffect(() => {
		(async () => await getUserDetails())();
	}, []);

	useEffect(() => {
		getUserDetails();
	}, [deleteOk]);

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
			dataField: "projectName",
			text: "Project Name",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		// {
		// 	dataField: "QR",
		// 	text: "QR code",
		// 	classes: "deal-row-2",

		// 	headerClasses: "deal-header",
		// },

		{
			dataField: "description",
			text: "description",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		// {
		// 	dataField: "status",
		// 	text: "Payment Status",
		// 	classes: "deal-row",
		// 	headerClasses: "deal-header",
		// },
		{
			dataField: "View",
			isDummyField: true,
			text: "Delete",
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
					href
					alt="issueimageload"
					className="btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						// history.push({
						// 	pathname: "/merchant/deposits-to-merchant",
						// 	state: { invoiceId: row.id },
						// });
						axios
							.delete(
								`https://backend.elimpay.com/api/Admin/delete-project/${row.id}`,
								{
									headers: {
										"Content-Type": "application/json",
										Authorization: `Bearer ${token}`,
									},
									// withCredentials: true,
								}
							)
							.then((res) => {
								alert(res.data.message);
								setDeleteOk(!deleteOk);
							});
						console.log("sent email", row.id);
					}}>
					Delete
				</button>
				{/* </Link> */}
			</h5>
		);
	};
	// list.map((list)=>{})

	return (
		<div>
			<div className="d-flex justify-content-between">
				<h2 className="text-primary bw-bold">Projects List</h2>
				<div>
					<Link to="/admin/CreateProject">
						<button className="btn btn-success">Add Project</button>
					</Link>
				</div>
			</div>

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

export default ProjectList;
