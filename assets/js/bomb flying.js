document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('hyruleCanvas');
    var ctx = canvas.getContext('2d');


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }


    // declare your image here
    var booooom = new Image;
    booooom.src = "../assets/images/booooom.png";
    var booooomX = 0,  booooomY = 0;
    var speedX = 50, speedY =50;

    // draw your animation here
    function draw() {
        ctx.drawImage(booooom, booooomX, booooomY, 100, 100);
        
        if (booooomY < 0 || booooomY > canvas.height){
            speedY *=-1;
        }
        if (booooomX < 0 || booooomX > canvas.width){
            speedX *=-1;
        }

        booooomX += speedX;
        booooomY += speedY;
    }

    function animate() {
        requestAnimationFrame(animate);
        draw();
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    

});

