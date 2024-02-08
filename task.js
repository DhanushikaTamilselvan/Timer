const btn = document.getElementById('startStopBtn');
let timerSec = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(function () {
    timerSec++;
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  const task = document.getElementById('task').value;
  const description = document.getElementById('description').value;
  const time = formatTime(timerSec);
  const date = document.getElementById('date').value;
  addLogItem(task, description, time, date);
  document.getElementById('task').value = '';
  document.getElementById('description').value = '';
  document.getElementById('date').value = '';
  resetTimer();
}

function toggleTimer() {
  if (btn.textContent === 'Start') {
    btn.textContent = 'Stop';
    btn.style.backgroundColor = 'red';
    startTimer();
  }
   else {
    btn.textContent = 'Start';
    btn.style.backgroundColor = 'green';
    stopTimer();
    
  }
}

function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = formatTime(timerSec);
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

function pad(num) {
  return num < 10 ? '0' + num : num;
}

function addLogItem(task, description, time, date) {
  const logContainer = document.getElementById('log');

  const logItem = document.createElement('div');
  logItem.classList.add('log-item');

  const taskElement = document.createElement('div');
  taskElement.textContent = task;

  const descriptionElement = document.createElement('div');
  descriptionElement.textContent = description;

  const timeElement = document.createElement('div');
  timeElement.textContent = time;

  const dateElement = document.createElement('div');
  dateElement.textContent = date;
  
  logItem.appendChild(taskElement);
  logItem.appendChild(descriptionElement);
  logItem.appendChild(timeElement);
  logItem.appendChild(dateElement);

  logContainer.appendChild(logItem);
}

function resetTimer() {
  timerSec = 0;
  updateTimer();
}

btn.addEventListener('click',toggleTimer)
