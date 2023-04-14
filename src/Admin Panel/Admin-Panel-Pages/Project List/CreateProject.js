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
	const [longDesc, setLongDesc] = useState("");
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
						long_des: longDesc,
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
					setLongDesc("");
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
								<form onSubmit={onSubmit}>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputEmail4">Project Name</label>
											<input
												type="text"
												class="form-control"
												// id="inputEmail4"
												placeholder="Project Name"
												onChange={(e) => setProjectName(e.target.value)}
												value={projectName}
											/>
										</div>
										<div class="form-group col-md-6">
											<label for="inputPassword4">Created By</label>
											<input
												type="text"
												class="form-control"
												placeholder="Created By"
												onChange={(e) => setCreatedBy(e.target.value)}
												value={createdBy}
											/>
										</div>
									</div>
									<div class="form-group">
										<label for="exampleFormControlTextarea1">
											Short description
										</label>
										<textarea
											class="form-control"
											id="exampleFormControlTextarea1"
											rows="3"
											onChange={(e) => setDescription(e.target.value)}
											value={description}></textarea>
									</div>

									<div class="form-group">
										<label for="exampleFormControlTextarea1">
											Long Description
										</label>
										<textarea
											class="form-control"
											id="exampleFormControlTextarea1"
											rows="3"
											onChange={(e) => setLongDesc(e.target.value)}
											value={longDesc}></textarea>
									</div>
									<div class="form-row justify-content-between">
										<div class="form-group col-md-5">
											<label for="inputCity">Upload Image</label>
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
										<div class="form-group col-md-5">
											<label for="inputState">Upload Image</label>
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
										{/* <div class="form-group col-md-2">
											<label for="inputZip">Zip</label>
											<input type="text" class="form-control" id="inputZip" />
										</div> */}
									</div>

									<button type="submit" class="btn btn-primary">
										Create
									</button>
								</form>
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
