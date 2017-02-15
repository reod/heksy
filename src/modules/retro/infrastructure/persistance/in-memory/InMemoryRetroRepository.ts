import { InMemoryRepository } from './../../../../../../lib/InMemoryRepository';
import { Retro } from './../../../domain/retro';
import { RetroRepository } from './../../../domain/RetroRepository';

export class InMemoryRetroRepository 
  extends InMemoryRepository<Retro> 
  implements RetroRepository {
    constructor() {
      super();
    }
  }
