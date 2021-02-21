document.addEventListener("DOMContentLoaded", function(){
    const canvasEle = document.getElementById("mycanvas");
    canvasEle.width = 500;
    canvasEle.height = 500;
    const ctx = canvasEle.getContext("2d");
    ctx.fillStyle = "lavender";
    ctx.fillRect(0, 0, 500, 500);


    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();


    var context = canvasEle.getContext("2d");
    canvasEle.x = 150;
    canvasEle.y = 150;
    var w = 200, h = 200;
    context.strokeStyle = "#black";
    context.strokeWeight = 3;
    context.shadowOffsetX = 4.0;
    context.shadowOffsetY = 4.0;
    context.lineWidth = 10.0;
    context.fillStyle = "lavender";
    var d = Math.min(w, h);
    var k = 120;
    context.moveTo(k, k + d / 4);
    context.quadraticCurveTo(k, k, k + d / 4, k);
    context.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
    context.quadraticCurveTo(k + d / 2, k, k + d * 3 / 4, k);
    context.quadraticCurveTo(k + d, k, k + d, k + d / 4);
    context.quadraticCurveTo(k + d, k + d / 2, k + d * 3 / 4, k + d * 3 / 4);
    context.lineTo(k + d / 2, k + d);
    context.lineTo(k + d / 4, k + d * 3 / 4);
    context.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
    context.stroke();
    context.fill();
});
