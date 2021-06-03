/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function removeClass (element, className) {
  if (!element || !className) {
    return false;
  }
  const classList = [...element.classList];
  if (classList.includes(className)) {
    element.classList.remove(className);
  }
}
/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function addClass (element, className) {
  if (!element || !className) {
    return false;
  }
  const classList = [...element.classList];
  if (!classList.includes(className)) {
    element.classList.add(className);
  }
}
/**
 * 获取数据类型
 * @param {All} [o] 需要检测的数据
 * @returns {String}
 */
export function getType (o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}

/**
 * 判断是否是指定数据类型
 * @param {All} [o] 需要检测的数据
 * @param {String} [type] 数据类型
 * @returns {Boolean}
 */
export function isKeyType (o, type) {
  return getType(o).toLowerCase() === type.toLowerCase();
}
