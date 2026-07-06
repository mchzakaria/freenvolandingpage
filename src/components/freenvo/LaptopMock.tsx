import { useRef, type MouseEvent } from "react";
import dashboardScreen from "@/assets/dashboard-screen.png";

export function LaptopMock() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotY = x * 8; // deg
    const rotX = -y * 6;
    if (screenRef.current) {
      screenRef.current.style.transform = `perspective(1400px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    }
    if (imgRef.current) {
      imgRef.current.style.transform = `translate3d(${-x * 14}px, ${-y * 10}px, 0) scale(1.04)`;
    }
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(600px circle at ${
        (x + 0.5) * 100
      }% ${(y + 0.5) * 100}%, oklch(1 0 0 / 0.18), transparent 45%)`;
      glareRef.current.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    if (screenRef.current) {
      screenRef.current.style.transform =
        "perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0)";
    }
    if (imgRef.current) {
      imgRef.current.style.transform = "translate3d(0,0,0) scale(1)";
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative mx-auto w-full max-w-5xl [transform-style:preserve-3d]"
    >
      {/* Screen */}
      <div
        ref={screenRef}
        className="relative rounded-t-2xl bg-ink p-3 shadow-elevated ring-1 ring-black/30 transition-transform duration-300 ease-out will-change-transform"
      >
        <div className="relative overflow-hidden rounded-lg bg-black">
          {/* Camera notch */}
          <div className="absolute left-1/2 top-1 z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />

          {/* Parallax image */}
          <img
            ref={imgRef}
            src={dashboardScreen}
            alt="Freenvo dashboard preview"
            className="block h-auto w-full transition-transform duration-300 ease-out will-change-transform"
            loading="lazy"
          />

          {/* Glare overlay */}
          <div
            ref={glareRef}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 mix-blend-screen"
          />

          {/* Subtle scanline sheen on hover */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1200ms] ease-out group-hover:translate-x-full" />
        </div>
      </div>

      {/* Base / hinge */}
      <div className="relative mx-auto h-3 w-[103%] -translate-x-[1.5%] rounded-b-2xl bg-gradient-to-b from-ink to-[oklch(0.08_0.04_265)] shadow-elevated">
        <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-xl bg-black/40" />
      </div>
      <div className="mx-auto h-1 w-[80%] rounded-b-full bg-black/40 blur-sm transition-all duration-300 group-hover:w-[85%] group-hover:bg-black/60" />
    </div>
  );
}
