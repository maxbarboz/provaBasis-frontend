export class Aluno {
    constructor(
      public nome?: string,
      public cpf?: number,
      public dataNascimento?: Date,
      public disciplinas?: any[],
      public matricula?: string
    ) {}
}
