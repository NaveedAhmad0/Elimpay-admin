import axios from "axios";
import React, { useState, useEffect } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import { Redirect, useHistory } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import API from "../../../backend";
function CreateProject() {
	const [createdBy, setCreatedBy] = useState("");
	const [projectName, setProjectName] = useState("");
	const [description, setDescription] = useState("");
	const [projectImage, setProjectImage] = useState("");
	const [projectImage2, setProjectImage2] = useState("");

	const history = useHistory();
	const fileTypes = ["JPG", "PNG", "GIF"];

	const token = sessionStorage.getItem("token");
	// console.log(merchantId);

	// useEffect(() => {
	// 	const result = MOBILE_REGEX.test(mobile);
	// 	console.log(result);
	// 	console.log(mobile);
	// 	setValidMobile(result);
	// }, [mobile]);
	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	async function onSubmit(event) {
		const Base64ProjectImage = convertBase64(projectImage);
		const Base64ProjectImage2 = convertBase64(projectImage2);

		event.preventDefault();
		console.log(description, projectName, Base64ProjectImage, createdBy);
		// 44ba3429-c02c-430d-b6e9-2d51f6a2527f
		try {
			await axios
				.post(
					`${API}Admin/create-project`,
					JSON.stringify({
						createdBy,
						description,
						projectName,
						image: Base64ProjectImage,
						image2: Base64ProjectImage2,
					}),
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then((res) => {
					console.log(res);
					alert(res.data.message);
					setProjectName("");
					setProjectImage("");
					setProjectImage2("");
					setDescription("");
					setCreatedBy("");
					history.push("/admin/projectsList");
				});
			// }
		} catch (err) {
			console.log(err.message);
		}
	}

	return (
		<>
			<div className="header">
				<h3 className="header-title header-title1">Create Project</h3>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="card">
							<div class="card-body">
								<div className="row">
									<div className="col-4">
										<label className="heading">Project Name :</label>
										<br />
										<input
											type="text"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											onChange={(e) => setProjectName(e.target.value)}
											value={projectName}
										/>
									</div>

									<div className="col-4">
										<label className="heading">Created By :</label> {""}
										<br />
										<input
											type="text"
											placeholder=""
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												marginTop: "-1px",
											}}
											onChange={(e) => setCreatedBy(e.target.value)}
											value={createdBy}
											// pattern="[0-9]*"
											// aria-invalid={validMobile ? "false" : "true"}
											required
											// onFocus={() => setCreatedByFocus(true)}
											// onBlur={() => setCreatedByFocus(false)}
										></input>
									</div>
									<div className="col-4">
										{/* <h6 className="text-primary">Address</h6> */}
										<label className="heading">Description :</label> <br />
										<textarea
											type="datetime-local"
											className="form-control"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "100px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
											}}
											onChange={(e) => setDescription(e.target.value)}
											value={description}></textarea>
									</div>
								</div>
								<br />
								<div className="row justify-content-between">
									<div className="col-4">
										{/* <h6 className="text-primary">General</h6> */}
										<label className="heading">Upload Image:</label>
										<br />
										<FileUploader
											style={{
												maxWidth: "100%",
												minWidth: "100%",
												width: "100%",
												height: "210px",
												border: "1px solid black",
												backgroundColor: "red",
											}}
											classes="file-upload"
											handleChange={(e) => {
												setProjectImage(e);
											}}
											name="file"
											maxSize={2}
											types={fileTypes}
										/>
									</div>
									<div className="col-4">
										{/* <h6 className="text-primary">General</h6> */}
										<label className="heading">Upload Image:</label>
										<br />
										<FileUploader
											style={{
												maxWidth: "100%",
												minWidth: "100%",
												width: "100%",
												height: "210px",
												border: "1px solid black",
												backgroundColor: "red",
											}}
											classes="file-upload"
											handleChange={(e) => {
												setProjectImage2(e);
											}}
											name="file"
											maxSize={2}
											types={fileTypes}
										/>
									</div>
								</div>
								<div className="buttons">
									<div>
										<button
											type="button"
											class="btn btn-success mt-5 btn-block"
											onClick={(e) => {
												onSubmit(e);
											}}>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
						<br />
					</div>
					{/* ....Right side Cards.... */}
				</div>
				{/* <div className="row">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="card" id="cardmerchant">
							<div class="card-body ">
								<div className="d-flex">
									<div className="col-6">
										<p className="heading">Total Amount :</p>
										<textarea
											type="number"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											onChange={(e) => setProjectName(parseInt(e.target.value))}
											value={projectName}
										/>
									</div>
									<div className="col-6">
										<p className="heading">QR Expiriy Date :</p>
										<input
											type="datetime-local"
											style={{
												boxSizing: "border-box",
												width: "226px",
												height: "40px",
												left: "1124px",
												top: "674px",
												background: "#FFFFFF",
												border: "1px solid #CBCCD3",
												borderRadius: "4px",
												// marginTop: "25px",
											}}
											onChange={(e) => setDescription(e.target.value)}
											value={description}
										/>
									</div>
								</div>

								<table class="table" id="tablebodyrow">
									<thead>
										<tr>
											<th scope="col-2" className="tablenone">
												sr
											</th>
											<th scope="col-2">item</th>
											<th scope="col-2">Cost</th>
											<th scope="col-2">Qty</th>
											<th scope="col-4">Total</th>
										</tr>
									</thead>
									<tbody className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
										{itemValues?.map((item, index) => (
											<tr
												className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12"
												key={index}>
												<td className="tablenone">{index + 1}</td>
												<td className="col-2">
													<u>
														<input
															type="text"
															name="item"
															onChange={(e) => handleFormChange(index, e)}
															value={item.item}
														/>
													</u>
												</td>
												<td className="col-2">
													<input
														type="text"
														name="amount"
														onChange={(e) => handleFormChange(index, e)}
														value={item.amount}
													/>
												</td>
												<td className="col-2">
													<input
														type="text"
														name="quantity"
														onChange={(e) => handleFormChange(index, e)}
														value={item.quantity}
													/>
												</td>
												<td className="col-2">
													total price :{item.totalPrice}
												</td>
											</tr>
										))}
										<tr>
											<th scope="row"></th>
											<td></td>
											<td>
												<b>Shipping</b>
											</td>
											<td></td>
											<td>
												<b>$5.00</b>
											</td>
										</tr>
										<tr>
											<th scope="row"></th>
											<td></td>
											<td>
												<b>Total</b>
											</td>
											<td></td>
											<td>
												<b>{projectName}</b>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="buttons">
									<div>
										<button
											type="button"
											class="btn btn-success mt-5 btn-block"
											onClick={(e) => onSubmit(e)}>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
}
export default CreateProject;
