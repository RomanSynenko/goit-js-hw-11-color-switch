const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548']
const refs = {
    bodyRef: document.querySelector('body'),
    startRef: document.querySelector('button[data-action = "start"]'),
    stopRef: document.querySelector('button[data-action="stop"]')
}
const { bodyRef, startRef, stopRef } = refs;
let intervalID = null;
const setRandomColor = () => {
    const max = colors.length - 1;
    const backgroundColor = colors[randomIntegerFromInterval(0, max)];
    bodyRef.style.backgroundColor = backgroundColor;
};
const switchColor = ({ target }) => {
    target.disabled = true;
    intervalID = setInterval(setRandomColor, 1000);
    console.log(target)
};
const switchStop = () => {
    startRef.disabled = false;
    clearInterval(intervalID);
    bodyRef.style.backgroundColor = colors[0];
};
startRef.addEventListener('click', switchColor);
stopRef.addEventListener('click', switchStop);
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};