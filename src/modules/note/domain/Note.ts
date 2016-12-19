export interface INote {
  id?: string;
  type: string;
  content: string;
}

export class Note implements INote {

  public id?: string;
  public type: string;
  public content: string;

  constructor(type: string, content: string) {
    this.type = type;
    this.content = content;
  }
}
