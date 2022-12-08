type TransacaoPagamento = 'Boleto' | 'Cartão de Crédito';
type TransacaoStatus =
  | 'Paga'
  | 'Recusada pela operadora de cartão'
  | 'Aguardando pagamento'
  | 'Estornada';

export default interface ITransacao {
  status: TransacaoStatus;
  id: number;
  data: Date;
  nome: string;
  pagamento: TransacaoPagamento;
  email: string;
  moeda: string;
  valor: number | null;
  novo: boolean;
}
