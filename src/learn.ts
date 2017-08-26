// interface
interface I {
  name: string;
  age?: number;
  readonly sex: string;
  [propName: string]: any;

  // function
  (source: string, substring: string): boolean;
  [index: number]: string;
}