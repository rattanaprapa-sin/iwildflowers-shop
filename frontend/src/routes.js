import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import pages/modules
import Login from './modules/auth/login';
import ChangePassword from './modules/auth/changePassword';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/change-password" element={<ChangePassword />} />
      
      {/* 404 Route */}
      <Route path="*" element={<div style={{ padding: 20 }}><h2>404 - Not Found</h2></div>} />
    </Routes>
  );
};

export default AppRoutes;
