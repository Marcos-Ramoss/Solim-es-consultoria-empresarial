import React, { useState } from 'react';
import {
  Calculator,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Layers,
  Database
} from 'lucide-react';

interface SimuladorFinanceiroProps {
  onIrParaDashboard?: () => void;
}

export const SimuladorFinanceiro: React.FC<SimuladorFinanceiroProps> = ({ onIrParaDashboard }) => {
  // Estados para cálculo de Reserva de Emergência
  const [custoFixoMensal, setCustoFixoMensal] = useState<number>(15000);
  const [reservaAtual, setReservaAtual] = useState<number>(20000);

  // Cálculos baseados nas regras do folder
  // 1. Reserva de Emergência: 3 a 6 meses do custo fixo
  const reservaMinima3Meses = custoFixoMensal * 3;
  const reservaIdeal6Meses = custoFixoMensal * 6;
  const mesesCobertos = custoFixoMensal > 0 ? (reservaAtual / custoFixoMensal) : 0;
  const percentualBlindagem = Math.min(100, Math.round((reservaAtual / reservaIdeal6Meses) * 100));

  // 2. Capital de Giro para modelo 100% à vista: 1 mês de giro operacional para cobertura mensal
  const capitalDeGiroSugerido = custoFixoMensal;

  // Formatador de Moeda BRL
  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(valor);
  };

  const getStatusBlindagem = () => {
    if (mesesCobertos < 1) {
      return {
        label: 'Alerta Crítico: Sem Reserva Suficiente',
        cor: 'text-red-400 bg-red-500/10 border-red-500/30',
        descricao: 'Sua empresa está vulnerável a qualquer oscilação de faturamento ou quebra de máquina.',
      };
    }
    if (mesesCobertos < 3) {
      return {
        label: 'Em Formação: Menos de 3 Meses',
        cor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
        descricao: 'Você já deu os primeiros passos, mas ainda não atingiu a margem segura de 3 meses recomendada no folder.',
      };
    }
    if (mesesCobertos <= 6) {
      return {
        label: 'Segurança Adequada: Entre 3 e 6 Meses',
        cor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
        descricao: 'Excelente! Sua empresa tem fôlego para tomar decisões estratégicas sem pânico financeiro.',
      };
    }
    return {
      label: 'Caixa Superavitário: Acima de 6 Meses',
      cor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      descricao: 'Excelente reserva! Hora de planejar reinvestimentos com segurança ou fundos de oportunidade.',
    };
  };

  const status = getStatusBlindagem();

  return (
    <section id="simulador" className="py-20 bg-[#071326] relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Cabeçalho do Simulador */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs md:text-sm font-semibold mb-3">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Ferramenta Interativa de Diagnóstico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simulador de Reserva & Giro
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Calcule na prática as duas métricas vitais apresentadas no nosso material: a sua <strong>Reserva de Emergência (3 a 6 meses)</strong> e a estimativa de <strong>Capital de Giro</strong>.
          </p>
        </div>

        {/* Painel do Simulador */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Coluna de Entradas (Inputs) */}
          <div className="lg:col-span-6 bg-[#0b1c38] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <span>Dados da sua Empresa</span>
              </h3>
              <span className="text-xs text-slate-400">Ajuste os valores abaixo</span>
            </div>

            {/* Input 1: Custo Fixo Mensal */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor="custoFixo" className="font-semibold text-slate-200">
                  Custo Fixo Mensal (Aluguel, Salários, Contas)
                </label>
                <span className="font-bold text-amber-400 text-base">
                  {formatarMoeda(custoFixoMensal)}
                </span>
              </div>
              <input
                id="custoFixo"
                type="range"
                min={3000}
                max={200000}
                step={1000}
                value={custoFixoMensal}
                onChange={(e) => setCustoFixoMensal(Number(e.target.value))}
                className="w-full h-2.5 bg-[#050e1d] rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>R$ 3.000</span>
                <span>R$ 100.000</span>
                <span>R$ 200.000+</span>
              </div>
            </div>

            {/* Input 2: Reserva Atual Guardada */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <label htmlFor="reservaAtual" className="font-semibold text-slate-200">
                  Quanto você já possui guardado em Reserva hoje?
                </label>
                <span className="font-bold text-emerald-400 text-base">
                  {formatarMoeda(reservaAtual)}
                </span>
              </div>
              <input
                id="reservaAtual"
                type="range"
                min={0}
                max={400000}
                step={2000}
                value={reservaAtual}
                onChange={(e) => setReservaAtual(Number(e.target.value))}
                className="w-full h-2.5 bg-[#050e1d] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>R$ 0</span>
                <span>R$ 200.000</span>
                <span>R$ 400.000</span>
              </div>
            </div>

            {/* Informação Operacional: Modelo 100% À Vista */}
            <div className="p-4 rounded-2xl bg-[#071324] border border-emerald-500/20 text-xs text-slate-300 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                  ✓
                </div>
                <div>
                  <span className="font-bold text-white block text-sm">Modelo de Venda: 100% À Vista</span>
                  <span className="text-[11px] text-slate-400">Recebimento imediato no ato • Sem descasamento de prazos</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                À Vista
              </span>
            </div>

            {/* Dica da Consultoria */}
            <div className="p-4 rounded-2xl bg-[#071324] border border-amber-500/20 text-xs text-slate-300 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                <strong>Dica Solimões:</strong> Em negócios com venda 100% à vista, o capital de giro ideal corresponde a <strong>1 mês de despesas operacionais</strong> para manter pagamentos e reposição em dia com tranquilidade.
              </p>
            </div>
          </div>

          {/* Coluna de Resultados / Diagnóstico */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0e2347] via-[#091730] to-[#040c1a] rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl space-y-6">

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-black text-white">
                  Diagnóstico Financeiro
                </h3>
                <p className="text-xs text-slate-400">Recomendações com base nas Dicas de Ouro</p>
              </div>

              {/* Status Badge */}
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${status.cor}`}>
                {mesesCobertos.toFixed(1)} meses cobertos
              </span>
            </div>

            {/* Resultado 1: Reserva de Emergência */}
            <div className="p-5 rounded-2xl bg-[#061224]/80 border border-amber-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Meta da Reserva de Emergência
                </span>
                <span className="text-xs text-slate-400">3 a 6 meses de Custo Fixo</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block uppercase">Mínimo (3 Meses)</span>
                  <span className="text-base sm:text-lg font-black text-white">
                    {formatarMoeda(reservaMinima3Meses)}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <span className="text-[10px] text-amber-300 block uppercase">Ideal Seguro (6 Meses)</span>
                  <span className="text-base sm:text-lg font-black text-amber-300">
                    {formatarMoeda(reservaIdeal6Meses)}
                  </span>
                </div>
              </div>

              {/* Barra de Progresso da Reserva */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Progresso de Blindagem</span>
                  <span className="text-amber-400 font-bold">{percentualBlindagem}%</span>
                </div>
                <div className="w-full h-3 bg-[#0a182d] rounded-full overflow-hidden border border-white/10 p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${percentualBlindagem}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Resultado 2: Capital de Giro Sugerido */}
            <div className="p-5 rounded-2xl bg-[#061224]/80 border border-emerald-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Capital de Giro Recomendado
                </span>
                <span className="text-xs text-slate-400">1 mês operacional à vista</span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="text-2xl sm:text-3xl font-black text-white">
                  {formatarMoeda(capitalDeGiroSugerido)}
                </span>
                <span className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md font-semibold">
                  Venda À Vista
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Volume financeiro necessário para rodar o mês operacional sem atrasar salários, fornecedores ou contas correntes.
              </p>
            </div>

            {/* Mensagem Diagnóstica Contextual */}
            <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${status.cor}`}>
              <strong className="block font-bold mb-1">{status.label}</strong>
              {status.descricao}
            </div>

            {/* Botão de Ação para o Dashboard */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onIrParaDashboard}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-500/20 transition-all text-center cursor-pointer"
              >
                <Database className="w-5 h-5 text-slate-950" />
                <span>Acessar Painel / Dashboard</span>
              </button>
            </div>

            <div className="text-center pt-1">
              <span className="text-[11px] text-slate-400 inline-flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-amber-400" />
                <span>Banco de dados preparado para cálculo no dashboard e histórico</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
