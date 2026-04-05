const balloon = document.getElementById('balloon');
let currentSize = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0; // 0 = red, 1 = green, 2 = blue

function updateBalloon() {
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}
balloon.addEventListener('click', () => {
    currentSize += 10;
    
    if (currentSize > 1000) {
        currentSize = 200;
    }
    colorIndex = (colorIndex + 1) % colors.length;
    
    updateBalloon();
});
balloon.addEventListener('mouseleave', () => {
    if (currentSize > 200) {
        currentSize -= 5;
    }
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    
    updateBalloon();
});