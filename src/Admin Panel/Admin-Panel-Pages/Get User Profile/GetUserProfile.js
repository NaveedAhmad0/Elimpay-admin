import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import API from "../../../backend";
import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import TxnList from "../Transaction Details/User Tnx List/UserTxnList";
import styles from "./GetUserProfile.css";

const GetUserProfile = () => {
	const location = useLocation();
	const [fetchData, setFetchData] = useState({
		id: 0,
		email: "",
		name: "",
		pin: null,
		countryCode: null,
		gender: null,
		occupation: null,
		address: null,
		otp: null,
		nearby_area: null,
		mobileNum: "",
		publicKey: "",

		balance: 0,
		tsxs: [],
		passportImg: null,
		idCard: null,
		profileImg: null,
		kycStatus: "",
		role: "",
	});
	const {
		id,
		email,
		name,
		pin,
		countryCode,
		gender,
		occupation,
		address,
		otp,
		nearby_area,
		mobileNum,
		publicKey,

		balance,
		tsxs,
		passportImg,
		idCard,
		profileImg,
		kycStatus,
		role,
	} = fetchData;

	const [loading, setLoading] = useState(true);
	const token = sessionStorage.getItem("token");

	useEffect(() => {
		const userDataEmail = location.state.dataEmail;

		axios
			.get(`${API}Admin/fetch-user-profile?email=${userDataEmail}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res);
				setFetchData({
					id: res.data.data.id,
					email: res.data.data.email,
					name: res.data.data.name,
					pin: res.data.data.pin,
					countryCode: res.data.data.countryCode,
					gender: res.data.data.gender,
					occupation: res.data.data.occupation,
					address: res.data.data.address,
					otp: res.data.data.otp,
					nearby_area: res.data.data.nearby_area,
					mobileNum: res.data.data.mobileNum,
					publicKey: res.data.data.publicKey,

					balance: res.data.data.balance,
					tsxs: res.data.data.tsxs !== null ? res.data.data.tsxs : [],
					passportImg: res.data.data.passportImg,
					idCard: res.data.data.idCard,
					profileImg: res.data.data.profileImg,
					kycStatus: res.data.data.kycStatus,
					role: res.data.data.role,
				});
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			});
	}, []);

	return (
		<div className="col-12 grid-margin userProfileMain">
			<h4 className="card-title fs-3">User Personal Information</h4>
			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div className="card userProfileCard-2 ">
					{/* <div
						className="row flex-column mt-5 mx-auto card text-white w-30 mb-5"
						style={{
							backgroundColor: "#007BFF",
							fontWeight: "500",
							lineHeight: "1",
							fontSize: "10px",
						}}> */}
					{/* {profileImg ? (
							<img
								className="profile-img mt-3 mb-2"
								src={profileImg}
								alt="Profile"
							/>
						) : (
							<img
								className="profile-img mt-3 mb-2"
								src={require("../../../assets/images/faces/face8.jpg")}
								alt="Profile"
							/>
						)} */}

					{/* <div className="mt-2 mx-auto">
							<p className="text-white">
								Email: <span className="text-white">{email}</span>
							</p>
						</div> */}
					{/* </div> */}

					<div className="col-12 grid-margin">
						{/* <h4 className="card-title fs-4">User Personal Informationn</h4> */}

						<div className="card userCard p-lg-2">
							<div className={`card-body ${styles.usercardbody}`}>
								<form className="row g-3 form-sample">
									<div className="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											User ID :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={id}
										/>
									</div>

									<div className="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className=" form-label">
											User Name :
										</label>
										<input
											className="form-control"
											id="inputPassword4"
											value={name}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div className="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											First Name:
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={name}
										/>
									</div>

									<div className="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Contact Number :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={mobileNum}
										/>
									</div>
									<div className="col-md-6">
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
									<div className="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Kyc Status :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={kycStatus}
										/>
									</div>
									<div className="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Pin :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={pin}
										/>
									</div>
									<div className="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Role :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={role}
										/>
									</div>
									<div className="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Mobile no :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={mobileNum}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
							</div>
							<div className="row g-3 form-sample">
								{/* <h3>Transaction Hash of User</h3> */}

								<div className="col-12">
									<TxnList mobileNum={mobileNum} />
								</div>
							</div>
						</div>
						<br></br>
					</div>
				</div>
			)}
		</div>
	);
};

export default GetUserProfile;
