export class Note {

  private id: string;
  private retroId: string;
  private type: string;
  private content: string;

  constructor(id: string, retroId: string, type: string, content: string) {
    this.id = id;
    this.retroId = retroId;
    this.type = type;
    this.content = content;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getRetroId(): string {
    return this.retroId;
  }

  public setRetroId(retroId: string) {
    this.retroId = retroId;
  }

  public getType(): string {
    return this.type;
  }

  public getContent(): string {
    return this.content;
  }
  
}
