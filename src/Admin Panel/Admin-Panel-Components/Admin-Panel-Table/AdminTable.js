import React from "react";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

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
const AdminTable = (list) => {
	// const { id } = ;ite
	// const { id, firstName } = items;
	const { SearchBar } = Search;

	// import DatePicker from 'react-datepicker';
	// import { Dropdown } from 'react-bootstrap';
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
	const products = [];
	// list.map((list)=>{})
	products.push(
		{
			id: 1212,
			code: "ssfsd",
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
		{
			id: 1006,
			code: "5Q2H-MWXF-36HE",
			purchasedate: "Jul. 8, 2022",
			status: "used",
			branchredeem: "Glorietta - GLO101",
			redemptiondate: "Jul. 10, 2022 at 4:30pm",
		},
		{
			id: 1007,
			code: "5Q2H-MWXF-36HE",
			purchasedate: "Jul. 8, 2022",
			status: "used",
			branchredeem: "Glorietta - GLO101",
			redemptiondate: "Jul. 10, 2022 at 4:30pm",
		}
	);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-12 grid-margin">
						<div className="card">
							<div className="card-body">
								<div className="table-responsive">
									<ToolkitProvider
										keyField="id"
										data={products}
										columns={columns}
										search>
										{(props) => (
											<div>
												<h3>Input something at below input field:</h3>
												<SearchBar
													{...props.searchProps}
													className="custome-search-field"
													style={{ color: "white" }}
													delay={500}
													placeholder="Search Something!!!"
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
	);
};

export default AdminTable;
