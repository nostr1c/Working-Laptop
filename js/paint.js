var selectedColor = "#1f1f1f";
var thickness = 2;
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

$(document).ready(function() {    

    $(document).on("click", "#paint-thickness-normal", function () {
        thickness = 2;
        $(this).addClass("paint-thickness-activated");
        $("#paint-thickness-thick").removeClass("paint-thickness-activated");
        $("#paint-thickness-thicker").removeClass("paint-thickness-activated");
    });

    $(document).on("click", "#paint-thickness-thick", function () {
        thickness = 4;
        $(this).addClass("paint-thickness-activated");
        $("#paint-thickness-normal").removeClass("paint-thickness-activated");
        $("#paint-thickness-thicker").removeClass("paint-thickness-activated");
    });

    $(document).on("click", "#paint-thickness-thicker", function () {
        thickness = 5;
        $(this).addClass("paint-thickness-activated");
        $("#paint-thickness-thick").removeClass("paint-thickness-activated");
        $("#paint-thickness-normal").removeClass("paint-thickness-activated");
    });

    $(document).on("click", "#paint-colors div", function () {
        selectedColor = $(this).css("background-color");
        $("#paint-current-color").css("background-color", selectedColor);
    });

    $(document).on("click", "#paint-empty", function () {
        emptyCanvas();
    });

    $(document).on("click", "#paint-save", function () {
        saveCanvas();
    });

    $(document).on('input', '#thickness-range', function() {
        thickness = $(this).val();
        console.log(thickness);
        $("#custom-thickness-i").css("font-size", `${thickness}px`);
    });

    $(document).on('click', '#custom-thickness-close', function() {
        $("#paint-thickness-custom-menu").fadeOut();
    });

    $(document).on('click', '#paint-thickness-custom', function() {
        $("#paint-thickness-custom-menu").fadeIn();
    });


    // On mouse events on the canvas
    $canvas.mousedown(function (e) {
        lastEvent = e;
        mouseDown = true;
    }).mousemove(function (e) {
        // Draw lines
        if (mouseDown) {
            context.beginPath();
            context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
            context.lineTo(e.offsetX, e.offsetY);
            context.strokeStyle = selectedColor;
            context.lineWidth = thickness;
            context.lineCap = 'round';
            context.stroke();
            lastEvent = e;
        }
    }).mouseup(function () {
        mouseDown = false;
    }).mouseleave(function () {
        $canvas.mouseup();
    });

});

function emptyCanvas() {
    let canvas = document.getElementById("paint-canvas");
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); //clear html5 canvas
}

function saveCanvas() {
    let canvas = document.getElementById("paint-canvas");
    var img = new Image();
    img.src = canvas.toDataURL();
    document.body.appendChild(img);
}