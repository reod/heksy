export interface IRetro {
  id?: string;
}

export class Retro implements IRetro {

  public id?: string;

  constructor(id: string) {
    this.id = id;
  }
}
