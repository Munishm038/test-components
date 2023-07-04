import React from "react";
import ReactDOM from "react-dom";
import { HomeScreen } from "./Screens/Home";
import App from "./App";
import { Login } from "./Login.web";
import LayoutWeb from "./layout/Layout.web";
import { Box } from "@material-ui/core";
import UserProfile from "./Cards/UserProfile";
import UserInfo from "./Cards/UserInfo";
import OrgInfo from "./Cards/OrgInfo";
import Activity from "./Cards/Activity";
import Achievements from "./Cards/Achievements";
// import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

ReactDOM.render(
  <div>
    <p className="bg-red-400 text-green-400">TEST</p>
    {/* <HomeScreen /> */}
    {/* <Box width={"100%"} height={"100%"} display="flex" flexDirection={"column"}>
    <LayoutWeb>
      <UserProfile />
      <UserInfo />
      <OrgInfo />
      <Activity />
      <Achievements />
    </LayoutWeb>
  </Box> */}
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
