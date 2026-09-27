import { ArrowRight, ShieldCheck, TrendingUp, Calculator, BarChart3 } from 'lucide-react';

interface HeroProps {
  onIrParaDashboard?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onIrParaDashboard }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorativo com Luzes e Gradientes Sutis */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-tr from-[#0a2656]/30 via-amber-500/10 to-emerald-500/10 blur-[130px] rounded-full animate-pulse-subtle" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Badge Institucional */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2347] border border-amber-500/30 text-amber-300 text-xs md:text-sm font-medium shadow-inner shadow-amber-500/10">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Solimões Consultoria Empresarial • Gestão & Estratégia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>

          {/* Headline Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            O combustível e a proteção que o seu negócio precisa para{' '}
            <span className="text-gradient-gold">vencer amanhã</span>.
          </h1>

          {/* Frase de Impacto Emblemática do Folder */}
          <div className="relative py-2 px-4 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-transparent via-[#0f2854]/90 to-transparent p-4 rounded-2xl border-y border-amber-500/30 shadow-lg">
              <p className="text-base sm:text-xl font-bold italic tracking-wide text-amber-200">
                “Empresa forte é aquela que se planeja hoje para vencer amanhã!”
              </p>
            </div>
          </div>

          {/* Descrição orientada aos pilares do folder */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Especialistas em estruturar o seu <strong className="text-white font-semibold">Capital de Giro</strong> para manter a operação em movimento e formar a sua <strong className="text-white font-semibold">Reserva de Emergência</strong> para blindar o futuro da sua empresa.
          </p>

          {/* Ações / CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <a
              href="#simulador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calculator className="w-5 h-5 text-slate-950" />
              <span>Simulador Financeiro</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <button
              onClick={onIrParaDashboard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-[#0d2242] border border-amber-500/30 hover:bg-[#122e5a] hover:border-amber-400 transition-all hover:text-white cursor-pointer"
            >
              <BarChart3 className="w-5 h-5 text-amber-400" />
              <span>Ir para o Dashboard PF × PJ</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Cards Rápidos de Apresentação das Duas Forças do Folder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 text-left">
            {/* Card 1: Capital de Giro */}
            <a
              href="#capital-de-giro"
              className="group p-5 rounded-2xl bg-[#091936]/80 border border-emerald-500/20 hover:border-emerald-400/50 transition-all hover:bg-[#0c224a] shadow-lg shadow-black/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      O Combustível do Negócio
                    </span>
                    <span className="text-[10px] text-slate-400">→ Ver detalhes</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Capital de Giro
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-snug">
                    Recurso essencial para salários, compras, obrigações e ritmo contínuo sem atrasos.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2: Reserva de Emergência */}
            <a
              href="#reserva-de-emergencia"
              className="group p-5 rounded-2xl bg-[#091936]/80 border border-amber-500/20 hover:border-amber-400/50 transition-all hover:bg-[#0c224a] shadow-lg shadow-black/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Segurança & Tranquilidade
                    </span>
                    <span className="text-[10px] text-slate-400">→ Ver detalhes</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    Reserva de Emergência
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-snug">
                    Proteja de 3 a 6 meses do seu custo fixo para cobrir imprevistos e momentos de crise.
                  </p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
