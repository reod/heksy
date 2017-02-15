import { ValidationException } from './../../../shared-domain/ValidationException';
import { RetroValidator } from './../../../modules/retro/domain/RetroValidator';
import { Retro } from './../../../modules/retro/domain/Retro';

export class RetroFactory {

  public static create(data: any): Retro {
    const { id } = data;
    const retroValidator = new RetroValidator();
    const retro = new Retro(id);

    if (!retroValidator.validate(Retro)) {
      const errors = retroValidator.getErrors();
      throw new ValidationException(errors);
    }

    return retro;
  }
}
