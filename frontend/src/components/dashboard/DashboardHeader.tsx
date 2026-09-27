import React from 'react';
import { Logo } from '../Logo';
import { ArrowLeft, Plus, BarChart3, Sparkles, RotateCcw } from 'lucide-react';

interface DashboardHeaderProps {
  onVoltarParaFolder: () => void;
  onNovoLancamento: () => void;
  onCarregarExemplo?: () => void;
  onZerarTudo?: () => void;
  totalLancamentos: number;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onVoltarParaFolder,
  onNovoLancamento,
  onCarregarExemplo,
  onZerarTudo,
  totalLancamentos,
}) => {
  return (
    <header className="bg-[#071326]/95 backdrop-blur-md border-b border-amber-500/20 sticky top-0 z-40 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo e Botão Voltar */}
          <div className="flex items-center gap-4">
            <button
              onClick={onVoltarParaFolder}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0b1c38] border border-amber-500/30 text-amber-300 hover:text-white hover:bg-[#122e5a] transition-all text-xs font-semibold cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar ao Folder</span>
            </button>

            <div className="h-6 w-px bg-white/10 hidden sm:block" />

            <Logo size="sm" showSubtitle={false} />
          </div>

          {/* Título Principal */}
          <div className="text-left md:text-center">
            <h1 className="text-lg sm:text-xl font-black text-white tracking-wide flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-amber-400" />
              <span>DASHBOARD FINANCEIRO — CONTROLE PF × PJ</span>
            </h1>
            <p className="text-[11px] text-amber-300/80 font-medium">
              Painel Interativo de Gestão Financeira • Trabalho Acadêmico
            </p>
          </div>

          {/* Botões Ação Rápida */}
          <div className="flex items-center gap-2.5">
            {totalLancamentos > 0 ? (
              <button
                onClick={onZerarTudo}
                title="Zerar todos os lançamentos para começar do zero"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#08172e] border border-white/10 text-slate-300 hover:text-red-400 hover:border-red-400/40 transition-all text-xs font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Zerar Tudo</span>
              </button>
            ) : (
              <button
                onClick={onCarregarExemplo}
                title="Preencher com exemplo demonstrativo completo"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#08172e] border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-500/10 transition-all text-xs font-semibold cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Carregar Exemplo</span>
              </button>
            )}

            <button
              onClick={onNovoLancamento}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-slate-950" />
              <span>Lançar Movimentação</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
