/*
 * @Author: inRush
 * @Date: 2017-08-18 22:28:08
 * @Last Modified by: inRush
 * @Last Modified time: 2017-08-20 11:32:46
 */

export function hasClass(el, className) {
  const reg = new RegExp('(^|\\s)'.concat(className).concat('(\\s|$)'));
  return reg.test(el.className);
}
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }
  const newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}

export function domData(el, name, val) {
  const prefix = 'data-';
  name = prefix.concat(name);
  if (val) {
    return el.setAttribute(name, val);
  }
  return el.getAttribute(name);
}

const elementStyle = document.createElement('div').style;

const vendor = (() => {
  const transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transfor',
  };

  for (const key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
})();

export function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }
  if (vendor === 'standard') {
    return style;
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
