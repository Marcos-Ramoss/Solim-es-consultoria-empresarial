import React from 'react';
import { MetricasDashboard } from '../../types/dashboard';
import { 
  Wallet, 
  Building2, 
  User, 
  ShieldCheck, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight, 
  Scale, 
  PieChart 
} from 'lucide-react';

interface Bloco1QuantoTenhoProps {
  metricas: MetricasDashboard;
  reservaEmergenciaPJ?: number;
  onAlterarReserva?: (novoValor: number) => void;
}

export const Bloco1QuantoTenho: React.FC<Bloco1QuantoTenhoProps> = ({ 
  metricas,
  reservaEmergenciaPJ = 0,
  onAlterarReserva
}) => {
  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  const isResultadoPositivo = metricas.resultadoMes >= 0;
  const temSaldo = metricas.saldoTotalConta > 0;
  const percentualPJ = temSaldo ? Math.round((metricas.saldoDestinadoPJ / metricas.saldoTotalConta) * 100) : 0;
  const percentualPF = temSaldo ? Math.round((metricas.saldoDestinadoPF / metricas.saldoTotalConta) * 100) : 0;

  return (
    <section className="bg-[#0b1c38]/90 rounded-3xl p-6 sm:p-8 border border-blue-500/25 shadow-2xl space-y-8 backdrop-blur-md">
      
      {/* Cabeçalho do Bloco */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-bold shadow-lg">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-extrabold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                BLOCO 1
              </span>
              <span className="text-xs text-slate-400">Visão Patrimonial & Caixa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              QUANTO TENHO?
            </h2>
          </div>
        </div>

        {/* Saldo Total em Grande Destaque */}
        <div className="bg-[#071324] px-5 py-3 rounded-2xl border border-blue-500/30 flex flex-col items-start sm:items-end w-full sm:w-auto">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
            Saldo Total Consolidado
          </span>
          <span className="text-2xl sm:text-3xl font-black text-white text-gradient-gold">
            {formatarMoeda(metricas.saldoTotalConta)}
          </span>
        </div>
      </div>

      {/* Grid: Visão Geral da Situação Financeira */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <PieChart className="w-4 h-4 text-blue-400" />
          <span>Distribuição de Saldos e Disponibilidades</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Saldo PJ */}
          <div className="p-5 rounded-2xl bg-[#061224] border border-blue-500/20 hover:border-blue-400/50 transition-all space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-blue-300 font-bold uppercase flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-400" />
                Saldo Destinado ao PJ
              </span>
              <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">Empresa</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {formatarMoeda(metricas.saldoDestinadoPJ)}
            </div>
            <p className="text-[11px] text-slate-400">
              Patrimônio líquido alocado para a operação jurídica.
            </p>
          </div>

          {/* Saldo PF */}
          <div className="p-5 rounded-2xl bg-[#061224] border border-amber-500/20 hover:border-amber-400/50 transition-all space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-amber-300 font-bold uppercase flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-400" />
                Saldo Destinado ao PF
              </span>
              <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">Pessoa Física</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {formatarMoeda(metricas.saldoDestinadoPF)}
            </div>
            <p className="text-[11px] text-slate-400">
              Recurso próprio da proprietária para subsistência pessoal.
            </p>
          </div>

          {/* Reserva de Emergência PJ */}
          <div className="p-5 rounded-2xl bg-[#061224] border border-emerald-500/20 hover:border-emerald-400/50 transition-all space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-300 font-bold uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Reserva de Emergência PJ
              </span>
              {onAlterarReserva ? (
                <button
                  type="button"
                  onClick={() => {
                    const promptVal = window.prompt(
                      'Definir valor destinado à Reserva de Emergência PJ (R$):',
                      String(reservaEmergenciaPJ || 0)
                    );
                    if (promptVal !== null) {
                      const num = parseFloat(promptVal.replace(',', '.'));
                      if (!isNaN(num) && num >= 0) {
                        onAlterarReserva(num);
                      }
                    }
                  }}
                  className="text-[10px] text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 transition-colors cursor-pointer"
                >
                  {metricas.reservaEmergenciaPJ > 0 ? 'Ajustar Reserva' : '+ Destinar'}
                </button>
              ) : (
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Blindado</span>
              )}
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-300">
              {formatarMoeda(metricas.reservaEmergenciaPJ)}
            </div>
            <p className="text-[11px] text-slate-400">
              Quantia intocável para imprevistos e crises (3 a 6 meses).
            </p>
          </div>

          {/* Valor Disponível para Despesas PJ */}
          <div className="p-5 rounded-2xl bg-[#061224] border border-white/10 hover:border-blue-400/30 transition-all space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-bold uppercase flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-blue-400" />
                Disponível Despesas PJ
              </span>
              <span className="text-[10px] text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded">Caixa Livre</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {formatarMoeda(metricas.valorDisponivelDespesasPJ)}
            </div>
            <p className="text-[11px] text-slate-400">
              Capital liberado para compras e contas sem tocar na reserva.
            </p>
          </div>

          {/* Valor Disponível PF */}
          <div className="p-5 rounded-2xl bg-[#061224] border border-white/10 hover:border-amber-400/30 transition-all space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-bold uppercase flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-400" />
                Valor Disponível PF
              </span>
              <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">Livre PF</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {formatarMoeda(metricas.valorDisponivelPF)}
            </div>
            <p className="text-[11px] text-slate-400">
              Disponível para despesas particulares e qualidade de vida.
            </p>
          </div>

          {/* Proporção Patrimonial PJ x PF */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c2347] to-[#071324] border border-blue-500/30 flex flex-col justify-between">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-300">
              <span>Proporção do Caixa</span>
              <span className="text-blue-300 font-bold">
                {temSaldo ? `${percentualPJ}% PJ • ${percentualPF}% PF` : '0% (Aguardando lançamentos)'}
              </span>
            </div>
            <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden flex my-2 border border-white/10">
              <div 
                className="bg-blue-500 h-full transition-all duration-500"
                style={{ width: `${percentualPJ}%` }}
              />
              <div 
                className="bg-amber-400 h-full transition-all duration-500"
                style={{ width: `${percentualPF}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400">
              <span className="text-blue-400">■ PJ ({formatarMoeda(metricas.saldoDestinadoPJ)})</span>
              <span className="text-amber-400">■ PF ({formatarMoeda(metricas.saldoDestinadoPF)})</span>
            </div>
          </div>

        </div>
      </div>

      {/* Indicadores do Mês */}
      <div className="pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <Scale className="w-4 h-4 text-amber-400" />
          <span>Indicadores de Fluxo do Mês (Consolidado)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Entradas do Mês */}
          <div className="p-5 rounded-2xl bg-[#061224] border border-emerald-500/25 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                Entradas do Mês
              </span>
              <span className="text-2xl font-black text-white">
                {formatarMoeda(metricas.entradasMes)}
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ArrowUpRight className="w-7 h-7" />
            </div>
          </div>

          {/* Saídas do Mês */}
          <div className="p-5 rounded-2xl bg-[#061224] border border-red-500/25 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-red-400 font-bold block mb-1">
                Saídas do Mês
              </span>
              <span className="text-2xl font-black text-white">
                {formatarMoeda(metricas.saidasMes)}
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
              <ArrowDownRight className="w-7 h-7" />
            </div>
          </div>

          {/* Resultado do Mês */}
          <div className={`p-5 rounded-2xl bg-[#061224] border ${isResultadoPositivo ? 'border-emerald-400/40' : 'border-red-400/40'} flex items-center justify-between shadow-lg`}>
            <div>
              <span className={`text-xs uppercase tracking-wider font-bold block mb-1 ${isResultadoPositivo ? 'text-emerald-400' : 'text-red-400'}`}>
                Resultado do Mês
              </span>
              <span className={`text-2xl font-black ${isResultadoPositivo ? 'text-emerald-300' : 'text-red-400'}`}>
                {formatarMoeda(metricas.resultadoMes)}
              </span>
            </div>
            <div className={`w-12 h-12 rounded-xl ${isResultadoPositivo ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-red-500/10 text-red-400 border-red-500/30'} border flex items-center justify-center font-black text-sm shrink-0`}>
              {isResultadoPositivo ? '+ LUCRO' : '- DÉFICIT'}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
