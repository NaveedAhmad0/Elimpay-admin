import React from "react";
import { Form } from "react-bootstrap";

const AdminMerchantProfile = () => {
	return (
		<>
			<h2 className="text-primary bw-bold">Merchant Profile</h2>
			<div className="card">
				<div className="card-body px-5">
					<div className="row my-5">
						<div className="mx-auto col-2">
							<p>Shop Type:</p>
						</div>
						<div className="col-10">
							<div
								class="btn-group btn-group-md"
								role="group"
								aria-label="Basic example">
								<button type="button" class="btn ">
									Legal Entity
								</button>
								<button type="button" class="btn btn-primary">
									Natural Person
								</button>
							</div>
						</div>
					</div>
					<form className="forms-sample">
						<Form.Group>
							<label htmlFor="exampleInputName1">
								Nameregisteredaccordingtothecertificate:
							</label>
							<Form.Control
								type="text"
								className="form-control rounded	"
								id="exampleInputName1"
								placeholder="info@gmilail.com"
							/>
						</Form.Group>
						<Form.Group>
							<label htmlFor="exampleInputEmail3">Tradename:</label>
							<Form.Control
								type="email"
								className="form-control rounded	"
								id="exampleInputEmail3"
								placeholder="Name"
							/>
						</Form.Group>
						<Form.Group>
							<label htmlFor="exampleInputPassword4">
								TaxIdentificationNumber:
							</label>
							<Form.Control
								type="text"
								className="form-control rounded	"
								id="exampleInputPassword4"
								placeholder="TaxIdentificationNumber "
							/>
						</Form.Group>

						<div className="row ">
							<div className="mx-auto col-md-3">
								<p>TaxIdentificationNumber</p>
							</div>
							<div className="mx-auto col-md-9">
								<img
									className="img-lg mb-5 me-auto rounded-circle"
									src={require("../../../assets/images/faces/face8.jpg")}
									alt="Profile"
								/>
							</div>
						</div>
						<div className="row ">
							<div className="mx-auto col-md-12">
								<button className="btn btn-success btn-lg btn-block rounded-pill">
									Leangene
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminMerchantProfile;
