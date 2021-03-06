export class HTTP {

  private readonly _name: string;
  private readonly _get: string;
  private readonly _post: string;

  constructor(HTTPJson: any) {
    if (HTTPJson != null)
    {
      this._name = HTTPJson.name;
      this._get = HTTPJson.get;
      this._post = HTTPJson.post;
    }
  }

  get name(): string {
    return this._name;
  }

  get get(): string {
    return this._get;
  }

  get post(): string {
    return this._post;
  }
}
