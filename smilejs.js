/**
 * Created by Пользователь on 06.06.2015.
 */

var canvas = document.querySelector('#canva_1');
ctx = canvas.getContext('2d');

var gradient_rad = ctx.createRadialGradient(0, 0, 0, 0, 0, 100);
gradient_rad.addColorStop(0, 'yellow');
gradient_rad.addColorStop(1, 'orange');

var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, 'lightblue');
gradient.addColorStop(1, 'silver');


function drawSmile() {
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = gradient_rad;
    ctx.fill();

    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.arc(-40, -40, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(30, -40, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 20, 50, 0, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -20);
    ctx.lineTo(-10, 10);
    ctx.lineTo(0, 20);
    ctx.stroke();
}

star = {
    x: 100,
    y: 300,
    r: 0
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'maroon';
    ctx.fillText('Tagedo', canvas.width-70, canvas.height-20);

    ctx.save();
    ctx.translate(star.x, star.y);
    ctx.rotate(star.r * 4);
    drawSmile();
    ctx.restore();

    star.r += 1 * Math.PI / 180;
    if (star.x == 1100) {
        star.x = 100;
    } else {
        star.x = star.x + 10;
    }
}

setInterval(draw, 70);



