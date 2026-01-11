import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import GlassCard from '../components/GlassCard';

export default function LawyerDashboard() {
  const clients = [
    { name: "John Doe", type: "Patent Dispute", status: "Discovery", update: "2h ago" },
    { name: "Tech Corp", type: "Merger Review", status: "Reviewing", update: "5h ago" },
    { name: "Sarah C.", type: "Liability", status: "Court Date", update: "1d ago" },
  ];

  return (
    <DashboardLayout role="Lawyer" title="Attorney Overview">
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* Top Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
           <GlassCard>
             <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "#64748b", textTransform: "uppercase" }}>Active Clients</p>
             <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#4f46e5", margin: "8px 0" }}>12</h3>
             <p style={{ fontSize: "0.8rem", color: "#16a34a", fontWeight: "bold" }}>+2 New this month</p>
           </GlassCard>
           <GlassCard>
             <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "#64748b", textTransform: "uppercase" }}>Pending Motions</p>
             <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#2563eb", margin: "8px 0" }}>05</h3>
             <p style={{ fontSize: "0.8rem", color: "#ef4444", fontWeight: "bold" }}>2 Due in 48h</p>
           </GlassCard>
           <GlassCard>
             <p style={{ fontSize: "0.75rem", fontWeight: "bold", color: "#64748b", textTransform: "uppercase" }}>Billable Hours</p>
             <h3 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e293b", margin: "8px 0" }}>34.5</h3>
           </GlassCard>
        </div>

        {/* Client List */}
        <GlassCard>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <h3 style={{ margin: 0, color: "#334155" }}>Recent Activity</h3>
            <button style={{ background: "white", border: "1px solid #cbd5e1", padding: "6px 12px", borderRadius: "8px", fontSize: "0.8rem", cursor: "pointer" }}>View All</button>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0" }}>
                <th style={{ padding: "12px" }}>Client</th>
                <th style={{ padding: "12px" }}>Type</th>
                <th style={{ padding: "12px" }}>Status</th>
                <th style={{ padding: "12px", textAlign: "right" }}>Updated</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "16px", fontWeight: "bold", color: "#1e293b" }}>{c.name}</td>
                  <td style={{ padding: "16px", color: "#475569" }}>{c.type}</td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ padding: "4px 8px", borderRadius: "4px", background: "#eff6ff", color: "#2563eb", fontSize: "0.75rem", fontWeight: "bold" }}>{c.status}</span>
                  </td>
                  <td style={{ padding: "16px", textAlign: "right", color: "#94a3b8", fontSize: "0.8rem" }}>{c.update}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>

      </div>
    </DashboardLayout>
  );
}