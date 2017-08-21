export function saveToLocal(id, key, value) {
  let italker = window.localStorage.__italker__;
  if (!italker) {
    italker = {};
    italker[id] = {};
  } else {
    italker = JSON.parse(italker);
    if (!italker[id]) {
      italker[id] = {};
    }
  }
  italker[id][key] = value;
  window.localStorage.__italker__ = JSON.stringify(italker);
}

export function loadFromLocal(id, key, def) {
  let italker = window.localStorage.__italker__;
  if (!italker) {
    return def;
  }
  italker = JSON.parse(italker)[id];
  if (!italker) {
    return def;
  }
  const ret = italker[key];
  return ret || def;
}

export function saveToken(token) {
  let italker = window.localStorage.__italker__;
  if (!italker) {
    italker = {};
  } else {
    italker = JSON.parse(italker);
  }
  italker.user = token;
  window.localStorage.__italker__ = JSON.stringify(italker);
}

export function loadToken() {
  let italker = window.localStorage.__italker__;
  if (!italker) return null;
  italker = JSON.parse(italker);
  return italker.user;
}
