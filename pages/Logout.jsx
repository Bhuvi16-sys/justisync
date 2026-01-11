import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Clear any stored tokens or user data
    // localStorage.removeItem("token");
    // localStorage.removeItem("userRole");

    // 2. Simulate a brief delay for user experience (optional)
    const timer = setTimeout(() => {
      // 3. Redirect to the Login Page
      navigate("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-mesh min-h-screen flex flex-col justify-center items-center text-white">
      {/* Glass Card for the Logout Message */}
      <div className="glass-card p-10 flex flex-col items-center max-w-sm text-center">
        
        {/* Animated Spinner or Icon */}
        <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-6"></div>
        
        <h2 className="text-2xl font-bold mb-2">Signing Out...</h2>
        <p className="text-gray-400 text-sm">
          Securely clearing your session. See you soon!
        </p>
      </div>
    </div>
  );
}