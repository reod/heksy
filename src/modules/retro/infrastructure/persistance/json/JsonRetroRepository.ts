import { JsonRepository } from './../../../../../../lib/JsonRepository';
import { Retro } from './../../../domain/Retro';
import { RetroFactory } from './../../../domain/RetroFactory';
import { RetroRepository } from './../../../domain/RetroRepository';

export class JsonRetroRepository 
    extends JsonRepository<Retro>
    implements RetroRepository {
  
  constructor() {
    super('./storage/retro.json', RetroFactory);
  }
}
