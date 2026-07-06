import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
});

export function EarlyAccessDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("early_access_signups")
      .insert({ email: parsed.data.email.toLowerCase(), source: "hero_cta" });
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        setDone(true);
        toast.success("You're already on the list. We'll be in touch!");
        return;
      }
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setDone(true);
    toast.success("You're in! We'll email you when early access opens.");
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          setTimeout(() => {
            setDone(false);
            setEmail("");
          }, 200);
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-hairline bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl tracking-tight">
            {done ? "You're on the list" : "Get early access"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {done
              ? "Thanks for joining. We'll email you as soon as Freenvo opens up."
              : "Join 500+ freelancers waiting for Freenvo. Free during the early access period."}
          </DialogDescription>
        </DialogHeader>

        {!done && (
          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
            <label htmlFor="early-email" className="sr-only">
              Email address
            </label>
            <input
              id="early-email"
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              maxLength={255}
              className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground outline-none ring-brand/40 placeholder:text-muted-foreground focus:ring-2"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 font-display text-sm uppercase tracking-wide text-ink-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? "Joining…" : "Try for free & get early access"}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
