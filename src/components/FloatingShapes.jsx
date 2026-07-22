const FloatingShapes = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* soft glowing blobs */}
      <div
        className="shape-blob bg-ethio-green/40 animate-float-slow"
        style={{ width: 380, height: 380, top: "-80px", left: "-90px" }}
      />
      <div
        className="shape-blob bg-ethio-gold/35 animate-float-reverse"
        style={{ width: 320, height: 320, top: "20%", right: "-100px" }}
      />
      <div
        className="shape-blob bg-ethio-green/25 animate-float-med"
        style={{ width: 260, height: 260, bottom: "-60px", left: "30%" }}
      />

      {/* background grid */}
      <div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-60" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ethio-dark/5 dark:to-ethio-dark/40" />

      {/* isometric cubes */}
      <div
        className="iso-cube hidden md:block animate-float-slow"
        style={{ top: "12%", left: "6%" }}
      >
        <span className="face front" />
        <span className="face back" />
        <span className="face right" />
        <span className="face left" />
        <span className="face top" />
        <span className="face bottom" />
      </div>

      <div
        className="iso-cube hidden lg:block animate-float-reverse"
        style={{ top: "55%", right: "8%", width: 60, height: 60 }}
      >
        <span className="face" style={{ width: 60, height: 60 }} />
        <span className="face" style={{ width: 60, height: 60 }} />
        <span className="face" style={{ width: 60, height: 60 }} />
        <span className="face" style={{ width: 60, height: 60 }} />
        <span className="face" style={{ width: 60, height: 60 }} />
        <span className="face" style={{ width: 60, height: 60 }} />
      </div>

      {/* floating chips */}
      <div
        className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full
                   bg-ethio-green/15 text-ethio-green border border-ethio-green/40
                   text-xs font-semibold animate-float-fast backdrop-blur"
        style={{ top: "70%", left: "12%" }}
      >
        <span className="w-2 h-2 rounded-full bg-ethio-green animate-pulse" />
        const pi = 3.14159;
      </div>
      <div
        className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full
                   bg-ethio-gold/15 text-ethio-gold border border-ethio-gold/40
                   text-xs font-semibold animate-float-med backdrop-blur"
        style={{ top: "30%", right: "14%" }}
      >
        printf("ሰላም 🌍");
      </div>
    </div>
  );
};

export default FloatingShapes;
