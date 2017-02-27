import { InMemoryRepository } from './../../../../../../lib/InMemoryRepository';
import { Retro } from './../../../domain/retro';
import { RetroRepository } from './../../../domain/RetroRepository';

export class InMemoryRetroRepository 
  extends InMemoryRepository
  implements RetroRepository {
    constructor() {
      super();
    }
  }
