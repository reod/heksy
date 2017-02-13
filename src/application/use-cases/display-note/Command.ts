export class Command {

  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

}
