import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function DashboardLayout({ title, role, children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => navigate("/logout");

  // Menu Items
  const getMenuItems = () => {
    const common = [{ name: "Settings", icon: "⚙️" }];
    if (role === "Judge") {
      return [
        { name: "My Cases", icon: "⚖️", path: "/judge" },
        { name: "Calendar", icon: "📅", path: "/judge/calendar" },
        { name: "Dockets", icon: "📂", path: "/judge/dockets" },
        { name: "Research", icon: "🔍", path: "/judge/research" },
        ...common
      ];
    } else if (role === "Lawyer") {
      return [
        { name: "My Clients", icon: "👥", path: "/lawyer" },
        { name: "Case Files", icon: "💼", path: "/lawyer/files" },
        { name: "Hearings", icon: "🏛️", path: "/lawyer/hearings" },
        ...common
      ];
    } else { // Client
      return [
        { name: "Dashboard", icon: "🏠", path: "/client" },
        { name: "My Cases", icon: "📂", path: "/client/cases" },
        { name: "Schedule", icon: "📅", path: "/client/schedule" },
        { name: "Vault", icon: "🔒", path: "/client/vault" },
        ...common
      ];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      width: "100%",
      background: "linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 100%)", // Bluish-White Gradient
      fontFamily: "'Segoe UI', sans-serif",
      color: "#334155"
    }}>
      
      {/* --- SIDEBAR --- */}
      <aside style={{
        width: "260px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        background: "rgba(255, 255, 255, 0.4)", // Glassy Background
        backdropFilter: "blur(12px)",
        borderRight: "1px solid rgba(255, 255, 255, 0.6)",
        zIndex: 100
      }}>
        
        {/* Logo */}
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ color: "#2563eb", marginBottom: "0.5rem" }}>
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <h1 style={{ fontSize: "1.2rem", fontWeight: "800", letterSpacing: "2px", color: "#1e293b", margin: 0 }}>JUSTISYNC</h1>
          <p style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1px", color: "#64748b", marginTop: "4px", textTransform: "uppercase" }}>{role} DASHBOARD</p>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: "0 1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => item.path && navigate(item.path)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                textAlign: "left",
                // Active State Logic
                background: location.pathname === item.path ? "rgba(255, 255, 255, 0.7)" : "transparent",
                color: location.pathname === item.path ? "#2563eb" : "#475569",
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                boxShadow: location.pathname === item.path ? "0 2px 5px rgba(0,0,0,0.05)" : "none"
              }}
              onMouseEnter={(e) => {
                if(location.pathname !== item.path) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.paddingLeft = "20px"; // Hover slide effect
                }
              }}
              onMouseLeave={(e) => {
                if(location.pathname !== item.path) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.paddingLeft = "16px";
                }
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
              <span style={{ fontSize: "0.9rem" }}>{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.5)" }}>
          <button 
            onClick={handleLogout}
            style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "12px", borderRadius: "12px", border: "1px solid transparent", background: "transparent", color: "#ef4444", cursor: "pointer", fontWeight: "600" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#fef2f2"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            🚪 Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main style={{ 
        marginLeft: "260px", // Pushes content to the right of sidebar
        flex: 1, 
        padding: "2rem",
        height: "100vh",
        overflowY: "auto"
      }}>
        {/* Header */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1e293b", margin: 0 }}>{title}</h2>
            <p style={{ color: "#64748b", margin: "4px 0 0 0", fontSize: "0.9rem" }}>Welcome back, system is secure.</p>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{ textAlign: "right" }}>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "0.9rem", color: "#334155" }}>System Online</p>
              <p style={{ margin: 0, fontSize: "0.7rem", color: "#16a34a", fontWeight: "bold" }}>● CONNECTED</p>
            </div>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#e0e7ff", color: "#3730a3", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", border: "1px solid #c7d2fe" }}>
              {role[0]}
            </div>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}