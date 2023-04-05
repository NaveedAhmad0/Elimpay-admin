import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useHistory } from "react-router-dom";
// import API from "../../../../backend";
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

const TxnList = ({ tsxs }) => {
	const history = useHistory();

	const [ittems, setItems] = useState([]);

	console.log("items is", tsxs);

	useEffect(() => {
		const sample = [];
		for (let i = 0; i < tsxs.length; i++) {
			sample.push({
				tsxs: tsxs[i],
			});
		}
		setItems(sample);
	}, []);

	const { SearchBar } = Search;
	const columns = [
		{
			dataField: "tsxs",
			text: "Txn Hash",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "View",
			isDummyField: true,
			text: "Delete",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
	];
	console.log("list of item", ittems);
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
							pathname: "/admin/TxnDetails",
							state: { hash: row.tsxs },
						});
						console.log("sent email", row.tsxs);
					}}>
					Details
				</button>
			</h5>
		);
	};

	return (
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

			{/* {loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				
			)} */}
		</div>
	);
};

export default TxnList;
