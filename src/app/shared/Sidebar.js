import React, { useEffect, useState } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import { useHistory } from "react-router-dom";

function Sidebar() {
	let history = useHistory();
	const location = useLocation();
	const [state, setState] = useState([]);
	const [userName, setUserName] = useState("");
	const toggleMenuState = (menuState) => {
		if (state[menuState]) {
			setState({ [menuState]: false });
		} else if (Object.keys(state).length === 0) {
			setState({ [menuState]: true });
		} else {
			Object.keys(state).forEach((i) => {
				setState({ [i]: false });
			});
			setState({ [menuState]: true });
		}
	};

	function isPathActive(path) {
		return location.pathname.startsWith(path);
	}

	// componentDidUpdate(prevProps) {
	// 	if (props.location !== prevProps.location) {
	// 		onRouteChanged();
	// 	}
	// }

	function onRouteChanged() {
		document.querySelector("#sidebar").classList.remove("active");
		Object.keys(state).forEach((i) => {
			setState({ [i]: false });
		});

		const dropdownPaths = [
			{ path: "/apps", state: "appsMenuOpen" },
			{ path: "/basic-ui", state: "basicUiMenuOpen" },
			{ path: "/form-elements", state: "formElementsMenuOpen" },
			{ path: "/tables", state: "tablesMenuOpen" },
			{ path: "/icons", state: "iconsMenuOpen" },
			{ path: "/charts", state: "chartsMenuOpen" },
			{ path: "/user-pages", state: "userPagesMenuOpen" },
			{ path: "/error-pages", state: "errorPagesMenuOpen" },
		];

		dropdownPaths.forEach((obj) => {
			if (isPathActive(obj.path)) {
				setState({ [obj.state]: true });
			}
		});
	}

	function componentDidMount() {
		onRouteChanged();
		// add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
		const body = document.querySelector("body");
		document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
			el.addEventListener("mouseover", function () {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.add("hover-open");
				}
			});
			el.addEventListener("mouseout", function () {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.remove("hover-open");
				}
			});
		});
	}

	const loginmail = localStorage.getItem("email");
	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`https://backend.klivepay.com/api/admin/get-profile?email=${loginmail}`
	// 		)
	// 		.then((res) => {
	// 			setUserName(res.data.admin.name);
	// 		});
	// }, []);

	return (
		<nav className="sidebar sidebar-offcanvas" id="sidebar">
			<div className="text-center sidebar-brand-wrapper d-flex align-items-center">
				<a className="sidebar-brand brand-logo text-white" href="index.html">
					<h3 className="mt-2">
						{/* <img
							className="img-sm "
							width={60}
							src={require("../../assets/logo/K Live Pay.png")}
							alt="profile"
						/> */}
						ELIMPAY
					</h3>
				</a>
				<a
					className="sidebar-brand brand-logo-mini text-white pt-3"
					href="index.html">
					<h5>IxiPay</h5>
				</a>
			</div>
			<ul className="nav">
				<li className="nav-item nav-profile not-navigation-link">
					<div className="nav-link">
						<Dropdown>
							<Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
								<div className="d-flex justify-content-between align-items-start">
									<div className="profile-image">
										{/* <img
											className="img-xs rounded-circle"
											src={require("../../assets/images/faces/face8.jpg")}
											alt="profile"
										/> */}

										<FontAwesomeIcon className="fa-2x" icon={faUser} />

										<div className="dot-indicator bg-success"></div>
									</div>
									<div className="text-wrapper">
										<p className="profile-name mt-2">{userName}</p>
										{/* <span className="designation">Admin</span> */}
									</div>
								</div>
							</Dropdown.Toggle>
							<Dropdown.Menu className="preview-list navbar-dropdown">
								{/* <Dropdown.Item
									className="dropdown-item p-0 preview-item d-flex align-items-center"
									href="!#"
									onClick={(evt) => evt.preventDefault()}>
									<div className="d-flex">
										<div className="py-3 px-4 d-flex align-items-center justify-content-center">
											<i className="mdi mdi-bookmark-plus-outline mr-0"></i>
										</div>
										<div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
											<i className="mdi mdi-account-outline mr-0"></i>
										</div>
										<div className="py-3 px-4 d-flex align-items-center justify-content-center">
											<i className="mdi mdi-alarm-check mr-0"></i>
										</div>
									</div>
								</Dropdown.Item> */}
								{/* <Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center text-small"
									onClick={(evt) => evt.preventDefault()}>
									<Trans>Manage Accounts</Trans>
								</Dropdown.Item> */}
								<Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small">
									<Trans>
										<Link
											to="/admin/AdminChangePassword"
											style={{ textDecoration: "none", color: "black" }}>
											Change Password
										</Link>
									</Trans>
								</Dropdown.Item>
								{/* <Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center text-small"
									onClick={(evt) => evt.preventDefault()}>
									<Trans>Check Inbox</Trans>
								</Dropdown.Item> */}
								<Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center text-small"
									onClick={(evt) => {
										evt.preventDefault();
										localStorage.clear();
										history.push("/admin/user/Registration/UserLogin");
									}}>
									<Trans>Sign Out</Trans>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</li>

				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link" to="/admin/dashboard">
						<i className="mdi mdi-television menu-icon"></i>
						<span className="menu-title">
							<Trans>Dashboard</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link" to="/admin/AdminManageUser">
						<i className="mdi mdi-television menu-icon"></i>
						<span className="menu-title">
							<Trans>Registered Users</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
					}>
					<div
						className={
							state.basicUiMenuOpen ? "nav-link menu-expanded" : "nav-link"
						}
						onClick={() => toggleMenuState("basicUiMenuOpen")}
						data-toggle="collapse">
						<i className="mdi mdi-crosshairs-gps menu-icon"></i>
						<span className="menu-title">
							<Trans>KYC Users List</Trans>
						</span>
						<i className="menu-arrow"></i>
					</div>
					<Collapse in={state.basicUiMenuOpen}>
						<ul className="nav flex-column sub-menu">
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/buttons")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/KycPendingUsers">
									<Trans>Kyc Pending users</Trans>
								</Link>
							</li>
							{/* <li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/buttons")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminManageUser">
									<Trans>kyc-pending-users</Trans>
								</Link>
							</li> */}
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/dropdowns")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/KycCompletedUsers">
									<Trans>kyc-completed-users</Trans>
								</Link>
							</li>
						</ul>
					</Collapse>
				</li>
				<li
					className={
						isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
					}>
					<div
						className={
							state.AdminProfileMenuOpen ? "nav-link menu-expanded" : "nav-link"
						}
						onClick={() => toggleMenuState("AdminProfileMenuOpen")}
						data-toggle="collapse">
						<i className="mdi mdi-crosshairs-gps menu-icon"></i>
						<span className="menu-title">
							<Trans>User Profile</Trans>
						</span>
						<i className="menu-arrow"></i>
					</div>
					<Collapse in={state.AdminProfileMenuOpen}>
						<ul className="nav flex-column sub-menu">
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/buttons")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/update-profile">
									<Trans>User Profile</Trans>
								</Link>
							</li>
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/dropdowns")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminChangePassword">
									<Trans>Change Password</Trans>
								</Link>
							</li>
						</ul>
					</Collapse>
				</li>
				{/* <li
					className={
						isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
					}>
					<div
						className={
							state.VoidRefundMenuOpen ? "nav-link menu-expanded" : "nav-link"
						}
						onClick={() => toggleMenuState("VoidRefundMenuOpen")}
						data-toggle="collapse">
						<i className="mdi mdi-crosshairs-gps menu-icon"></i>
						<span className="menu-title">
							<Trans>Void & Refund</Trans>
						</span>
						<i className="menu-arrow"></i>
					</div>
					<Collapse in={state.VoidRefundMenuOpen}>
						<ul className="nav flex-column sub-menu">
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/buttons")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminVoid">
									<Trans>Void</Trans>
								</Link>
							</li>
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/dropdowns")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminRefund">
									<Trans>Refund</Trans>
								</Link>
							</li>
						</ul>
					</Collapse>
				</li> */}
				{/* <li
					className={
						isPathActive("/admin/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link" to="/admin/AdminMerchantProfile">
						<i className="mdi mdi-television menu-icon"></i>
						<span className="menu-title">
							<Trans>Merchant Profile</Trans>
						</span>
					</Link>
				</li> */}
				<li
					className={
						isPathActive("/admin/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link" to="/admin/projectsList">
						<i className="mdi mdi-television menu-icon"></i>
						<span className="menu-title">
							<Trans>Projects List</Trans>
						</span>
					</Link>
				</li>

				{/* <li
					className={
						isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
					}>
					<div
						className={
							state.usersManageMenuOpen ? "nav-link menu-expanded" : "nav-link"
						}
						onClick={() => toggleMenuState("usersManageMenuOpen")}
						data-toggle="collapse">
						<i className="mdi mdi-crosshairs-gps menu-icon"></i>
						<span className="menu-title">
							<Trans>Kyc Partner List</Trans>
						</span>
						<i className="menu-arrow"></i>
					</div>
					<Collapse in={state.usersManageMenuOpen}>
						<ul className="nav flex-column sub-menu">
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/buttons")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/KycCompletePartners">
									<Trans>Kyc Completed Partners</Trans>
								</Link>
							</li>
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/dropdowns")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/KycPendingPartners">
									<Trans>Kyc Pending Partners </Trans>
								</Link>
							</li>
						</ul>
					</Collapse>
				</li> */}
			</ul>
		</nav>
	);
}

export default withRouter(Sidebar);
