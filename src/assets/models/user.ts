export class User {
  id?: number;
  name: string;
  matos: string;
  haircolor: any;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name ? data.name : '';
    this.matos = data.matos ? data.matos : '';
    this.haircolor = data.haircolor ? data.haircolor : '';
  }
}
