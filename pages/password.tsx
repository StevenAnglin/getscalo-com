import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { ArrowUpRight, Check } from "lucide-react";

export default function Password() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    setEmailStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setEmailStatus(res.ok ? "success" : "error");
    } catch {
      setEmailStatus("error");
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: value }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[var(--scalo-bg-0)] flex flex-col items-center justify-center overflow-hidden px-6">

      {/* Ember glow — center */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-[var(--scalo-ember)]/[0.04] blur-[120px]" />
      </div>

      {/* Concentric rings — top right */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px]">
        <div className="absolute inset-0 rounded-full border border-[var(--scalo-cream)]/[0.03]" />
        <div className="absolute inset-[100px] rounded-full border border-[var(--scalo-cream)]/[0.04]" />
        <div className="absolute inset-[200px] rounded-full border border-[var(--scalo-ember)]/[0.10]" />
        <div className="absolute inset-[310px] rounded-full border border-[var(--scalo-ember)]/[0.07] bg-[var(--scalo-ember)]/[0.02]" />
      </div>

      {/* Grain */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative w-full max-w-sm text-center">

        {/* Wordmark */}
        <div className="text-[var(--scalo-cream)] text-2xl font-semibold tracking-tight mb-10">
          scalo.
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--scalo-border-strong)] bg-[var(--scalo-bg-2)]/60 backdrop-blur-sm px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--scalo-ember)] shrink-0 pulse-dot" />
          <span className="text-[10px] font-medium tracking-widest text-[var(--scalo-fg-2)] uppercase">
            Private preview
          </span>
        </div>

        <h1 className="text-2xl font-medium text-[var(--scalo-cream)] tracking-tight mb-2">
          Exclusive access only.
        </h1>
        <p className="text-sm text-[var(--scalo-fg-3)] mb-10">
          Enter your access code to continue.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            placeholder="Access code"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            autoFocus
            className={`w-full h-12 rounded-xl bg-[var(--scalo-bg-2)] border px-4 text-sm text-[var(--scalo-cream)] placeholder:text-[var(--scalo-fg-3)] outline-none transition-colors ${
              error
                ? "border-red-500/60 focus:border-red-500"
                : "border-[var(--scalo-border-strong)] focus:border-[var(--scalo-ember)]"
            }`}
          />

          {error && (
            <p className="text-xs text-red-400 text-left -mt-1">
              Incorrect access code. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !value}
            className="inline-flex items-center justify-center gap-1.5 h-12 rounded-xl bg-[var(--scalo-ember)] hover:bg-[var(--scalo-ember)]/90 text-[var(--scalo-bg-0)] text-sm font-medium transition-colors btn-press disabled:opacity-40 disabled:pointer-events-none shadow-[0_0_32px_rgba(255,107,53,0.25)]"
          >
            {loading ? "Unlocking…" : <>Enter <ArrowUpRight className="w-4 h-4" /></>}
          </button>
        </form>

        {/* Divider */}
        <div className="mt-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-[var(--scalo-border-hairline)]" />
          <span className="text-[10px] text-[var(--scalo-fg-3)] whitespace-nowrap tracking-wide uppercase">
            or get notified when we launch
          </span>
          <div className="h-px flex-1 bg-[var(--scalo-border-hairline)]" />
        </div>

        {/* Email signup */}
        {emailStatus === "success" ? (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--scalo-fg-2)]">
            <Check className="w-4 h-4 text-[var(--scalo-ember)] shrink-0" />
            You&apos;re on the list.
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="mt-4 flex flex-col lg:flex-row gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailStatus("idle"); }}
              required
              className="w-full lg:flex-1 h-12 rounded-xl bg-[var(--scalo-bg-2)] border border-[var(--scalo-border-strong)] px-4 text-sm text-[var(--scalo-cream)] placeholder:text-[var(--scalo-fg-3)] outline-none transition-colors focus:border-[var(--scalo-ember)]"
            />
            <button
              type="submit"
              disabled={emailStatus === "loading" || !email}
              className="h-12 px-5 rounded-xl bg-[var(--scalo-cream)] hover:bg-[var(--scalo-cream)]/90 text-[var(--scalo-bg-0)] text-sm font-medium transition-colors btn-press disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap"
            >
              {emailStatus === "loading" ? "Saving…" : "Notify me"}
            </button>
            {emailStatus === "error" && (
              <p className="text-xs text-red-400 lg:hidden -mt-1">Something went wrong. Try again.</p>
            )}
          </form>
        )}
        {emailStatus === "error" && (
          <p className="text-xs text-red-400 hidden lg:block mt-1">Something went wrong. Try again.</p>
        )}
      </div>
    </div>
  );
}
