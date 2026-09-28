/**
 * The gradient field that sits behind everything. This is what the .glass
 * surfaces refract — over a flat background, backdrop-filter renders nothing
 * visible, so the glass only reads as glass because this layer exists.
 *
 * Pure CSS, no client JS: three blurred orbs, a faint technical grid, grain.
 */
export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Faint engineering grid, faded out toward the edges. */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, #000 10%, transparent 70%)",
        }}
      />

      {/* Orbs. Kept in the upper half so the gradient reads as a horizon
          glow behind the hero rather than a wash over the whole page. */}
      <div
        className="aura-blob animate-drift left-[-10%] top-[-18%] h-[38rem] w-[38rem]"
        style={{ background: "var(--aura-1)", ["--dur" as string]: "30s" }}
      />
      <div
        className="aura-blob animate-drift right-[-12%] top-[-8%] h-[32rem] w-[32rem]"
        style={{
          background: "var(--aura-2)",
          ["--dur" as string]: "38s",
          ["--d" as string]: "-6s",
        }}
      />
      <div
        className="aura-blob animate-drift left-[38%] top-[22%] h-[26rem] w-[26rem]"
        style={{
          background: "var(--aura-3)",
          ["--dur" as string]: "34s",
          ["--d" as string]: "-14s",
        }}
      />
    </div>
  );
}
