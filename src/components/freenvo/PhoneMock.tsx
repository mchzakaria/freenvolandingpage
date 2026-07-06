export function PhoneMock() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Phone shell */}
      <div className="relative rounded-[3rem] bg-ink p-3 shadow-elevated ring-1 ring-black/10">
        <div className="overflow-hidden rounded-[2.4rem] bg-card">
          {/* Notch */}
          <div className="relative flex h-7 items-center justify-center bg-ink">
            <div className="h-5 w-24 rounded-b-2xl bg-ink" />
            <div className="absolute left-1/2 top-1.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/40" />
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-foreground">
            <span>9:41</span>
            <span className="font-display tracking-tight">freenvo</span>
            <span>•••</span>
          </div>

          {/* Content */}
          <div className="space-y-4 px-5 pb-6 pt-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Total invoiced
              </p>
              <p className="font-display text-4xl font-medium tracking-tight">
                45,230
                <span className="ml-1 text-base text-muted-foreground">MAD</span>
              </p>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] text-brand">
                <span>↑ 18.2%</span>
                <span className="text-muted-foreground">this month</span>
              </div>
            </div>

            <div className="rounded-2xl bg-brand p-4 text-brand-foreground">
              <p className="text-[10px] uppercase tracking-widest opacity-70">
                Safe to spend
              </p>
              <p className="font-display text-2xl font-medium tracking-tight">
                12,500 MAD
              </p>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-3/4 rounded-full bg-white/80" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Recent invoices
              </p>
              {[
                { name: "Atlas Studio", amount: "8,400", paid: true },
                { name: "Nour Cosmetics", amount: "3,200", paid: true },
                { name: "Riad Yasmine", amount: "1,800", paid: false },
              ].map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between rounded-xl bg-secondary px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="grid size-7 place-items-center rounded-full bg-card text-[10px] font-medium">
                      {row.name[0]}
                    </div>
                    <div>
                      <p className="text-[11px] font-medium leading-tight">
                        {row.name}
                      </p>
                      <p
                        className={`text-[9px] uppercase tracking-wider ${
                          row.paid ? "text-brand" : "text-muted-foreground"
                        }`}
                      >
                        {row.paid ? "Paid" : "Pending"}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium tabular-nums">
                    {row.amount} MAD
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -left-12 top-24 hidden rounded-2xl bg-card p-3 shadow-elevated ring-1 ring-border md:block animate-float">
        <p className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground">
          Sent via WhatsApp
        </p>
        <p className="mt-0.5 font-display text-sm">Invoice #042 → Atlas</p>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> Delivered · Read
        </div>
      </div>
      <div
        className="absolute -right-10 bottom-20 hidden rounded-2xl bg-ink p-3 text-ink-foreground shadow-elevated md:block animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <p className="text-[9px] font-medium uppercase tracking-widest opacity-60">
          AI insight
        </p>
        <p className="mt-0.5 font-display text-sm">
          Set aside 2,400 MAD for tax
        </p>
      </div>
    </div>
  );
}
