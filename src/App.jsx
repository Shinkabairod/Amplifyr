import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import CGELayout from "layouts/cge";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="cge/*" element={<CGELayout />} />
      <Route path="/" element={<Navigate to="/cge/dashboard" replace />} />
    </Routes>
  );
};

export default App;
