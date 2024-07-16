document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('artCanvas');
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = -11000;

    // Draw an ellipse
    function drawEllipse(x, y, radiusX, radiusY, rotation, color) {
        var rotationRadians = rotation * Math.PI / 180;
        ctx.beginPath();
        // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, [anticlockwise]);
        ctx.ellipse(x, y, radiusX, radiusY, rotationRadians, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawRect(x, y, width, height, rotation) {
        var canvas = document.getElementById('artCanvas');
        var ctx = canvas.getContext('2d');
    
        // Convert degrees to radians
        var radians = rotation * Math.PI / 180;
    
        // Move the origin to the center of the rectangle
        ctx.translate(x + width / 2, y + height / 2);
    
        // Rotate the canvas
        ctx.rotate(radians);
    
        // Draw the rectangle around the new origin
        ctx.beginPath();
        ctx.rect(-width / 2, -height / 2, width, height);
        ctx.fillStyle = 'red'; // Set the fill color or make it a parameter
        ctx.fill();
    
        // Reset the transformation matrix to the identity (no transformation)
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    function drawLine(x1, y1, x2, y2, color, width) {
        var canvas = document.getElementById('artCanvas');
        var ctx = canvas.getContext('2d');
        
        ctx.beginPath(); // Begin the drawing path
        ctx.moveTo(x1, y1); // Starting point of the line
        ctx.lineTo(x2, y2); // Ending point of the line
        ctx.strokeStyle = color; // Color of the line
        ctx.lineWidth = width; // Thickness of the line
        ctx.stroke(); // Draw the line
    }

    function drawArc(x, y, radius, startAngle, endAngle, color) {
        var canvas = document.getElementById('artCanvas');
        var ctx = canvas.getContext('2d');
    
        // Convert degrees to radians
        var startAngleRadians = startAngle * Math.PI / 180;
        var endAngleRadians = endAngle * Math.PI / 180;
    
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngleRadians, endAngleRadians);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawPolygon(points, color) {
        var ctx = document.getElementById('artCanvas').getContext('2d');
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for(var i = 1; i < points.length; i++) {
            ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.closePath(); // Closes the path to create a filled shape
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawText(message, x, y, color, font) {
        var ctx = document.getElementById('artCanvas').getContext('2d');
        ctx.font = font || "30px Arial";
        ctx.fillStyle = color;
        ctx.fillText(message, x, y);
    }


    
});


