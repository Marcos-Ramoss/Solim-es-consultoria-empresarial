import { Lancamento, MetricasDashboard } from '../types/dashboard';

export const MOCK_LANCAMENTOS_INICIAIS: Lancamento[] = [
  // --- ENTRADAS PJ ---
  {
    id: 'lan-01',
    data: '2026-09-02',
    descricao: 'Venda de mercadorias no balcão (Lote 1)',
    valor: 8500,
    tipo: 'ENTRADA',
    classificacao: 'PJ',
    categoria: 'Vendas',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-02',
    data: '2026-09-05',
    descricao: 'Prestação de consultoria especializada',
    valor: 4200,
    tipo: 'ENTRADA',
    classificacao: 'PJ',
    categoria: 'Serviços prestados',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-03',
    data: '2026-09-12',
    descricao: 'Recebimento de contrato cliente corporativo',
    valor: 6300,
    tipo: 'ENTRADA',
    classificacao: 'PJ',
    categoria: 'Recebimento de clientes',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-04',
    data: '2026-09-18',
    descricao: 'Venda de mercadorias à vista (Lote 2)',
    valor: 5400,
    tipo: 'ENTRADA',
    classificacao: 'PJ',
    categoria: 'Vendas',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-05',
    data: '2026-09-22',
    descricao: 'Aporte de urgência feito pela proprietária',
    valor: 1500,
    tipo: 'ENTRADA',
    classificacao: 'PJ',
    categoria: 'Aportes da proprietária',
    movimentacaoEntreContas: 'PF_PARA_PJ',
  },

  // --- SAÍDAS PJ ---
  {
    id: 'lan-06',
    data: '2026-09-03',
    descricao: 'Pagamento fornecedor de matéria-prima',
    valor: 5800,
    tipo: 'SAIDA',
    classificacao: 'PJ',
    categoria: 'Fornecedores',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-07',
    data: '2026-09-05',
    descricao: 'Aluguel do ponto comercial',
    valor: 2500,
    tipo: 'SAIDA',
    classificacao: 'PJ',
    categoria: 'Aluguel',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-08',
    data: '2026-09-06',
    descricao: 'Conta de Energia Elétrica comercial',
    valor: 780,
    tipo: 'SAIDA',
    classificacao: 'PJ',
    categoria: 'Energia',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-09',
    data: '2026-09-07',
    descricao: 'Internet fibra óptica e telefonia',
    valor: 220,
    tipo: 'SAIDA',
    classificacao: 'PJ',
    categoria: 'Internet/telefone',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-10',
    data: '2026-09-10',
    descricao: 'Folha de pagamento assistente operacional',
    valor: 2100,
    tipo: 'SAIDA',
    classificacao: 'PJ',
    categoria: 'Funcionários',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-11',
    data: '2026-09-15',
    descricao: 'DAS Simples Nacional (Impostos)',
    valor: 1250,
    tipo: 'SAIDA',
    classificacao: 'PJ',
    categoria: 'Impostos',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-12',
    data: '2026-09-16',
    descricao: 'Retirada de Pró-labore da proprietária',
    valor: 4500,
    tipo: 'SAIDA',
    classificacao: 'PJ',
    categoria: 'Outros',
    movimentacaoEntreContas: 'PJ_PARA_PF',
  },
  {
    id: 'lan-13',
    data: '2026-09-20',
    descricao: 'Compra de embalagens e insumos',
    valor: 640,
    tipo: 'SAIDA',
    classificacao: 'PJ',
    categoria: 'Materiais de consumo',
    movimentacaoEntreContas: 'NENHUMA',
  },

  // --- SAÍDAS PF PAGAS INDEVIDAMENTE COM O CAIXA DA EMPRESA (O ALERTA!) ---
  {
    id: 'lan-14',
    data: '2026-09-11',
    descricao: 'Supermercado da família pago no cartão da empresa',
    valor: 850,
    tipo: 'SAIDA',
    classificacao: 'PF',
    categoria: 'Alimentação',
    movimentacaoEntreContas: 'DESPESA_PF_PAGA_PELO_PJ',
  },
  {
    id: 'lan-15',
    data: '2026-09-14',
    descricao: 'Mensalidade escolar do filho paga com conta jurídica',
    valor: 650,
    tipo: 'SAIDA',
    classificacao: 'PF',
    categoria: 'Educação',
    movimentacaoEntreContas: 'DESPESA_PF_PAGA_PELO_PJ',
  },
  {
    id: 'lan-16',
    data: '2026-09-21',
    descricao: 'Farmácia pessoal paga com cartão de débito PJ',
    valor: 280,
    tipo: 'SAIDA',
    classificacao: 'PF',
    categoria: 'Saúde',
    movimentacaoEntreContas: 'DESPESA_PF_PAGA_PELO_PJ',
  },

  // --- ENTRADAS PF PRÓPRIAS ---
  {
    id: 'lan-17',
    data: '2026-09-16',
    descricao: 'Recebimento do Pró-labore empresarial',
    valor: 4500,
    tipo: 'ENTRADA',
    classificacao: 'PF',
    categoria: 'Pró-labore',
    movimentacaoEntreContas: 'PJ_PARA_PF',
  },
  {
    id: 'lan-18',
    data: '2026-09-15',
    descricao: 'Rendimento de aplicação pessoal',
    valor: 180,
    tipo: 'ENTRADA',
    classificacao: 'PF',
    categoria: 'Rendimentos',
    movimentacaoEntreContas: 'NENHUMA',
  },

  // --- SAÍDAS PF LEGAIS (Pagas na conta PF) ---
  {
    id: 'lan-19',
    data: '2026-09-08',
    descricao: 'Condomínio e luz residencial',
    valor: 920,
    tipo: 'SAIDA',
    classificacao: 'PF',
    categoria: 'Moradia',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-20',
    data: '2026-09-17',
    descricao: 'Fatura do cartão de crédito pessoal',
    valor: 1100,
    tipo: 'SAIDA',
    classificacao: 'PF',
    categoria: 'Cartão de crédito',
    movimentacaoEntreContas: 'NENHUMA',
  },
  {
    id: 'lan-21',
    data: '2026-09-22',
    descricao: 'Transferência de aporte pessoal para a empresa',
    valor: 1500,
    tipo: 'SAIDA',
    classificacao: 'PF',
    categoria: 'Outros',
    movimentacaoEntreContas: 'PF_PARA_PJ',
  },
];

/**
 * Função utilitária que recalcula em tempo real todos os 3 blocos
 * do Dashboard Financeiro sempre que lançamentos forem adicionados, editados ou removidos.
 */
export function calcularMetricasDashboard(
  lancamentos: Lancamento[],
  saldoInicialContaTotal: number = 0,
  reservaEmergenciaPjFixa: number = 0
): MetricasDashboard {
  let entradasPJ = 0;
  let saidasPJ = 0;
  let entradasPF = 0;
  let saidasPF = 0;

  let movimentacaoPfParaPj = 0;
  let movimentacaoPjParaPf = 0;
  let despesasPfPagasPeloPj = 0;
  let despesasPjPagasPeloPf = 0;
  let retiradasProprietaria = 0;

  for (const item of lancamentos) {
    if (item.classificacao === 'PJ') {
      if (item.tipo === 'ENTRADA') {
        entradasPJ += item.valor;
      } else {
        saidasPJ += item.valor;
      }
    } else {
      // PF
      if (item.tipo === 'ENTRADA') {
        entradasPF += item.valor;
      } else {
        saidasPF += item.valor;
      }
    }

    // Classificação de fluxo entre contas
    if (item.movimentacaoEntreContas === 'PF_PARA_PJ') {
      movimentacaoPfParaPj += item.valor;
    } else if (item.movimentacaoEntreContas === 'PJ_PARA_PF') {
      movimentacaoPjParaPf += item.valor;
      retiradasProprietaria += item.valor;
    } else if (item.movimentacaoEntreContas === 'DESPESA_PF_PAGA_PELO_PJ') {
      despesasPfPagasPeloPj += item.valor;
    } else if (item.movimentacaoEntreContas === 'DESPESA_PJ_PAGA_PELO_PF') {
      despesasPjPagasPeloPf += item.valor;
    }

    // Detectar retiradas por categoria
    if (item.categoria === 'Pró-labore' && item.tipo === 'SAIDA' && item.classificacao === 'PJ') {
      if (item.movimentacaoEntreContas !== 'PJ_PARA_PF') {
        retiradasProprietaria += item.valor;
      }
    }
  }

  // Saídas da PJ computam as despesas corporativas + contas pessoais pagas com o caixa PJ
  const saidasPJConsolidadas = saidasPJ + despesasPfPagasPeloPj;
  const resultadoPJ = entradasPJ - saidasPJConsolidadas;

  // Resultado PF
  const resultadoPF = entradasPF - saidasPF;

  // Indicadores do Mês consolidados
  const entradasMes = entradasPJ + entradasPF;
  const saidasMes = saidasPJConsolidadas + saidasPF;
  const resultadoMes = entradasMes - saidasMes;

  // Saldos acumulados transparentes para fins acadêmicos
  const saldoDestinadoPJ = Math.max(0, resultadoPJ);
  const saldoDestinadoPF = Math.max(0, resultadoPF);
  const saldoTotalConta = saldoInicialContaTotal + resultadoMes;

  const reservaEmergenciaPJ = Math.min(saldoDestinadoPJ, Math.max(0, reservaEmergenciaPjFixa));
  const valorDisponivelDespesasPJ = Math.max(0, saldoDestinadoPJ - reservaEmergenciaPJ);
  const valorDisponivelPF = saldoDestinadoPF;

  return {
    saldoTotalConta,
    saldoDestinadoPJ,
    saldoDestinadoPF,
    reservaEmergenciaPJ,
    valorDisponivelDespesasPJ,
    valorDisponivelPF,
    entradasMes,
    saidasMes,
    resultadoMes,

    entradasPJ,
    saidasPJ: saidasPJConsolidadas,
    resultadoPJ,
    reservaPJ: reservaEmergenciaPJ,
    retiradasProprietaria,

    entradasPF,
    saidasPF,
    resultadoPF,

    movimentacaoPfParaPj,
    movimentacaoPjParaPf,
    despesasPfPagasPeloPj,
    despesasPjPagasPeloPf,
  };
}
