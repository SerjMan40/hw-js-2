// Home-work 2.

var userObj = {
  firstName: 'Sergey',
  lastName: 'Manuylov',
  age: 40,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

var defUpperStr = (a) => {
  return (a || 'DEFAULT TEXT').toUpperCase();
};

var evenFn = (n) => {
  var arr = [];
  for (var i = 2; i <= n; i += 2) {
    arr.push(i);
  }
  return arr;
};

var weekFn = (n) => {
  switch (n) {
    case 1:
      return 'Понедельник';
      break;
    case 2:
      return 'Вторник';
      break;
    case 3:
      return 'Среда';
      break;
    case 4:
      return 'Четверг';
      break;
    case 5:
      return 'Пятница';
      break;
    case 6:
      return 'Суббота';
      break;
    case 7:
      return 'Воскресенье';
      break;
    default:
      return null;
  }
};
var ageClassification = (n) => {
  return n < 0
    ? null
    : n >= 0 && n <= 24
    ? 'детский возраст'
    : n > 24 && n <= 44
    ? 'молодой возраст'
    : n > 44 && n <= 65
    ? 'средний возраст'
    : n > 65 && n <= 75
    ? 'пожилой возраст'
    : n > 75 && n <= 90
    ? 'старческий возраст'
    : n > 90 && n <= 122
    ? 'долгожители'
    : null;
};

var oddFn = (n) => {
  var iter = 1;
  var arr = [];
  while (iter <= n) {
    if (iter % 2 !== 0) {
      arr.push(iter);
    }
    iter += 1;
  }
  return arr;
};

function mainFunc(a, b, func) {
  if (typeof func !== 'function') {
    return false;
  } else {
    return func(a, b);
  }
}
function cbRandom(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function cbPow(a, b) {
  return a ** b;
}

function cbAdd(a, b) {
  return a + b;
}
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, cbRandom));
