import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import cgeRoutes from "routes-cge";

export default function CGELayout() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/cge") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="flex h-full w-full">
      <div className="h-full w-full">
        <Routes>
          {getRoutes(cgeRoutes)}
          <Route path="/" element={<Navigate to="/cge/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}
