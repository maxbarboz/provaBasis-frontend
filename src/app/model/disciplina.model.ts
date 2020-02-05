import { Professor } from 'src/app/model/professor.model';
export class Disciplina {
    constructor(
      public id?: number,
      public nome?: string,
      public cargaHoraria?: number,
      public ativa?: boolean,
      public descricao?: string,
      public professor?: Professor
    ) {}
}
