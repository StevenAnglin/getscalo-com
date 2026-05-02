import { useState, useEffect } from "react";

interface PasswordGateProps {
  password: string;
  storageKey: string;
  bypassToken?: string;
  children: React.ReactNode;
}

export default function PasswordGate({ password, storageKey, bypassToken, children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (bypassToken && params.get("token") === bypassToken) {
      sessionStorage.setItem(storageKey, "1");
      setUnlocked(true);
    } else if (sessionStorage.getItem(storageKey) === "1") {
      setUnlocked(true);
    }
    setChecked(true);
  }, [storageKey, bypassToken]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === password) {
      sessionStorage.setItem(storageKey, "1");
      setUnlocked(true);
    } else {
      setErr(true);
      setPw("");
    }
  }

  if (!checked) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16" style={{ minHeight: "calc(100svh - 72px)" }}>
      <div
        className="w-full max-w-sm rounded-3xl p-10 flex flex-col items-center gap-8"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTopColor: "rgba(255,255,255,0.14)",
          boxShadow: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 32px 64px rgba(0,0,0,0.5)",
        }}
      >
        {/* Lock icon */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
            style={{
              background: "rgba(170,255,0,0.10)",
              border: "1px solid rgba(170,255,0,0.20)",
            }}
          >
            🔒
          </div>
          <div
            className="mt-2 text-center text-[11px] font-medium tracking-[0.18em] uppercase"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Private Document
          </div>
        </div>

        <div className="text-center space-y-2">
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: "italic",
              fontSize: "22px",
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Enter passphrase
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            This document is access-controlled.
          </p>
        </div>

        <form onSubmit={submit} className="w-full flex flex-col gap-3">
          <input
            type="password"
            placeholder="Passphrase"
            value={pw}
            autoFocus
            autoComplete="current-password"
            onChange={(e) => { setPw(e.target.value); setErr(false); }}
            className="w-full rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${err ? "rgba(255,91,107,0.5)" : "rgba(255,255,255,0.08)"}`,
              fontFamily: "inherit",
              caretColor: "var(--scalo-ember)",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.18)";
              e.target.style.boxShadow = "0 0 0 3px rgba(170,255,0,0.15)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = err ? "rgba(255,91,107,0.5)" : "rgba(255,255,255,0.08)";
              e.target.style.boxShadow = "none";
            }}
          />
          {err && (
            <p className="text-center text-xs" style={{ color: "#FF8E97" }}>
              Incorrect passphrase.
            </p>
          )}
          <button
            type="submit"
            className="w-full h-12 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-opacity"
            style={{
              background: "var(--scalo-ember)",
              color: "#000",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Unlock Document →
          </button>
        </form>
      </div>
    </div>
  );
}
