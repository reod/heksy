export class Command {
  private retroId: string;

  constructor(retroId: string) {
    this.retroId = retroId;
  }
  
  public getRetroId(): string {
    return this.retroId;
  }
}
