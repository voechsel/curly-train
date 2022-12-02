export class User {
  id?: number;
  name: string;
  matos: string;
  haircolor: any;

  constructor(data: any) {
    this.id = data.id ? data.id : 0;
    this.name = data.name ? data.name : '';
    this.matos = data.matos ? data.matos : '';
    this.haircolor = data.haircolor ? data.haircolor : '';
  }
}
