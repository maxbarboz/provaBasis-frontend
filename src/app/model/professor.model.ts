import { Disciplina } from './disciplina.model';

export class Professor {
    constructor(
      public id?: number,
      public nome?: string,
      public dataNascimento?: Date,
      public matricula?: string,
      public area?: string,
      public disciplinas?: Disciplina
    ) {}
}
