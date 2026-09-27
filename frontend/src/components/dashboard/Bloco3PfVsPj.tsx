import React from 'react';
import { MetricasDashboard } from '../../types/dashboard';
import { 
  Building2, 
  User, 
  ArrowRightLeft, 
  AlertTriangle, 
  ShieldCheck,
  Coins
} from 'lucide-react';

interface Bloco3PfVsPjProps {
  metricas: MetricasDashboard;
}

export const Bloco3PfVsPj: React.FC<Bloco3PfVsPjProps> = ({ metricas }) => {
  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  const isResultadoPjPositivo = metricas.resultadoPJ >= 0;
  const isResultadoPfPositivo = metricas.resultadoPF >= 0;
  const temDespesasPfNoPj = metricas.despesasPfPagasPeloPj > 0;

  return (
    <section className="bg-[#0b1c38]/90 rounded-3xl p-6 sm:p-8 border border-amber-500/25 shadow-2xl space-y-8 backdrop-blur-md">
      
      {/* Cabeçalho do Bloco 3 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold shadow-lg">
            <ArrowRightLeft className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                BLOCO 3
              </span>
              <span className="text-xs text-slate-400">Separação Patrimonial</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              PF × PJ — EMPRESA vs PESSOA FÍSICA
            </h2>
          </div>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-[#061224] border border-amber-500/30 text-amber-300 text-xs font-semibold">
          Diretriz Solimões: Evitar confusão patrimonial
        </div>
      </div>

      {/* Comparativo Lado a Lado: PJ Empresa x PF Pessoa Física */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Painel 1: 🏢 PJ — EMPRESA */}
        <div className="rounded-3xl bg-[#07152b] border border-blue-500/30 p-6 sm:p-7 space-y-5 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-blue-400 uppercase font-extrabold tracking-wider block">
                  Pessoa Jurídica
                </span>
                <h3 className="text-xl font-bold text-white">
                  🏢 PJ — EMPRESA
                </h3>
              </div>
            </div>
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
              isResultadoPjPositivo ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/15 text-red-400 border border-red-500/30'
            }`}>
              {isResultadoPjPositivo ? 'Operação Lucrativa' : 'Prejuízo Operacional'}
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Entradas PJ:
              </span>
              <span className="font-bold text-emerald-400 text-base">
                {formatarMoeda(metricas.entradasPJ)}
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Saídas PJ (inclui contas cruzadas):
              </span>
              <span className="font-bold text-red-400 text-base">
                {formatarMoeda(metricas.saidasPJ)}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-white/10 bg-[#040e1e] px-3 rounded-xl">
              <span className="text-white font-bold">
                Resultado PJ:
              </span>
              <span className={`font-black text-lg ${isResultadoPjPositivo ? 'text-emerald-300' : 'text-red-400'}`}>
                {formatarMoeda(metricas.resultadoPJ)}
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Reserva PJ:
              </span>
              <span className="font-bold text-emerald-400 text-base">
                {formatarMoeda(metricas.reservaPJ)}
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5">
              <span className="text-slate-300 flex items-center gap-2">
                <Coins className="w-4 h-4 text-amber-400" />
                Retiradas da proprietária (Pró-labore):
              </span>
              <span className="font-bold text-amber-400 text-base">
                {formatarMoeda(metricas.retiradasProprietaria)}
              </span>
            </div>
          </div>
        </div>

        {/* Painel 2: 👤 PF — PESSOA FÍSICA */}
        <div className="rounded-3xl bg-[#07152b] border border-amber-500/30 p-6 sm:p-7 space-y-5 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-amber-400 uppercase font-extrabold tracking-wider block">
                  Pessoa Física
                </span>
                <h3 className="text-xl font-bold text-white">
                  👤 PF — PESSOA FÍSICA
                </h3>
              </div>
            </div>
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
              isResultadoPfPositivo ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/15 text-red-400 border border-red-500/30'
            }`}>
              {isResultadoPfPositivo ? 'Orçamento Positivo' : 'Déficit Pessoal'}
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Entradas PF (Pró-labore + Rendimentos):
              </span>
              <span className="font-bold text-emerald-400 text-base">
                {formatarMoeda(metricas.entradasPF)}
              </span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-white/5">
              <span className="text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Saídas PF (Pagas na conta própria):
              </span>
              <span className="font-bold text-red-400 text-base">
                {formatarMoeda(metricas.saidasPF)}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-white/10 bg-[#040e1e] px-3 rounded-xl">
              <span className="text-white font-bold">
                Resultado PF:
              </span>
              <span className={`font-black text-lg ${isResultadoPfPositivo ? 'text-emerald-300' : 'text-red-400'}`}>
                {formatarMoeda(metricas.resultadoPF)}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-slate-300 mt-2">
              <span className="text-amber-300 font-bold block mb-1">
                Orientação Financeira:
              </span>
              O ideal é que 100% dos custos particulares sejam pagos exclusivamente com as <strong>Entradas PF</strong> (Pró-labore fixado).
            </div>
          </div>
        </div>

      </div>

      {/* Subseção: ⚠️ MOVIMENTAÇÕES ENTRE PF E PJ */}
      <div className="p-6 sm:p-7 rounded-3xl bg-[#061224] border border-white/10 shadow-lg space-y-4">
        <div className="flex items-center gap-2.5">
          <ArrowRightLeft className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">
            ⚠️ Movimentações Entre PF e PJ
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* PF -> PJ */}
          <div className="p-4 rounded-2xl bg-[#081a33] border border-blue-500/20">
            <span className="text-[11px] text-slate-400 block font-semibold">
              PF → PJ (Aportes/Empréstimos):
            </span>
            <span className="text-lg font-black text-blue-300 mt-1 block">
              {formatarMoeda(metricas.movimentacaoPfParaPj)}
            </span>
            <span className="text-[10px] text-slate-400 mt-1 block">
              Dívida da empresa com o sócio
            </span>
          </div>

          {/* PJ -> PF */}
          <div className="p-4 rounded-2xl bg-[#081a33] border border-amber-500/20">
            <span className="text-[11px] text-slate-400 block font-semibold">
              PJ → PF (Pró-labore formal):
            </span>
            <span className="text-lg font-black text-amber-300 mt-1 block">
              {formatarMoeda(metricas.movimentacaoPjParaPf)}
            </span>
            <span className="text-[10px] text-slate-400 mt-1 block">
              Remuneração devida da gestão
            </span>
          </div>

          {/* Despesas PF pagas pelo PJ */}
          <div className="p-4 rounded-2xl bg-[#210f0f] border border-red-500/30">
            <span className="text-[11px] text-red-300 block font-bold">
              Despesas PF pagas pelo PJ:
            </span>
            <span className="text-lg font-black text-red-400 mt-1 block">
              {formatarMoeda(metricas.despesasPfPagasPeloPj)}
            </span>
            <span className="text-[10px] text-red-300/80 mt-1 block">
              Mistura indevida de contas
            </span>
          </div>

          {/* Despesas PJ pagas pelo PF */}
          <div className="p-4 rounded-2xl bg-[#081a33] border border-white/10">
            <span className="text-[11px] text-slate-400 block font-semibold">
              Despesas PJ pagas pelo PF:
            </span>
            <span className="text-lg font-black text-slate-200 mt-1 block">
              {formatarMoeda(metricas.despesasPjPagasPeloPf)}
            </span>
            <span className="text-[10px] text-slate-400 mt-1 block">
              Desembolsos particulares
            </span>
          </div>

        </div>
      </div>

      {/* BLOCO DE ALERTA OBRIGATÓRIO */}
      <div className={`p-6 sm:p-7 rounded-3xl border-2 transition-all ${
        temDespesasPfNoPj 
          ? 'bg-gradient-to-r from-[#291307] via-[#1c0d05] to-[#291307] border-amber-500 shadow-2xl shadow-amber-900/30'
          : 'bg-[#081f15] border-emerald-500/40 text-emerald-300'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
            temDespesasPfNoPj ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
          }`}>
            <AlertTriangle className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                temDespesasPfNoPj ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-slate-950'
              }`}>
                {temDespesasPfNoPj ? 'ALERTA DE CONFUSÃO PATRIMONIAL' : 'SITUAÇÃO REGULAR'}
              </span>
            </div>

            <p className="text-lg sm:text-xl font-black text-white">
              ⚠️ <strong className="text-amber-300">{formatarMoeda(metricas.despesasPfPagasPeloPj)}</strong> em despesas pessoais foram pagas com recursos da empresa neste mês.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              <strong>Diagnóstico da Consultoria Solimões:</strong> Pagar contas da pessoa física diretamente com a conta da pessoa jurídica compromete a apuração do lucro real, distorce o cálculo do Capital de Giro e expõe a empresa a riscos fiscais. A recomendação é centralizar a remuneração pessoal em um <strong>Pró-labore fixo</strong> transferido para a conta PF.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
