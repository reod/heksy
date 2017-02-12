export class Command {
  private data: Object;

  constructor(data: Object) {
    this.data = data;
  }

  public getData(): Object {
    return this.data;
  }
}
