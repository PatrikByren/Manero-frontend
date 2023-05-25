import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/profilecontext/UserContext';
const ProtectedRoute = ({ path, element }) => {
  const { IsSignedIn } = useUserContext();

  return !IsSignedIn ? 
  

  <Route path={path} element={element} /> : <Navigate to="/signin" />;

};

export default ProtectedRoute;


