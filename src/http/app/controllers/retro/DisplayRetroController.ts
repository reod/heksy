import { JsonController, Get, Param } from 'routing-controllers';
import { ApiController } from './../ApiController';

import { Retro } from './../../../../modules/retro/domain/retro';
import { UseCase } from './../../../../application/use-cases/display-retro/UseCase';
import { Command } from './../../../../application/use-cases/display-retro/Command';
import { Responder } from './../../../../application/use-cases/display-retro/Responder';


@JsonController()
export class DisplayRetroController extends ApiController implements Responder {

  public retro: Retro;

  @Get('/retros/:id')
  async displayRetro(@Param('id') id: string) {
    const displayRetroUseCase = this.getDisplayRetroUseCase();
    const displayretroCommand = new Command(id);
    await displayRetroUseCase.execute(displayretroCommand, this);

    return this.retro;
  }

  async retroSuccessfullyFound(retro: Retro) {
    this.retro = retro;
  }

  async retroNotFound() {
    throw new Error('retro not found.');
  }

  private getDisplayRetroUseCase(): UseCase {
    return this.getUseCase('displayRetro');
  }
}
