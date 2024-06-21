/**
 * @example
 * set(#Array<#Sequence10>)
 * // new Set([1,2,3])
 */
module.exports.set = (numbers) => new Set(numbers)
/**
 * @example
 * map(#Array<#Sequence10>)
 * // new Map([["n", [1,2,3,4,5,6,7,8,9,10]]])
 */
module.exports.map = (numbers) => new Map([['n', numbers]])
/**
 * @example
 * fn(#Array<#Sequence10>)
 * // new Map([["n", [1,2,3,4,5,6,7,8,9,10]]])
 */
module.exports.fn = (numbers) => (x, y, z) => {
  return numbers
}
