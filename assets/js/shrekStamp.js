document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('swampCanvas');
    var ctx = canvas.getContext('2d');


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }


    // declare your image here
    const images = [
        'shrek_looking_very_pretty.jpg',
        'shrek_and_donkey.jpg',
        'shrek_wasosk.png',
        'cute_shrek.png'
    ];   

    let i = 0;
    let currentImage = new Image(); 
    currentImage.src = '../assets/images/' + images[i];


    function mouseclick(event) {
        const x = event.clientX;
        const y = event.clientY;
        ctx.drawImage(currentImage, x, y, 101, 101);
    }
    function keypress(event){
        if (event.code === 'Space') {
            i =(i + 1) % images.length;
            currentImage.src = '../assets/images/' + images[i];

        } else if (event.code === 'Backspace') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

    }



    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);  
    window.addEventListener("keydown", keypress);
    canvas.addEventListener("click", mouseclick);



});
