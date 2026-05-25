import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Building2,
  Users,
  MapPin,
  Scale,
  FileText,
  Gavel,
  Globe,
  Building,
  FileCheck,
  DollarSign,
  BarChart3,
  ShieldCheck,
  Network,
  Briefcase,
  CheckCircle2,
  Instagram,
  Linkedin,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import garantiasImg from "@/assets/garantias.jpg";
import capitalImg from "@/assets/capital.jpg";
import governancaImg from "@/assets/governanca.jpg";
import parceirosImg from "@/assets/parceiros.jpg";
import premiattoCtaImg from "@/assets/premiatto-cta.jpg";
import logoGarantidora from "@/assets/logo-garantidora.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 10 L28 15 L28 25 L20 30 L12 25 L12 15 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="20" cy="20" r="2.5" fill="currentColor" />
  </svg>
);

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#0f1b3d] font-sans">
      {/* HERO with nav */}
      <section className="relative bg-[#0a1a3a] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(10,26,58,0.95) 0%, rgba(10,26,58,0.85) 40%, rgba(10,26,58,0.3) 70%, rgba(10,26,58,0.2) 100%), url(${heroImg})`,
          }}
        />
        <div className="relative">
          {/* Nav */}
          <nav className="max-w-[1280px] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoGarantidora} alt="Garantidora Premiatto" className="h-10 w-auto brightness-0 invert" />
            </div>
            <ul className="hidden lg:flex items-center gap-7 text-sm">
              <li className="hover:text-white/80 cursor-pointer">Institucional</li>
              <li className="flex items-center gap-1 hover:text-white/80 cursor-pointer">
                Garantias <ChevronDown className="w-3.5 h-3.5" />
              </li>
              <li className="hover:text-white/80 cursor-pointer">Premiatto Capital</li>
              <li className="hover:text-white/80 cursor-pointer">Governança</li>
              <li className="hover:text-white/80 cursor-pointer">Conteúdos</li>
              <li className="hover:text-white/80 cursor-pointer">Parceiros</li>
              <li className="hover:text-white/80 cursor-pointer">Contato</li>
            </ul>
            <button className="bg-[#2347ff] hover:bg-[#1a36cc] transition text-white text-xs font-semibold tracking-wider px-5 py-3 rounded">
              SOLICITAR ANÁLISE
            </button>
          </nav>

          {/* Hero copy */}
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] font-light">
                Estrutura, capital e segurança para operações que exigem critério e continuidade.
              </h1>
              <p className="mt-7 text-white/70 text-base max-w-md leading-relaxed">
                Atuamos na estruturação de garantias e soluções financeiras para empresas que precisam proteger contratos, fortalecer seu caixa e seguir em frente com segurança.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-[#2347ff] hover:bg-[#1a36cc] transition text-white text-xs font-semibold tracking-wider px-6 py-3.5 rounded inline-flex items-center gap-3">
                  SOLICITAR ANÁLISE <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-white/40 hover:bg-white/10 transition text-white text-xs font-semibold tracking-wider px-6 py-3.5 rounded inline-flex items-center gap-3">
                  FALAR COM ESPECIALISTA <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two intro cards */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-10 grid md:grid-cols-2 gap-6 relative z-10">
        <div className="relative rounded overflow-hidden bg-[#f4f3ee] p-8 min-h-[230px]">
          <img
            src={garantiasImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoGarantidora} alt="Garantidora Premiatto" className="h-9 w-auto" />
            </div>
            <h3 className="font-serif text-2xl text-[#0a1a3a] leading-snug max-w-sm">
              Garantias estruturadas para proteger o que sustenta o seu negócio.
            </h3>
            <a className="mt-8 inline-flex items-center gap-2 text-[#2347ff] text-xs font-semibold tracking-wider cursor-pointer">
              CONHECER GARANTIAS <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative rounded overflow-hidden bg-[#0a1a3a] text-white p-8 min-h-[230px]">
          <img
            src={capitalImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3a] via-[#0a1a3a]/90 to-transparent" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-7 h-7 text-white" />
              <span className="font-serif text-xl">
                premiatto <span className="text-[10px] tracking-[0.3em] align-middle">CAPITAL</span>
              </span>
            </div>
            <h3 className="font-serif text-2xl leading-snug max-w-sm">
              Soluções financeiras para gerar fluxo, crédito e novas oportunidades de crescimento.
            </h3>
            <a className="mt-8 inline-flex items-center gap-2 text-white text-xs font-semibold tracking-wider cursor-pointer">
              CONHECER SOLUÇÕES DE CAPITAL <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: Shield, num: "15+", label: "anos de atuação no mercado" },
            { icon: Building2, num: "2.500+", label: "operações estruturadas" },
            { icon: Users, num: "1.000+", label: "empresas atendidas" },
            { icon: MapPin, num: "Atuação", label: "em todo o território nacional" },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              <s.icon className="w-8 h-8 text-[#2347ff] stroke-[1.5] flex-shrink-0" />
              <div>
                <div className="font-serif text-2xl text-[#0a1a3a]">{s.num}</div>
                <div className="text-sm text-[#5a6478] leading-snug mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Garantias grid */}
      <section className="bg-[#f7f6f1] py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] text-[#2347ff] mb-3">
                NOSSAS SOLUÇÕES EM GARANTIAS
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0a1a3a]">
                Garantias para diferentes necessidades.
              </h2>
            </div>
            <a className="text-[#2347ff] text-xs font-semibold tracking-wider inline-flex items-center gap-2 cursor-pointer">
              VER TODAS AS GARANTIAS <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Scale, label: "Garantia Judicial" },
              { icon: FileText, label: "Garantia Contratual" },
              { icon: Gavel, label: "Garantia para Licitações" },
              { icon: Globe, label: "Garantia Aduaneira" },
              { icon: Building, label: "Garantia Imobiliária" },
              { icon: FileCheck, label: "Garantia de Parcelamento Fiscal" },
            ].map((g, i) => (
              <div
                key={i}
                className="bg-white rounded p-6 flex flex-col items-center text-center hover:shadow-md transition cursor-pointer"
              >
                <g.icon className="w-10 h-10 text-[#2347ff] stroke-[1.3] mb-5" />
                <div className="text-sm text-[#0a1a3a] leading-snug mb-3">{g.label}</div>
                <div className="w-8 h-px bg-[#2347ff]/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premiatto Capital strip */}
      <section className="bg-[#0a1a3a] text-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] text-[#5d8aff] mb-4">
                PREMIATTO CAPITAL
              </div>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Soluções financeiras sob medida para impulsionar seu negócio.
              </h2>
            </div>
            <div>
              <div className="flex justify-end mb-8">
                <a className="text-white text-xs font-semibold tracking-wider inline-flex items-center gap-2 cursor-pointer">
                  VER TODAS AS SOLUÇÕES DE CAPITAL <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { icon: DollarSign, label: "Antecipação de Recebíveis", desc: "Transforme seus recebíveis em fluxo de caixa imediato." },
                  { icon: BarChart3, label: "Capital de Giro Estruturado", desc: "Recursos para apoiar o crescimento com segurança." },
                  { icon: ShieldCheck, label: "Crédito com Garantia", desc: "Soluções de crédito com estrutura e flexibilidade." },
                  { icon: Network, label: "Operações Estruturadas", desc: "Soluções personalizadas para momentos decisivos." },
                  { icon: Briefcase, label: "Soluções Financeiras Personalizadas", desc: "Estratégia financeira de acordo com sua realidade." },
                ].map((c, i) => (
                  <div key={i}>
                    <c.icon className="w-8 h-8 text-[#5d8aff] stroke-[1.4] mb-4" />
                    <div className="font-serif text-base leading-snug mb-3">{c.label}</div>
                    <p className="text-xs text-white/60 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governança */}
      <section className="grid lg:grid-cols-2">
        <div
          className="min-h-[420px] bg-cover bg-center"
          style={{ backgroundImage: `url(${governancaImg})` }}
        />
        <div className="bg-[#f7f6f1] p-10 lg:p-16 flex flex-col justify-center">
          <div className="text-xs font-semibold tracking-[0.2em] text-[#2347ff] mb-4">
            NOSSO COMPROMISSO
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0a1a3a] leading-tight">
            Governança, análise e responsabilidade em cada operação.
          </h2>
          <p className="mt-5 text-[#5a6478] text-sm leading-relaxed max-w-md">
            Cada operação passa por um rigoroso processo de análise técnica, governança e gestão de risco para garantir segurança, transparência e continuidade.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Análise técnica criteriosa",
              "Governança e compliance",
              "Gestão de risco",
              "Acompanhamento especializado",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#0a1a3a]">
                <CheckCircle2 className="w-5 h-5 text-[#2347ff]" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Two CTAs */}
      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[260px] bg-[#f4f3ee] overflow-hidden">
          <img src={parceirosImg} alt="" className="absolute right-0 inset-y-0 h-full w-1/2 object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f3ee] via-[#f4f3ee] to-transparent" />
          <div className="relative p-10 lg:p-14 max-w-md">
            <div className="text-xs font-semibold tracking-[0.2em] text-[#2347ff] mb-4">
              PARCEIROS E AGENTES
            </div>
            <h3 className="font-serif text-2xl text-[#0a1a3a] leading-snug">
              Atue com uma estrutura sólida e conquiste novas oportunidades.
            </h3>
            <a className="mt-8 inline-flex items-center gap-2 text-[#2347ff] text-xs font-semibold tracking-wider cursor-pointer">
              QUERO SER PARCEIRO <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative min-h-[260px] bg-[#0a1a3a] text-white overflow-hidden">
          <img src={premiattoCtaImg} alt="" className="absolute right-0 inset-y-0 h-full w-1/2 object-cover opacity-90" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3a] via-[#0a1a3a] to-transparent" />
          <div className="relative p-10 lg:p-14 max-w-md">
            <div className="text-xs font-semibold tracking-[0.2em] text-[#5d8aff] mb-4">
              PREMIATTO CAPITAL
            </div>
            <h3 className="font-serif text-2xl leading-snug">
              Soluções de capital para empresas que não podem parar.
            </h3>
            <a className="mt-8 inline-flex items-center gap-2 text-white text-xs font-semibold tracking-wider cursor-pointer">
              CONHECER PREMIATTO CAPITAL <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1a3a] text-white/80 text-sm">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-9 h-9 text-white" />
              <div className="leading-tight">
                <div className="font-serif text-lg text-white">Garantidora</div>
                <div className="font-serif text-lg text-white -mt-1">Premiatto</div>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed max-w-xs">
              Estrutura, segurança e experiência para operações que exigem confiança e resultados sustentáveis.
            </p>
            <div className="flex gap-3 mt-6 text-white/70">
              <Linkedin className="w-4 h-4 cursor-pointer" />
              <Instagram className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
          {[
            {
              title: "Institucional",
              items: ["Sobre a Garantidora", "Governança", "Políticas", "Trabalhe Conosco"],
            },
            {
              title: "Garantias",
              items: ["Garantia Judicial", "Garantia Contratual", "Garantia para Licitações", "Todas as Garantias"],
            },
            {
              title: "Premiatto Capital",
              items: ["Soluções de Capital", "Antecipação de Recebíveis", "Capital de Giro", "Todas as Soluções"],
            },
            {
              title: "Conteúdos",
              items: ["Blog", "Materiais", "Notícias"],
            },
            {
              title: "Parceiros",
              items: ["Seja um Parceiro", "Área do Parceiro"],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-[#5d8aff] text-xs font-semibold tracking-wider mb-4">
                {col.title}
              </div>
              <ul className="space-y-2 text-xs text-white/70">
                {col.items.map((i) => (
                  <li key={i} className="hover:text-white cursor-pointer">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-10 grid md:grid-cols-2 gap-6 text-xs text-white/60">
          <div>
            <div className="text-[#5d8aff] font-semibold tracking-wider mb-3">Contato</div>
            <div>+55 11 3030-6200</div>
            <div>contato@garantidorapremiatto.com.br</div>
            <div className="mt-2">Av. Brigadeiro Faria Lima, 3477 — 18º andar</div>
            <div>Itaim Bibi, São Paulo — SP 04538-133</div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
            <div>© 2024 Garantidora Premiatto. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-white">Política de Privacidade</span>
              <span className="cursor-pointer hover:text-white">Termos de Uso</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
