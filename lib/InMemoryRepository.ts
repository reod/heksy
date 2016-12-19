interface Idwise {
  id?: any;
}

export class InMemoryRepository<T extends Idwise> {

  private repo: Array<T> = [];
  
  async add(item: T): Promise<T> {
    this.repo.push(item);
    return Promise.resolve(item);
  }

  async findById(id: string): Promise<T> {
    const item: T = this.repo.find(item => item.id === id);
    return Promise.resolve(item);
  }

  async getAll(): Promise<Array<T>> {
    return Promise.resolve(this.repo);
  }
}


