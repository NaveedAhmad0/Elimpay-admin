import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";

const HomePage = () => {
	const { getAdminPanel, getMerchantPanel, getUserPanel } =
		useContext(userContext);
	return (
		<div className="row justify-content-center">
			<div className="container d-flex mx-auto">
				<div className="col-4 ">
					<Link to="/admin/login">
						<button className="btn btn-primary" onClick={getAdminPanel}>
							Admin
						</button>
					</Link>
				</div>
				<div className="col-4 ">
					<Link to="/merchant/login">
						<button className="btn btn-primary" onClick={getMerchantPanel}>
							Merchant
						</button>
					</Link>
				</div>
				<div className="col-4 ">
					<Link to="/user/Registration/UserLogin">
						<button className="btn btn-primary" onClick={getUserPanel}>
							User
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
