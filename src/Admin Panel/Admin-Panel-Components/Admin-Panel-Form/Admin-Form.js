import React from "react";
import { Form } from "react-bootstrap";
const AdminForm = () => {
	return (
		<div className="col-12 grid-margin">
			<div className="card">
				<div className="card-body">
					<form className="form-sample">
						<div className="row">
							<div className="col-sm-2">
								<div className="form-check">
									<label className="form-check-label text-muted">
										<input type="checkbox" className="form-check-input" />
										<i className="input-helper"></i>
										Transaction Date
									</label>
								</div>
							</div>
							<div className="col-sm-2">
								<div className="form-check">
									<label className="form-check-label text-muted">
										<input type="checkbox" className="form-check-input" />
										<i className="input-helper"></i>
										Payment Date
									</label>
								</div>
							</div>
						</div>
						{/* <p className="card-description"> Personal info </p> */}
						<div className="row">
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Control type="text" placeholder="Keywords" />
									</div>
								</Form.Group>
							</div>
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Control type="text" placeholder="All Channel" />
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<select className="form-control">
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Control type="text" placeholder="Trans. Status" />
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<select className="form-control">
											<option>Category1</option>
											<option>Category2</option>
											<option>Category3</option>
											<option>Category4</option>
										</select>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Control type="text" placeholder="Trans. Status" />
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Control type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Control type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<button className="btn btn-success btn-lg btn-block rounded-pill">
									Agree
								</button>
							</div>
							<div className="col-md-6">
								<button className="btn btn-success btn-lg btn-block rounded-pill">
									Agree
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminForm;
