export class userListItem {
  id: number;
  idx: number;
  name: string;
  matos?: string;
  hairColor?: any;

  constructor(data: any) {
    this.id = data.id ?? null;
    this.idx = data.idx ?? null;
    this.name = data.name ?? null;
    this.matos = data.matos ?? null;
    this.hairColor = data.hairColor ?? null;
  }
}
