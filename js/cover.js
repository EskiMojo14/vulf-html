var canvas = document.getElementById('cover-canvas');

var container = document.getElementById('cover-container')

var coverSize = container.offsetWidth;
canvas.width = coverSize + 40;
canvas.height = coverSize + 20;

var ctx = canvas.getContext('2d');

var scale = coverSize / 512;

var canvasDupe = document.createElement('canvas');
canvasDupe.width = canvas.width;
canvasDupe.height = canvas.height;
canvasDupeCtx = canvasDupe.getContext('2d');

var canvasOffset = document.createElement('canvas');
canvasOffset.width = canvas.width;
canvasOffset.height = canvas.height;
canvasOffsetCtx = canvasOffset.getContext('2d');

var canvasOffset2 = document.createElement('canvas');
canvasOffset2.width = canvas.width;
canvasOffset2.height = canvas.height;
canvasOffsetCtx2 = canvasOffset2.getContext('2d');

function drawCover(src) {

    var img = document.createElement('IMG');

    img.onload = function() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvasDupeCtx.clearRect(0, 0, canvas.width, canvas.height);
        canvasOffsetCtx.clearRect(0, 0, canvas.width, canvas.height);
        canvasOffsetCtx2.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.save();
        
        ctx.beginPath();
        ctx.moveTo(192.5 * scale , 4.5 * scale) 
        ctx.lineTo(411.5 * scale , 4.5 * scale) 
        ctx.lineTo(506.5 * scale , 33.5 * scale) 
        ctx.lineTo(501.5 * scale , 262.5 * scale) 
        ctx.lineTo(506.5 * scale , 483.5 * scale) 
        ctx.lineTo(435.5 * scale , 502.5 * scale) 
        ctx.lineTo(264.5 * scale , 490.5 * scale) 
        ctx.lineTo(117.5 * scale , 506.5 * scale) 
        ctx.lineTo(20.5 * scale , 493.5 * scale) 
        ctx.lineTo(29.5 * scale , 410.5 * scale) 
        ctx.lineTo(19.5 * scale , 233.5 * scale) 
        ctx.lineTo(44.5 * scale , 118.5 * scale) 
        ctx.lineTo(27.5 * scale , 34.5 * scale)
        ctx.closePath();

        ctx.clip();

        ctx.drawImage(img, 0, 0, coverSize, coverSize);

        ctx.restore();
    
        canvasDupeCtx.shadowColor = 'rgba(0,0,0,0.5)';
        canvasDupeCtx.shadowBlur = 10;
        canvasDupeCtx.shadowOffsetX = 20;
        canvasDupeCtx.shadowOffsetY = 20;
        
        canvasDupeCtx.drawImage(canvas, 0, 0);


        canvasOffsetCtx.drawImage(canvas, 20, 10);
    
        canvasOffsetCtx2.drawImage(canvas, 40, 20);
        
        ctx.drawImage(canvasOffset2,0,0);
        ctx.drawImage(canvasOffset,0,0);
        ctx.drawImage(canvasDupe,0,0);
    }

    img.src = src;
}