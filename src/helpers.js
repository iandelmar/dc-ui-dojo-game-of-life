export function stringify(array) {
  return array
    .map(row => row.join(''))
    .join('\n');
}

export function arrayify(string) {
  return string
    .trim()
    .split('\n')
    .map(
      row => row
        .split('')
        .filter(a => !a.match(/\s/))
    );
}

export function randomArray(width, height, probability) {
    var arr = [];
    for (var i = 0 ; i < width; i++) {
        arr[i] = [];
        for (var j = 0; j < height; j++) {
            arr[i][j] = String(Math.random() * (Math.random() * (probability + 1)) | 0);
        }
    }
    return arr;
}
