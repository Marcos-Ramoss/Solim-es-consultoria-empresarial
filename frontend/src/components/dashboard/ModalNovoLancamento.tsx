import React, { useState } from 'react';
import { 
  Lancamento, 
  TipoLancamento, 
  ClassificacaoConta, 
  MovimentacaoEntreContas,
  CATEGORIAS_ENTRADA_PJ,
  CATEGORIAS_ENTRADA_PF,
  CATEGORIAS_SAIDA_PJ,
  CATEGORIAS_SAIDA_PF
} from '../../types/dashboard';
import { X, PlusCircle, AlertTriangle } from 'lucide-react';

interface ModalNovoLancamentoProps {
  isOpen: boolean;
  onClose: () => void;
  onSalvar: (novoLancamento: Omit<Lancamento, 'id'>) => void;
}

export const ModalNovoLancamento: React.FC<ModalNovoLancamentoProps> = ({
  isOpen,
  onClose,
  onSalvar,
}) => {
  const [data, setData] = useState(new Date().toISOString().split('T')[0]);
  const [descricao, setDescricao] = useState('');
  const [valorStr, setValorStr] = useState('');
  const [tipo, setTipo] = useState<TipoLancamento>('SAIDA');
  const [classificacao, setClassificacao] = useState<ClassificacaoConta>('PJ');
  const [movimentacao, setMovimentacao] = useState<MovimentacaoEntreContas>('NENHUMA');

  // Determinar opções de categorias com base nas seleções
  const categoriasDisponiveis = React.useMemo(() => {
    if (tipo === 'ENTRADA') {
      return classificacao === 'PJ' ? CATEGORIAS_ENTRADA_PJ : CATEGORIAS_ENTRADA_PF;
    } else {
      return classificacao === 'PJ' ? CATEGORIAS_SAIDA_PJ : CATEGORIAS_SAIDA_PF;
    }
  }, [tipo, classificacao]);

  const [categoria, setCategoria] = useState<string>(categoriasDisponiveis[0]);

  // Atualizar categoria padrão ao mudar tipo ou classificação
  React.useEffect(() => {
    setCategoria(categoriasDisponiveis[0]);
  }, [categoriasDisponiveis]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valor = parseFloat(valorStr.replace(',', '.'));
    if (isNaN(valor) || valor <= 0) {
      alert('Por favor, informe um valor válido maior que zero.');
      return;
    }
    if (!descricao.trim()) {
      alert('Por favor, informe a descrição do lançamento.');
      return;
    }

    onSalvar({
      data,
      descricao: descricao.trim(),
      valor,
      tipo,
      classificacao,
      categoria,
      movimentacaoEntreContas: movimentacao,
    });

    // Resetar campos
    setDescricao('');
    setValorStr('');
    setMovimentacao('NENHUMA');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#07152b] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do Modal */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <PlusCircle className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white">Novo Lançamento Financeiro</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          {/* Tipo: Entrada ou Saída */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300 block">Tipo de Movimentação *</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTipo('ENTRADA')}
                className={`py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 border transition-all ${
                  tipo === 'ENTRADA'
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                    : 'bg-[#050e1d] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                + Entrada
              </button>
              <button
                type="button"
                onClick={() => setTipo('SAIDA')}
                className={`py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 border transition-all ${
                  tipo === 'SAIDA'
                    ? 'bg-red-500 text-white border-red-400 shadow-md shadow-red-500/20'
                    : 'bg-[#050e1d] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                - Saída
              </button>
            </div>
          </div>

          {/* Classificação: PF ou PJ */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300 block">Classificação da Conta *</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setClassificacao('PJ')}
                className={`py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 border transition-all ${
                  classificacao === 'PJ'
                    ? 'bg-blue-500 text-white border-blue-400 shadow-md shadow-blue-500/20'
                    : 'bg-[#050e1d] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                🏢 PJ (Empresa)
              </button>
              <button
                type="button"
                onClick={() => setClassificacao('PF')}
                className={`py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 border transition-all ${
                  classificacao === 'PF'
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20'
                    : 'bg-[#050e1d] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                👤 PF (Pessoa Física)
              </button>
            </div>
          </div>

          {/* Data e Valor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="data" className="font-semibold text-slate-300 block">Data *</label>
              <input
                id="data"
                type="date"
                required
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#050e1d] border border-white/15 text-white outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="valor" className="font-semibold text-slate-300 block">Valor (R$) *</label>
              <input
                id="valor"
                type="number"
                step="0.01"
                min="0.01"
                required
                placeholder="Ex: 1500.00"
                value={valorStr}
                onChange={(e) => setValorStr(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#050e1d] border border-white/15 text-white outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono"
              />
            </div>
          </div>

          {/* Descrição */}
          <div className="space-y-1.5">
            <label htmlFor="descricao" className="font-semibold text-slate-300 block">Descrição do Lançamento *</label>
            <input
              id="descricao"
              type="text"
              required
              placeholder="Ex: Fornecedor de tecidos ou Almoço pessoal..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#050e1d] border border-white/15 text-white outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          {/* Categoria (Carregada estritamente conforme a especificação) */}
          <div className="space-y-1.5">
            <label htmlFor="categoria" className="font-semibold text-slate-300 block">Categoria Oficial *</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#050e1d] border border-white/15 text-white outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            >
              {categoriasDisponiveis.map((cat) => (
                <option key={cat} value={cat} className="bg-[#071324] text-white">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Movimentação Entre Contas (Especial para o Bloco 3 e Alerta) */}
          <div className="space-y-1.5 pt-2 border-t border-white/10">
            <label htmlFor="movimentacao" className="font-semibold text-amber-300 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Movimentação Especial entre PF e PJ?
            </label>
            <select
              id="movimentacao"
              value={movimentacao}
              onChange={(e) => setMovimentacao(e.target.value as MovimentacaoEntreContas)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#050e1d] border border-amber-500/30 text-white outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-xs"
            >
              <option value="NENHUMA" className="bg-[#071324]">Nenhuma (Movimentação Comum)</option>
              <option value="DESPESA_PF_PAGA_PELO_PJ" className="bg-[#071324] text-red-300">
                ⚠️ Despesa Pessoal (PF) paga com caixa da Empresa (PJ)
              </option>
              <option value="DESPESA_PJ_PAGA_PELO_PF" className="bg-[#071324]">
                Despesa da Empresa (PJ) paga com dinheiro do sócio (PF)
              </option>
              <option value="PF_PARA_PJ" className="bg-[#071324]">
                Aporte / Empréstimo do Sócio para a Empresa (PF → PJ)
              </option>
              <option value="PJ_PARA_PF" className="bg-[#071324]">
                Retirada / Pró-labore da Empresa para o Sócio (PJ → PF)
              </option>
            </select>
            {movimentacao === 'DESPESA_PF_PAGA_PELO_PJ' && (
              <p className="text-[11px] text-amber-400 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                Este lançamento aumentará o indicador de alerta de despesas pessoais pagas com dinheiro da empresa!
              </p>
            )}
          </div>

          {/* Botões do Formulário */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              Salvar Lançamento
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
