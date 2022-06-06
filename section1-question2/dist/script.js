const list = document.getElementsByClassName("container")[0];
list.style.setProperty('display', 'flex');
list.style.setProperty('flex-direction', 'column');
list.style.setProperty('height', '100%');

const blackDot = list.getElementsByClassName("black-dot")[0];
blackDot.style.setProperty('background-color', 'black', 'important');
blackDot.style.setProperty('margin', 'auto');

const content = list.getElementsByClassName("content")[0];
content.style.setProperty('height', '100%');
content.style.setProperty('display', 'flex');