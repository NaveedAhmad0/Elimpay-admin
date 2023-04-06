import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// import Modal from "./modal/Modal-withdraw";
import ClipLoader from "react-spinners/ClipLoader";

const TransactionDetails = () => {
	const history = useHistory();
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	const [showData, setShowData] = useState([
		{
			id: "",
			hash: "",
			senderNum: "",
			recieverNum: "",
			amount: "",
			createdAt: "",
		},
	]);

	const location = useLocation();

	const hash = location.state.hash;

	useEffect(() => {
		axios
			.get(
				`https://backend.elimpay.com/api/transaction/details-of-transaction/${hash}`
			)
			.then((res) => {
				console.log("DATA", res.data);
				setShowData({
					id: res.data.id,
					hash: res.data.hash,
					senderNum: res.data.senderNum,
					recieverNum: res.data.recieverNum,
					amount: res.data.amount,
					createdAt: res.data.createdAt,

					// notes: res.data[i].note,
				});
				console.log("DATA IS ", res.data.data);
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
				// for (let i = 0; i < res.data.length; i++) {

				// }
			});
	}, []);

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<h2 className="text-primary">Transaction Details</h2>
					<div className="col-md-12 grid-margin">
						{loading === true ? (
							<div className="row" style={{ height: "500px" }}>
								<div className="col-12 text-center my-auto">
									<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
								</div>
							</div>
						) : (
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
													<td>Hash</td>
													<td>{showData.hash}</td>
												</tr>
												<tr>
													<td>Sender Number</td>
													<td>{showData.senderNum}</td>
												</tr>
												<tr>
													<td>Reciever Number</td>
													<td>{showData.recieverNum}</td>
												</tr>
												<tr>
													<td>Amount</td>
													<td>{showData.amount}</td>
												</tr>
												<tr>
													<td>Created At</td>
													<td>{showData.createdAt}</td>
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
						)}
					</div>
				</div>
			</div>
			{/* {isOpen && <Modal setIsOpen={setIsOpen} />}
			<div className="col-md-4">
				<div className="row"></div>
			</div> */}
		</div>
	);
};

export default TransactionDetails;
