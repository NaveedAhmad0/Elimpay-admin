import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import API from "../../../backend";

const GetAdminProfile = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [surName, setSurName] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");
	const [province, setProvince] = useState("");
	const [district, setDistrict] = useState("");
	const [subDistrict, setSubDistrict] = useState("");
	const [pincode, setPincode] = useState("");

	const location = useLocation();

	// const { email, mobile } = values;
	const loginMail = location.state.email;

	useEffect(() => {
		axios
			.get(`${API}Admin/fetch-user-profile?email=${loginMail}`)

			.then((res) => {
				console.log(res);
				// setEmail(res.data.admin.email);
				setMobile(res.data.admin.mobile);
				setName(res.data.admin.name);
				setSurName(res.data.admin.surName);
				setAddress(res.data.admin.address);
				setProvince(res.data.admin.province);
				setDistrict(res.data.admin.district);
				setSubDistrict(res.data.admin.subDistrict);
				setPincode(res.data.admin.pincode);
				// console.log("DATA IS ", res.data.admin.merchantEmail[0]);
			});
	}, []);

	return (
		<div className="col-12 grid-margin">
			<h4 className="card-title">Personal admin Information</h4>

			<div className="card">
				<div className="row flex-column mt-5 mx-auto">
					<img
						className="img-lg mx-auto rounded-circle"
						src={require("../../../assets/images/faces/face8.jpg")}
						alt="Profile"
					/>
					<div className="mt-2 mx-auto">
						<p>
							Merchant Code: <span className="text-primary">M0103033</span>
						</p>
						<p className="mx-auto">
							Email: <span className="text-primary">{email}</span>
						</p>
					</div>
				</div>
				<div className="card-body">
					<form className="form-sample">
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className=" d-flex">
									<h5 htmlFor="exampleInputUsername1" className="text-primary">
										System Username :-
									</h5>
									<h6 className="ms-2">{name}</h6>
								</Form.Group>
							</div>
							{/* <div className="col-md-2"></div> */}
							<div className="col-md-5">
								<Form.Group className="d-flex">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										SurName :-
									</h5>
									<h6 className="ms-2">{surName}</h6>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group className="row">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Mobile :-
										<span className="text-black ms-1">{mobile}</span>
									</h5>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group className="row">
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Address :-
										<span className=" text-black ms-2">{address}</span>
									</h5>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5 ">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Province :-
										<span className="text-black ms-2">{province}</span>
									</h5>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										District :-
										<span className="text-black ms-2">{district}</span>
									</h5>
								</Form.Group>
							</div>
						</div>
						<div className="row justify-content-around">
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Sub-Division :-
										<span className="text-black ms-2">{subDistrict}</span>
									</h5>
								</Form.Group>
							</div>
							<div className="col-md-5">
								<Form.Group>
									<h5 htmlFor="exampleSelectGender" className="text-primary">
										Zip Code :-
										<span className="text-black ms-2">{pincode}</span>
									</h5>
								</Form.Group>
							</div>
						</div>
						<div className="row ">
							<div className="mx-auto col-md-11">
								<Link to="/admin/edit-AdminProfile" className="text-white">
									<button className="btn btn-success btn-lg btn-block rounded-pill">
										Edit profile
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GetAdminProfile;
