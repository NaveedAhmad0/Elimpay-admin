import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const TransactionDetails = () => {
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	const row = location.state.id;
	const [showData, setShowData] = useState([
		{
			id: 0,
			transactionType: "",
			payeeProxyId: "",
			payeeProxyType: "",
			payeeAccountNumber: "",
			payeeName: "",
			payerAccountNumber: "",
			payerName: "",
			amount: "",
			transactionId: "",
			billPaymentRef1: "",
			billPaymentRef2: "",
			billPaymentRef3: "",
		},
	]);

	// useEffect(() => {
	// 	axios
	// 		.get(`https://backend.klivepay.com/api/admin/sandBox-transactionList`)
	// 		.then((res) => {
	// 			console.log("DATA", res.data);
	// 			for (let i = 0; i < res.data.length; i++) {
	// 				console.log("res", res.data[i]);
	// 				setShowData({
	// id: res.data[i].id,
	// transactionType: res.data[i].transactionType,
	// payeeProxyId: res.data[i].payeeProxyId,
	// payeeProxyType: res.data[i].payeeProxyType,
	// payeeAccountNumber: res.data[i].payeeAccountNumber,
	// payeeName: res.data[i].payeeName,
	// payerAccountNumber: res.data[i].payerAccountNumber,
	// payerName: res.data[i].payerName,
	// amount: res.data[i].amount,
	// transactionId: res.data[i].transactionId,
	// billPaymentRef1: res.data[i].billPaymentRef1,
	// billPaymentRef2: res.data[i].billPaymentRef2,
	// billPaymentRef3: res.data[i].billPaymentRef3,
	// 					// notes: res.data[i].note,
	// 				});
	// 				console.log("DATA IS ", res.data);
	// 			}
	// 			setLoading(false);
	// 			setTimeout(() => {
	// 				setLoading(false);
	// 			}, 3000);
	// 		});
	// }, []);

	useEffect(() => {
		console.log("row is", row);
		setShowData({
			id: row.id,
			transactionType: row.transactionType,
			payeeProxyId: row.payeeProxyId,
			payeeProxyType: row.payeeProxyType,
			payeeAccountNumber: row.payeeAccountNumber,
			payeeName: row.payeeName,
			payerAccountNumber: row.payerAccountNumber,
			payerName: row.payerName,
			amount: row.amount,
			transactionId: row.transactionId,
			billPaymentRef1: row.billPaymentRef1,
			billPaymentRef2: row.billPaymentRef2,
			billPaymentRef3: row.billPaymentRef3,
			// notes: res.data[i].note,
		});
	}, []);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<h2 className="text-primary">Payment Details</h2>
					<div className="col-md-12 grid-margin">
						{/* {loading ? (
							<div className="row" style={{ height: "500px" }}>
								<div className="col-12 text-center my-auto">
									<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
								</div>
							</div>
						) : ( */}
						<div className="card">
							<div className="card-body">
								<div className="container">
									<table class="table table-striped table-bordered">
										<tbody>
											<tr>
												<td>Id</td>
												<td>{showData.id}</td>
											</tr>
											<tr>
												<td>Transaction Type</td>
												<td>{showData.transactionType}</td>
											</tr>
											<tr>
												<td>Payee Proxy Id</td>
												<td>{showData.payeeProxyId}</td>
											</tr>
											<tr>
												<td>Payee Proxy Type</td>
												<td>{showData.payeeProxyType}</td>
											</tr>
											<tr>
												<td>PayeeAccount Number</td>
												<td>{showData.payeeAccountNumber}</td>
											</tr>
											<tr>
												<td>Payee Name</td>
												<td>{showData.payeeName}</td>
											</tr>
											<tr>
												<td>Payer Account Number</td>
												<td>{showData.payerAccountNumber}</td>
											</tr>
											<tr>
												<td>Payer Name</td>
												<td>{showData.payerName}</td>
											</tr>
											<tr>
												<td>Amount</td>
												<td>{showData.amount}</td>
											</tr>
											<tr>
												<td>Transaction Id</td>
												<td>{showData.transactionId}</td>
											</tr>

											<tr>
												<td>Bill Payment Ref1</td>
												<td>{showData.billPaymentRef1}</td>
											</tr>
											<tr>
												<td>Bill Payment Ref2</td>
												<td>{showData.billPaymentRef2}</td>
											</tr>
											<tr>
												<td>Bill Payment Ref3</td>
												<td>{showData.billPaymentRef3}</td>
											</tr>
										</tbody>
									</table>
									<br></br>
									{/* <button
											type="button"
											className="btn btn-primary btn-block"
											onClick={() => setIsOpen(true)}>
											Slip verification Details
										</button> */}
								</div>
							</div>
						</div>
						{/* )} */}
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="row"></div>
			</div>
		</div>
	);
};

export default TransactionDetails;
