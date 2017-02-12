interface Idwise {
  id?: any;
}

export class InMemoryRepository<T extends Idwise> {

  private repo: Array<T> = [];
  
  async add(item: T): Promise<T> {
    const id = String(+new Date());
    const itemWithId = Object.assign({}, item, { id });
    this.repo.push(itemWithId);
    
    return Promise.resolve(itemWithId);
  }

  async findById(id: string): Promise<T> {
    const item: T = this.repo.find(item => item.id === id);
    return Promise.resolve(item);
  }

  async getAll(): Promise<Array<T>> {
    return Promise.resolve(this.repo);
  }

  async delete(id: string): Promise<Boolean> {
    let index = -1;
    const { length } = this.repo;
    
    for (let i = 0; i < length; i++) {
      if (this.repo[i].id === id) {
        index = i;
        break; 
      }
    }

    if (index === -1) {
      throw new Error(`Item with ${id} not found!`);
    }

    this.repo = [
      ...this.repo.slice(0, index),
      ...this.repo.slice(index + 1)
    ];

    return Promise.resolve(true);
  }

  async edit(item: T): Promise<T> {
    const { id } = item;
    const { length } = this.repo;
    let index = -1;

    console.log(id, item);
    
    for (let i = 0; i < length; i++) {
      if (this.repo[i].id === id) {
        index = i;
        break; 
      }
    }


    if (index === -1) {
      throw new Error(`Item with ${id} not found!`);
    }

    const editedItem = Object.assign({}, this.repo[index], item);

    this.repo = [
      ...this.repo.slice(0, index),
      editedItem,
      ...this.repo.slice(index + 1)
    ];

    return Promise.resolve(editedItem);
  }
}
