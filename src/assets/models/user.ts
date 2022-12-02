export class User {
  id?: number;
  name: string;
  matos?: string;
  haircolor?: any;

  constructor(name: string, matos: string, id: number, haircolor: string) {
    this.id = id;
    this.name = name;
    this.matos = matos;
    this.haircolor = haircolor;
  }
}
