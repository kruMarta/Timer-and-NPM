const time = document.getElementById('time');

function add() {
  time.innerHTML = parseInt(time.textContent, 10) + 1;
}

function sub() {
  if (parseInt(time.textContent, 10) > 1) {
    time.innerHTML = parseInt(time.textContent, 10) - 1;
  }
}

function startCount() {
  const toHide = document.getElementsByClassName('hide');
  for (let i = 0; i < toHide.length; i++) {
    const element = toHide[i];
    element.style.opacity = '0';
  }

  const text = document.getElementById('change');
  text.innerHTML = 'Залишилось: ';

  const targetDuration = moment.duration(parseInt(time.textContent, 10), 'minutes');

  const finalTime = moment().add(targetDuration);
  const timer = setInterval(function runTimer() {
    const currentTime = moment();
    const remainingTime = moment.duration(finalTime.diff(currentTime));

    if (remainingTime.minutes() === 0 && remainingTime.seconds() === 0) {
      clearInterval(timer);
    } else {
      time.innerHTML = remainingTime.minutes() + ' : ' + remainingTime.seconds();
    }
  }, 990);
}
