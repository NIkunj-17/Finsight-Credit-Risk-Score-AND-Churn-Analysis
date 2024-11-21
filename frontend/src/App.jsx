// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Admin/Home";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />
        
        {/* Admin Routes (Protected) */}
        <Route 
          path="/admin-dashboard" 
          element={<ProtectedRoute component={AdminDashboard} allowedRoles={['admin']} />} 
        />
        <Route 
          path="/employee-dashboard" 
          element={<ProtectedRoute component={EmployeeDashboard} allowedRoles={['employee']} />} 
        />
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
