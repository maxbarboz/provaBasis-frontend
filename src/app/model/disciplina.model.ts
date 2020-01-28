export class Disciplina {
    constructor(
      public nome?: string,
      public cargaHoraria?: number,
      public ativa?: boolean,
      public descricao?: string,
      public professor?: object
    ) {}
}
