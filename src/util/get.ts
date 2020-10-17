export function get(object: object, path: string): object {
  let paths = path.split('.'),
    result = object;

  while(paths.length) {
    let key = paths.shift();

    if(!result[key]) return;

    result = result[key];
  }

  return result;
}