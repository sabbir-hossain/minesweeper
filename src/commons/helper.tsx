export function findAdjacent(_data: any[], a: number, b: number) {
  let count = 0;

  // top left
  if (
    _data[a - 1] &&
    _data[a - 1][b - 1] &&
    (_data[a - 1][b - 1] === -1 || _data[a - 1][b - 1].value === -1)
  ) {
    count += 1;
  }

  // top middle
  if (
    _data[a][b - 1] &&
    (_data[a][b - 1] === -1 || _data[a][b - 1].value === -1)
  ) {
    count++;
  }

  // top right
  if (
    _data[a + 1] &&
    _data[a + 1][b - 1] &&
    (_data[a + 1][b - 1] === -1 || _data[a + 1][b - 1].value === -1)
  ) {
    count++;
  }

  // middle left
  if (
    _data[a - 1] &&
    _data[a - 1][b] &&
    (_data[a - 1][b] === -1 || _data[a - 1][b].value === -1)
  ) {
    count++;
  }

  // middle right
  if (
    _data[a][b + 1] &&
    (_data[a][b + 1] === -1 || _data[a][b + 1].value === -1)
  ) {
    count++;
  }

  // bottom left
  if (
    _data[a - 1] &&
    _data[a - 1][b + 1] &&
    (_data[a - 1][b + 1] === -1 || _data[a - 1][b + 1].value === -1)
  ) {
    count++;
  }

  // bottom middle
  if (
    _data[a + 1] &&
    _data[a + 1][b] &&
    (_data[a + 1][b] === -1 || _data[a + 1][b].value === -1)
  ) {
    count++;
  }

  // bottom right
  if (
    _data[a + 1] &&
    _data[a + 1][b + 1] &&
    (_data[a + 1][b + 1] === -1 || _data[a + 1][b + 1].value === -1)
  ) {
    count++;
  }

  _data[a][b] = {
    value: count,
    cls: "range-0",
    display: "",
  };

  return _data;
}

export function showAdjacent(_data: any[], a: number, b: number) {
  if (_data[a][b] === -1 || _data[a][b].value === -1) {
    return _data;
  }
  const displayValue = _data[a][b].value !== 0 ? _data[a][b].value : "-";
  _data[a][b] = {
    value: _data[a][b].value,
    cls: displayValue !== "" ? `range-${_data[a][b].value}` : "range-0",
    display: displayValue,
  };

  // top left
  if (_data[a - 1] && _data[a - 1][b - 1] && _data[a - 1][b - 1].value !== -1) {
    _data[a - 1][b].cls = `range-${_data[a - 1][b].value}`;
    _data[a - 1][b].display = _data[a - 1][b].value
      ? _data[a - 1][b].value
      : "-";
  }

  // top middle
  if (_data[a][b - 1] && _data[a][b - 1].value !== -1) {
    _data[a][b - 1].cls = `range-${_data[a][b - 1].value}`;
    _data[a][b - 1].display = _data[a][b - 1].value
      ? _data[a][b - 1].value
      : "-";
  }

  // top right
  if (_data[a + 1] && _data[a + 1][b - 1] && _data[a + 1][b - 1].value !== -1) {
    _data[a + 1][b - 1].cls = `range-${_data[a + 1][b - 1].value}`;
    _data[a + 1][b - 1].display = _data[a + 1][b - 1].value
      ? _data[a + 1][b - 1].value
      : "-";
  }

  // middle left
  if (_data[a - 1] && _data[a - 1][b] && _data[a - 1][b].value !== -1) {
    _data[a - 1][b].cls = `range-${_data[a - 1][b].value}`;
    _data[a - 1][b].display = _data[a - 1][b].value
      ? _data[a - 1][b].value
      : "-";
  }

  // middle right
  if (_data[a][b + 1] && _data[a][b + 1].value !== -1) {
    _data[a][b + 1].cls = `range-${_data[a][b + 1].value}`;
    _data[a][b + 1].display = _data[a][b + 1].value
      ? _data[a][b + 1].value
      : "-";
  }

  // bottom left
  if (_data[a - 1] && _data[a - 1][b + 1] && _data[a - 1][b + 1].value !== -1) {
    _data[a - 1][b + 1].cls = `range-${_data[a - 1][b + 1].value}`;
    _data[a - 1][b + 1].display = _data[a - 1][b + 1].value
      ? _data[a - 1][b + 1].value
      : "-";
  }

  // bottom middle
  if (_data[a + 1] && _data[a + 1][b] && _data[a + 1][b].value !== -1) {
    _data[a + 1][b].cls = `range-${_data[a + 1][b].value}`;
    _data[a + 1][b].display =
      _data[a + 1][b].value !== 0 ? _data[a + 1][b].value : "-";
  }

  // bottom right
  if (_data[a + 1] && _data[a + 1][b + 1] && _data[a + 1][b + 1].value !== -1) {
    _data[a + 1][b + 1].cls = `range-${_data[a + 1][b + 1].value}`;
    _data[a + 1][b + 1].display = _data[a + 1][b + 1].value
      ? _data[a + 1][b + 1].value
      : "-";
  }

  return _data;
}

export function processData(_data: any, status: string = "") {
  let mineCounter = 0;
  for (let i = 0; i < _data.length; i++) {
    for (let j = 0; j < _data[i].length; j++) {
      if (_data[i][j] === -1 || _data[i][j].value === -1) {
        mineCounter++;
        _data[i][j] = {
          value: -1,
          cls: "range-0",
          display:
            status === "failed"
              ? "show_mine"
              : status === "success"
              ? "show_flag"
              : "",
        };
      } else if (status !== "") {
        _data[i][j] = {
          value: -1,
          cls: "range-0",
          display: "",
        };
      } else {
        findAdjacent(_data, i, j);
      }
    }
  }

  return { mineCounter, data: _data };
}

export function generateTimer(
  startTime: number,
  currentTime: number,
  totalTime: number
) {
  const timeDiff = currentTime - startTime;
  const remainingTime = (totalTime - timeDiff) / 1000;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);
  return { minutes, seconds, remainingTime: Math.floor(remainingTime) };
}

export function getRemainingTime(
  startTime: number,
  currentTime: number,
  totalTime: number
) {
  const timeDiff = currentTime - startTime;
  return Math.floor((totalTime - timeDiff) / 1000);
}
