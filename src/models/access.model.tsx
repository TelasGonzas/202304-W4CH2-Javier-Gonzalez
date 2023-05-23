export type accessData = {
  username: string;
  password: string;
  accountType: string;
};

export class Access implements accessData {
  constructor(
    public username: string,
    public password: string,
    public accountType: string
  ) {}
}
