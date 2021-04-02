let switchButton = document.getElementById('switchButton');
let bulbImage = document.getElementById('bulb');
let turnedOn = true
function turnOnOff() {
    if(turnedOn) {
        bulbImage.src = 'off.jpg';
        switchButton.innerHTML = 'ON';
        turnedOn = false;
    }
    else if (!turnedOn) {
        bulbImage.src = 'on.jpg';
        switchButton.innerHTML = 'OFF';
        turnedOn = true;
    }
}
