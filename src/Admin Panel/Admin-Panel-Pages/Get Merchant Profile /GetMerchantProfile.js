import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import API from "../../../backend";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./GetMercahntProfile.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GetMerchantProfile = () => {
	const location = useLocation();
	const [fetchData, setFetchData] = useState({
		id: 0,
		name: "",
		mobile: "",
		email: "",
		merchantName: "",
		personType: "",
		InitialShop: "",
		firstName: "",
		surName: "",
		yearOfBirth: "",
		monthOfBirth: "",
		dayOfBirth: "",
		address: "",
		province: "",
		district: "",
		subDivision: "",
		pincode: 0,
		shopType: "",
		creditCard: "",
		weChat: "",
		livePayment: "",
		mobileBanking: "",
		trueWallet: "",
		shopeePay: "",
		alone: "",
		website: "",
		facebook: "",
		linkedin: "",
		instagram: "",
		other: "",
		company: "",
		bank: "",
		bankAccount: 0,
		rnfCode: "",
		domestic: "",
		inter: "",
		rateQrCode: "",
		rateBarCode: "",
		copyOfId: "",
		logo: "",
		bankBook: "",
		otherDocument: "",
		transaction: "",
		withdraw: "",
	});
	const {
		id,
		name,
		mobile,
		email,
		merchantName,
		InitialShop,
		firstName,
		yearOfBirth,
		monthOfBirth,
		dayOfBirth,
		address,
		province,
		district,
		subDivision,
		inter,
		rnfCode,
		bank,
		logo,
		rateQrCode,
		domestic,
		company,
		bankAccount,
		website,
		facebook,
		linkedin,
		instagram,
		other,
		transaction,
		withdraw,
	} = fetchData;
	const [TransactionFee, setTransactionFee] = useState({});
	const [withdrawFee, setWithdrawFee] = useState({});
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(true);

	const merchantId = location.state.merchantId;

	async function onSubmit(event) {
		event.preventDefault();

		try {
			const response = await axios
				.patch(
					`${API}/admin/fees-by-id?merchantId=${merchantId}`,
					JSON.stringify({
						TransactionFee: parseInt(TransactionFee),
						withdrawFee: parseInt(withdrawFee),
					}),
					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true,
					}
				)
				.then((res) => {
					setTransactionFee("");
					setWithdrawFee("");
					console.log(res);
					alert("Fee Added Succesfully");
				});

			setSuccess(true);
		} catch (err) {
			alert("something went wrong");
			console.log(err);
		}
	}

	const merchantDataEmail = location.state.merchantdataEmail;
	const getProfile = useCallback(() => {
		try {
			axios
				.get(`${API}/merchant/get-profile?email=${merchantDataEmail}`)
				.then((res) => {
					setFetchData({
						id: res.data.merchant.id,
						name: res.data.merchant.name,
						mobile: res.data.merchant.mobile,
						email: res.data.merchant.email,
						merchantName: res.data.merchant.merchantName,
						personType: res.data.merchant.personType,
						InitialShop: res.data.merchant.InitialShop,
						firstName: res.data.merchant.firstName,
						surName: res.data.merchant.surName,
						yearOfBirth: res.data.merchant.yearOfBirth,
						monthOfBirth: res.data.merchant.monthOfBirth,
						dayOfBirth: res.data.merchant.dayOfBirth,
						address: res.data.merchant.address,
						province: res.data.merchant.province,
						district: res.data.merchant.district,
						subDivision: res.data.merchant.subDivision,
						pincode: res.data.merchant.pincode,
						shopType: res.data.merchant.shopType,
						creditCard: res.data.merchant.creditCard,
						weChat: res.data.merchant.weChat,
						livePayment: res.data.merchant.livePayment,
						mobileBanking: res.data.merchant.mobileBanking,
						trueWallet: res.data.merchant.trueWallet,
						shopeePay: res.data.merchant.shopeePay,
						alone: res.data.merchant.alone,
						website: res.data.merchant.website,
						facebook: res.data.merchant.facebook,
						linkedin: res.data.merchant.linkedin,
						instagram: res.data.merchant.instagram,
						other: res.data.merchant.other,
						company: res.data.merchant.company,
						bank: res.data.merchant.bank,
						bankAccount: res.data.merchant.bankAccount,
						rnfCode: res.data.merchant.rnfCode,
						domestic: res.data.merchant.domestic,
						inter: res.data.merchant.inter,
						rateQrCode: res.data.merchant.rateQrCode,
						rateBarCode: res.data.merchant.rateBarCode,
						copyOfId: res.data.merchant.copyOfId,
						logo: res.data.merchant.logo,
						bankBook: res.data.merchant.bankBook,
						otherDocument: res.data.merchant.otherDocument,
						transaction: res.data.merchant.transaction,
						withdraw: res.data.merchant.withdraw,
					});

					console.log("merchant DATA IS ", res.data.merchant);
					setLoading(false);
					setTimeout(() => {
						setLoading(false);
					}, 3000);
				});
		} catch (error) {
			console.log(error);
		}
	}, [TransactionFee, withdrawFee]);

	useEffect(() => {
		getProfile();
	}, []);
	useEffect(() => {
		getProfile();
	}, [TransactionFee, withdrawFee]);

	return (
		<div className="col-12 grid-margin userProfileMain">
			<h4 className="card-title fs-3">Personal Admin Information</h4>

			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div className="card userProfileCard-2 ">
					<div
						className="row flex-column mt-5 mx-auto card text-white w-30 mb-5"
						style={{
							backgroundColor: "#007BFF",
							fontWeight: "500",
							lineHeight: "1",
							fontSize: "10px",
						}}>
						<img
							className="profile-img mt-3 mb-2"
							src={require("../../../assets/images/faces/face8.jpg")}
							alt="Profile"
						/>
						{/* <FontAwesomeIcon className="fa-5x" icon={faUser} /> */}

						<div className="mt-2 mx-auto">
							{/* <p className="text-white">
								Merchant Code: <span className="text-warning">M010303</span>
							</p> */}
							<p className="text-white">
								Email: <span className="text-warning">{email}</span>
							</p>
						</div>
					</div>

					<div className="col-12 grid-margin">
						<h4 className="card-title fs-4">Merchant Personal Information</h4>

						<div className="card userCard p-lg-2">
							<div className={`card-body ${styles.usercardbody}`}>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Merchant ID :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={id}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className=" form-label">
											Merchant Name :
										</label>
										<input
											className="form-control"
											id="inputPassword4"
											value={merchantName}
										/>
									</div>

									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Merchant Name English :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={name}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Email Address :
										</label>
										<input
											className="form-control"
											id="inputPassword4"
											value={email}
										/>
									</div>
									<div class="col-md-12">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Initial Shop :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={InitialShop}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											First Name:
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={firstName}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Email :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={email}
										/>
									</div>
									<div class="col-md-4">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Year of Birth :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={yearOfBirth}
										/>
									</div>
									<div class="col-md-4">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Month Of Birth :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={monthOfBirth}
										/>
									</div>
									<div class="col-md-4">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Day Of Birth :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={dayOfBirth}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Contact Number :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={mobile}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Address :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={address}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Provience :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={province}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Sub Division :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={subDivision}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											District :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={district}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Mobile no :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={mobile}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Web Site :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={website}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Linked in :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={linkedin}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Facebok :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={facebook}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Instagram :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={instagram}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Other :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={other}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Copy Of Id Card (Up to 5mb):{" "}
										</label>
										<input className="form-control" id="inputEmail4" />
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Book Bank :
										</label>
										<input className="form-control" id="inputEmail4" />
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Company :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={company}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label text-primary">
											Bank Account :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={bankAccount}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Domestic :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={domestic}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Rate Of QR Code :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={rateQrCode}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Logo :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={logo}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Other document: :{" "}
										</label>
										<input className="form-control" id="inputEmail4" />
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Bank :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={bank}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Rnf Code :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={rnfCode}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Inter :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={inter}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Rate Of Bar Code :{" "}
										</label>
										<input className="form-control" id="inputEmail4" />
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Transaction Fee (%) :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={transaction}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Withdraw Fee (%) :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={withdraw}
										/>
									</div>
								</form>
								<br />
								<form className="row g-3 form-sample">
									<h3>Add Fee to this merchant</h3>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											TransactionFee(%) :
										</label>
										<input
											className="form-control"
											// id="inputEmail4"
											type="number"
											value={TransactionFee}
											onChange={(e) =>
												setTransactionFee(parseInt(e.target.value))
											}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											withdrawFee (%) :{" "}
										</label>
										<input
											className="form-control"
											type="number"
											// id="inputEmail4"
											value={withdrawFee}
											onChange={(e) => setWithdrawFee(parseInt(e.target.value))}
										/>
									</div>
									<div class="col-md-12 text-center">
										<button
											type="button"
											className="btn text-center btn-success w-100  rounded-pill"
											onClick={onSubmit}>
											{" "}
											Add Fee{" "}
										</button>
									</div>
								</form>
							</div>
						</div>
						<br></br>
						<div className="text-center"></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default GetMerchantProfile;
