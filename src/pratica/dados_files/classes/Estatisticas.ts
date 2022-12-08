import countBy from '../functions/countBy';
import ICountList from '../interfaces/ICountList';
import ITransacao from '../interfaces/ITransacao';
import filtrarValor from '../functions/filtrarValor';
interface Semana {
  domingo: number;
  segunda: number;
  terca: number;
  quarta: number;
  quinta: number;
  sexta: number;
  sabado: number;
}

export default class Estatisticas {
  private transacoes: ITransacao[];
  total: number;
  pagamento: ICountList;
  status: ICountList;
  semana: Semana;
  melhorDia;
  constructor(transacoes: ITransacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }
  private setTotal(): number {
    return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
  private setPagamento(): ICountList {
    return countBy(this.transacoes.map(({pagamento}) => pagamento));
  }
  private setStatus(): ICountList {
    return countBy(this.transacoes.map(({status}) => status));
  }

  private setSemana() {
    const semana = {
      domingo: 0,
      segunda: 0,
      terca: 0,
      quarta: 0,
      quinta: 0,
      sexta: 0,
      sabado: 0,
    };
    for (let i = 0; i < this.transacoes.length; i++) {
      const day = this.transacoes[i].data.getDay();
      if (day === 0) semana.domingo += 1;
      if (day === 1) semana.segunda += 1;
      if (day === 2) semana.terca += 1;
      if (day === 3) semana.quarta += 1;
      if (day === 4) semana.quinta += 1;
      if (day === 5) semana.sexta += 1;
      if (day === 6) semana.sabado += 1;
    }
    console.log(semana);
    return semana;
  }

  private setMelhorDia(): [string, number] {
    return Object.entries(this.semana).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}
