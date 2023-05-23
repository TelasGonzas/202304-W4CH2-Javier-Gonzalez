export type PersonalData = {
  name: string;
  lastName: string;
  birth: string;
  gender: string;
  email: string;
};

export class Personal implements PersonalData {
  constructor(
    public name: string,
    public lastName: string,
    public birth: string,
    public gender: string,
    public email: string
  ) {}
}
