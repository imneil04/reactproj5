import { Navigate } from "react-router-dom";
//import { auth } from "../backend/firebase";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import type { JSX } from "react";

//function to restrict access to certain page when logged-in
const PublicRoute = ({ children }: {children: JSX.Element }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
         //return null;
         return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="text-gray-500">Loading...</span>
            </div>
         );
    }
       
    //if logged-in user redirect
    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default PublicRoute;