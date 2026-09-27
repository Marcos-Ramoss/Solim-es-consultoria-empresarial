import React, { useState, useMemo } from 'react';
import { Lancamento } from '../../types/dashboard';
import { 
  ArrowUpDown, 
  Plus, 
  Trash2, 
  Search, 
  Filter, 
  Building2, 
  User, 
  ArrowUpRight, 
  ArrowDownRight, 
  RotateCcw,
  Tag,
  AlertTriangle,
  Sparkles
} from 'lucide-react';

interface Bloco2MovimentacoesProps {
  lancamentos: Lancamento[];
  onAdicionarClick: () => void;
  onExcluirLancamento: (id: string) => void;
  onCarregarExemplo: () => void;
  onZerarLancamentos: () => void;
}

export const Bloco2Movimentacoes: React.FC<Bloco2MovimentacoesProps> = ({
  lancamentos,
  onAdicionarClick,
  onExcluirLancamento,
  onCarregarExemplo,
  onZerarLancamentos,
}) => {
  const [busca, setBusca] = useState('');
  const [filtroClassificacao, setFiltroClassificacao] = useState<'TODOS' | 'PJ' | 'PF'>('TODOS');
  const [filtroTipo, setFiltroTipo] = useState<'TODOS' | 'ENTRADA' | 'SAIDA'>('TODOS');

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  const formatarData = (dataStr: string) => {
    try {
      const [ano, mes, dia] = dataStr.split('-');
      return `${dia}/${mes}/${ano}`;
    } catch {
      return dataStr;
    }
  };

  // Filtragem dos lançamentos
  const lancamentosFiltrados = useMemo(() => {
    return lancamentos.filter((item) => {
      const bateClassificacao = filtroClassificacao === 'TODOS' || item.classificacao === filtroClassificacao;
      const bateTipo = filtroTipo === 'TODOS' || item.tipo === filtroTipo;
      const bateBusca = 
        item.descricao.toLowerCase().includes(busca.toLowerCase()) ||
        item.categoria.toLowerCase().includes(busca.toLowerCase());
      return bateClassificacao && bateTipo && bateBusca;
    });
  }, [lancamentos, filtroClassificacao, filtroTipo, busca]);

  return (
    <section className="bg-[#0b1c38]/90 rounded-3xl p-6 sm:p-8 border border-emerald-500/25 shadow-2xl space-y-6 backdrop-blur-md">
      
      {/* Cabeçalho do Bloco 2 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold shadow-lg">
            <ArrowUpDown className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                BLOCO 2
              </span>
              <span className="text-xs text-slate-400">Controle de Movimentações</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              DE ONDE VEIO / PARA ONDE FOI?
            </h2>
          </div>
        </div>

        {/* Ações: Adicionar, Carregar Exemplo e Zerar */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {lancamentos.length > 0 ? (
            <button
              onClick={onZerarLancamentos}
              title="Zerar todos os lançamentos para começar do zero"
              className="p-3 rounded-xl bg-[#061224] border border-white/10 text-slate-400 hover:text-red-300 hover:border-red-400/40 transition-all flex items-center gap-1.5 text-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-red-400" />
              <span className="hidden sm:inline">Zerar Painel</span>
            </button>
          ) : (
            <button
              onClick={onCarregarExemplo}
              title="Carregar exemplo completo para demonstração"
              className="px-3.5 py-2.5 rounded-xl bg-[#061224] border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-500/10 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Exemplo Acadêmico</span>
            </button>
          )}

          <button
            onClick={onAdicionarClick}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-slate-950" />
            <span>Novo Lançamento</span>
          </button>
        </div>
      </div>

      {/* Barra de Filtros e Busca */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        
        {/* Campo de Busca */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por descrição ou categoria..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#061224] border border-white/15 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 text-white placeholder-slate-500 text-xs sm:text-sm outline-none transition-all"
          />
        </div>

        {/* Filtros por Classificação (PF / PJ) */}
        <div className="flex items-center gap-1.5 bg-[#061224] p-1 rounded-xl border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          <span className="text-[11px] text-slate-400 px-2 font-medium flex items-center gap-1">
            <Filter className="w-3 h-3 text-emerald-400" />
            Conta:
          </span>
          <button
            onClick={() => setFiltroClassificacao('TODOS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filtroClassificacao === 'TODOS'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Todas ({lancamentos.length})
          </button>
          <button
            onClick={() => setFiltroClassificacao('PJ')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
              filtroClassificacao === 'PJ'
                ? 'bg-blue-500 text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Building2 className="w-3 h-3" />
            PJ
          </button>
          <button
            onClick={() => setFiltroClassificacao('PF')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
              filtroClassificacao === 'PF'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <User className="w-3 h-3" />
            PF
          </button>
        </div>

        {/* Filtros por Tipo (Entrada / Saída) */}
        <div className="flex items-center gap-1.5 bg-[#061224] p-1 rounded-xl border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setFiltroTipo('TODOS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filtroTipo === 'TODOS'
                ? 'bg-white/20 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Todos Tipos
          </button>
          <button
            onClick={() => setFiltroTipo('ENTRADA')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
              filtroTipo === 'ENTRADA'
                ? 'bg-emerald-500 text-slate-950'
                : 'text-emerald-400 hover:text-emerald-300'
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            Entradas
          </button>
          <button
            onClick={() => setFiltroTipo('SAIDA')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
              filtroTipo === 'SAIDA'
                ? 'bg-red-500 text-white'
                : 'text-red-400 hover:text-red-300'
            }`}
          >
            <ArrowDownRight className="w-3.5 h-3.5" />
            Saídas
          </button>
        </div>

      </div>

      {/* Tabela de Lançamentos */}
      <div className="rounded-2xl border border-white/10 bg-[#061224] overflow-hidden shadow-inner">
        <div className="overflow-x-auto max-h-[480px] overflow-y-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#040c1a] text-slate-400 uppercase text-[11px] font-bold sticky top-0 z-10 border-b border-white/10">
              <tr>
                <th className="py-3 px-4">Data</th>
                <th className="py-3 px-4">Descrição</th>
                <th className="py-3 px-4">Conta</th>
                <th className="py-3 px-4">Categoria</th>
                <th className="py-3 px-4 text-right">Valor</th>
                <th className="py-3 px-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {lancamentos.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-14 px-4 text-center">
                    <div className="flex flex-col items-center justify-center space-y-3 max-w-md mx-auto">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Plus className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Nenhum lançamento registrado</h4>
                        <p className="text-xs text-slate-400 mt-1">
                          O painel começa sem nenhum valor para você inserir os dados e acompanhar a formação do saldo, dos resultados e dos alertas na prática.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                        <button
                          type="button"
                          onClick={onAdicionarClick}
                          className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>+ Inserir Primeiro Lançamento</span>
                        </button>
                        <button
                          type="button"
                          onClick={onCarregarExemplo}
                          className="px-3.5 py-2.5 rounded-xl font-semibold text-xs text-amber-300 bg-[#07152b] hover:bg-white/5 border border-amber-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Carregar Exemplo Demonstrativo</span>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : lancamentosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-slate-500 text-xs">
                    Nenhum lançamento encontrado para a busca ou filtro selecionado.
                  </td>
                </tr>
              ) : (
                lancamentosFiltrados.map((item) => {
                  const isEntrada = item.tipo === 'ENTRADA';
                  const isPJ = item.classificacao === 'PJ';
                  const isDespesaPfNoPj = item.movimentacaoEntreContas === 'DESPESA_PF_PAGA_PELO_PJ';

                  return (
                    <tr 
                      key={item.id}
                      className="hover:bg-white/[0.03] transition-colors"
                    >
                      {/* Data */}
                      <td className="py-3 px-4 font-mono text-slate-400 whitespace-nowrap text-xs">
                        {formatarData(item.data)}
                      </td>

                      {/* Descrição + Tag de Alerta se for despesa pessoal na PJ */}
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white">
                          {item.descricao}
                        </div>
                        {isDespesaPfNoPj && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 mt-1">
                            <AlertTriangle className="w-3 h-3" />
                            Despesa pessoal paga pelo caixa PJ
                          </span>
                        )}
                      </td>

                      {/* Classificação: PF ou PJ */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold ${
                          isPJ
                            ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                            : 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                        }`}>
                          {isPJ ? <Building2 className="w-3 h-3" /> : <User className="w-3 h-3" />}
                          {item.classificacao}
                        </span>
                      </td>

                      {/* Categoria */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-300 bg-white/5 px-2.5 py-1 rounded-md">
                          <Tag className="w-3 h-3 text-slate-400" />
                          {item.categoria}
                        </span>
                      </td>

                      {/* Valor */}
                      <td className="py-3 px-4 text-right whitespace-nowrap font-bold">
                        <span className={`inline-flex items-center justify-end gap-1 ${
                          isEntrada ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {isEntrada ? '+' : '-'} {formatarMoeda(item.valor)}
                        </span>
                      </td>

                      {/* Excluir */}
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <button
                          onClick={() => onExcluirLancamento(item.id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Excluir lançamento"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
        <span>Exibindo <strong>{lancamentosFiltrados.length}</strong> de <strong>{lancamentos.length}</strong> lançamentos</span>
        <span className="italic">Os cálculos dos Blocos 1 e 3 reagem instantaneamente a cada adição ou exclusão.</span>
      </div>

    </section>
  );
};
