/**
 * Here's a similar RFC4122 version 4 compliant solution that solves that issue by offsetting the
 * first 13 hex numbers by a hex portion of the timestamp. That way, even if Math.random is on the
 * same seed, both clients would have to generate the UUID at the exact same millisecond (or 10,000+
 * years later) to get the same UUID
 * ref: https://stackoverflow.com/a/8809472
 * @return {String} - guid
 */
export function guid() {
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
