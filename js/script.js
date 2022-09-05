var isBrowserActive = "false";
var isNotepadActive = "false";
var isImageActive = "false";
var weaponUrl = "2KgEizHZfU7z7H38E7BxSeFMnyk0McISb.onion/omega";
var drugUrl = "mo28I1n0dzGTeozL0UXKn4JlCkiisX5qt.onion/alpha";

$(document).on("click", "#laptop-area", () => {
    clickSound();
});

$(document).on("click", "#footer-icon img", () => {
    $("#start").toggleClass("--visible");
});

$(document).on('dblclick', '#app-image', () => {
    if(isImageActive == "true") {
        errorSound();
    }else {
        $("#image").delay(500).fadeIn();
    }
    isImageActive = "true";
});

$(document).on('click', '#image-close', () => {
    $("#image").delay(200).fadeOut();
    isImageActive ="false";
});

$(document).on('dblclick', '#app-notepad', () => {
    if(isNotepadActive == "true") {
        errorSound();
    }else {
        $("#notepad-app").delay(500).fadeIn();
        $("#notepad").delay(500).fadeIn();
        $("#notepad").addClass("app-active-active");
    }
    isNotepadActive = "true";
});

$(document).on('click', '#notepad-close', () => {
    $("#notepad-app").delay(200).fadeOut();
    $("#notepad").delay(200).fadeOut();
    isNotepadActive ="false";
});

$(document).on('dblclick', '#app-tor', () => {
    if(isBrowserActive == "true") {
        $("#warning").fadeIn();
        errorSound();
    }else {
        loaderText();
        $("#loader").delay(2000).fadeIn()
        .delay(5500).fadeOut();
        $("#browser").delay(8500).fadeIn();
        $("#tor").delay(500).fadeIn();
        $("#tor").addClass("app-active-active");
    }
    isBrowserActive = "true";
});

$(document).on('click', '#warning-close', () => {
    $("#warning").fadeOut();
});

$(document).on('click', '#top-bar-close', () => {
    $("#browser").delay(200).fadeOut();
    $("#tor").delay(200).fadeOut();
    isBrowserActive ="false";
});

$(document).on('click', '#tab-close', () => {
    $("#browser").delay(200).fadeOut();
    $("#tor").delay(200).fadeOut();
    isBrowserActive ="false";
});

$(document).on('click', '#not-found-button', () => {
    $("#home-page").css("display", "block");
    $("#not-found").css("display", "none");
    $("#tab-span").html("Start");  
});

$(document).on('click', '#home-page-button', () => {
    var searchRequest = $("#search-input").val();
    if(searchRequest == drugUrl) {
        setupDrugs();
    } else if(searchRequest == weaponUrl) {
        setupWeapons();
    } else {
        setup404();
    }
});

$(document).on('click', '#url-arrow', () => {
    $("#home-page").css("display", "block");
    $("#weapons").css("display", "none");
    $("#not-found").css("display", "none");
    $("#tab-span").html("Start");
    $("#url-span").html("Tor Browser");
});

function setupDrugs() {
    $("#home-page").css("display", "none");
    $("#browser-loader-wrapper").delay(100).fadeIn();
    $("#browser-loader-wrapper").delay(3000).fadeOut();
    $("#drugs").delay(4000).fadeIn();
    setTimeout(
        function() 
        {
            $("#tab-span").html("LasDrogas");
            $("#url-span").html(drugUrl + "/home.php");   
        }, 4000);
}

function setupWeapons() {
    $("#home-page").css("display", "none");
    $("#browser-loader-wrapper").delay(100).fadeIn();
    $("#browser-loader-wrapper").delay(3000).fadeOut();
    $("#weapons").delay(4000).fadeIn();
    setTimeout(
        function() 
        {
            $("#tab-span").html("EuroGuns");
            $("#url-span").html(weaponUrl + "/index.php");   
        }, 4000);
}

function setup404() {
    $("#home-page").css("display", "none");
    $("#browser-loader-wrapper").delay(100).fadeIn();
    $("#browser-loader-wrapper").delay(3000).fadeOut();
    $("#not-found").delay(4000).fadeIn();
    setTimeout(
        function() 
        {
            $("#tab-span").html("Not found");
        }, 4000);
}


function clickSound() {
    const audio = new Audio("img/mouse.mp3" );
    audio.play();
}

function errorSound() {
    const audioError = new Audio("img/error.mp3" );
    audioError.play();
}

function loaderText() {
    setTimeout(
        function() 
        {
          $("#loader-text-span").html("Establishing Connection...");
        }, 2500);
    setTimeout(
        function() 
        {
            $("#loader-text-span").html("Looking for cops...");
        }, 3000);

    setTimeout(
        function() 
        {
            $("#loader-text-span").html("No cops found...");
        }, 3500);

    setTimeout(
        function() 
        {
            $("#loader-text-span").html("Starting private session...");
        }, 4000);

    setTimeout(
        function() 
        {
            $("#loader-text-span").html("Attempt #1 of connection...");
        }, 4500);

    setTimeout(
        function() 
        {
            $("#loader-text-span").html("Connecting...");
        }, 5000);

    setTimeout(
        function() 
        {
            $("#loader-text-span").html("Connection Established");
        }, 6000);
}