document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('artCanvas');
    var ctx = canvas.getContext('2d');


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }


    const images = [
        'borf bleech good.png',
        'slay lite fury.png',
        'hooky good.png',
        'toth.png'
    ];
 
    let i = 0;
    let currentImage = new Image();
    currentImage.src = 'images/' + images[i];

    function mouseclick(event) {
        const x = event.clientX-75;
        const y = event.clientY-75;
        ctx.drawImage(currentImage, x, y, 150, 150);
    }

    function keypress(event) {
        if (event.code === 'Space') {
            i = (i + 1) % images.length;
            currentImage.src = 'images/' + images[i];
        } else if (event.code === 'Backspace') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('keydown', keypress);
    canvas.addEventListener('click', mouseclick);
    

});
