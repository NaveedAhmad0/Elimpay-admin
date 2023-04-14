import React from "react";
import "./projectDetails.css";
const ProjectDetails = () => {
	return (
		<div>
			<div className="container form-1">
				<h4 className="text-secondary mt-5 mb-5 ">Overview</h4>
				<form className="row g-3">
					<div className="col-md-6">
						<label for="inputEmail4" className="form-label">
							Project #
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext"
							id=""
							value="1"
						/>
					</div>
					<div className="col-md-6">
						<label for="inputPassword4" className="form-label">
							Customer
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext text-primary"
							id=""
							value="Schulist-Rosenbaum"
						/>
					</div>
					<div className="col-md-6">
						<label for="inputEmail4" className="form-label">
							Billing Type
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext"
							id=""
							value="Fixed Rate"
						/>
					</div>
					<div className="col-md-6">
						<label for="inputPassword4" className="form-label">
							Total Rate
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext"
							id=""
							value="$2,500.00"
						/>
					</div>
					<div className="col-md-6">
						<label for="inputEmail4" className="form-label">
							Status
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext"
							id=""
							value="In Progress"
						/>
					</div>
					<div className="col-md-6">
						<label for="inputPassword4" className="form-label">
							Date Created
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext"
							id=""
							value="2023-06-12"
						/>
					</div>
					<div className="col-md-6">
						<label for="inputEmail4" className="form-label">
							Total Logged Hours
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext"
							id=""
							value="00:00"
						/>
					</div>
					<div className="col-md-6">
						<label for="inputPassword4" className="form-label">
							Tags
						</label>{" "}
						<br />
						<button type="button" className="btn btn-outline-secondary px-3">
							Wordpress
						</button>
					</div>
					<div className="form-group">
						<label for="exampleFormControlTextarea1">Description</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"></textarea>
					</div>
					<div className="form-group mb-5">
						<label for="exampleFormControlTextarea1">Long Description</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"></textarea>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProjectDetails;
