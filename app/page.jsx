export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ===================== */}
      {/* HERO SECTION */}
      {/* ===================== */}
      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="text-center max-w-xl">

          {/* LOGO */}
          <img
            src="/kngo-logo.png"
            alt="KNGO Logo"
            className="mx-auto mb-8 w-40 md:w-48"
          />

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            WIN BIG WITH SKILL
          </h1>

          {/* SUBTEXT */}
          <p className="text-zinc-400 mb-8">
            Skill-based football competitions.<br />
            Closest entry wins.
          </p>

          {/* CTA */}
          <button className="bg-green-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition">
            ENTER LIVE COMPETITION
          </button>

        </div>
      </section>

      {/* ===================== */}
      {/* FEATURED COMPETITION */}
      {/* ===================== */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Competition
          </h2>

          <div className="bg-zinc-800 rounded-2xl p-6 grid md:grid-cols-2 gap-8 items-center">

            {/* IMAGE */}
            <div className="h-64 bg-black rounded-xl flex items-center justify-center text-zinc-500">
              Competition Image
            </div>

            {/* DETAILS */}
            <div>
              <h3 className="text-4xl font-extrabold mb-4">
                €50,000 CASH PRIZE
              </h3>

              <p className="text-zinc-400 mb-4">
                Skill-based football competition
