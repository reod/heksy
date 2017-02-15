import { Retro } from './../../../modules/retro/domain/Retro';

export interface Responder {
  retroSuccessfullyFound(note: Retro): void;
  retroNotFound(): void;
}
