export function buildQueryString(str) {
  return str.trim().replace(/ /g, "+");
}
