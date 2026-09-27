import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { shopSearch } from "@/data/search";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a real email so we know where to write.");
      return;
    }
    localStorage.setItem("lullora-news", email);
    setError("");
    setDone(true);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="rounded-panel bg-sand px-6 py-10 md:px-12">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Notes from the nursery</h2>
          <p className="mt-2 text-sm text-bark/80">
            A short letter when something new arrives. No weekly noise.
          </p>
          {done ? (
            <p className="mt-6 text-sm font-medium text-ink">You’re on the list. We’ll write when it’s worth it.</p>
          ) : (
            <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="news-email">
                Email
              </label>
              <input
                id="news-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="h-12 flex-1 rounded-full border border-line bg-paper px-5 text-base outline-none focus:border-cocoa"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-bark px-6 text-sm font-medium text-ivory hover:bg-ink"
              >
                Join
              </button>
            </form>
          )}
          {error && <p className="mt-2 text-sm text-bark">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export function FooterPanel() {
  return (
    <div className="relative rounded-panel bg-sand px-6 pt-16 pb-10 md:px-10">
      <div className="absolute top-0 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper md:left-16 md:translate-x-0">
        <span className="text-center font-display text-xl leading-none text-bark">
          L
          <span className="mt-1 block font-sans text-xs tracking-widest text-mist">LULLORA</span>
        </span>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-bark">
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" /> hello@lullora.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" /> +1 (800) 555-0148
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" /> Mon–Sat, 9 to 6
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink">The house</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/about" hash="story" className="text-bark hover:text-ink">
                Our story
              </Link>
            </li>
            <li>
              <Link to="/about" hash="shipping" className="text-bark hover:text-ink">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/about" hash="returns" className="text-bark hover:text-ink">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/journal" className="text-bark hover:text-ink">
                Journal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <FooterShop label="New arrivals" search={{ sort: "new" }} />
            <FooterShop label="Clothing" search={{ cat: "clothing" }} />
            <FooterShop label="Toys" search={{ cat: "toys" }} />
            <FooterShop label="Strollers" search={{ cat: "strollers" }} />
            <FooterShop label="Feeding" search={{ cat: "feeding" }} />
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink">At ease</h3>
          <ul className="mt-3 space-y-3 text-sm text-bark">
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4" /> Secure demo checkout
            </li>
            <li className="flex items-center gap-2">
              <Truck className="size-4" /> Free shipping over $75
            </li>
            <li className="flex items-center gap-2">
              <RotateCcw className="size-4" /> 30-day returns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FooterShop({ label, search }: { label: string; search: { sort?: "new"; cat?: string } }) {
  return (
    <li>
      <Link to="/shop" search={shopSearch(search)} className="text-bark hover:text-ink">
        {label}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="mt-8 border-t border-transparent">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6">
        <FooterPanel />
        <p className="mt-6 text-center text-xs text-mist">© 2026 Lullora. Quiet things for early days.</p>
      </div>
    </footer>
  );
}
