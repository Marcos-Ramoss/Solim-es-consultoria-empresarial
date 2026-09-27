import React, { useState } from 'react';
import { 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Rocket, 
  CheckCircle2, 
  Coins, 
  ArrowRight,
  RefreshCw,
  Clock
} from 'lucide-react';

export const CapitalDeGiro: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'o-que-e' | 'para-que-serve' | 'dicas'>('todos');

  const paraQueServeItems = [
    {
      titulo: 'Garante o funcionamento diário da empresa',
      descricao: 'Permite que a operação nunca pare por falta de liquidez imediata para despesas correntes.',
      icon: RefreshCw,
    },
    {
      titulo: 'Evita atrasos em pagamentos e obrigações',
      descricao: 'Protege contra multas, juros e preserva a credibilidade com fornecedores e equipe.',
      icon: Clock,
    },
    {
      titulo: 'Aproveita oportunidades de compra e investimento',
      descricao: 'Poder de compra à vista com descontos que ampliam as margens de lucro.',
      icon: Coins,
    },
    {
      titulo: 'Mantém a saúde financeira do negócio',
      descricao: 'Equilíbrio sustentável entre o ciclo de vendas e o ciclo de recebimentos.',
      icon: TrendingUp,
    },
  ];

  const dicasPraticas = [
    {
      titulo: 'Controle entradas e saídas diariamente',
      detalhe: 'Acompanhamento rigoroso de cada centavo que circula na operação.',
      tag: 'Disciplina Diária',
    },
    {
      titulo: 'Tenha um fluxo de caixa atualizado',
      detalhe: 'Visão projetada de receitas e compromissos para as próximas semanas e meses.',
      tag: 'Previsibilidade',
    },
    {
      titulo: 'Negocie prazos com fornecedores e clientes',
      detalhe: 'Sincronize o prazo médio de pagamento (PMP) com o prazo médio de recebimento (PMR).',
      tag: 'Estratégia de Ciclo',
    },
    {
      titulo: 'Evite misturar finanças pessoais e da empresa',
      detalhe: 'Defina pró-labore fixo e nunca pague contas particulares com o caixa da PJ.',
      tag: 'Regra de Ouro',
    },
    {
      titulo: 'Reinvista com planejamento',
      detalhe: 'Expansões só devem ocorrer com capital estruturado, sem asfixiar o giro diário.',
      tag: 'Crescimento Seguro',
    },
  ];

  return (
    <section id="capital-de-giro" className="py-20 bg-[#061224] relative overflow-hidden border-t border-emerald-500/10">
      {/* Luz ambiente esmeralda */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-semibold mb-3">
            <TrendingUp className="w-4 h-4" />
            <span>O Combustível do seu Negócio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CAPITAL DE GIRO
          </h2>

          <p className="text-base sm:text-xl font-bold italic text-emerald-300 mt-2">
            Mantenha sua empresa sempre em movimento!
          </p>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Sem capital de giro, até empresas lucrativas podem quebrar por falta de liquidez. Entenda os fundamentos para manter sua operação no ritmo certo.
          </p>

          {/* Abas de Navegação Rápida no Mobile/Desktop */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'todos'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                  : 'bg-[#0b1e38] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Visão Completa
            </button>
            <button
              onClick={() => setActiveTab('o-que-e')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'o-que-e'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                  : 'bg-[#0b1e38] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              ? O que é?
            </button>
            <button
              onClick={() => setActiveTab('para-que-serve')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'para-que-serve'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                  : 'bg-[#0b1e38] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              🎯 Para que serve?
            </button>
            <button
              onClick={() => setActiveTab('dicas')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'dicas'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30'
                  : 'bg-[#0b1e38] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              💡 Dicas Práticas
            </button>
          </div>
        </div>

        {/* Grade de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card Principal: O que é? */}
          {(activeTab === 'todos' || activeTab === 'o-que-e') && (
            <div className={`${activeTab === 'todos' ? 'lg:col-span-5' : 'lg:col-span-12'} flex flex-col gap-6`}>
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c2242] to-[#08172c] border border-emerald-500/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 text-emerald-400 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center font-black text-xl">
                    ?
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    O QUE É?
                  </h3>
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                  É o recurso que a empresa precisa ter disponível para{' '}
                  <strong className="text-emerald-300 font-bold">manter suas atividades diárias</strong>,
                  pagando despesas operacionais como compras, salários, contas e outras obrigações.
                </p>

                {/* Ilustração Conceitual das Moedas em Fluxo Circular */}
                <div className="mt-6 p-4 rounded-2xl bg-[#061224]/80 border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-lg shrink-0">
                    <Coins className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block">
                      Ciclo Financeiro
                    </span>
                    <span className="text-xs text-slate-300">
                      Entrada de vendas ➔ Caixa da empresa ➔ Giro operacional
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Dimensione seu giro agora</span>
                  <a href="#simulador" className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    Abrir Calculadora <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Card: Para que serve? */}
          {(activeTab === 'todos' || activeTab === 'para-que-serve') && (
            <div className={`${activeTab === 'todos' ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-4`}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#091b36] border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 text-emerald-400 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    PARA QUE SERVE?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {paraQueServeItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#051124]/90 border border-emerald-500/15 hover:border-emerald-500/40 transition-all flex items-start gap-3.5 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base leading-snug">
                          {item.titulo}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {item.descricao}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bloco: Dicas Práticas */}
          {(activeTab === 'todos' || activeTab === 'dicas') && (
            <div className="lg:col-span-12 mt-2">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a2347] via-[#081b36] to-[#0a2347] border border-amber-500/20 shadow-xl">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        DICAS DE OURO DO GIRO
                      </h3>
                      <p className="text-xs text-amber-300">
                        Boas práticas recomendadas pela Solimões Consultoria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dicasPraticas.map((dica, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-[#050e1d]/80 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
                          {dica.tag}
                        </span>
                        <h4 className="font-bold text-white text-sm sm:text-base mb-1.5">
                          {dica.titulo}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {dica.detalhe}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Rodapé da Seção com o Foguete do Folder */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0b244d] via-[#0e2d5f] to-[#0b244d] border border-emerald-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Rocket className="w-8 h-8 animate-bounce" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wide">
                CAPITAL DE GIRO MOVE SEU NEGÓCIO.
              </h4>
              <p className="text-sm font-semibold text-emerald-300 italic">
                Planeje, controle e cresça!
              </p>
            </div>
          </div>

          <a
            href="#simulador"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/20 shrink-0"
          >
            <span>Simular Capital de Giro</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
