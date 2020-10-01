// Workaround so that Typescript correctly infer "string" as a String Literal
export function literal<a>(val: a): a {
  return val;
}