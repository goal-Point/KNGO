import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        {/* LOGO */}
        <div style={{ marginBottom: "30px" }}>
          <Image
            src="/kngo-logo.png"
            alt="KNGO Logo"
            width={260}
            height={260}
            priority
          />
        </div>

        {/* HEADLINE */}
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          WIN BIG WITH SKILL
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            color: "#b5b5b5",
            fontSize: "18px",
            lineHeight: "1.5",
            marginBottom: "32px",
          }}
        >
          Skill-based football competitions.
          <br />
          Closest entry wins.
        </p>

        {/* BUTTON */}
        <button
          style={{
            backgroundColor: "#22c55e",
            color: "#000",
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          ENTER LIVE COMPETITION
        </button>
      </div>
    </main>
  );
}
