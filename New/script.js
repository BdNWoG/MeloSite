document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('backgroundCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Make sure the canvas covers the full screen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Fill the canvas with a solid color
        ctx.fillStyle = 'rgb(200, 200, 200)'; // A light grey background
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
});
