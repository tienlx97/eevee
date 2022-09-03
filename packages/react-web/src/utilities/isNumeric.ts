export function isNumeric(str: any) {
  if (typeof str !== 'string') {
    return false;
  } // we only process strings!
  // eslint-disable-next-line @eevee/max-len
  return (
    // eslint-disable-next-line @eevee/max-len
    !isNaN(str as any) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}
