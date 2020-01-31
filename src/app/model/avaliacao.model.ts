import { Aluno } from 'src/app/model/aluno.model';
import { Disciplina } from './disciplina.model';
export class Avaliacao {
    constructor(
      public data?: Date,
      public disciplina?: Disciplina,
      public aluno?: Aluno,
      public nota?: number
    ) {}
}
