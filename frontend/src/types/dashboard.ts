export type TipoLancamento = 'ENTRADA' | 'SAIDA';
export type ClassificacaoConta = 'PF' | 'PJ';

export type MovimentacaoEntreContas = 
  | 'NENHUMA'
  | 'PF_PARA_PJ'
  | 'PJ_PARA_PF'
  | 'DESPESA_PF_PAGA_PELO_PJ'
  | 'DESPESA_PJ_PAGA_PELO_PF';

export const CATEGORIAS_ENTRADA_PJ = [
  'Vendas',
  'Recebimento de clientes',
  'Serviços prestados',
  'Aportes da proprietária',
  'Empréstimos',
  'Outros recebimentos',
] as const;

export const CATEGORIAS_ENTRADA_PF = [
  'Salário',
  'Pró-labore',
  'Rendimentos',
  'Transferência recebida',
  'Outros',
] as const;

export const CATEGORIAS_SAIDA_PJ = [
  'Compra de mercadorias',
  'Fornecedores',
  'Aluguel',
  'Energia',
  'Água',
  'Internet/telefone',
  'Funcionários',
  'Impostos',
  'Transporte/frete',
  'Marketing',
  'Manutenção',
  'Materiais de consumo',
  'Taxas bancárias',
  'Empréstimos/financiamentos',
  'Outros',
] as const;

export const CATEGORIAS_SAIDA_PF = [
  'Alimentação',
  'Moradia',
  'Água/luz',
  'Transporte',
  'Saúde',
  'Educação',
  'Compras pessoais',
  'Lazer',
  'Assinaturas',
  'Contas pessoais',
  'Cartão de crédito',
  'Outros',
] as const;

export interface Lancamento {
  id: string;
  data: string; // YYYY-MM-DD
  descricao: string;
  valor: number;
  tipo: TipoLancamento;
  classificacao: ClassificacaoConta;
  categoria: string;
  movimentacaoEntreContas?: MovimentacaoEntreContas;
}

export interface MetricasDashboard {
  // Bloco 1 - Quanto tenho?
  saldoTotalConta: number;
  saldoDestinadoPJ: number;
  saldoDestinadoPF: number;
  reservaEmergenciaPJ: number;
  valorDisponivelDespesasPJ: number;
  valorDisponivelPF: number;
  entradasMes: number;
  saidasMes: number;
  resultadoMes: number;

  // Bloco 3 - PF × PJ
  entradasPJ: number;
  saidasPJ: number;
  resultadoPJ: number;
  reservaPJ: number;
  retiradasProprietaria: number;

  entradasPF: number;
  saidasPF: number;
  resultadoPF: number;

  // Movimentações entre PF e PJ
  movimentacaoPfParaPj: number;
  movimentacaoPjParaPf: number;
  despesasPfPagasPeloPj: number;
  despesasPjPagasPeloPf: number;
}
