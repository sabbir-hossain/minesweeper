export function findAdjacent(_data: any[], a: number, b: number) {
  if (_data[a][b] === -1 || _data[a][b].value === -1) {
    _data[a][b] = {
      value: -1,
      cls: 'range-0',
      // display: '.'
      display: ''
    };
    return _data;
  }

  let count = 0;

  // top left
  if (_data[a - 1] && _data[a - 1][b - 1] && (_data[a - 1][b - 1] === -1 || _data[a - 1][b - 1].value === -1)) {
    count++;
  }

  // top middle
  if (_data[a][b - 1] && (_data[a][b - 1] === -1 || _data[a][b - 1].value === -1)) {
    count++;
  }

  // top right
  if (_data[a + 1] && _data[a + 1][b - 1] && (_data[a + 1][b - 1] === -1 || _data[a + 1][b - 1].value === -1)) {
    count++;
  }

  // middle left
  if (_data[a - 1] && _data[a - 1][b] && (_data[a - 1][b] === -1 || _data[a - 1][b].value === -1)) {
    count++;
  }

  // middle right
  if (_data[a][b + 1] && (_data[a][b + 1] === -1 || _data[a][b + 1].value === -1)) {
    count++;
  }

  // bottom left
  if (_data[a - 1] && _data[a - 1][b + 1] && (_data[a - 1][b + 1] === -1 || _data[a - 1][b + 1].value === -1)) {
    count++;
  }

  // bottom middle
  if (_data[a + 1] && _data[a + 1][b] && (_data[a + 1][b] === -1 || _data[a + 1][b].value === -1)) {
    count++;
  }

  // bottom right
  if (_data[a + 1] && _data[a + 1][b + 1] && (_data[a + 1][b + 1] === -1 || _data[a + 1][b + 1].value === -1)) {
    count++;
  }

  _data[a][b] = {
    value: count,
    cls: 'range-0',
    display: ''
    // display: '.'
  };

  return _data;
}

export function showAdjacent(_data: any[], a: number, b: number) {
  if (_data[a][b] === -1 || _data[a][b].value === -1) {
    return _data;
  }

  _data[a][b] = {
    value: _data[a][b].value,
    cls: `range-${_data[a][b].value}`,
    display: _data[a][b].value
  };

  // top left
  if (_data[a - 1] && _data[a - 1][b - 1] && _data[a - 1][b - 1].value !== -1) {
    _data[a - 1][b].cls = `range-${_data[a - 1][b].value}`;
    _data[a - 1][b].display = _data[a - 1][b].value;
  }

  // top middle
  if (_data[a][b - 1] && _data[a][b - 1].value !== -1) {
    _data[a][b - 1].cls = `range-${_data[a][b - 1].value}`;
    _data[a][b - 1].display = _data[a][b - 1].value;
  }

  // top right
  if (_data[a + 1] && _data[a + 1][b - 1] && _data[a + 1][b - 1].value !== -1) {
    _data[a + 1][b - 1].cls = `range-${_data[a + 1][b - 1].value}`;
    _data[a + 1][b - 1].display = _data[a + 1][b - 1].value;
  }

  // middle left
  if (_data[a - 1] && _data[a - 1][b] && _data[a - 1][b].value !== -1) {
    _data[a - 1][b].cls = `range-${_data[a - 1][b].value}`;
    _data[a - 1][b].display = _data[a - 1][b].value;
  }

  // middle right
  if (_data[a][b + 1] && _data[a][b + 1].value !== -1) {
    _data[a][b + 1].cls = `range-${_data[a][b + 1].value}`;
    _data[a][b + 1].display = _data[a][b + 1].value;
  }

  // bottom left
  if (_data[a - 1] && _data[a - 1][b + 1] && _data[a - 1][b + 1].value !== -1) {
    _data[a - 1][b + 1].cls = `range-${_data[a - 1][b + 1].value}`;
    _data[a - 1][b + 1].display = _data[a - 1][b + 1].value;
  }

  // bottom middle
  if (_data[a + 1] && _data[a + 1][b] && _data[a + 1][b].value !== -1) {
    _data[a + 1][b].cls = `range-${_data[a + 1][b].value}`;
    _data[a + 1][b].display = _data[a + 1][b].value;
  }

  // bottom right
  if (_data[a + 1] && _data[a + 1][b + 1] && _data[a + 1][b + 1].value !== -1) {
    _data[a + 1][b + 1].cls = `range-${_data[a + 1][b + 1].value}`;
    _data[a + 1][b + 1].display = _data[a + 1][b + 1].value;
  }

  return _data;
}

export function processData(_data: any) {
  for (let i = 0; i < _data.length; i++) {
    for (let j = 0; j < _data[i].length; j++) {
      findAdjacent(_data, i, j);
    }
  }

  return _data;
}

export function generateTimer(startTime: number, currentTime: number, totalTime: number) {
  const timeDiff = currentTime - startTime;
  const remainingTime = (totalTime - timeDiff) / 1000;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);
  return { minutes, seconds };
}

export function getRemainingTime(startTime: number, currentTime: number, totalTime: number) {
  const timeDiff = currentTime - startTime;
  return (totalTime - timeDiff) / 1000;
}
