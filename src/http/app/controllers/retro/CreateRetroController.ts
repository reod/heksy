import { JsonController, Post, Body } from 'routing-controllers';
import { ApiController } from './../ApiController';
import { ValidationError } from './../../../../shared-domain/ValidationError';

import { Retro } from './../../../../modules/retro/domain/Retro';
import { UseCase } from './../../../../application/use-cases/create-retro/UseCase';
import { Command } from './../../../../application/use-cases/create-retro/Command';
import { Responder } from './../../../../application/use-cases/create-retro/Responder';


@JsonController()
export class CreateRetroController extends ApiController implements Responder {

  private retro: Retro;

  @Post('/retros')
  async addRetro(@Body() retro: Retro) {
    const createRetroUseCase = this.getCreateRetroUseCase();
    const createRetroCommand = new Command(Retro);
    await createRetroUseCase.execute(createRetroCommand, this);

    return this.retro;
  }

  retroSuccessfullyCreated(retro: Retro) {
    this.retro = retro;
  }

  retroNotCreated(errors: Array<ValidationError>) {
    const e = <any> new Error('ValidationError');
    e.errors = errors;

    throw e;
  }

  private getCreateRetroUseCase(): UseCase {
    return this.getUseCase('createRetro');
  }

}
