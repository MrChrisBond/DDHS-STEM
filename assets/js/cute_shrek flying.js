document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('swampCanvas');
    var ctx = canvas.getContext('2d');


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }


    // declare your image here
    var shrek = new Image;
    shrek.src = "../assets/images/cute_shrek.png"
    var shrekX = Math.random() * window.innerWidth, shrekY = Math.random() * window.innerHeight;
    var speedX =20, speedY = 20;
    
    document.addEventListener("mousemove",mouseMoveHanlder);
    function mouseMoveHanlder() {

        

    }

    // test
    console.log(canvas.width);
    console.log(canvas.height)

    // draw your animation here
    function draw() {
        ctx.drawImage(shrek, shrekX, shrekY, 100,100);
        if (shrekX < 0 || shrekX > canvas.width){
            speedX *= -1;
        }
        if (shrekY < 0 || shrekY > canvas.height){
            speedY *= -1;
        }
        shrekX += speedX;
        shrekY += speedY;


    }


    function animate() {
        requestAnimationFrame(animate);
        draw();
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    


    
});
