import React, { useState, useMemo, useEffect } from 'react';
import { Lancamento } from '../../types/dashboard';
import { MOCK_LANCAMENTOS_INICIAIS, calcularMetricasDashboard } from '../../data/mockLancamentos';
import { DashboardHeader } from './DashboardHeader';
import { Bloco1QuantoTenho } from './Bloco1QuantoTenho';
import { Bloco2Movimentacoes } from './Bloco2Movimentacoes';
import { Bloco3PfVsPj } from './Bloco3PfVsPj';
import { ModalNovoLancamento } from './ModalNovoLancamento';

interface DashboardPageProps {
  onVoltarParaFolder: () => void;
}

const STORAGE_KEY = 'solimoes_academic_dashboard_lancamentos_v2';
const STORAGE_RESERVA_KEY = 'solimoes_academic_dashboard_reserva_v2';

export const DashboardPage: React.FC<DashboardPageProps> = ({ onVoltarParaFolder }) => {
  // Inicialização zerada por padrão (conforme solicitado para apresentação acadêmica)
  const [lancamentos, setLancamentos] = useState<Lancamento[]>(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY);
      if (salvo !== null) {
        const parsed = JSON.parse(salvo);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Erro ao ler localStorage', e);
    }
    return []; // Inicia completamente sem nenhum valor
  });

  const [reservaEmergenciaPJ, setReservaEmergenciaPJ] = useState<number>(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_RESERVA_KEY);
      if (salvo !== null) {
        const num = parseFloat(salvo);
        if (!isNaN(num) && num >= 0) return num;
      }
    } catch {
      // ignore
    }
    return 0; // Inicia sem reserva alocada
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sincronizar lançamentos com localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lancamentos));
    } catch (e) {
      console.error('Erro ao salvar no localStorage', e);
    }
  }, [lancamentos]);

  // Sincronizar reserva com localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_RESERVA_KEY, String(reservaEmergenciaPJ));
    } catch (e) {
      console.error('Erro ao salvar reserva no localStorage', e);
    }
  }, [reservaEmergenciaPJ]);

  // Recálculo dinâmico e transparente de todas as métricas dos 3 blocos
  const metricas = useMemo(() => {
    return calcularMetricasDashboard(lancamentos, 0, reservaEmergenciaPJ);
  }, [lancamentos, reservaEmergenciaPJ]);

  // Adicionar novo lançamento
  const handleSalvarNovoLancamento = (novo: Omit<Lancamento, 'id'>) => {
    const novoItem: Lancamento = {
      ...novo,
      id: `lan-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    };
    setLancamentos((prev) => [novoItem, ...prev]);
  };

  // Excluir lançamento individual
  const handleExcluirLancamento = (id: string) => {
    setLancamentos((prev) => prev.filter((item) => item.id !== id));
  };

  // Carregar dados de exemplo acadêmico completo para demonstração
  const handleCarregarExemplo = () => {
    setLancamentos(MOCK_LANCAMENTOS_INICIAIS);
    setReservaEmergenciaPJ(18000);
  };

  // Zerar painel e começar completamente do zero
  const handleZerarTudo = () => {
    if (window.confirm('Deseja zerar todos os lançamentos e valores do painel?')) {
      setLancamentos([]);
      setReservaEmergenciaPJ(0);
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_RESERVA_KEY);
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050e1d] text-slate-100 flex flex-col font-sans">
      
      {/* Header do Dashboard */}
      <DashboardHeader
        onVoltarParaFolder={onVoltarParaFolder}
        onNovoLancamento={() => setIsModalOpen(true)}
        onCarregarExemplo={handleCarregarExemplo}
        onZerarTudo={handleZerarTudo}
        totalLancamentos={lancamentos.length}
      />

      {/* Conteúdo Principal dos 3 Blocos */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 w-full">
        
        {/* Banner Informativo Acadêmico */}
        <div className="p-4 rounded-2xl bg-[#0b2142]/70 border border-blue-500/20 text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
          <div>
            <span className="font-bold text-white block">
              🎓 Painel Interativo de Gestão Financeira • Trabalho Acadêmico
            </span>
            <span className="text-slate-400 text-xs">
              {lancamentos.length === 0 ? (
                'O painel começa sem nenhum valor para você inserir suas contas e acompanhar o cálculo de cada bloco passo a passo.'
              ) : (
                `Exibindo ${lancamentos.length} lançamento(s). Todos os 3 blocos reagem instantaneamente a cada inclusão ou exclusão.`
              )}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500/30 transition-colors whitespace-nowrap cursor-pointer"
            >
              + Adicionar Movimentação
            </button>
          </div>
        </div>

        {/* 🟦 BLOCO 1 — QUANTO TENHO? */}
        <Bloco1QuantoTenho 
          metricas={metricas}
          reservaEmergenciaPJ={reservaEmergenciaPJ}
          onAlterarReserva={setReservaEmergenciaPJ}
        />

        {/* 🟩 BLOCO 2 — DE ONDE VEIO / PARA ONDE FOI? */}
        <Bloco2Movimentacoes
          lancamentos={lancamentos}
          onAdicionarClick={() => setIsModalOpen(true)}
          onExcluirLancamento={handleExcluirLancamento}
          onCarregarExemplo={handleCarregarExemplo}
          onZerarLancamentos={handleZerarTudo}
        />

        {/* 🟨 BLOCO 3 — PF × PJ */}
        <Bloco3PfVsPj metricas={metricas} />

      </main>

      {/* Footer simples do Dashboard */}
      <footer className="py-6 border-t border-white/5 text-center text-xs text-slate-500">
        Solimões Consultoria Empresarial • Dashboard Financeiro Controle PF × PJ • Trabalho Acadêmico
      </footer>

      {/* Modal de Novo Lançamento */}
      <ModalNovoLancamento
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSalvar={handleSalvarNovoLancamento}
      />

    </div>
  );
};
