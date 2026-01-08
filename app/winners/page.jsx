export default function Winners() {
  return (
    <main style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Winners</h1>
      <p style={{ marginTop: "10px", fontSize: "18px" }}>
        Real winners. Real prizes. 100% skill.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>Free Kick Challenge</h3>
          <p><strong>Winner:</strong> John D.</p>
          <p><strong>Prize:</strong> €7,500</p>
          <p><strong>Date:</strong> 12 Jan 2026</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>Top Bin Finish</h3>
          <p><strong>Winner:</strong> Sarah K.</p>
          <p><strong>Prize:</strong> €5,000</p>
          <p><strong>Date:</strong> 5 Jan 2026</p>
        </div>
      </div>
    </main>
  );
}
