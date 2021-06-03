class Storage {
  constructor (type = 'localStorage') {
    this.type = type;
  }

  set (key, val) {
    let value;
    if (typeof key === 'object' && typeof key === 'function') {
      console.error('key值非法');
      return;
    }
    if (typeof val === 'object' && val !== null) {
      value = JSON.stringify(val);
    } else {
      value = val;
    }
    console.log(val);
    console.log('set', value);
    window[this.type].setItem(key, value);
  }

  get (key) {
    if (typeof key === 'object' && typeof key === 'function') {
      console.error('key值非法');
      return;
    }
    let val = window[this.type].getItem(key);
    try {
      if (val + '' !== 'null' && val + '' !== 'undefined') {
        val = JSON.parse(val);
      }
    } catch (e) {
      console.error(e);
    }
    return val;
  }

  remove (key) {
    window[this.type].removeItem(key);
  }

  clear () {
    window[this.type].clear();
  }
}
export const lStorege = new Storage();
export default Storage;
