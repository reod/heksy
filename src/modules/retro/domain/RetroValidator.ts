import { ValidationError } from './../../../shared-domain/ValidationError';
import { DomainModelValidator } from './../../../shared-domain/DomainModelValidator';
import { Retro } from './Retro';

export class RetroValidator implements DomainModelValidator<Retro> {

  private errors: Array<ValidationError> = [];

  public validate(retro: Retro): boolean {
    return this.errors.length === 0;
  }

  public getErrors(): Array<ValidationError> {
    return this.errors;
  }

}
