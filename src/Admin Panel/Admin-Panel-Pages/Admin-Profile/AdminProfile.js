import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./adminprofile.module.css";
const AdminProfile = () => {
	// const [email, setEmail] = useState("");
	// const [userName, setUserName] = useState("");
	// const [surName, setSurName] = useState("");
	// const [mobile, setMobile] = useState("");
	// const [address, setAddress] = useState("");
	// const [province, setProvince] = useState("");
	// const [district, setDistrict] = useState("");
	// const [subdistrict, setSubDistrict] = useState("");
	// const [pincode, setPincode] = useState("");
	const [showData, setShowData] = useState([
		{
			userName: "",
			email: "",
			surName: "",
			mobile: 0,
			address: "",
			province: "",
			district: "",
			subdistrict: "",
			pincode: "",
		},
	]);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(true);

	// async function onSubmit(event) {
	// 	event.preventDefault();
	// 	console.log(
	// 		email,
	// 		surName,
	// 		mobile,
	// 		address,
	// 		province,
	// 		district,
	// 		subdistrict,
	// 		pincode
	// 	);

	// 	try {
	// 		const response = await axios.patch(
	// 			`https://backend.klivepay.com/api/admin/update-profile?email=admin%40mail.com`,
	// 			JSON.stringify({
	// 				userName,
	// 				surName,
	// 				mobile,
	// 				address,
	// 				province,
	// 				district,
	// 				subdistrict,
	// 				pincode,
	// 			}),
	// 			{
	// 				headers: { "Content-Type": "application/json" },
	// 				// withCredentials: true,
	// 			}
	// 		);

	// 		console.log("mail", email);

	// 		console.log(JSON.stringify(response?.data));
	// 		setSuccess(true);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }
	let fields = showData;

	function handleValidation() {
		let fields = showData;
		let formIsValid = false;

		console.log("AKSHDKJHSDKJHAKSHDK", Object.keys(fields).length);
		//Name
		if (
			Object.values(fields).every((o) => o !== null) &&
			Object.values(fields).every((o) => o !== "")
		) {
			formIsValid = true;
		}
		return formIsValid;
	}

	const loginemail = localStorage.getItem("email");
	useEffect(() => {
		// const loginemail = localStorage.getItem("email");
		axios
			.get(
				`https://backend.klivepay.com/api/admin/get-profile?email=${loginemail}`
			)
			.then((res) => {
				setShowData({
					userName: res.data.admin.name,
					mobile: res.data.admin.mobile,
					email: res.data.admin.email,
					surName: res.data.admin.surName,
					address: res.data.admin.address,
					province: res.data.admin.province,
					district: res.data.admin.district,
					subdistrict: res.data.admin.subdistrict,
					pincode: res.data.admin.pincode,
				});
				setLoading(false);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
				console.log("DATA IS ", res.data.admin);
			});
	}, []);

	async function onSubmit(event) {
		event.preventDefault();
		if (handleValidation()) {
			try {
				const response = await axios
					.patch(
						`https://backend.klivepay.com/api/admin/update-profile?email=${loginemail}`,
						JSON.stringify({
							userName: showData.userName,
							surName: showData.surName,
							mobile: parseInt(showData.mobile),
							address: showData.address,
							province: showData.province,
							subdistrict: showData.subdistrict,
							district: showData.district,
							pincode: showData.pincode,
						}),
						{
							headers: { "Content-Type": "application/json" },
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
		// <div className="col-12 grid-margin">
		// 	<h4 className="card-title">Personal admin Information</h4>

		// 	<div className="card">
		// 		<div className="row flex-column mt-5 mx-auto">
		// 			<img
		// 				className="img-lg mx-auto rounded-circle"
		// 				src={require("../../../assets/images/faces/face8.jpg")}
		// 				alt="Profile"
		// 			/>
		// 			<div className="mt-2 mx-auto">
		// 				<p className="mx-auto">
		// 					Email: <span className="text-primary">info@gmail.com</span>
		// 				</p>
		// 			</div>
		// 		</div>
		// 		<div className="card-body">
		// 			<form className="form-sample">
		// 				<div className="row justify-content-around">
		// 					<div className="col-md-5">
		// 						<Form.Group className="row">
		// 							<label htmlFor="exampleInputUsername1">System Username</label>
		// 							<Form.Control
		// 								type="text"
		// 								id="exampleInputUsername1"
		// 								onChange={(e) => setUserName(e.target.value)}
		// 								value={userName}
		// 								placeholder="info@gmilail.com"
		// 								size="lg"
		// 							/>
		// 						</Form.Group>
		// 					</div>
		// 					{/* <div className="col-md-2"></div> */}
		// 					<div className="col-md-5">
		// 						<Form.Group>
		// 							<label htmlFor="exampleSelectGender">Surname</label>
		// 							<Form.Control
		// 								type="text"
		// 								id="exampleInputUsername1"
		// 								onChange={(e) => setSurName(e.target.value)}
		// 								value={surName}
		// 								placeholder="info@gmilail.com"
		// 								size="lg"
		// 							/>
		// 						</Form.Group>
		// 					</div>
		// 				</div>
		// 				<div className="row justify-content-around">
		// 					<div className="col-md-5">
		// 						<Form.Group className="row">
		// 							<label htmlFor="exampleInputUsername1">
		// 								Contact Phone Number
		// 							</label>
		// 							<Form.Control
		// 								type="text"
		// 								id="exampleInputUsername1"
		// 								onChange={(e) => setMobile(parseInt(e.target.value))}
		// 								value={mobile}
		// 								placeholder="info@gmilail.com"
		// 								// size="lg"
		// 							/>
		// 						</Form.Group>
		// 					</div>
		// 					<div className="col-md-5">
		// 						<Form.Group className="row">
		// 							<label htmlFor="exampleInputUsername1">Address</label>
		// 							<Form.Control
		// 								type="text"
		// 								onChange={(e) => setAddress(e.target.value)}
		// 								value={address}
		// 								id="exampleInputUsername1"
		// 								placeholder="Full Address"
		// 								size="lg"
		// 							/>
		// 						</Form.Group>
		// 					</div>
		// 				</div>
		// 				<div className="row justify-content-around">
		// 					<div className="col-md-5 ">
		// 						<Form.Group>
		// 							<label htmlFor="exampleSelectGender">Province</label>
		// 							<Form.Control
		// 								type="text"
		// 								onChange={(e) => setProvince(e.target.value)}
		// 								value={province}
		// 								id="exampleInputUsername1"
		// 								placeholder="Full Address"
		// 								size="lg"
		// 							/>
		// 						</Form.Group>
		// 					</div>
		// 					<div className="col-md-5">
		// 						<Form.Group>
		// 							<label htmlFor="exampleSelectGender">District/District</label>
		// 							<Form.Control
		// 								type="text"
		// 								onChange={(e) => setDistrict(e.target.value)}
		// 								value={district}
		// 								id="exampleInputUsername1"
		// 								placeholder="Full Address"
		// 								size="lg"
		// 							/>
		// 						</Form.Group>
		// 					</div>
		// 				</div>
		// 				<div className="row justify-content-around">
		// 					<div className="col-md-5">
		// 						<Form.Group>
		// 							<label htmlFor="exampleSelectGender">Sub-Division</label>
		// 							<Form.Control
		// 								type="text"
		// 								onChange={(e) => setSubDistrict(e.target.value)}
		// 								value={subdistrict}
		// 								id="exampleInputUsername1"
		// 								placeholder="Full Address"
		// 								size="lg"
		// 							/>
		// 						</Form.Group>
		// 					</div>
		// 					<div className="col-md-5">
		// 						<Form.Group>
		// 							<label htmlFor="exampleSelectGender">Zip Code</label>
		// 							<Form.Control
		// 								type="text"
		// 								onChange={(e) => setPincode(e.target.value)}
		// 								value={pincode}
		// 								id="exampleInputUsername1"
		// 								placeholder="Full Address"
		// 								size="lg"
		// 							/>
		// 						</Form.Group>
		// 					</div>
		// 				</div>
		// 				<div className="row ">
		// 					<div className="mx-auto col-md-11">
		// 						<button
		// 							onClick={(event) => onSubmit(event)}
		// 							className="btn btn-success btn-lg btn-block rounded-pill">
		// 							Agree
		// 						</button>
		// 					</div>
		// 				</div>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
		<div className="col-12 grid-margin">
			<h4 className="card-title">user Personal Information</h4>
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
										<label className={styles.userLabel}>first name</label>
										<input
											type="year"
											name="userName"
											onChange={(e) => {
												setShowData({
													...showData,
													userName: e.target.value,
												});
											}}
											value={showData.userName}
											className={`form-control ${styles.userInputs}`}
											// placeholder={userName}
										/>

										{fields["userName"] == null || fields["userName"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div>
									{/* <div className="form-group">
										<label
											for="validationDefault01"
											className={styles.userLabel}>
											merchant name
										</label>
										<input
											type="text"
											name="userName"
											onChange={(e) => {
												setShowData({
													...showData,
													userName: e.target.value,
												});
											}}
											id="validationCustom01"
											required
											value={showData.userName}
											className={`form-control ${styles.userInputs}`}
											placeholder="name"
										/>

										{fields["userName"] == null || fields["userName"] == "" ? (
											<span className="text-danger">Field can't be empty</span>
										) : (
											""
										)}
									</div> */}
								</form>
							</div>

							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<form>
									{/* <div className="form-group">
										<label className={styles.userLabel}>
											{" "}
											merchant name english
										</label>
										<input
											type="text"
											disabled
											className={`form-control ${styles.userInputs}`}
											placeholder="merchant name english"
										/>
									</div> */}

									<div className="form-group">
										<label className={styles.userLabel}>sur name</label>
										<input
											type="text"
											onChange={(e) => {
												setShowData({
													...showData,
													surName: e.target.value,
												});
											}}
											value={showData.surName}
											className={`form-control ${styles.userInputs}`}
											// placeholder={surName}
										/>

										{fields["surName"] == null || fields["surName"] == "" ? (
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
							<label className={styles.userLabel}>address</label>
							<input
								type="text"
								onChange={(e) => {
									setShowData({
										...showData,
										address: e.target.value,
									});
								}}
								value={showData.address}
								className={`form-control ${styles.userInputs}`}
								// placeholder={address}
							/>

							{fields["address"] == null || fields["address"] == "" ? (
								<span className="text-danger">Field can't be empty</span>
							) : (
								""
							)}
						</div>

						<div className="row mt-5">
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
						</div>

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
