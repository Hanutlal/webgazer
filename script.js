
window.onload = function() {
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        var x = data.x; 
        var y = data.y;

        drawGaze(x, y);
    }).begin()
    .then(() => {
        console.log("WebGazer started successfully");
    })
    .catch((err) => {
        console.error("Error starting WebGazer:", err);
    });

    function drawGaze(x, y) {
        var canvas = document.getElementById('gazeCanvas');
        var context = canvas.getContext('2d');
        
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI, false);
        context.fillStyle = 'red';
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();
    }
};
