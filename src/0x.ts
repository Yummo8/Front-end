export function round(value: number, precision: number) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export function formatNumber(inputNumber: number): string {
  var ret = inputNumber.toString();
  var expr = /\B(?=(\d{3})+(?!\d))/g;
  if (ret.indexOf('.') === -1) {
    ret = ret.replace(expr, ',');
  } else {
    var split = ret.split('.');
    var left = split[0].replace(expr, ',');
    var right = split[1];
    if (right.length === 1 && right !== '0') {
      right += '0';
    }

    ret = `${left}.${right}`;
  }

  return ret;
}

export function roundAndFormatNumber(value: number, precision: number): string {
  var ret = '';

  var rounded = round(value, precision);
  var formatted = formatNumber(rounded);
  ret = formatted;

  return ret;
}
