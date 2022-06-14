function display(val) {
  document.getElementById("result").value += val;
  return val;
}

function solve() {
  let x = document.getElementById("result").value;

  if (x.includes("^")) {
    y = power(x);
  } else if (x.includes("mod")) {
    y = mod(x);
  } else if (x.includes("sqrt")) {
    y = sqrt(x);
  } else if (x.includes("cbrt")) {
    y = cbrt(x);
  } else if (x.includes("log")) {
    y = log(x);
  } else {
    y = eval(x);
  }
  document.getElementById("result").value = y;
  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function log(x) {
  let result = x.split("log");
  y = Math.log(result[0]);
  document.getElementById("result").value = y;
  return y;
}

function sqrt(x) {
  let result = x.split("sqrt");
  y = Math.sqrt(result[0]);
  document.getElementById("result").value = y;
  return y;
}

function cbrt(x) {
  let result = x.split("cbrt");
  y = Math.cbrt(result[0]);
  document.getElementById("result").value = y;
  return y;
}

function del() {
  let x = document.getElementById("result").value;
  document.getElementById("result").value = x.slice(0, -1);
}

function mod(x) {
  let result = x.split("mod");
  y = Math.abs(result[0]);
  document.getElementById("result").value = y;
  return y;
}

function power(x) {
  let result = x.split("^");
  let base = parseInt(result[0]);
  let power = parseInt(result[1]);
  y = Math.pow(base, power);
  return y;
}

