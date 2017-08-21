interface Config {
  value: any;
  rule: string;
  required: boolean;
  tip: string;
}

export default class Validate {
  config: object;
  constructor(config: Config) {
    this.config = config || [];
  }

  // rule validate
  range (val: any) {
    return false;
  }
}