import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Briefcase, CalendarClock, Clock, FileSignature, HeartHandshake, Home, Landmark, Mail, MapPin, Menu,
  Phone, Presentation, Printer, Quote, ShieldPlus, Users, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/gfk-logo.png";
import courthouse from "./assets/courthouse-tall.jpg";
import skyline from "./assets/columbia-skyline-wide.jpg";
import brick from "./assets/brick-building-wide.jpg";
import attorneys from "./assets/gfk-attorneys.jpg";

// ------------------------------------------------------------ Content (from gfklawfirm.com: home, our firm, our services,
// each service page, testimonials, location and contact pages)
const COMPANY = "Grimes, Fay & Kopp, LLC";
const ABBR = "gfk";
const END_DATE = "2026-12-03T23:59:59-06:00";
const FOUNDED = 1946;
const YEARS = new Date().getFullYear() - FOUNDED;
const EMAIL = "info@gfklawfirm.com";
const FAX = "(573) 443-2808";

const OFFICES = [
  {
    town: "Columbia", phone: "(573) 449-2969", tel: "+15734492969", street: "11 N 5th Street", city: "Columbia, MO 65201",
    map: "https://www.google.com/maps/search/?api=1&query=11+N+5th+Street+Columbia+MO+65201", note: "Downtown Columbia · main office",
  },
  {
    town: "Centralia", phone: "(573) 682-3933", tel: "+15736823933", street: "203 S Allen Street", city: "Centralia, MO 65240",
    map: "https://www.google.com/maps/search/?api=1&query=203+S+Allen+Street+Centralia+MO+65240", note: "Where the firm began in 1946",
  },
];

const NAV = [
  ["Services", "#services"],
  ["Our Firm", "#firm"],
  ["Offices", "#offices"],
  ["Contact", "#contact"],
];

const SERVICES = [
  {
    icon: Users, title: "Divorce, Custody & Adoption", short: "family law",
    text: "Client-centered, no-nonsense counsel through the most personal cases: property division, maintenance, custody built around the child's best interests, and Form 14 child support.",
    items: ["Contested & uncontested divorce", "Child custody & modifications", "Child support (Form 14)", "Paternity", "Private, agency & step-parent adoption"],
  },
  {
    icon: ShieldPlus, title: "Personal Injury", short: "personal injury",
    text: "When someone else's negligence hurts you or takes a loved one, we investigate liability and damages and push for the compensation you're entitled to, not what the insurer prefers.",
    items: ["Motor vehicle accidents", "Premises liability", "Workers' compensation", "Wrongful death"],
  },
  {
    icon: FileSignature, title: "Wills, Trusts & Estate Planning", short: "estate planning",
    text: "Plans for modest estates and substantial ones, explained in plain English so your family isn't left guessing. Three steps: consult, review drafts, sign and transfer.",
    items: ["Wills & revocable trusts", "Powers of attorney", "Beneficiary deeds", "Living wills"],
  },
  {
    icon: Landmark, title: "Estate Administration", short: "estate administration",
    text: "Decades of experience with Missouri's probate system, for families after a death and for minors or adults who need someone to manage their care or finances.",
    items: ["Probate estates", "Trust administration", "Guardianship", "Conservatorship"],
  },
  {
    icon: Briefcase, title: "Business Law", short: "business law",
    text: "Decades representing small and family-owned businesses: starting one, enforcing contracts, defending claims and collecting what your business is owed.",
    items: ["Business organization", "Contracts & enforcement", "Business defense", "Collections"],
  },
  {
    icon: Home, title: "Real Estate", short: "real estate",
    text: "For buyers, sellers, developers, landlords and tenants, from drafting and reviewing contracts to litigating contract and boundary disputes.",
    items: ["Titles & deeds", "Closing documents", "Landlord / tenant disputes", "Boundary disputes"],
  },
];

const PROMISES = [
  "One-on-one consultations to discuss your case and decide the best route forward.",
  "A smaller firm, focused on personalized service for greater peace of mind.",
  "Your attorney deals directly with you, rather than shuffling you from one person to another.",
];

const HISTORY = [
  ["1946", "Philip A. Grimes opens his own law office in Centralia, Missouri."],
  ["1948", "Grimes is elected Boone County Prosecuting Attorney and expands the practice into Columbia."],
  ["1973", "Elton W. Fay joins the firm."],
  ["2005", "Andrew C. Kopp joins the firm."],
  ["Today", "Two offices, Columbia and Centralia, serving Boone County and its neighbors."],
];

const COUNTIES = ["Boone", "Cooper", "Cole", "Callaway", "Audrain", "Randolph"];

const TESTIMONIAL = {
  quote: "I dealt with Melody as my paralegal many times during the months leading up to my case. I was extremely impressed with her attention to detail and quality of work. She was an absolute pleasure to deal with.",
  name: "Thomas",
};

// ------------------------------------------------------------ Components
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-row">
          <span className="topbar-hours"><Clock size={15} /> Mon–Fri 8–12 &amp; 1–5</span>
          <span className="topbar-phones">
            {OFFICES.map((o) => <a key={o.town} href={`tel:${o.tel}`}><span>{o.town}</span> {o.phone}</a>)}
          </span>
        </div>
      </div>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap header-row">
          <a href="#top" className="brand" aria-label="Grimes, Fay & Kopp home"><img src={logo} alt="Grimes, Fay & Kopp, LLC · Attorneys at Law" width="163" height="107" /></a>
          <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
            {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Free consultation</a>
          </nav>
          <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-photo" style={{ backgroundImage: `url(${courthouse})` }} role="img" aria-label="Columned courthouse facade in Mid-Missouri" />
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="tag"><span>Est. {FOUNDED}</span> Columbia &amp; Centralia, Missouri</p>
          <h1>Experience you can trust.</h1>
          <p className="lede">A Boone County law firm for {YEARS} years. Family law, injuries, estates, business and real estate, with one attorney who stays with you from the first meeting to the final order.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Book a free 30-minute consultation <ArrowRight size={18} /></a>
          </div>
        </div>
      </div>
      <div className="hero-offices" aria-label="Call an office">
        {OFFICES.map((o) => (
          <a key={o.town} href={`tel:${o.tel}`} className="hero-office">
            <span className="ho-town">{o.town}</span>
            <strong>{o.phone}</strong>
            <span className="ho-cta"><Phone size={14} /> Call this office</span>
          </a>
        ))}
        <div className="hero-office ho-hours">
          <span className="ho-town">Office hours</span>
          <strong>Mon–Fri</strong>
          <span>8:00–12:00 · 1:00–5:00</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  const Icon = s.icon;
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <header className="sec-head">
          <p className="eyebrow">What we handle</p>
          <h2>Six practice areas. <span className="hl">One firm</span> that knows Mid-Missouri courts.</h2>
        </header>
        <div className="svc">
          <div className="svc-tabs" role="tablist" aria-label="Practice areas">
            {SERVICES.map((x, i) => (
              <button key={x.title} type="button" role="tab" aria-selected={i === active} className={i === active ? "is-active" : ""} onClick={() => setActive(i)}>
                <span className="svc-no">{String(i + 1).padStart(2, "0")}</span>{x.title}
              </button>
            ))}
          </div>
          <article className="svc-panel" role="tabpanel">
            <Icon size={38} className="svc-icon" />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
            <a className="btn btn-dark" href="#contact">Ask about {s.short} <ArrowRight size={18} /></a>
          </article>
        </div>
        <div className="svc-mobile">
          {SERVICES.map(({ icon: I, title, text, items }, i) => (
            <details key={title} open={i === 0}>
              <summary><span className="svc-no">{String(i + 1).padStart(2, "0")}</span><I size={20} />{title}</summary>
              <p>{text}</p>
              <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="section approach" id="firm">
      <div className="wrap approach-grid">
        <figure className="attorneys">
          <img src={attorneys} alt="Attorneys of Grimes, Fay & Kopp" width="162" height="232" loading="lazy" />
        </figure>
        <div>
          <p className="eyebrow">How we work</p>
          <h2>Your attorney, <span className="hl">start to finish.</span></h2>
          <p className="approach-lede">It is our mission to provide prompt, efficient and friendly legal service. Our small-firm atmosphere lets us give each case the personal attention it deserves.</p>
          <ol className="promises">
            {PROMISES.map((p, i) => <li key={p}><span>{i + 1}</span>{p}</li>)}
          </ol>
          <div className="consult-callout">
            <CalendarClock size={26} />
            <p><strong>Complimentary 30-minute consultation.</strong> Meet an attorney in Columbia or Centralia to talk through your case.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function History() {
  return (
    <section className="history" style={{ backgroundImage: `linear-gradient(rgba(12,12,10,.86), rgba(12,12,10,.93)), url(${skyline})` }}>
      <div className="wrap">
        <header className="sec-head light">
          <p className="eyebrow">Since {FOUNDED}</p>
          <h2>Eight decades of practice in Boone County.</h2>
        </header>
        <ol className="ledger">
          {HISTORY.map(([year, text]) => (
            <li key={year}><span className="ledger-year">{year}</span><p>{text}</p></li>
          ))}
        </ol>
        <p className="history-note">Philip A. Grimes passed away in 2009. The firm still carries his name, and his standard of personal service.</p>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial" aria-label="Client testimonial">
      <div className="wrap testimonial-grid">
        <Quote size={54} className="t-mark" />
        <blockquote>
          <p>{TESTIMONIAL.quote}</p>
          <footer><strong>{TESTIMONIAL.name}</strong><span>Client testimonial, from the gfklawfirm.com testimonials page</span></footer>
        </blockquote>
      </div>
    </section>
  );
}

function Offices() {
  return (
    <section className="section offices" id="offices">
      <div className="wrap">
        <header className="sec-head">
          <p className="eyebrow">Two offices</p>
          <h2>Columbia and Centralia, <span className="hl">close to home.</span></h2>
          <p>Serving Boone, Cooper, Cole, Callaway, Audrain, Randolph and surrounding counties.</p>
        </header>
        <div className="office-grid">
          {OFFICES.map((o) => (
            <article key={o.town} className="office-card">
              <div className="office-head"><h3>{o.town}</h3><span>{o.note}</span></div>
              <a className="office-phone" href={`tel:${o.tel}`}><Phone size={20} /> {o.phone}</a>
              <p className="office-addr"><MapPin size={18} /> {o.street}, {o.city}</p>
              <a className="office-map" href={o.map} target="_blank" rel="noopener noreferrer">Directions <ArrowUpRight size={16} /></a>
            </article>
          ))}
          <article className="office-card room" style={{ backgroundImage: `linear-gradient(rgba(14,14,12,.82), rgba(14,14,12,.9)), url(${brick})` }}>
            <Presentation size={28} />
            <h3>Conference room rental</h3>
            <p>A professional space in downtown Columbia for meetings, interviews, depositions and arbitration hearings. By the hour, half day or full day, for clients and non-clients. Mon–Fri, 8–5.</p>
            <a className="office-map" href="#contact">Ask about pricing &amp; availability <ArrowRight size={16} /></a>
          </article>
        </div>
        <ul className="counties" aria-label="Counties served">
          {COUNTIES.map((c) => <li key={c}>{c}</li>)}
          <li>&amp; surrounding</li>
        </ul>
      </div>
    </section>
  );
}

function ConsultForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      setStatus(r.ok && d.success ? (d.demo ? "demo" : "sent") : "error");
    } catch { setStatus("error"); }
  }
  if (status === "sent" || status === "demo") {
    return (
      <div className="form-done" role="status">
        <h3>Thank you.</h3>
        <p>{status === "demo" ? `This concept's form isn't connected yet. Please call ${OFFICES[0].phone} or email ${EMAIL}.` : "Your request has been received. We'll call you to set up your consultation."}</p>
      </div>
    );
  }
  return (
    <form className="consult-form" onSubmit={submit}>
      <div className="form-row">
        <label>Full name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
        <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
      </div>
      <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
      <label>How can we help?
        <select value={form.service} onChange={(e) => update("service", e.target.value)}>
          <option value="">Select a practice area...</option>
          {SERVICES.map((p) => <option key={p.title}>{p.title}</option>)}
          <option>Conference room rental</option>
          <option>Something else</option>
        </select>
      </label>
      <label>Briefly describe your situation<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Please don't include confidential details here." /></label>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} aria-hidden="true" />
      {status === "error" && <p className="form-error" role="alert">That didn't go through. Please call {OFFICES[0].phone}.</p>}
      <button className="btn btn-gold" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Request my free consultation"} <ArrowRight size={18} /></button>
      <p className="form-fine">Sending this form does not create a lawyer-client relationship.</p>
    </form>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Getting started</p>
          <h2>Schedule your free consultation.</h2>
          <p>Call either office, email us, or send the form and we'll call you back during office hours.</p>
          <ul className="contact-list">
            {OFFICES.map((o) => <li key={o.town}><Phone size={18} /><div><span>{o.town}</span><a href={`tel:${o.tel}`}>{o.phone}</a></div></li>)}
            <li><Mail size={18} /><div><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
            <li><Printer size={18} /><div><span>Fax</span>{FAX}</div></li>
            <li><Clock size={18} /><div><span>Hours</span>Monday–Friday<br />8:00 a.m.–12:00 p.m. · 1:00–5:00 p.m.</div></li>
          </ul>
        </div>
        <div className="contact-card">
          <div className="card-corner" aria-hidden="true" />
          <h3><HeartHandshake size={26} /> Request a consultation</h3>
          <ConsultForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <span className="footer-logo"><img src={logo} alt="Grimes, Fay & Kopp, LLC" width="163" height="107" loading="lazy" /></span>
          <p>Serving Mid-Missouri since {FOUNDED}.</p>
        </div>
        {OFFICES.map((o) => (
          <div key={o.town}>
            <h4>{o.town}</h4>
            <p>{o.street}<br />{o.city}<br /><a href={`tel:${o.tel}`}>{o.phone}</a></p>
          </div>
        ))}
        <div>
          <h4>Reach us</h4>
          <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />Fax {FAX}<br />Mon–Fri 8–12, 1–5</p>
        </div>
      </div>
      <div className="wrap footer-base">
        <p className="disclaimer">Advertising for an attorney. This website is designed for general information only. The information presented on this site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship. The choice of a lawyer is an important decision and should not be based solely upon advertisements.</p>
        <div className="footer-line">
          <span>© {new Date().getFullYear()} {COMPANY} · Independent concept, not for official use</span>
          <StudioCredit />
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <History />
        <Testimonial />
        <Offices />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
