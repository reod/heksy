import { Retro } from './../../../modules/retro/domain/retro';

export class Command {
  private retro: Retro;

  constructor(retro: Retro) {
    this.retro = retro;
  }
  
  public getRetro(): Retro {
    return this.retro;
  }
}
