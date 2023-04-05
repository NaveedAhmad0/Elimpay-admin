import React from "react";
import { Form } from "react-bootstrap";
const ProfileComponent = () => {
	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">Personal Information</h4>

			<div className="card">
				<div className="row flex-column mt-5 mx-auto">
					<img
						className="img-lg mx-auto rounded-circle"
						src={require("../../../assets/images/faces/face8.jpg")}
						alt="Profile"
					/>
					<div className="mt-2 mx-auto">
						<p>
							Merchant Code: <span className="text-primary">M010303</span>
						</p>
						<p className="mx-auto">
							Email: <span className="text-primary">info@gmail.com</span>
						</p>
					</div>
				</div>
				<div className="card-body">
					<form className="form-sample">
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">System Username</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										placeholder="info@gmilail.com"
										size="lg"
									/>
								</Form.Group>
							</div>
							{/* <div className="col-md-2"></div> */}
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Gender</label>
									<select
										className="form-control"
										size="lg"
										id="exampleSelectGender">
										<option>Male</option>
										<option>Female</option>
									</select>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">
										Contact Phone Number
									</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										placeholder="info@gmilail.com"
										// size="lg"
									/>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group className="row">
									<label htmlFor="exampleInputUsername1">Address</label>
									<Form.Control
										type="text"
										id="exampleInputUsername1"
										placeholder="Full Address"
										size="lg"
									/>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5 ">
								<Form.Group>
									<label htmlFor="exampleSelectGender">Province</label>
									<select
										className="form-control "
										size="lg"
										placeholder="Select Province"
										id="exampleSelectGender">
										<option>Select Province</option>
										<option>Male</option>
										<option>Female</option>
									</select>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">District/District</label>
									<select
										className="form-control "
										size="lg"
										placeholder="Select Province"
										id="exampleSelectGender">
										<option>Select District</option>
										<option>Male</option>
										<option>Female</option>
									</select>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">District/District</label>
									<select
										className="form-control "
										size="lg"
										placeholder="Select Province"
										id="exampleSelectGender">
										<option>Select District</option>
										<option>Male</option>
										<option>Female</option>
									</select>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<label htmlFor="exampleSelectGender">District/District</label>
									<select
										className="form-control "
										size="lg"
										placeholder="Select Province"
										id="exampleSelectGender">
										<option>Select District</option>
										<option>Male</option>
										<option>Female</option>
									</select>
								</Form.Group>
							</div>
						</div>
						<div className="row ">
							<div className="mx-auto col-md-11">
								<button className="btn btn-success btn-lg btn-block rounded-pill">
									Agree
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProfileComponent;
