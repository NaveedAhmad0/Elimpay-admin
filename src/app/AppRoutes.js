import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
import { UserRoleContextConsumer } from "../context/userContext";

require("dotenv").config();

// const HomePage = lazy(() => import("../Homepage/HomePage"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

// ADMIN PANEL IMPORTS

const AdminDashboard = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Dashboard/AdminDashboard")
);
const AdminLogin = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Auth/Login")
);
const KycPendingUser = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/KycUserList/KycPendingUser")
);
const KycCompletedUsers = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/KycUserList/KycCompleteUser")
);
const KycPendingPartners = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/KycPartnersList/KycPendingPartners")
);
const KycCompletePartners = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/KycPartnersList/KycCompletePartners")
);
const WithdrawalDetails = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/KycUserList/Withdrawal-Details")
);
const AdminVoid = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Void/AdminVoid")
);
const AdminRefund = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Refund/AdminRefund")
);
const AdminProfile = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Profile/AdminProfile")
);
const GetAdminProfile = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin Get Profile/GetUserProfile")
);
const GetUserProfile = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Get User Profile/GetUserProfile")
);
const GetMerchantProfile = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Get Merchant Profile/GetMerchantProfile"
	)
);
const AdminChangePassword = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Admin-Change-Password/AdminChangePassword"
	)
);
const ForgotPassword = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Forgot Password/ForgotPassword")
);
const AdminMerchantProfile = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/AdminPanel-Merchant-profile/AdminMerchantProfile"
	)
);
const AdminManageUser = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Manage-users/AdminManageUser")
);
const AdminManageRole = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Manage-Role/AdminManageRole")
);
const ProjectList = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Project List/ProjectList")
);
const CreateProject = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Project List/CreateProject")
);
const TransactionDetails = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/KycPartnersList/TransactionDetails")
);
const TxnDetails = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Transaction Details/Txn Details/TxnDetails"
	)
);
const ProjectDetails = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Project List/ProjectDetails")
);

function AppRoutes() {
	const loggedIn = (
		<Switch>
			<Route path="/admin/dashboard" component={AdminDashboard} exact />

			<Route path="/admin/KycPendingUsers" component={KycPendingUser} exact />
			<Route
				path="/admin/KycCompletedUsers"
				component={KycCompletedUsers}
				exact
			/>
			<Route
				path="/admin/KycCompletePartners"
				component={KycCompletePartners}
				exact
			/>
			<Route
				path="/admin/KycPendingPartners"
				component={KycPendingPartners}
				exact
			/>
			<Route
				path="/admin/WithdrawalDetails"
				component={WithdrawalDetails}
				exact
			/>
			<Route path="/admin/AdminVoid" component={AdminVoid} exact />
			<Route path="/admin/AdminRefund" component={AdminRefund} exact />
			<Route path="/admin/update-profile" component={AdminProfile} exact />
			<Route path="/admin/get-profile" component={GetAdminProfile} exact />
			<Route path="/admin/getUserProfile" component={GetUserProfile} exact />
			<Route
				exact
				path="/admin/getMerchantProfile"
				component={GetMerchantProfile}
			/>
			<Route
				path="/admin/AdminChangePassword"
				component={AdminChangePassword}
				exact
			/>
			<Route
				path="/admin/TransactionDetails"
				component={TransactionDetails}
				exact
			/>
			<Route
				path="/admin/AdminMerchantProfile"
				component={AdminMerchantProfile}
				exact
			/>
			<Route path="/admin/AdminManageUser" component={AdminManageUser} exact />
			<Route path="/admin/AdminManageRole" component={AdminManageRole} exact />
			<Route path="/admin/projectsList" component={ProjectList} exact />
			<Route path="/admin/CreateProject" component={CreateProject} exact />
			<Route path="/admin/TxnDetails" component={TxnDetails} exact />
			<Route path="/admin/ProjectDetails" component={ProjectDetails} exact />
		</Switch>
	);

	const notLoggedIn = (
		<Switch>
			{/* <Route exact path="/homepage" component={HomePage} exact /> */}
			{/* <Route exact path="/homepage" component={UserLogin} exact /> */}
			<Route path="/admin/basic-ui/buttons" component={Buttons} exact />
			<Route path="/admin/basic-ui/dropdowns" component={Dropdowns} exact />
			<Route path="/admin/forgotPassword" component={ForgotPassword} exact />

			<Route
				path="/admin/form-Elements/basic-elements"
				component={BasicElements}
				exact
			/>

			<Route path="/admin/tables/basic-table" component={BasicTable} exact />

			<Route path="/admin/icons/mdi" component={Mdi} exact />

			<Route path="/admin/charts/chart-js" component={ChartJs} exact />

			<Route path="/admin/user-pages/login-1" component={Login} exact />
			<Route path="/admin/user-pages/register-1" component={Register1} exact />

			{/*------------------------- ADMIN PANEL ROUTES -------------------------- */}
			<Route exact path="/admin/login" component={AdminLogin} />

			<Route path="/admin/error-pages/error-404" component={Error404} />
			<Route path="/admin/error-pages/error-500" component={Error500} />

			<Redirect to="/admin/login" exact />
		</Switch>
	);
	return (
		<Suspense fallback={<Spinner />}>
			<UserRoleContextConsumer>
				{(value) =>
					value?.loggedIn || sessionStorage.getItem("token")
						? loggedIn
						: notLoggedIn
				}
			</UserRoleContextConsumer>
		</Suspense>
	);
}

export default AppRoutes;
