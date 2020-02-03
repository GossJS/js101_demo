import moment from 'moment';
import id from './id.js';
import custom from './custom.js';

const mom = function mom(f = id, time) {
  const r = time ? ' HH:mm:ss' : '';
  const result = moment().format(`DD.MM.YYYY${r}`);
  f = f ?? id;
  return f(result);
};

console.log(mom(custom, true));
console.log(mom(null));
