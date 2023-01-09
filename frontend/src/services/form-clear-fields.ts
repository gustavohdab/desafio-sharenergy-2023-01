/**
 * This function takes 6 functions as arguments and calls each of them with an empty string as the
 * argument.
 * @param {Function} setName - Function
 * @param {Function} setEmail - Function
 * @param {Function} setPassword - Function
 * @param {Function} setPhone - Function
 * @param {Function} setAddress - Function
 * @param {Function} setCpf - Function
 */
export function clearFields(
  setName: Function,
  setEmail: Function,
  setPhone: Function,
  setAddress: Function,
  setCpf: Function
) {
  setName("");
  setEmail("");
  setPhone("");
  setAddress("");
  setCpf("");
}
