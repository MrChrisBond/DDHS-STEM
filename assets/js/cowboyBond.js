document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('artCanvas');
    var ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    var face = new Image();
    face.src = "../assets/images/cowboy.png";
    var faceX = 0, faceY = 0;
    var speedX = 50, speedY = 50;
    
    function draw() {
        ctx.drawImage(face, faceX, faceY, 100, 100);
            
        if ( faceX < 0 || faceX > canvas.width ){ 
            speedX = 0 - speedX * 1.1;
        }
        if ( faceY < 0 || faceY > canvas.height ){ 
            speedY = 0 - speedY * 1.1;
        }
        faceX += speedX;
        faceY += speedY;
    }
    
    function animate() {
        requestAnimationFrame(animate);
        draw();
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();    
});
