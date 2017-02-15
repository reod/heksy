import { Retro } from './Retro';

export interface RetroRepository {
  add(retro: Retro): Promise<Retro>;
  findById(id: string): Promise<Retro>;
  getAll(): Promise<Array<Retro>>;
  edit(retro: Retro): Promise<Retro>;
  delete(id: string): Promise<Boolean>; 
}
