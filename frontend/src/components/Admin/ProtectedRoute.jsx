// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  console.log("Token from LocalStorage:", token); // Debugging
  console.log("User Role from LocalStorage:", userRole); // Debugging

  const isAuthorized = token && allowedRoles.includes(userRole);

  return isAuthorized ? <Component /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
