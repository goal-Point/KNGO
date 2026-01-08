export default function Competitions() {
  return (
    <main style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Competitions</h1>

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
          <p>Predict where the ball makes first contact.</p>
          <p><strong>Prize:</strong> €7,500</p>
          <button style={{ marginTop: "10px" }}>Enter</button>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>Top Bin Finish</h3>
          <p>Where does the shot hit the net?</p>
          <p><strong>Prize:</strong> €5,000</p>
          <button style={{ marginTop: "10px" }}>Enter</button>
        </div>
      </div>
    </main>
  );
}
