// Workaround so that Typescript correctly infer "string" as a String Literal
// Also works with numbers
// https://github.com/microsoft/TypeScript/issues/22038#issuecomment-370472236
export function literal<a>(val: a): a {
  return val;
}