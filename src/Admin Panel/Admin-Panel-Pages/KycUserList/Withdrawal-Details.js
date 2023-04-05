import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../backend";
import ClipLoader from "react-spinners/ClipLoader";

const WithdrawalDetails = () => {
	const location = useLocation();
	const [PaymentStatus, setPaymentStatus] = useState(false);
	const [loading, setLoading] = useState(true);
	const TrueVal = true;
	const FalseVal = false;
	// console.log("BOOOOl", truVal);
	const ReferenceId = location.state.ReferenceId;
	const [showData, setShowData] = useState([
		{
			id: 0,
			ReferalNumber: "",
			amount: 0,
			WithdrawCharges: 0,
			FinalAmount: 0,
			merchantId: "",
			Name: "",
			AccountNumber: 0,
			IFSCcode: "",
			BankName: "",
			comments: "",
			status: false,
		},
	]);
	//Payment Status
	async function onSubmit(event) {
		event.preventDefault();
		console.log("sdfsdf", PaymentStatus);
		try {
			const response = await axios
				.post(
					`${API}/admin/PaymentStatus?ReferenceId=${showData.ReferalNumber}`,
					JSON.stringify({
						PaymentStatus,
					}),
					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true,
					}
				)
				.then((res) => {
					setPaymentStatus("");
					console.log(res.data);
					if (res.status === 200) {
						alert(res.data.message);
					} else {
						alert(res.data.message);
					}
				});
		} catch (err) {
			alert("something went wrong");
			console.log(err);
		}
	}

	// Fetch Data

	useEffect(() => {
		console.log("ReferenceId", ReferenceId);
		axios
			.get(`https://backend.klivepay.com/api/admin/withdraw-request`)
			.then((res) => {
				console.log("DATA", res);
				for (let i = 0; i < res.data.length; i++) {
					setShowData({
						id: res.data[i].id,
						ReferalNumber: res.data[i].ReferalNumber,
						merchantId: res.data[i].merchantId,
						amount: res.data[i].amount,
						WithdrawCharges: res.data[i].WithdrawCharges,
						FinalAmount: res.data[i].FinalAmount,
						Name: res.data[i].BankDetails.Name,
						AccountNumber: res.data[i].BankDetails.AccountNumber,
						IFSCcode: res.data[i].BankDetails.IFSCcode,
						BankName: res.data[i].BankDetails.BankName,
						comments: res.data[i].comments,
						status: res.data[i].status === true ? "completed" : "pending",

						// notes: res.data[i].note,
					});
					console.log("DATA IS ", res.data[i].status);
				}
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			});
	}, [PaymentStatus]);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<h2 className="text-primary">Request Details</h2>
					{loading ? (
						<div className="row" style={{ height: "500px" }}>
							<div className="col-12 text-center my-auto">
								<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
							</div>
						</div>
					) : (
						<div className="col-md-12 grid-margin">
							<div className="card">
								<div className="card-body">
									<div className="container">
										<table class="table table-striped table-bordered">
											<tbody>
												<tr>
													<td>ID</td>
													<td>{showData.id}</td>
												</tr>
												<tr>
													<td>Referal Number</td>
													<td>{showData.ReferalNumber}</td>
												</tr>
												<tr>
													<td>Merchant ID</td>
													<td>{showData.merchantId}</td>
												</tr>
												<tr>
													<td>Amount</td>
													<td>{showData.amount}</td>
												</tr>
												<tr>
													<td>Withdraw Fee</td>
													<td>{showData.WithdrawCharges}%</td>
												</tr>
												<tr>
													<td>Final Amount</td>
													<td>{showData.FinalAmount}</td>
												</tr>
												<tr>
													<td>Name</td>
													<td>{showData.Name}</td>
												</tr>
												<tr>
													<td>Account Number</td>
													<td>{showData.AccountNumber}</td>
												</tr>
												<tr>
													<td>IFSC Code</td>
													<td>{showData.IFSCcode}</td>
												</tr>
												{/* <tr>
													<td>Amount</td>
													<td>{showData.amount}</td>
												</tr> */}
												<tr>
													<td>Bank Name</td>
													<td>{showData.BankName}</td>
												</tr>
												<tr>
													<td>Comments</td>
													<td>{showData.comments}</td>
												</tr>
												<tr>
													<td>Status</td>
													<td>{`${showData.status}`}</td>
												</tr>
											</tbody>
										</table>
										<br></br>
									</div>

									{/* <div className="row my-3">
									<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 d-flex grid-margin">
										<input
											type="text"
											onChange={(e) => setTransactionId(e.target.value)}
											value={TransactionId}
										/>
										<button
											className="btn btn-success btn-lg rounded-pill"
											onClick={onSubmit}>
											Request Withdrawal
										</button>
									</div>
								</div> */}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="col-md-12">
				<div className="row">
					<h5 className="text-primary">Confirm Payment Status</h5>
					<div className="col-md-6 grid-margin">
						<div className="card">
							<div className="card-body">
								<div className="container">
									<div className="form-group">
										<label for="inputPassword2" className="">
											Payment Status
										</label>
										<select
											className="form-select"
											value={PaymentStatus}
											onChange={
												(e) => {
													e.target.value === "true"
														? setPaymentStatus(TrueVal)
														: e.target.value === "false" &&
														  setPaymentStatus(FalseVal);
												}
												// setPaymentStatus(e.target.value)
											}>
											{" "}
											<option>Select</option>
											<option value="true">Complete</option>
											<option value="false">Pending</option>
										</select>

										{/* <input
											type="text"
											className="form-control"
											placeholder="Txn Id"
											id="staticEmail2"
											onChange={(e) => setPaymentStatus(e.target.value)}
											value={PaymentStatus}
										/> */}
									</div>
									<button className="btn btn-primary" onClick={onSubmit}>
										Confirm
									</button>
								</div>

								{/* <div className="row my-3">
									<div className="col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 d-flex grid-margin">
										<input
											type="text"
											onChange={(e) => setTransactionId(e.target.value)}
											value={TransactionId}
										/>
										<button
											className="btn btn-success btn-lg rounded-pill"
											onClick={onSubmit}>
											Request Withdrawal
										</button>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WithdrawalDetails;
