import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Pages/SignIn";
import { SignUpPage } from "../Pages/SignUp";
import { LandingPage } from "../Pages/LandingPage";
import { PatientRecords } from "../Pages/PatientRecords";
import { ErrorPage } from "../Pages/ErrorPage";
import { DetailPage } from "../Pages/DetailPage";
import { EditPage } from "../Pages/EditPage";
import { PrivateRoute } from "./PrivateRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <PatientRecords />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/details/:id" element={<DetailPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
