import { Navigate } from "react-router-dom";
//import { auth } from "../backend/firebase";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import type { JSX } from "react";

//function to enforce access only to certain page when logged-in
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  //const user = auth.currentUser;

  const { user, loading } = useContext(AuthContext);

  //wait until firebase finishes checking auth
  if (loading) {
    return <div className="p-6 mx-auto text-center">Loading Dashboard Content...</div>;
  }

  //not logged-in -> redirect
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  //login -> allow access ✅
  return children;
};

export default ProtectedRoute;