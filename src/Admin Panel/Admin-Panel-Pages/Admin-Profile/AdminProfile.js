import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import API from "../../../backend";
import styles from "./adminprofile.module.css";
const AdminProfile = () => {
	const [showData, setShowData] = useState([
		{
			name: "",
			email: "",
			id: 0,
			mobile: 0,
			address: "",
			password: "",
		},
	]);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(true);

	let fields = showData;

	function handleValidation() {
		let fields = showData;
		let formIsValid = false;

		// console.log("AKSHDKJHSDKJHAKSHDK", Object.keys(fields).length);
		//Name
		if (
			Object.values(fields).every((o) => o !== null) &&
			Object.values(fields).every((o) => o !== "")
		) {
			formIsValid = true;
		}
		return formIsValid;
	}
	const token = sessionStorage.getItem("token");
	const loginemail = sessionStorage.getItem("email");
	useEffect(() => {
		// const loginemail = localStorage.getItem("email");
		axios
			.get(
				`https://backend.elimpay.com/api/Admin/fetch-profile?email=${loginemail}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log(res);
				setShowData({
					name: res.data.data.name,
					mobile: res.data.data.mobile,
					email: res.data.data.email,
					id: res.data.data.id,
				});
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
				// console.log("DATA IS ", res.data.admin);
			});
	}, []);

	async function onSubmit(event) {
		event.preventDefault();
		if (handleValidation()) {
			try {
				const response = await axios
					.post(
						`${API}Admin/update-profile`,
						JSON.stringify({
							name: showData.name,
							email: showData.email,
							mobile: showData.mobile,
							password: showData.password,
						}),
						{
							headers: { "Content-Type": "application/json" },
							Authorization: `Bearer ${token}`,
							// withCredentials: true,
						}
					)
					.then((res) => {
						if (res.code === 201) {
							alert(res.data.message);
						}
					});
				setSuccess(true);
				console.log(JSON.stringify(response?.data));
			} catch (err) {
				console.log(err);
				alert(err.message);
			}
		} else {
			alert("Form has errors.");
		}
	}
	useEffect(() => {
		if (success) {
			alert("Profile changed Succesfully!");
		}
	}, [success]);

	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">User Personal Information</h4>
			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div className="card">
					<div className={`card-body ${styles.usercardbody}`}>
						<h4 className={`text-center ${styles.userHeading}`}>Profile</h4>
						<div className="row mt-5">
							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form className="needs-validation" novalidate>
									<div className="form-group">
										<label className={styles.userLabel}>Id</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													id: e.target.value,
												});
											}}
											value={showData.id}
											className={`form-control ${styles.userInputs}`}
											// placeholder={id}
										/>

										{fields["id"] == null || fields["id"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>

							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form>
									<div className="form-group">
										<label className={styles.userLabel}>first name</label>
										<input
											type="year"
											name="name"
											onChange={(e) => {
												setShowData({
													...showData,
													name: e.target.value,
												});
											}}
											value={showData.name}
											className={`form-control ${styles.userInputs}`}
											// placeholder={name}
										/>

										{fields["name"] == null || fields["name"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>
						</div>

						<br />

						<div className="row">
							<div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12">
								<div className="form-group">
									<label className={styles.userLabel}>Email address</label>
									<input
										type="email"
										disabled
										className={`form-control ${styles.userInputs}`}
										onChange={(e) => {
											setShowData({
												...showData,
												email: e.target.value,
											});
										}}
										value={showData.email}
									/>

									{fields["email"] == null || fields["email"] == "" ? (
										<span className="text-danger">Field can't be empty</span>
									) : (
										""
									)}
								</div>
							</div>
						</div>

						<div class="form-group">
							<label className={styles.userLabel}>contact number</label>
							<input
								type="number"
								onChange={(e) => {
									setShowData({
										...showData,
										mobile: parseInt(e.target.value),
									});
								}}
								value={showData.mobile}
								className={`form-control ${styles.userInputs}`}
								// placeholder={mobile}
							/>

							{fields["mobile"] == null || fields["mobile"] == "" ? (
								<span className="text-danger">Field can't be empty</span>
							) : (
								""
							)}
						</div>

						<div class="form-group">
							<label className={styles.userLabel}>Password</label>
							<input
								type="text"
								onChange={(e) => {
									setShowData({
										...showData,
										password: e.target.value,
									});
								}}
								value={showData.address}
								className={`form-control ${styles.userInputs}`}
								// placeholder={address}
							/>

							{/* {fields["address"] == null || fields["address"] == "" ? (
								<span className="text-danger">Field can't be empty</span>
							) : (
								""
							)} */}
						</div>

						{/* <div className="row mt-5">
							<div className="row">
								<form className="d-flex justify-content-between">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group ">
											<label className={styles.userLabel}>provience</label>
											<input
												type="email"
												onChange={(e) => {
													setShowData({
														...showData,
														province: e.target.value,
													});
												}}
												value={showData.province}
												className={`form-control ${styles.userInputs}`}
												// placeholder={province}
											/>

											{fields["province"] == null ||
											fields["province"] == "" ? (
												<span className="text-danger">
													Field can't be empty
												</span>
											) : (
												""
											)}
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group ">
											<label className={styles.userLabel}>Sub District</label>
											<input
												type="text"
												onChange={(e) => {
													setShowData({
														...showData,
														subdistrict: e.target.value,
													});
												}}
												value={showData.subdistrict}
												className={`form-control ${styles.userInputs}`}
												// placeholder={subDivision}
											/>

											{fields["subdistrict"] == null ||
											fields["subdistrict"] == "" ? (
												<span className="text-danger">
													Field can't be empty
												</span>
											) : (
												""
											)}
										</div>
									</div>
								</form>
							</div>

							<div className="row">
								<form className="d-flex">
									<div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<label className={styles.userLabel}>district</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													district: e.target.value,
												});
											}}
											value={showData.district}
											className={`form-control ${styles.userInputs}`}
											// placeholder={district}
										/>

										{fields["district"] == null || fields["district"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									<div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<label className={styles.userLabel}>pincode</label>
										<input
											type="number"
											onChange={(e) => {
												setShowData({
													...showData,
													pincode: e.target.value,
												});
											}}
											value={showData.pincode}
											className={`form-control ${styles.userInputs}`}
											placeholder="123456"
										/>

										{fields["pincode"] == null || fields["pincode"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
								</form>
							</div>
						</div> */}

						{/* <button type="button" className={`btn ${styles.userBtn}`}>Finish</button> */}

						<button
							type="button"
							disabled={
								Object.values(fields).every((o) => o === null) &&
								Object.values(fields).every((o) => o === "")
									? true
									: false
							}
							onClick={(event) => onSubmit(event)}
							className={`btn ${styles.userBtn}`}>
							Finish
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminProfile;
