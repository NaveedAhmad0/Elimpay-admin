import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import cardPic from "../../../assets/images/dashboard/Vector(1).png";
import axios from "axios";
import API from "../../../backend";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUsers } from "@fortawesome/free-solid-svg-icons";

const { SearchBar } = Search;

const columns = [
	{
		dataField: "id",
		text: "Order number",
		sort: true,
		classes: "deal-row",
		headerClasses: "deal-header",
	},
	{
		dataField: "code",
		text: "Voucher code",
		classes: "deal-row-2",

		headerClasses: "deal-header",
	},

	{
		dataField: "purchasedate",
		text: "Purchase date",
		classes: "deal-row",
		headerClasses: "deal-header",
	},
	{
		dataField: "status",
		text: "Status",
		classes: "deal-row",
		headerClasses: "deal-header",
	},
	{
		dataField: "branchredeem",
		text: "Branch redeemed",
		headerClasses: "deal-header",
	},
	{
		dataField: "redemptiondate",
		text: "Redemption date",
		headerClasses: "deal-header",
	},
];
const products = [
	{
		id: 1003,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},

	{
		id: 1004,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},
	{
		id: 1005,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
		branchredeem: "Glorietta - GLO101",
		redemptiondate: "Jul. 10, 2022 at 4:30pm",
	},
];

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

function AdminDashboard() {
	const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [numberOfProjects, setNumberOfProjects] = useState(0);
	const [ittems, setItems] = useState([]);
	const [totalUsers, setTotalUsers] = useState(0);
	const [kycPending, setKycPendingUsers] = useState(0);

	const token = sessionStorage.getItem("token");
	console.log("items is", ittems);
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
					console.log(response.data);
					setNumberOfProjects(response.data.data.length);
					const sample = [];
					for (let i = 0; i < response.data.length; i += 1) {
						sample.push({
							id: response.data[i].id,
							projectName: response.data[i].projectName,
							description: response.data[i].description.slice(0, 10),
						});
					}
					setItems(sample);
					setLoading(false);
					setTimeout(() => {
						setLoading(false);
					}, 3000);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const getNumberOfUsers = async () => {
		await axios
			.get(`${API}Admin/get-all-users`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				// withCredentials: true,
			})
			.then((res) => {
				console.log("RE", res);
				setTotalUsers(res.data.data.data.length);
			});
	};
	const getKycPendingUsers = async () => {
		await axios
			.get(`${API}Admin/kyc-pending-users`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				// withCredentials: true,
			})
			.then((res) => {
				console.log("RE", res);
				setKycPendingUsers(res.data.data.data.length);
			});
	};

	useEffect(() => {
		(async () => await getKycPendingUsers())();
		(async () => await getNumberOfUsers())();
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
			dataField: "projectName",
			text: "Transaction Type",
			classes: "deal-row",
			headerClasses: "deal-header",
		},

		{
			dataField: "description",
			text: "User Account Number",
			classes: "deal-row",
			headerClasses: "deal-header",
		},

		// {
		// 	dataField: "amount",
		// 	text: "Amount",
		// 	classes: "deal-row",
		// 	headerClasses: "deal-header",
		// },
	];

	return (
		<div>
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						<h4 className="pageUser-title">Admin Dashboard</h4>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 grid-margin">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-xl-3 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin threeCards">
									<div className="d-flex newboxcss">
										<div className="wrapper py-2">
											<p className="mb-0 font-weight-medium text-white">
												Registered Users
											</p>
											<h6 className="mb-0 font-weight-semibold">
												{totalUsers}
											</h6>
										</div>
										<div className="wrapper my-auto ml-auto ml-lg-4">
											{/* <div className="">
												<img src={cardPic} alt="cardpic" />
											</div> */}
											<FontAwesomeIcon size="2x" icon={faUsers} />
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin ">
									<div className="d-flex newboxcss">
										<div className="wrapper py-2">
											<p className="mb-0 font-weight-medium text-white">
												Projects Posted
											</p>
											<h5 className="mb-0 font-weight-semibold">
												{numberOfProjects}
											</h5>
										</div>
										<div className="wrapper my-auto ml-auto ml-lg-4">
											<div className="">
												<FontAwesomeIcon size="2x" icon={faUsers} />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
									<div className="d-flex newboxcss">
										<div className="wrapper py-2">
											<p className="mb-0 font-weight-medium text-white">
												Kyc Pending Users
											</p>
											<h5 className="mb-0 font-weight-semibold">
												{kycPending}
											</h5>
										</div>
										<div className="wrapper my-auto ml-auto ml-lg-4">
											<div className="">
												<FontAwesomeIcon size="2x" icon={faUsers} />
												{/* <div className="">
													<img src={cardPic} alt="cardpic" />
												</div> */}
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
									<div className="d-flex newboxcss">
										<div className="wrapper py-2">
											<p className="mb-0 font-weight-medium text-white">
												Ongoing Projects
											</p>
											<h5 className="mb-0 font-weight-semibold">
												{/* {merchantCount} */}
											</h5>
										</div>
										<div className="wrapper my-auto ml-auto ml-lg-4">
											<div className="">
												<FontAwesomeIcon size="2x" icon={faUsers} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

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
														placeholder="Search..."
													/>
													<hr />
													<BootstrapTable
														{...props.baseProps}
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
		</div>
	);
}
export default AdminDashboard;
