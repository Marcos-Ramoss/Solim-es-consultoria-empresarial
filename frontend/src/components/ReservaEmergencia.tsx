import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Target, 
  Lightbulb, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle,
  Scale
} from 'lucide-react';

export const ReservaEmergencia: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'o-que-e' | 'para-que-serve' | 'dicas'>('todos');

  const paraQueServeItems = [
    {
      titulo: 'Cobre imprevistos sem comprometer o negócio',
      descricao: 'Quebras de maquinário, quedas temporárias de faturamento ou emergências tributárias.',
      icon: ShieldCheck,
    },
    {
      titulo: 'Evita endividamentos desnecessários',
      descricao: 'Elimina a dependência de cheque especial, empréstimos caros e juros abusivos.',
      icon: AlertTriangle,
    },
    {
      titulo: 'Garante tranquilidade para tomar decisões',
      descricao: 'Decida com clareza e estratégia, sem o desespero e a urgência de caixa no fim do mês.',
      icon: Scale,
    },
    {
      titulo: 'Protege o caixa em momentos de crise',
      descricao: 'Sua empresa com fôlego real para resistir a oscilações de mercado ou períodos de baixa.',
      icon: Lock,
    },
  ];

  const dicasReserva = [
    {
      titulo: 'Guarde de 3 a 6 meses do seu custo fixo',
      detalhe: 'Esse é o intervalo padrão que confere imunidade e tempo de resposta para qualquer empresa.',
      destaque: 'Regra Principal',
      color: 'border-amber-400/40 text-amber-300',
    },
    {
      titulo: 'Deixe o dinheiro em aplicações seguras e de fácil acesso',
      detalhe: 'Liquidez diária (D+0 ou D+1) em ativos de baixo risco como títulos públicos ou CDBs de liquidez.',
      destaque: 'Liquidez Diária',
      color: 'border-blue-400/40 text-blue-300',
    },
    {
      titulo: 'Não use para gastos do dia a dia',
      detalhe: 'A reserva não é caixa operacional. Custos correntes devem ser pagos pelo Capital de Giro.',
      destaque: 'Disciplina',
      color: 'border-red-400/40 text-red-300',
    },
    {
      titulo: 'Revise e fortaleça sua reserva regularmente',
      detalhe: 'Conforme sua empresa cresce e o custo fixo aumenta, o valor da reserva deve ser reajustado.',
      destaque: 'Manutenção',
      color: 'border-emerald-400/40 text-emerald-300',
    },
    {
      titulo: 'Disciplina hoje, segurança sempre!',
      detalhe: 'Poupar um percentual de cada fechamento transforma o caixa em uma fortaleza corporativa.',
      destaque: 'Mentalidade',
      color: 'border-amber-400/40 text-amber-300',
    },
  ];

  return (
    <section id="reserva-de-emergencia" className="py-20 bg-[#050e1d] relative overflow-hidden border-t border-amber-500/10">
      {/* Glow Dourado Ambiente */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs md:text-sm font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Blindagem & Proteção Financeira</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            RESERVA DE EMERGÊNCIA
          </h2>

          <p className="text-base sm:text-xl font-bold italic text-amber-300 mt-2">
            Segurança hoje, tranquilidade sempre!
          </p>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            A proteção que assegura que sua empresa continue de portas abertas e honrando seus compromissos, mesmo diante dos cenários mais imprevisíveis.
          </p>

          {/* Abas de Navegação */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'todos'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                  : 'bg-[#0b1e38] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              Visão Completa
            </button>
            <button
              onClick={() => setActiveTab('o-que-e')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'o-que-e'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                  : 'bg-[#0b1e38] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              ? O que é?
            </button>
            <button
              onClick={() => setActiveTab('para-que-serve')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'para-que-serve'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                  : 'bg-[#0b1e38] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              🎯 Para que serve?
            </button>
            <button
              onClick={() => setActiveTab('dicas')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'dicas'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                  : 'bg-[#0b1e38] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              💡 Dicas de Alocação
            </button>
          </div>
        </div>

        {/* Grade de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card: O que é? */}
          {(activeTab === 'todos' || activeTab === 'o-que-e') && (
            <div className={`${activeTab === 'todos' ? 'lg:col-span-5' : 'lg:col-span-12'} flex flex-col gap-6`}>
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12223f] to-[#0a1528] border border-amber-500/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 text-amber-400 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center font-black text-xl">
                    ?
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    O QUE É?
                  </h3>
                </div>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                  É uma quantia guardada para <strong className="text-amber-300 font-bold">imprevistos, situações de emergência</strong> ou momentos de instabilidade financeira.
                </p>

                {/* Box de Regra Fundamental dos 3 a 6 Meses */}
                <div className="mt-6 p-4 rounded-2xl bg-[#071324] border border-amber-400/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-lg shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                      Dimensão Recomendada
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      De 3 a 6 meses do custo fixo
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Descubra o valor ideal</span>
                  <a href="#simulador" className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    Calcular Minha Reserva <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Card: Para que serve? */}
          {(activeTab === 'todos' || activeTab === 'para-que-serve') && (
            <div className={`${activeTab === 'todos' ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-4`}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#091b36] border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 text-amber-400 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    PARA QUE SERVE?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {paraQueServeItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#051124]/90 border border-amber-500/15 hover:border-amber-400/40 transition-all flex items-start gap-3.5 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
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

          {/* Bloco: Dicas */}
          {(activeTab === 'todos' || activeTab === 'dicas') && (
            <div className="lg:col-span-12 mt-2">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a2347] via-[#0b1c38] to-[#0a2347] border border-amber-500/20 shadow-xl">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        DICAS DE RESERVA
                      </h3>
                      <p className="text-xs text-amber-300">
                        Como estruturar sua reserva de modo seguro e eficiente
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dicasReserva.map((dica, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-[#050e1d]/85 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border mb-2 ${dica.color}`}>
                          {dica.destaque}
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

        {/* Rodapé da Seção com o Escudo do Folder */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0d2244] via-[#122d57] to-[#0d2244] border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wide">
                RESERVA DE EMERGÊNCIA PROTEGE SEU FUTURO.
              </h4>
              <p className="text-sm font-semibold text-amber-300 italic">
                Esteja preparado para o inesperado!
              </p>
            </div>
          </div>

          <a
            href="#simulador"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/20 shrink-0"
          >
            <span>Calcular Minha Reserva</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
