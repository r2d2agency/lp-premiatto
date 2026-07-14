import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  TrendingDown,
  Gauge,
  Wrench,
  Settings2,
  HeadphonesIcon,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react";
import slide1 from "@/assets/locadora/slide-1.jpg";
import slide2 from "@/assets/locadora/slide-2.jpg";
import slide3 from "@/assets/locadora/slide-3.jpg";
import slide4 from "@/assets/locadora/slide-4.jpg";
import slide5 from "@/assets/locadora/slide-5.jpg";
import zeepoInst from "@/assets/locadora/zeepo-institutional.jpg";
import product1 from "@/assets/locadora/product-1.jpg";
import product2 from "@/assets/locadora/product-2.jpg";
import product3 from "@/assets/locadora/product-3.jpg";
import logo from "@/assets/logo-garantidora.png";

export const Route = createFileRoute("/locadora")({
  head: () => ({
    meta: [
      { title: "Premiatto Locadora + Zeepo — Mobilidade elétrica para o agro" },
      {
        name: "description",
        content:
          "Parceria estratégica Premiatto Locadora e Zeepo: soluções elétricas para agronegócio e empresas. Solicite contato com um especialista.",
      },
      { property: "og:title", content: "Premiatto Locadora + Zeepo" },
      {
        property: "og:description",
        content: "Tecnologia, inovação e energia para transformar o agronegócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocadoraPage,
});

const NAVY = "#041A3B";
const CYAN = "#4FD1C5";

const SLIDES = [
  { src: slide1, alt: "Trator elétrico Zeepo em lavoura moderna" },
  { src: slide2, alt: "Equipamentos agrícolas elétricos" },
  { src: slide3, alt: "Carregadores industriais" },
  { src: slide4, alt: "Equipe técnica realizando entrega" },
  { src: slide5, alt: "Máquinas elétricas em operação" },
];

const BENEFITS = [
  { icon: Zap, label: "Tecnologia nacional" },
  { icon: TrendingDown, label: "Baixo custo operacional" },
  { icon: Gauge, label: "Alta eficiência" },
  { icon: Wrench, label: "Baixa manutenção" },
  { icon: Settings2, label: "Soluções personalizadas" },
  { icon: HeadphonesIcon, label: "Atendimento consultivo" },
];

const PRODUCTS = [
  {
    img: product1,
    name: "Utilitário elétrico agrícola",
    summary: "Veículo compacto de alta autonomia para operações no campo.",
  },
  {
    img: product2,
    name: "Trator compacto elétrico",
    summary: "Potência silenciosa com baixo custo por hora trabalhada.",
  },
  {
    img: product3,
    name: "Estação de recarga industrial",
    summary: "Infraestrutura de carregamento para frotas elétricas.",
  },
];

function ZeepoWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-semibold tracking-[0.35em] text-[color:var(--cyan)] ${className}`}
      style={{ letterSpacing: "0.3em" }}
    >
      ZEEPO
    </span>
  );
}

function PremiattoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt="Premiatto Locadora"
        className="h-8 w-auto brightness-0 invert"
      />
      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-serif text-base">premiatto</span>
        <span className="text-[9px] tracking-[0.35em] text-white/60">LOCADORA</span>
      </div>
    </div>
  );
}

function LocadoraPage() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen text-white antialiased"
      style={
        {
          background: NAVY,
          ["--navy" as string]: NAVY,
          ["--cyan" as string]: CYAN,
        } as React.CSSProperties
      }
    >
      {/* HEADER */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <PremiattoMark />
            <div className="hidden md:flex items-center gap-4 pl-5 border-l border-white/20">
              <span className="text-[10px] tracking-[0.3em] text-white/50">
                PARCEIRO OFICIAL
              </span>
              <ZeepoWordmark className="text-sm" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-9 text-sm text-white/80">
            <button onClick={() => scrollTo("parceria")} className="hover:text-white">
              Sobre a parceria
            </button>
            <button onClick={() => scrollTo("solucoes")} className="hover:text-white">
              Soluções
            </button>
            <button onClick={() => scrollTo("contato")} className="hover:text-white">
              Contato
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contato")}
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] px-5 py-3 rounded-sm text-[color:var(--navy)]"
              style={{ background: CYAN }}
            >
              SOLICITAR CONTATO
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[color:var(--navy)]/95 backdrop-blur border-t border-white/10">
            <div className="px-6 py-6 flex flex-col gap-4 text-sm">
              <button onClick={() => scrollTo("parceria")} className="text-left">
                Sobre a parceria
              </button>
              <button onClick={() => scrollTo("solucoes")} className="text-left">
                Soluções
              </button>
              <button onClick={() => scrollTo("contato")} className="text-left">
                Contato
              </button>
              <button
                onClick={() => scrollTo("contato")}
                className="mt-2 px-5 py-3 rounded-sm text-[color:var(--navy)] font-semibold text-xs tracking-[0.15em]"
                style={{ background: CYAN }}
              >
                SOLICITAR CONTATO
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 40%, rgba(79,209,197,0.08) 0%, transparent 60%), linear-gradient(180deg, #041A3B 0%, #030f26 100%)",
          }}
        />
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center w-full">
          {/* LEFT */}
          <div>
            <div
              className="text-[11px] font-semibold tracking-[0.35em] mb-8"
              style={{ color: CYAN }}
            >
              PREMIATTO LOCADORA + ZEEPO
            </div>
            <h1 className="font-serif text-[2.6rem] md:text-6xl leading-[1.05] font-light">
              Tecnologia, inovação e energia para{" "}
              <span style={{ color: CYAN }}>transformar o agronegócio.</span>
            </h1>
            <div
              className="h-px w-16 my-8"
              style={{ background: CYAN, opacity: 0.7 }}
            />
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
              A Premiatto Locadora, em parceria com a Zeepo, oferece soluções
              completas para empresas e produtores que desejam investir em
              mobilidade elétrica, eficiência operacional e sustentabilidade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contato")}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-sm text-[color:var(--navy)] font-semibold text-xs tracking-[0.15em]"
                style={{ background: CYAN }}
              >
                QUERO FALAR COM UM ESPECIALISTA
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("parceria")}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-sm border border-white/30 text-white font-semibold text-xs tracking-[0.15em] hover:bg-white/5"
              >
                CONHEÇA A PARCERIA
              </button>
            </div>
          </div>

          {/* RIGHT — carousel */}
          <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-sm overflow-hidden shadow-2xl">
            {SLIDES.map((s, i) => (
              <img
                key={i}
                src={s.src}
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                width={1600}
                height={1200}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === slide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(4,26,59,0) 60%, rgba(4,26,59,0.6) 100%)",
              }}
            />

            <button
              onClick={() =>
                setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length)
              }
              aria-label="Anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur hover:bg-black/50 text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % SLIDES.length)}
              aria-label="Próximo"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur hover:bg-black/50 text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1 rounded-full transition-all ${
                    i === slide ? "w-8" : "w-4 opacity-50"
                  }`}
                  style={{ background: CYAN }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARCERIA */}
      <section
        id="parceria"
        className="py-24 lg:py-32"
        style={{ background: "#030f26" }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div
              className="text-[11px] font-semibold tracking-[0.35em] mb-6"
              style={{ color: CYAN }}
            >
              A PARCERIA
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Uma parceria construída para o futuro.
            </h2>
            <div
              className="h-px w-16 my-8"
              style={{ background: CYAN, opacity: 0.7 }}
            />
            <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-xl">
              A união entre a solidez financeira da Premiatto Locadora e a
              tecnologia da Zeepo cria novas possibilidades para aquisição,
              locação e implantação de soluções elétricas para o agronegócio e
              empresas.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <PremiattoMark />
              <div className="h-8 w-px bg-white/20" />
              <ZeepoWordmark className="text-lg" />
            </div>
          </div>

          <div className="relative aspect-[5/6] w-full rounded-sm overflow-hidden">
            <img
              src={zeepoInst}
              alt="Zeepo — sede institucional"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(4,26,59,0.1) 40%, rgba(4,26,59,0.75) 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {BENEFITS.map((b, i) => (
              <div key={i} className="flex flex-col items-start gap-3">
                <b.icon
                  className="w-7 h-7 stroke-[1.4]"
                  style={{ color: CYAN }}
                />
                <div className="text-sm text-white/85 leading-snug">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div
                className="text-[11px] font-semibold tracking-[0.35em] mb-4"
                style={{ color: CYAN }}
              >
                LINHA ZEEPO
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light max-w-2xl">
                Conheça algumas soluções Zeepo.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <article
                key={i}
                className="group rounded-sm overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[color:var(--cyan)]/50 transition"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-xl mb-3">{p.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {p.summary}
                  </p>
                  <button
                    onClick={() => scrollTo("contato")}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em]"
                    style={{ color: CYAN }}
                  >
                    SAIBA MAIS <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(90deg, #041A3B 0%, #072250 50%, #041A3B 100%)",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight font-light">
              Quer levar inovação para sua empresa?
            </h2>
            <p className="mt-4 text-white/70">
              Nossa equipe está preparada para apresentar a melhor solução para
              sua necessidade.
            </p>
          </div>
          <button
            onClick={() => scrollTo("contato")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm text-[color:var(--navy)] font-semibold text-xs tracking-[0.15em]"
            style={{ background: CYAN }}
          >
            SOLICITAR ATENDIMENTO
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="contato" className="py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <div
              className="text-[11px] font-semibold tracking-[0.35em] mb-6"
              style={{ color: CYAN }}
            >
              FALE COM UM ESPECIALISTA
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] font-light">
              Receba uma proposta sob medida para o seu negócio.
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato para
              apresentar as melhores condições de aquisição, locação e
              implantação.
            </p>
            <div className="mt-10 space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" style={{ color: CYAN }} />
                +55 11 3030-6200
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" style={{ color: CYAN }} />
                locadora@premiatto.com.br
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" style={{ color: CYAN }} />
                São Paulo — SP
              </div>
            </div>
          </div>

          <LeadForm sent={sent} onSent={() => setSent(true)} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-14">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <PremiattoMark />
              <div className="h-8 w-px bg-white/20" />
              <ZeepoWordmark className="text-base" />
            </div>
            <p className="mt-5 text-xs text-white/50 leading-relaxed max-w-sm">
              Soluções financeiras inteligentes para aquisição de equipamentos e
              impulsionamento do agronegócio brasileiro.
            </p>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-[0.3em] text-white/50 mb-4">
              NAVEGAÇÃO
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li className="cursor-pointer hover:text-white" onClick={() => scrollTo("parceria")}>Sobre a parceria</li>
              <li className="cursor-pointer hover:text-white" onClick={() => scrollTo("solucoes")}>Soluções</li>
              <li className="cursor-pointer hover:text-white" onClick={() => scrollTo("contato")}>Contato</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-[0.3em] text-white/50 mb-4">
              REDES
            </div>
            <div className="flex gap-3 text-white/70">
              <Linkedin className="w-4 h-4 cursor-pointer hover:text-white" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 mt-10 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-wrap justify-between gap-3">
          <div>© 2026 Premiatto Locadora. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-white cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LeadForm({ sent, onSent }: { sent: boolean; onSent: () => void }) {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
    cidade: "",
    estado: "",
    mensagem: "",
    lgpd: false,
  });

  const handle = (k: string, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.lgpd) return;
    // TODO: integrar com CRM
    onSent();
  };

  if (sent) {
    return (
      <div className="border border-[color:var(--cyan)]/40 rounded-sm p-10 bg-white/[0.02]">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
          style={{ background: "rgba(79,209,197,0.15)", color: CYAN }}
        >
          <ArrowRight className="w-5 h-5" />
        </div>
        <h3 className="font-serif text-2xl mb-3">Solicitação recebida.</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Obrigado pelo interesse. Nossa equipe entrará em contato em breve
          para apresentar a melhor solução para sua operação.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-transparent border-b border-white/20 focus:border-[color:var(--cyan)] outline-none py-3 text-sm placeholder:text-white/40 transition-colors";

  return (
    <form
      onSubmit={submit}
      className="border border-white/10 rounded-sm p-8 md:p-10 bg-white/[0.02]"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          required
          className={inputCls + " md:col-span-2"}
          placeholder="Nome completo"
          value={form.nome}
          onChange={(e) => handle("nome", e.target.value)}
        />
        <input
          required
          className={inputCls}
          placeholder="Empresa"
          value={form.empresa}
          onChange={(e) => handle("empresa", e.target.value)}
        />
        <input
          required
          className={inputCls}
          placeholder="WhatsApp"
          value={form.whatsapp}
          onChange={(e) => handle("whatsapp", e.target.value)}
        />
        <input
          required
          type="email"
          className={inputCls + " md:col-span-2"}
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => handle("email", e.target.value)}
        />
        <input
          required
          className={inputCls}
          placeholder="Cidade"
          value={form.cidade}
          onChange={(e) => handle("cidade", e.target.value)}
        />
        <input
          required
          className={inputCls}
          placeholder="Estado"
          maxLength={2}
          value={form.estado}
          onChange={(e) => handle("estado", e.target.value.toUpperCase())}
        />
        <textarea
          rows={3}
          className={inputCls + " md:col-span-2 resize-none"}
          placeholder="Mensagem (opcional)"
          value={form.mensagem}
          onChange={(e) => handle("mensagem", e.target.value)}
        />
      </div>

      <label className="mt-8 flex items-start gap-3 text-xs text-white/60 cursor-pointer">
        <input
          type="checkbox"
          checked={form.lgpd}
          onChange={(e) => handle("lgpd", e.target.checked)}
          className="mt-0.5 accent-[color:var(--cyan)]"
        />
        <span>
          Autorizo o tratamento dos meus dados conforme a{" "}
          <span className="underline">Política de Privacidade</span> (LGPD).
        </span>
      </label>

      <button
        type="submit"
        disabled={!form.lgpd}
        className="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm text-[color:var(--navy)] font-semibold text-xs tracking-[0.15em] disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ background: CYAN }}
      >
        QUERO RECEBER UMA PROPOSTA
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
