import React, { useState } from 'react';
import { 
  Star, 
  ClipboardList, 
  BarChart3, 
  PiggyBank, 
  Check, 
  ArrowRight, 
  ChevronDown
} from 'lucide-react';

export const DicasDeOuro: React.FC = () => {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  const pilares = [
    {
      id: 1,
      titulo: 'Planejamento e Disciplina Financeira',
      destaque: 'Tenha planejamento e disciplina financeira.',
      icone: ClipboardList,
      corIcone: 'bg-emerald-500 text-white',
      badgeCor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      explicacao: 'O planejamento define onde a empresa quer chegar e a disciplina garante a execução diária. Sem processos claros de conciliação e controle orçamentário, os recursos escorrem sem que os gestores percebam.',
      checkpoints: [
        'Rotina fixa de conferência bancária diária',
        'Orçamento mensal previsto versus realizado',
        'Separação inegociável entre despesas PF e PJ',
      ],
    },
    {
      id: 2,
      titulo: 'Decisões com Base em Números',
      destaque: 'Acompanhe seus indicadores e tome decisões com base em números.',
      icone: BarChart3,
      corIcone: 'bg-blue-600 text-white',
      badgeCor: 'bg-blue-100 text-blue-800 border-blue-300',
      explicacao: 'Intuição é importante, mas são os números que validam a saúde do negócio. Decidir preços, compras e investimentos com base em relatórios precisos evita prejuízos invisíveis.',
      checkpoints: [
        'DRE gerencial (Demonstrativo do Resultado)',
        'Margem de contribuição por produto/serviço',
        'Ponto de equilíbrio (Break-even point) claro',
      ],
    },
    {
      id: 3,
      titulo: 'Fortalecimento e Criação de Reservas',
      destaque: 'Separe sempre uma parte do lucro para fortalecer o seu negócio e criar reservas.',
      icone: PiggyBank,
      corIcone: 'bg-amber-500 text-slate-950',
      badgeCor: 'bg-amber-100 text-amber-900 border-amber-300',
      explicacao: 'Nem todo lucro deve ser distribuído como dividendos. Empresas sólidas destinam um percentual constante do resultado positivo para autofinanciamento e reserva estratégica.',
      checkpoints: [
        'Retenção programada de 10% a 30% do lucro líquido',
        'Aporte contínuo na Reserva de Emergência (3-6 meses)',
        'Fundo de oportunidade para compras estratégicas',
      ],
    },
  ];

  return (
    <section id="dicas-de-ouro" className="py-24 bg-[#fbf9f4] text-slate-900 relative overflow-hidden border-y border-amber-200">
      {/* Detalhes de textura e marcas d'água de gráficos */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1e3a68_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Badge "DICAS DE OURO" com estrela fiel ao folder */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-slate-950 font-black text-sm sm:text-base tracking-wider uppercase shadow-md shadow-amber-500/25 transform -rotate-1 hover:rotate-0 transition-transform">
            <Star className="w-5 h-5 fill-slate-950 text-slate-950" />
            <span>DICAS DE OURO</span>
            <Star className="w-5 h-5 fill-slate-950 text-slate-950" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091830] tracking-tight mt-5">
            Os 3 Pilares da Gestão Vencedora
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
            As diretrizes estratégicas que a <strong>Solimões Consultoria Empresarial</strong> aplica para transformar a realidade de negócios no Amazonas.
          </p>
        </div>

        {/* 3 Pilares em Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pilares.map((pilar) => {
            const Icon = pilar.icone;
            const isExpanded = expandedPillar === pilar.id;

            return (
              <div
                key={pilar.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e8dfcb] shadow-xl shadow-amber-900/5 hover:shadow-amber-900/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Ícone Circular Estilizado */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${pilar.corIcone} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      Pilar 0{pilar.id}
                    </span>
                  </div>

                  {/* Frase Forte do Folder */}
                  <p className="text-base sm:text-lg font-bold text-[#0c2242] leading-snug mb-3">
                    {pilar.destaque}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pilar.explicacao}
                  </p>
                </div>

                <div>
                  {/* Botão de Expansão / Detalhes */}
                  <button
                    onClick={() => setExpandedPillar(isExpanded ? null : pilar.id)}
                    className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c2242] hover:text-amber-600 transition-colors"
                  >
                    <span>{isExpanded ? 'Recolher pontos de ação' : 'Ver como aplicar'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Pontos de Ação Expansíveis */}
                  {isExpanded && (
                    <div className="mt-3 pt-2 space-y-2 animate-in fade-in duration-200">
                      {pilar.checkpoints.map((check, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{check}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Citação Emblemática do Folder (Banner Estilo Pincelada Azul com Aspas Verdes) */}
        <div className="relative max-w-4xl mx-auto my-12">
          <div className="bg-gradient-to-r from-[#071730] via-[#0b244d] to-[#071730] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-amber-400/40 text-center relative overflow-hidden">
            {/* Aspas Decorativas Verdes */}
            <div className="absolute top-4 left-6 text-emerald-400/30 text-7xl font-serif select-none pointer-events-none">
              “
            </div>
            <div className="absolute bottom-2 right-6 text-emerald-400/30 text-7xl font-serif select-none pointer-events-none">
              ”
            </div>

            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-300 mb-2">
              Princípio da Solimões Consultoria
            </p>

            <blockquote className="text-xl sm:text-3xl lg:text-4xl font-black italic tracking-wide text-white leading-snug drop-shadow-md">
              “EMPRESA FORTE É AQUELA QUE SE PLANEJA HOJE PARA{' '}
              <span className="text-emerald-400 underline decoration-amber-400 decoration-wavy decoration-2">
                VENCER AMANHÃ!
              </span>”
            </blockquote>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#simulador"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-lg"
              >
                <span>Diagnosticar Minha Empresa no Simulador</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
