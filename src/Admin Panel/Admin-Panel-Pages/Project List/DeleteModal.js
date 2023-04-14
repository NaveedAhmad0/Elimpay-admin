// import React from "react";

// const DeleteModal = () => {
// 	return (
// 		<div>
// 			<div className="row">
// 									<div className="col-4">
// 										<label className="heading">Project Name :</label>
// 										<br />
// 										<input
// 											type="text"
// 											style={{
// 												boxSizing: "border-box",
// 												width: "226px",
// 												height: "40px",
// 												left: "1124px",
// 												top: "674px",
// 												background: "#FFFFFF",
// 												border: "1px solid #CBCCD3",
// 												borderRadius: "4px",
// 												// marginTop: "25px",
// 											}}
// 											onChange={(e) => setProjectName(e.target.value)}
// 											value={projectName}
// 										/>
// 									</div>

// 									<div className="col-4">
// 										<label className="heading">Created By :</label> {""}
// 										<br />
// 										<input
// 											type="text"
// 											placeholder=""
// 											style={{
// 												boxSizing: "border-box",
// 												width: "226px",
// 												height: "40px",
// 												left: "1124px",
// 												top: "674px",
// 												background: "#FFFFFF",
// 												border: "1px solid #CBCCD3",
// 												borderRadius: "4px",
// 												marginTop: "-1px",
// 											}}
// 											onChange={(e) => setCreatedBy(e.target.value)}
// 											value={createdBy}
// 											// pattern="[0-9]*"
// 											// aria-invalid={validMobile ? "false" : "true"}
// 											required
// 											// onFocus={() => setCreatedByFocus(true)}
// 											// onBlur={() => setCreatedByFocus(false)}
// 										></input>
// 									</div>
// 									<div className="col-4">
// 										<label className="heading">Description :</label> <br />
// 										<textarea
// 											type="datetime-local"
// 											className="form-control"
// 											style={{
// 												boxSizing: "border-box",
// 												width: "226px",
// 												height: "100px",
// 												left: "1124px",
// 												top: "674px",
// 												background: "#FFFFFF",
// 												border: "1px solid #CBCCD3",
// 												borderRadius: "4px",
// 											}}
// 											onChange={(e) => setDescription(e.target.value)}
// 											value={description}
// 											></textarea>
// 									</div>
// 								</div>
// 								<br />
// 								<div className="row justify-content-between">
// 									<div className="col-4">
// 										{/* <h6 className="text-primary">General</h6> */}
// 										<label className="heading">Upload Image:</label>
// 										<br />
// 										<FileUploader
// 											style={{
// 												maxWidth: "100%",
// 												minWidth: "100%",
// 												width: "100%",
// 												height: "210px",
// 												border: "1px solid black",
// 												backgroundColor: "red",
// 											}}
// 											classes="file-upload"
// 											handleChange={(e) => {
// 												setProjectImage(e);
// 											}}
// 											name="file"
// 											maxSize={2}
// 											types={fileTypes}
// 										/>
// 									</div>
// 									<div className="col-4">
// 										{/* <h6 className="text-primary">General</h6> */}
// 										<label className="heading">Upload Image:</label>
// 										<br />
// 										<FileUploader
// 											style={{
// 												maxWidth: "100%",
// 												minWidth: "100%",
// 												width: "100%",
// 												height: "210px",
// 												border: "1px solid black",
// 												backgroundColor: "red",
// 											}}
// 											classes="file-upload"
// 											handleChange={(e) => {
// 												setProjectImage2(e);
// 											}}
// 											name="file"
// 											maxSize={2}
// 											types={fileTypes}
// 										/>
// 									</div>
// 								</div>
// 								<div className="buttons">
// 									<div>
// 										<button
// 											type="button"
// 											class="btn btn-success mt-5 btn-block"
// 											onClick={(e) => {
// 												onSubmit(e);
// 											}}>
// 											Submit
// 										</button>
// 									</div>
// 								</div>
// 		</div>
// 	);
// };

// export default DeleteModal;
