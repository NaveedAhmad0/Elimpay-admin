import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../backend";

import "./projectDetails.css";
const ProjectDetails = () => {
	const [projDetails, setProjDetails] = useState({
		id: "",
		projectName: "",
		orgsMobileNum: "",
		description: "",
		long_des: "",
		image: "",
		image2: "",
		projStatus: "",
		createdBy: "",
		created_at: "",
	});
	const token = sessionStorage.getItem("token");
	const location = useLocation();
	const projId = location.state.projId;
	useEffect(() => {
		axios
			.get(`${API}Admin/project-details-by-id?id=${projId}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				// withCredentials: true,
			})
			.then((res) => {
				console.log(res);
				setProjDetails({
					id: res.data.id,
					projectName: res.data.projectName,
					description: res.data.description,
					image: res.data.image,
					image2: res.data.image2,
					long_des: res.data.long_des,
					orgsMobileNum: res.data.orgsMobileNum,
					created_at: res.data.created_at,
					createdBy: res.data.createdBy,
				});
			});
	}, []);

	return (
		<div>
			<div className="container form-1">
				<h4 className=" mt-5 mb-5 ">Project Details</h4>
				<form className="row g-3">
					<div className="col-md-6">
						<label for="inputEmail4" className="form-label">
							Project #
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext text-muted"
							// id=""
							value={projDetails.id}
						/>
					</div>
					<div className="col-md-6">
						<label for="inputPassword4" className="form-label">
							Project Name
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext text-primary"
							id=""
							value={projDetails.projectName}
						/>
					</div>
					<div className="col-md-6">
						<label for="inputEmail4" className="form-label">
							Created By
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext text-muted"
							id=""
							value={projDetails.createdBy}
						/>
					</div>
					<div className="col-md-6">
						<label for="inputPassword4" className="form-label">
							Created at
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext text-muted"
							id=""
							value={projDetails.created_at}
						/>
					</div>
					<div className="col-md-6">
						<label for="inputEmail4" className="form-label">
							Status
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext text-muted"
							id=""
							value={projDetails.projStatus}
						/>
					</div>
					<div className="col-md-6">
						<label for="inputPassword4" className="form-label">
							Organsier Mobile
						</label>
						<input
							type="text"
							readonly
							className="form-control-plaintext text-muted"
							id=""
							value={
								projDetails.orgsMobileNum ? projDetails.orgsMobileNum : "Nil"
							}
						/>
					</div>

					<div className="form-group">
						<label for="exampleFormControlTextarea1">Description</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							value={projDetails.description}></textarea>
					</div>
					<div className="form-group mb-5">
						<label for="exampleFormControlTextarea1">Long Description</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							value={projDetails.long_des}>
							{projDetails.long_des}
						</textarea>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProjectDetails;
