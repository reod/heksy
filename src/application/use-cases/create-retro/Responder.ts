import { Retro } from './../../../modules/retro/domain/Retro';
import { ValidationError } from './../../../shared-domain/ValidationError';

export interface Responder {
  retroSuccessfullyCreated(note: Retro): void;
  retroNotCreated(errors: Array<ValidationError>): void;
}
