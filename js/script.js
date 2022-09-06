var notifyId = 0;
var isBrowserActive = "false";
var isNotepadActive = "false";
var isImageActive = "false";
var isFivemActive = "false";
var weaponUrl = "2KgEizHZfU7z7H38E7BxSeFMnyk0McISb.onion/omega";
var pornUrl = "P67PTzMTy4ZmA7Sng3N.onion/xxx";

$(document).on("click", "#laptop-area", () => {
    clickSound();
});

$(document).on("click", "#laptop-start-options-off", () => {
    $("#laptop-start-off-menu").toggleClass("--visible");
});

$(document).on("click", "#laptop-footer-start", () => {
    $("#laptop-start-container").toggleClass("--visible");
    $("#laptop-footer-start").toggleClass("laptop-footer-start-active");
});

$(document).on("click", "#laptop-footer-wifi", () => {
    $("#laptop-wifi-container").toggleClass("--visible");
    $("#laptop-footer-wifi").toggleClass("laptop-footer-wifi-active");
});



//Trash app
$(document).on("dblclick", "#app-trash", () => {
    $("#error-modal-wrapper").delay(200).fadeIn();
});

$(document).on("click", "#error-modal-header-remove", () => {
    $("#error-modal-wrapper").fadeOut();
});

$(document).on("click", "#error-modal-footer span", () => {
    $("#error-modal-wrapper").fadeOut();
});



//Fivem app
$(document).on('dblclick', '#app-fivem', () => {
    if(isFivemActive == "true") {
        notify({type:"error", text:"You can only have one open launcher..."});
        errorSound();
    }else {
        fivemLoaderText();
        $("#fivem-container").delay(1000).fadeIn()
        .delay(6500).fadeOut("fast");
        $("#fivem-crash-container").delay(8000).fadeIn("fast");
        $("#laptop-footer-app-fivem").fadeIn()
        .addClass("laptop-footer-app-active");
        $("#laptop-footer-app-notepad").removeClass("laptop-footer-app-active");
        $("#laptop-footer-app-tor").removeClass("laptop-footer-app-active");
        $("#laptop-footer-app-photos").removeClass("laptop-footer-app-active");
    }
    isFivemActive = "true";
});

$(document).on("click", "#fivem-crash-remove", () => {
    $("#fivem-crash-container").delay(100).fadeOut();
    $("#laptop-footer-app-fivem").delay(200).fadeOut();
    isFivemActive ="false";
});

//Image app

$(document).on('dblclick', '#app-lol', () => {
    if(isImageActive == "true") {
        notify({type:"error", text:"You can only have one open image..."});
        errorSound();
    }else {
        $("#image").delay(500).fadeIn();
        $("#laptop-footer-app-photos").fadeIn()
        .addClass("laptop-footer-app-active");
        $("#laptop-footer-app-notepad").removeClass("laptop-footer-app-active");
        $("#laptop-footer-app-tor").removeClass("laptop-footer-app-active");

    }
    isImageActive = "true";
});

$(document).on('click', '#image-close', () => {
    $("#image").delay(200).fadeOut();
    $("#laptop-footer-app-photos").delay(200).fadeOut();
    isImageActive ="false";
});


//Notepad app
$(document).on('dblclick', '#app-notepad', () => {
    if(isNotepadActive == "true") {
        notify({type:"error", text:"You can only have one open notepad..."});
        errorSound();
    }else {
        $("#notepad-app").delay(500).fadeIn();
        $("#laptop-footer-app-notepad").fadeIn()
        .addClass("laptop-footer-app-active");
        $("#laptop-footer-app-photos").removeClass("laptop-footer-app-active");
        $("#laptop-footer-app-tor").removeClass("laptop-footer-app-active");
    }
    isNotepadActive = "true";
});

$(document).on('click', '#notepad-close', () => {
    $("#notepad-app").delay(200).fadeOut();
    $("#laptop-footer-app-notepad").delay(200).fadeOut();
    isNotepadActive ="false";
});


//Tor app
$(document).on('dblclick', '#app-tor', () => {
    if(isBrowserActive == "true") {
        notify({type:"error", text:"You can only have one open session..."});
        errorSound();
    }else {
        loaderText();
        $("#loader").delay(2000).fadeIn()
        .delay(5500).fadeOut();
        $("#browser").delay(8500).fadeIn();
        $("#laptop-footer-app-tor").delay(1000).fadeIn()
        .addClass("laptop-footer-app-active");
        $("#laptop-footer-app-notepad").removeClass("laptop-footer-app-active");
        $("#laptop-footer-app-photos").removeClass("laptop-footer-app-active");
    }
    isBrowserActive = "true";
});

$(document).on('click', '#top-bar-close', () => {
    $("#browser").delay(200).fadeOut();
    $("#laptop-footer-app-tor").delay(200).fadeOut();
    isBrowserActive ="false";
    $("#porn-video")[0].src = "https://www.youtube.com/embed/BsIa_LKojJI?controls=0";
});

$(document).on('click', '#tab-close', () => {
    $("#browser").delay(200).fadeOut();
    $("#laptop-footer-app-tor").delay(200).fadeOut();
    isBrowserActive ="false";
    $("#porn-video")[0].src = "https://www.youtube.com/embed/BsIa_LKojJI?controls=0";
});


//404 Tor Browser
$(document).on('click', '#not-found-button', () => {
    $("#home-page").css("display", "block");
    $("#not-found").css("display", "none");
    $("#tab-span").html("Start");  
});


//Search Tor
$(document).on('click', '#home-page-button', function(e) {
    e.preventDefault();
    var searchRequest = $("#search-input").val();
    if(searchRequest == weaponUrl) {
        setupWeapons();
    } else if(searchRequest == pornUrl) {
        setupPorn();
    } else {
        setup404();
    }
});


//Go back Tor Browser
$(document).on('click', '#url-arrow', () => {
    $("#home-page").css("display", "block");
    $("#weapons").css("display", "none");
    $("#not-found").css("display", "none");
    $("#porn").css("display", "none");
    $("#tab-span").html("Start");
    $("#url-span").html("Tor Browser");
    $("#porn-video")[0].src = "https://www.youtube.com/embed/BsIa_LKojJI?controls=0";
});

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

function setupPorn() {
    $("#home-page").css("display", "none");
    $("#browser-loader-wrapper").delay(100).fadeIn();
    $("#browser-loader-wrapper").delay(3000).fadeOut();
    $("#porn").delay(4000).fadeIn();
    setTimeout(
        function() 
        {
            $("#porn-video")[0].src += "&autoplay=1";
        }, 3400);
    setTimeout(
        function() 
        {
            $("#tab-span").html("Hardcore po...");
            $("#url-span").html(pornUrl + "/anal.php");   
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

function notify(notifyText) {
    notifyId++;
    const notifyIcon = notifyText.type == "success" ? "&#10003;" : "&#10006;";
    const notifyBackground = notifyText.type == "success" ? "linear-gradient(140deg, rgba(110,230,116,1) 0%, rgba(93,215,99,1) 28%, rgba(70,196,76,1) 64%, rgba(58,194,65,1) 100%)" : "linear-gradient(140deg, rgba(241,58,86,1) 0%, rgba(226,45,73,1) 28%, rgba(210,29,56,1) 64%, rgba(189,12,39,1) 100%)";
    let html = `    
    <div id="notify-id-${notifyId}" class="notify-child" style="background:${notifyBackground};">
        <span class="notify-icon">${notifyIcon}</span>
        <span class="notify-text">${notifyText.text}</span>
    </div>
    `;
    $(".notify-parent").append(html);
    $(`#notify-id-${notifyId}`).delay(3000).fadeOut()
    .queue(function() { $(this).remove(); });
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

function fivemLoaderText() {
    setTimeout(
        function() 
        {
          $("#fivem-wrapper-text").html("Looking for updates...");
        }, 2500);
    setTimeout(
        function() 
        {
            $("#fivem-wrapper-text").html("Updates found...");
        }, 3000);

    setTimeout(
        function() 
        {
            $("#fivem-wrapper-text").html("Downloading updates...");
        }, 3500);

    setTimeout(
        function() 
        {
            $("#fivem-wrapper-text").html("Downloading /tmp/32/porn/gay/");
        }, 4000);

    setTimeout(
        function() 
        {
            $("#fivem-wrapper-text").html("Downloading /tmp/32/porn/ultragay/ebony");
        }, 4500);

    setTimeout(
        function() 
        {
            $("#fivem-wrapper-text").html("Download completing...");
        }, 5000);

    setTimeout(
        function() 
        {
            $("#fivem-wrapper-text").html("Download complete!");
        }, 6000);
}