/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import "./add.css";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { FileUploader } from "react-drag-drop-files";
import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "backend";

function Cover() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [long_desc, setLongDesc] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectImage2, setProjectImage2] = useState("");

  const fileTypes = ["JPG", "PNG", "GIF"];
  const token = localStorage.getItem("token");
  const naviagte = useNavigate();
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
    // const Base64ProjectImage = await convertBase64(projectImage[0]);
    // const Base64ProjectImage2 = await convertBase64(projectImage2[0]);

    event.preventDefault();
    // console.log(description, projectName, Base64ProjectImage, createdBy);
    // 44ba3429-c02c-430d-b6e9-2d51f6a2527f
    try {
      await axios
        .post(
          `${API}Admin/create-project`,
          JSON.stringify({
            createdBy,
            description,
            projectName,
            long_des: long_desc,
            image: projectImage,
            image2: projectImage2,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          // console.log(res);
          alert(res.data.message);
          setProjectName("");
          setProjectImage("");
          setProjectImage2("");
          setDescription("");
          setLongDesc("");
          setCreatedBy("");
          naviagte("/projects");
        });
      // }
    } catch (err) {
      console.log(err.message);
    }
  }

  const getFiles = (files) => {
    setProjectImage(files);
  };
  const getFiles2 = (files) => {
    setProjectImage2(files);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={3}
          p={2}
          mb={1}
          textAlign="left"
        >
          <MDTypography variant="h5" fontWeight="medium" color="white" mt={1}>
            Add New Project
          </MDTypography>
          {/* <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography> */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Project Name"
                variant="standard"
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                value={projectName}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Created By"
                variant="standard"
                onChange={(e) => {
                  setCreatedBy(e.target.value);
                }}
                value={createdBy}
                fullWidth
              />
            </MDBox>

            <MDBox mb={2}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ height: "150px", marginBottom: "20px" }}
              >
                <InputLabel htmlFor="standard-adornment-amount">Description</InputLabel>
                <Input
                  id="standard-adornment-amount"
                  multiline
                  // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  label="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                  sx={{ height: "150px" }}
                />
              </FormControl>{" "}
            </MDBox>
            <MDBox mb={2}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ height: "150px", marginBottom: "20px" }}
              >
                <InputLabel htmlFor="standard-adornment-amount">Long Description</InputLabel>
                <Input
                  id="standard-adornment-amount"
                  multiline
                  label="Long Description"
                  onChange={(e) => {
                    setLongDesc(e.target.value);
                  }}
                  value={long_desc}
                  sx={{ height: "150px" }}
                />
              </FormControl>{" "}
            </MDBox>
            <MDBox
              display="flex"
              alignItems="center"
              ml={1}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* <Checkbox /> */}
              <MDBox mb={2}>
                <label>Upload Photo</label> <br />
                <FileBase64
                  type="file"
                  multiple={false}
                  className="hi"
                  onDone={({ base64 }) => setProjectImage(base64)}
                  style={{
                    maxWidth: "100%",
                    minWidth: "100%",
                    width: "100%",
                    height: "210px",
                    border: "1px solid black",
                    backgroundColor: "red",
                  }}
                />
                {/* <FileUploader
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
                    // console.log(e);
                  }}
                  name="file"
                  maxSize={2}
                  types={fileTypes}
                /> */}
              </MDBox>
              <MDBox mb={2}>
                <label>Upload Photo</label> <br />
                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setProjectImage2(base64)}
                />
                {/* <FileUploader
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
                /> */}
              </MDBox>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={onSubmit}>
                Create
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default Cover;
