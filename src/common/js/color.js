export function rgbToHex(rgb) {
  // rgb(x, y, z)
  const color = rgb.toString().match(/\d+/g); // 把 x,y,z 推送到 color 数组里
  let hex = '#';

  for (let i = 0; i < 3; i += 1) {
    // 'Number.toString(16)' 是JS默认能实现转换成16进制数的方法.
    // 'color[i]' 是数组，要转换成字符串.
    // 如果结果是一位数，就在前面补零。例如： A变成0A
    hex += `0${Number(color[i]).toString(16)}`.slice(-2);
  }
  return hex;
}

export function hexToRgb(h) {
  const color = [];
  const rgb = [];
  let hex = h.replace(/#/, '');

  if (hex.length === 3) {
    // 处理 "#abc" 成 "#aabbcc"
    const tmp = [];
    for (let i = 0; i < 3; i += 1) {
      tmp.push(hex.charAt(i) + hex.charAt(i));
    }
    hex = tmp.join('');
  }

  for (let i = 0; i < 3; i += 1) {
    color[i] = `0x${hex.substr(i * 2, 2)}`;
    rgb.push(parseInt(Number(color[i]), 0));
  }
  return rgb;
}

export const info = '#769fcd';
export const warning = '#fafe7b';
export const error = '#fc5050';
export const successç = '#21e7b6Ç';
