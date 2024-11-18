import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({
  element: Element,
}: {
  element: React.ReactElement;
}) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for authentication status by fetching `/auth-check` from the backend
    fetch("http://localhost:5500/auth-check", {
      credentials: "include",
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          throw new Error("Not authenticated!");
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
        localStorage.clear();
        navigate("/login"); // Redirect to login if not authenticated
      });
  }, [navigate]);

  // Render nothing while authentication status is being determined
  if (isAuthenticated === false) return null;

  return isAuthenticated ? Element : null;
  // If authenticated, render the protected component; if not, redirect to login happens in useEffect
};

export default ProtectedRoute;
