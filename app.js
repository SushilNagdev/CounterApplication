document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const counterDisplay = document.getElementById('counter');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');
    const increaseBtn = document.getElementById('increase');

    const updateCounter = () => {
        counterDisplay.textContent = counter;
    };

    decreaseBtn.addEventListener('click', () => {
        counter--;
        updateCounter();
    });

    resetBtn.addEventListener('click', () => {
        counter = 0;
        updateCounter();
    });

    increaseBtn.addEventListener('click', () => {
        counter++;
        updateCounter();
    });
});
