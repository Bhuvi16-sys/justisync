import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import GlassCard from '../components/GlassCard';

export default function JudgeDashboard() {
  const hearings = [
    { time: "09:00 AM", id: "#CR20205512", name: "State v. Thompson", status: "Scheduled" },
    { time: "10:30 AM", id: "#CV20240101", name: "Doe v. Smith Corp", status: "In Progress" },
    { time: "01:00 PM", id: "#CR20230512", name: "State v. Henderson", status: "Pending" },
    { time: "02:45 PM", id: "#FM20249911", name: "Gellar Custody", status: "Confirmed" },
  ];

  return (
    <DashboardLayout role="Judge" title="Judge's Chamber">
      {/* Grid Layout Container */}
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "24px" }}>
        
        {/* LEFT COLUMN: Hearings Table */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <GlassCard style={{ minHeight: "500px" }}>
             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
               <h3 style={{ margin: 0, color: "#334155", fontSize: "1.1rem" }}>Upcoming Hearings</h3>
               <button style={{ background: "#eff6ff", color: "#2563eb", border: "none", padding: "6px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold", cursor: "pointer" }}>View All</button>
             </div>
             
             <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
               <thead>
                 <tr style={{ color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0" }}>
                   <th style={{ padding: "12px 8px" }}>Time</th>
                   <th style={{ padding: "12px" }}>Case ID</th>
                   <th style={{ padding: "12px" }}>Case Name</th>
                   <th style={{ padding: "12px" }}>Status</th>
                 </tr>
               </thead>
               <tbody style={{ fontSize: "0.9rem", color: "#475569" }}>
                 {hearings.map((h, i) => (
                   <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                     <td style={{ padding: "16px 8px", fontWeight: "bold", color: "#1e293b" }}>{h.time}</td>
                     <td style={{ padding: "16px", fontFamily: "monospace", color: "#64748b" }}>{h.id}</td>
                     <td style={{ padding: "16px", color: "#2563eb", fontWeight: "500", cursor: "pointer" }}>{h.name}</td>
                     <td style={{ padding: "16px" }}>
                       <span style={{ 
                         padding: "4px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "bold",
                         background: h.status === "Scheduled" ? "#eff6ff" : h.status === "In Progress" ? "#dcfce7" : "#f1f5f9",
                         color: h.status === "Scheduled" ? "#2563eb" : h.status === "In Progress" ? "#16a34a" : "#64748b"
                       }}>
                         {h.status}
                       </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </GlassCard>
        </div>

        {/* RIGHT COLUMN: Calendar & Tasks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* --- FIXED CALENDAR WIDGET --- */}
          <GlassCard style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px" }}>
            
            {/* Calendar Header */}
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "16px", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: "bold", color: "#1e293b" }}>January 2026</h3>
              <div style={{ display: "flex", gap: "8px" }}>
                <span style={{ fontSize: "0.8rem", color: "#94a3b8", cursor: "pointer" }}>◀</span>
                <span style={{ fontSize: "0.8rem", color: "#94a3b8", cursor: "pointer" }}>▶</span>
              </div>
            </div>

            {/* Calendar Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(7, 1fr)", 
              gap: "8px", 
              width: "100%" 
            }}>
              {/* Day Labels */}
              {['S','M','T','W','T','F','S'].map((day, i) => (
                <div key={i} style={{ 
                  textAlign: "center", 
                  fontSize: "0.7rem", 
                  fontWeight: "bold", 
                  color: "#94a3b8",
                  paddingBottom: "4px"
                }}>
                  {day}
                </div>
              ))}

              {/* Offset Days (e.g. Month starts on Thursday) */}
              {[...Array(4)].map((_, i) => <div key={`empty-${i}`} />)}

              {/* Dates */}
              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isSelected = day === 14; // Mock selected date (Hearing)
                const isToday = day === 8;     // Mock today's date
                
                return (
                  <div key={i} style={{ 
                    height: "32px",
                    width: "32px",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: "0.85rem",
                    fontWeight: isSelected || isToday ? "bold" : "normal",
                    // Colors
                    color: isSelected ? "white" : isToday ? "#2563eb" : "#475569",
                    backgroundColor: isSelected ? "#2563eb" : isToday ? "#eff6ff" : "transparent",
                    borderRadius: "50%",
                    cursor: "pointer",
                    margin: "0 auto", // Center in grid cell
                    boxShadow: isSelected ? "0 4px 6px rgba(37, 99, 235, 0.3)" : "none"
                  }}>
                    {day}
                  </div>
                );
              })}
            </div>
          </GlassCard>

          {/* Pending Tasks */}
          <GlassCard>
            <h3 style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#334155", marginBottom: "12px" }}>Action Items</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "#475569" }}>
                <input type="checkbox" style={{ accentColor: "#2563eb" }} /> Review discovery motion
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "#475569" }}>
                <input type="checkbox" style={{ accentColor: "#2563eb" }} /> Sign warrant #8821
              </li>
            </ul>
          </GlassCard>
        </div>

      </div>
    </DashboardLayout>
  );
}