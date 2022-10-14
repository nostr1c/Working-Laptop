var notifyId = 0;
var virusId = 0;
var isBrowserActive = "false";
var isNotepadActive = "false";
var isImageActive = "false";
var isFivemActive = "false";
var isPaintActive = "false";
var virusAmount = 8; //amount of virus popups
let fillPercentage = 0.5; //battery percentage
var weaponUrl = "2KgEizHZfU7z7H38E7BxSeFMnyk0McISb.onion/omega";
var pornUrl = "P67PTzMTy4ZmA7Sng3N.onion/xxx";
var virusTitles = [
    "Purchase a subscription now to fight back against malware and other cyber threats.",
    "System Detected (2) Potentially Malicious Viruses: Rootkit.Sirefef.Spy and Trojan.FakeAV-",
    "SYSTEM MAY HAVE FOUND VIRUSES ON YOUR COMPUTER"
];

$(document).ready(function() {
    dateNow();
    timeNowFull();
    setBattery();

    $(document).on("click", "#laptop-area", () => {
        clickSound();
    });
    
    $(document).on("click", "#laptop-start-options-off", () => {
        $("#laptop-start-off-menu").toggleClass("--visible");
    });

    $(document).on("click", "#laptop-footer-time", () => {
        $("#calendar-dates-wrapper").html("");
        $("#laptop-calendar-container").toggleClass("--visible");
        $("#laptop-footer-time").toggleClass("laptop-footer-start-active");
        setupCalendar();
    });
    
    $(document).on("click", "#laptop-footer-start", () => {
        $("#laptop-start-container").toggleClass("--visible");
        $("#laptop-footer-start").toggleClass("laptop-footer-start-active");
    });
    
    $(document).on("click", "#laptop-footer-wifi", () => {
        $("#laptop-wifi-container").toggleClass("--visible");
        $("#laptop-footer-wifi").toggleClass("laptop-footer-wifi-active");
    });

    $(document).on("click", "#laptop-footer-settings", () => {
        $("#laptop-settings-container").toggleClass("--visible");
        $("#laptop-footer-settings").toggleClass("laptop-footer-wifi-active");
    });
    
    //Trash app
    $(document).on("dblclick", "#app-trash", () => {
        errorModal({icon:"trash", title:"Recycle Bin", text:"A fatal error occurred while trying to open the application"});
    });
    
    $(document).on("click", ".error-modal-header-remove", () => {
        $(".error-modal-wrapper").fadeOut();
    });
    
    $(document).on("click", ".error-modal-footer span", () => {
        $(".error-modal-wrapper").fadeOut();
    });
    
    //Fivem app
    $(document).on('dblclick', '#app-fivem', () => {
        if(isFivemActive == "true") {
            notify({type:"error", text:"You can only have one open launcher..."});
            errorSound();
        }else {
            fivemLoaderText();
            $("#fivem-container").delay(1000).fadeIn()
            .delay(6500).fadeOut("fast", function() {
                errorSound();
            });
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

    //Paint app
    $(document).on('dblclick', '#app-paint', () => {
        if(isPaintActive == "true") {
            notify({type:"error", text:"You can only have one open Paint..."});
            errorSound();
        }else {
            $("#paint-wrapper").delay(500).fadeIn();
            $("#laptop-footer-app-paint").fadeIn()
            .addClass("laptop-footer-app-active");
            $("#laptop-footer-app-notepad").removeClass("laptop-footer-app-active");
            $("#laptop-footer-app-tor").removeClass("laptop-footer-app-active");
            $("#laptop-footer-app-photos").removeClass("laptop-footer-app-active");
        }
        isPaintActive = "true";
    });

    $(document).on("click", "#paint-close", () => {
        $("#paint-wrapper").delay(100).fadeOut();
        $("#laptop-footer-app-paint").delay(200).fadeOut();
        isPaintActive ="false";
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
        let searchRequest = $("#search-input").val();
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

    //Mcafee
    $(document).on("dblclick", "#app-mcafee", () => {
        $("#laptop-footer-app-mcafee").delay(50).fadeIn()
        .addClass("laptop-footer-app-active");
        generateViruses();
    });

    $(document).on("click", ".virus-accept", function(e) {
        e.preventDefault();
        let currentVirus = $(this).data("id");
        $(`#virus-${currentVirus}`).fadeOut()
        .queue(function() { $(this).remove(); });
        generateVirus();
    });

    $(document).on("click", ".virus-get", () => {
        generateBlueCrash();
        $("#blue-screen").show();
        errorSound();
        blueScreenPercent();
        setTimeout(function() {generateBlueRestart();}, 10000);
        $("#blue-screen").delay(14000).fadeOut();
        closeAll();
    });

    //Screen brightness
    $(document).on('input', '#slider-brightness', function() {
        let currentBrightness = $(this).val();
        let fastBrightness = currentBrightness * 3;
        $("#settings-brightness i").css("transform", `rotate(${fastBrightness}deg)`)
        $("#screen-light").css("opacity", `${100 - currentBrightness}%`);
    });

    //Paint thickness
    $(document).on("click", "#paint-thickness", () => {
        $("#paint-thickness-menu").toggleClass("--visible")
        $("#paint-thickness").toggleClass("paint-thickness-clicked")
    });

});

function setBattery() {
    let fillMax = 0.56;
    let fillBattery = fillMax * fillPercentage;
    let batteryPercentage = fillPercentage * 100;
    $("#battery-fill").css("width", `${fillBattery}vw`);
    $("#battery-percentage").html(`${batteryPercentage}%`)
}

function closeAll() {
    $("#virus-overlay").html("");
    $(".laptop-footer-app").hide();
    $(".app").hide();
    isBrowserActive = "false";
    isNotepadActive = "false";
    isImageActive = "false";
    isFivemActive = "false";
    isPaintActive = "false";
}

function generateBlueCrash() {
    let html = `
        <div id="blue-screen-crash">
            <div id="blue-screen-left">
                <span id="blue-screen-sad">:(</span>
                <span id="blue-screen-title">Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.</span>
                <span id="blue-screen-percent">0% complete</span>
                <div id="blue-screen-qr">
                    <img src="img/icons/qr.png">
                    <div id="blue-screen-qr-text">
                        <span>For more information about this issue and possible fixes, visit https://www.windows.com/stopcode</span>
                        <span>If you call a support person, give them this info:</span>
                        <span>Stop code: CRITICAL PROCESS DIED</span>
                    </div>
                </div>
            </div>
            <img id="blue-screen-windows" src="img/icons/windows.png">
        </div>
    `;
    $("#blue-screen").html(html);
}

function generateBlueRestart() {
    let html = `
        <div id="blue-screen-restart">
                <div class='loader'>
                    <div class='circle'></div>
                    <div class='circle'></div>
                    <div class='circle'></div>
                    <div class='circle'></div>
                    <div class='circle'></div>
                </div>
                <span>Restarting</span>
            </div>
    `;
    $("#blue-screen").html(html);
}

function generateViruses() {
    for(var i = 0; i < virusAmount; i++){
        virusId++
        let randomTop = getRandomInt(22);
        let randomLeft = getRandomInt(34);
        let randomTitle = virusTitles[Math.floor(Math.random()*virusTitles.length)];
        let html = `
        <div id="virus-${virusId}" class="virus-child">
            <span class="virus-title">Warning:</span>
            <span class="virus-sub-title">Your protection from viruses has expired!</span>
            <span class="virus-text">${randomTitle}</span>
            <div class="virus-footer">
                <img src="img/fakeapps/mcafee.png">
                <div data-id="${virusId}" class="virus-accept">Accept risk</div>
                <div class="virus-get">Buy protection</div>
            </div>
        </div> `;
        $("#virus-overlay").append(html);
        $(`#virus-${virusId}`).css("top", `${randomTop}vw`)
        .css("left", `${randomLeft}vw`);
        errorSound();
    }
}

function generateVirus() {
    virusId++
    let randomTop = getRandomInt(22);
    let randomLeft = getRandomInt(34);
    let randomTitle = virusTitles[Math.floor(Math.random()*virusTitles.length)];
    let html = `
    <div id="virus-${virusId}" class="virus-child">
        <span class="virus-title">Warning:</span>
        <span class="virus-sub-title">Your protection from viruses has expired!</span>
        <span class="virus-text">${randomTitle}</span>
        <div class="virus-footer">
            <img src="img/fakeapps/mcafee.png">
            <div data-id="${virusId}" class="virus-accept">Accept risk</div>
            <div class="virus-get">Buy protection</div>
        </div>
    </div> `;
    $("#virus-overlay").append(html);
    $(`#virus-${virusId}`).css("top", `${randomTop}vw`)
    .css("left", `${randomLeft}vw`);
    errorSound();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
    setTimeout(function() {
            $("#tab-span").html("Hardcore po...");
            $("#url-span").html(pornUrl + "/anal.php");}, 4000);
}

function setup404() {
    $("#home-page").css("display", "none");
    $("#browser-loader-wrapper").delay(100).fadeIn();
    $("#browser-loader-wrapper").delay(3000).fadeOut();
    $("#not-found").delay(4000).fadeIn();
    setTimeout(function() {$("#tab-span").html("Not found");}, 4000);
}

function clickSound() {
    const audio = new Audio("img/mouse.mp3" );
    audio.play();
}

function errorSound() {
    const audioError = new Audio("img/error.mp3" );
    audioError.play();
}

function timeNowFull() {
    let dateNow = new Date();
    let minutesNow = dateNow.getMinutes();
    let hoursNow = dateNow.getHours();
    let secondsNow = dateNow.getSeconds();
    
    minutesNow = minutesNow < 10 ? `0${minutesNow}` : minutesNow;
    hoursNow = hoursNow < 10 ? `0${hoursNow}` : hoursNow;
    secondsNow = secondsNow < 10 ? `0${secondsNow}` : secondsNow;

    $("#calendar-header-time").html(`${hoursNow}:${minutesNow}:${secondsNow}`);
    $("#footer-time").html(`${hoursNow}:${minutesNow}`);
    setTimeout('timeNowFull()', 1000);
}

function dateNow() {
    let dateNow = new Date();
    let date = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
    $("#footer-date").html(date);

    let monthNow = dateNow.getMonth() + 1;
    let dayNow = dateNow.getDay();
    monthNow = monthNow == 1 ? "January" : monthNow == 2 ? "February" : monthNow == 3 ? "Mars" : monthNow == 4 ? "April" : monthNow == 5 ? "May" : monthNow == 6 ? "June" : monthNow == 7 ? "July" : monthNow == 8 ? "August" : monthNow == 9 ? "September" : monthNow == 10 ? "October" : monthNow == 11 ? "November" : monthNow == 12 ? "December" : "";
    dayNow = dayNow == 1 ? "Monday" : dayNow == 2 ? "Tuesday" : dayNow == 3 ? "Wednessday" : dayNow == 4 ? "Thursday" : dayNow == 5 ? "Friday" : dayNow == 6 ? "Saturday" : dayNow == 7 ? "Sunday" : "";
    let dateFull = `${dayNow}, ${monthNow} ${dateNow.getDate()}, ${dateNow.getFullYear()}`;
    $("#calendar-header-date").html(dateFull);
}

function setupCalendar() {
    let dateNow = new Date();
    let dayNow = dateNow.getDate();
    let monthNow = dateNow.getMonth() + 1;
    monthNow = monthNow == 1 ? 31 : monthNow == 2 ? 28 : monthNow == 3 ? 31 : monthNow == 4 ? 30 : monthNow == 5 ? 31 : monthNow == 6 ? 30 : monthNow == 7 ? 31 : monthNow == 8 ? 31 : monthNow == 9 ? 30 : monthNow == 10 ? 31 : monthNow == 11 ? 30 : monthNow == 12 ? 31 : "";

    for(i = 0; i < monthNow; i++) {
        let html = `<div>${i + 1}</div>`;
        $("#calendar-dates-wrapper").append(html);
    }

    let daysLeft = 31 - monthNow;
    let lastDay = $("#calendar-dates-wrapper div:last-child").html();
    for(i = 0; i < daysLeft; i++) {
        lastDay++;
        let html = `<div class="date-not-used">${lastDay}</div>`;
        $("#calendar-dates-wrapper").append(html);
    }

    for(i = 0; i < 11; i++) {
        let html = `<div class="date-after">${i + 1}</div>`;
        $("#calendar-dates-wrapper").append(html);
    }

    $(`#calendar-dates-wrapper div:nth-child(${dayNow})`).css("background-color", "blue");
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

function errorModal(content) {
    let html = `
        <div class="error-modal">
            <div class="error-modal-header">
                <img src="img/apps/${content.icon}.png">
                <span class="error-modal-header-title">${content.title}</span>
                <div class="error-modal-header-remove"><span class="error-modal-remove-title">X</span></div>
            </div>
            <div class="error-modal-body">
                <img src="img/icons/info.png">
                <span class="error-text">${content.text}</span>
            </div>
            <div class="error-modal-footer">
                <span>OK</span>
            </div>
        </div>
    `;
    $(".error-modal-wrapper").html(html);
    $(".error-modal-wrapper").delay(500).fadeIn();
    errorSound();
}

function loaderText() {
    setTimeout(function() {$("#loader-text-span").html("Establishing Connection...");}, 2500);
    setTimeout(function() {$("#loader-text-span").html("Looking for cops...");}, 3000);
    setTimeout(function() {$("#loader-text-span").html("No cops found...");}, 3500);
    setTimeout(function() {$("#loader-text-span").html("Starting private session...");}, 4000);
    setTimeout(function() {$("#loader-text-span").html("Attempt #1 of connection...");}, 4500);
    setTimeout(function() {$("#loader-text-span").html("Connecting...");}, 5000);
    setTimeout(function() {$("#loader-text-span").html("Connection Established");}, 6000);
}

function fivemLoaderText() {
    setTimeout(function() {$("#fivem-wrapper-text").html("Looking for updates...");}, 2500);
    setTimeout(function() {$("#fivem-wrapper-text").html("Updates found...");}, 3000);
    setTimeout(function() {$("#fivem-wrapper-text").html("Downloading updates...");}, 3500);
    setTimeout(function() {$("#fivem-wrapper-text").html("Downloading /tmp/32/porn/gay/");}, 4000);
    setTimeout(function() {$("#fivem-wrapper-text").html("Downloading /tmp/32/porn/ultragay/ebony");}, 4500);
    setTimeout(function() {$("#fivem-wrapper-text").html("Download completing...");}, 5000);
    setTimeout(function() {$("#fivem-wrapper-text").html("Download complete!");}, 6000);
}

function blueScreenPercent() {
    setTimeout(function() {$("#blue-screen-percent").html("3% complete");}, 2500);
    setTimeout(function() {$("#blue-screen-percent").html("5% complete");}, 3000);
    setTimeout(function() {$("#blue-screen-percent").html("7% complete");}, 3500);
    setTimeout(function() {$("#blue-screen-percent").html("8% complete");}, 4000);
    setTimeout(function() {$("#blue-screen-percent").html("25% complete");}, 4500);
    setTimeout(function() {$("#blue-screen-percent").html("43% complete");}, 5000);
    setTimeout(function() {$("#blue-screen-percent").html("76% complete");}, 6000);
    setTimeout(function() {$("#blue-screen-percent").html("78% complete");}, 8000);
    setTimeout(function() {$("#blue-screen-percent").html("99% complete");}, 9000);
}