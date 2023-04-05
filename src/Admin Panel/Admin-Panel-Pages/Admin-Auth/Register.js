import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [password, setPassword] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		console.log(result);
		console.log(password);
		setValidPwd(result);

		const match = password === matchPwd;
		setValidMatch(match);
	}, [password, matchPwd]);

	useEffect(() => {
		setErrMsg("");
	}, [password, user, matchPwd]);

	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-4 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<div className="brand-logo">
								<img
									src={require("../../../assets/images/logo.svg")}
									alt="logo"
								/>
							</div>
							<h4>New here??</h4>
							<h6 className="font-weight-light">
								Signing up is easy. It only takes a few steps
							</h6>
							<form className="pt-3">
								<div className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										id="exampleInputUsername1"
										placeholder="Username"
									/>
								</div>
								<div className="form-group">
									<input
										type="email"
										className="form-control form-control-lg"
										id="exampleInputEmail1"
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<select
										className="form-control form-control-lg"
										id="exampleFormControlSelect2">
										<option>Country</option>
										<option>United States of America</option>
										<option>United Kingdom</option>
										<option>India</option>
										<option>Germany</option>
										<option>Argentina</option>
									</select>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="exampleInputPassword1"
										placeholder="Password"
									/>
								</div>
								<div className="mb-4">
									<div className="form-check">
										<label className="form-check-label text-muted">
											<input type="checkbox" className="form-check-input" />
											<i className="input-helper"></i>I agree to all Terms &
											Conditions
										</label>
									</div>
								</div>
								<div className="mt-3">
									<Link
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
										to="/dashboard">
										SIGN UP
									</Link>
								</div>
								<div className="text-center mt-4 font-weight-light">
									Already have an account?{" "}
									<Link to="/user-pages/login" className="text-primary">
										Login
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
