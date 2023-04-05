import React, { Component } from 'react';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

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

  {dataField: "purchasedate",
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
  
class Buttons extends Component {
  render () {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Buttons
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Buttons</li>
            </ol>
          </nav>
        </div>
        <ToolkitProvider
                        keyField="id"
                        data={ products }
                        columns={ columns }
                        search
                      >
                        {
                          props => (
                            <div>
                               
                              <SearchBar
                                { ...props.searchProps }
                                className="custome-search-field"
                                style={ { color: 'white' } }
                                delay={ 500 }
                                placeholder="Search Something!!!"
                              />
                              <hr />
                              <BootstrapTable
                                { ...props.baseProps }
                                pagination={paginationFactory(options)}
                              />
                            </div>
                          )
                        }
                      </ToolkitProvider>
      </div>
    );
  }
}

export default Buttons;