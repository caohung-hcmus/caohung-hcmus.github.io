var indexCurrent = 0;
var images = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
var lstBackgroundLyric = ["deeppink", "firebric", "greenyellow", "dodgerblue", "#5cb85c", "lightseagreen", "saddlebrown", "darkmagenta", "midnightblue", "indigo",
    "orangered", "slateblue", "darkslategrey", "#333"];
var indexBackground = 0;
var lyric1 = document.getElementById("lyric1");
var second = 0;
var timeOutLyric = 3;
var tempMinuteOfMusic = minuteOfMusic;
var tempSecondOfMusic = secondOfMucsic;
var textMinuteOfMusic = document.getElementById("minuteOfMusic");
var textSecondOfMusic = document.getElementById("secondOfMusic");
function playMusic() {
    console.log("playMusic");
    textMinuteOfMusic.innerText = tempMinuteOfMusic;
    textSecondOfMusic.innerText = tempSecondOfMusic < 10 ? "0" + tempSecondOfMusic.toString() : tempSecondOfMusic;
    images[indexCurrent].style.opacity = 1;
    showlyrics = setInterval(function () {
        second++;
        tempSecondOfMusic--;
        if (tempSecondOfMusic == -1) {
            tempSecondOfMusic = 59;
            tempMinuteOfMusic--;
            if (tempMinuteOfMusic == -1) {
                location.reload();
            }
        }
        textMinuteOfMusic.innerText = tempMinuteOfMusic;
        textSecondOfMusic.innerText = tempSecondOfMusic < 10 ? "0" + tempSecondOfMusic.toString() : tempSecondOfMusic;
        if (second >= lyrics[0].showAt - 3 && second <= lyrics[0].showAt) {
            lyric1.innerText = timeOutLyric;
            timeOutLyric--;
        }
        var result_lyric = lyrics.find(m => m.showAt == second);
        if (result_lyric) {
            lyric1.innerText = result_lyric.content;
            if (enableChangeBackgroundLyric) {
                indexBackground = Math.floor(Math.random() * lstBackgroundLyric.length);
                lyric1.style.background = lstBackgroundLyric[indexBackground];

            }
        }
    }, 1000);

}

function playMusicWidthContent2() {
    textMinuteOfMusic.innerText = tempMinuteOfMusic;
    textSecondOfMusic.innerText = tempSecondOfMusic < 10 ? "0" + tempSecondOfMusic.toString() : tempSecondOfMusic;
    images[indexCurrent].style.opacity = 1;
    showlyrics = setInterval(function () {
        second++;
        tempSecondOfMusic--;
        if (tempSecondOfMusic == -1) {
            tempSecondOfMusic = 59;
            tempMinuteOfMusic--;
            if (tempMinuteOfMusic == -1) {
                location.reload();
            }
        }
        textMinuteOfMusic.innerText = tempMinuteOfMusic;
        textSecondOfMusic.innerText = tempSecondOfMusic < 10 ? "0" + tempSecondOfMusic.toString() : tempSecondOfMusic;

        if (second >= lyrics[0].showAt - 3 && second <= lyrics[0].showAt) {
            lyric2.style.display = "block";
            lyric1.style.bottom = "57px";
            lyric2.style.bottom = "0";
            lyric1.innerText = timeOutLyric;
            lyric2.innerHTML = "&nbsp";
            timeOutLyric--;
        }
        var lyric = lyrics.find(m => m.showAt == second);
        if (lyric) {
            lyric1.innerText = lyric.content;
            lyric2.innerText = lyric.content2;
            if (enableChangeBackgroundLyric) {
                indexBackground = Math.floor(Math.random() * lstBackgroundLyric.length);
                lyric1.style.background = lstBackgroundLyric[indexBackground];
                lyric2.style.background = lstBackgroundLyric[indexBackground];
            }
        }
    }, 1000);
}
function setImage(indexOld) {
    for (i = 0; i < images.length; i++) {
        if (i != indexOld)
            images[i].style.opacity = 0;
    }
    var opacity = 0;
    var opacityImageOld = 1;
    var setOpacity = setInterval(function () {
        images[indexCurrent].style.opacity = opacity;
        images[indexOld].style.opacity = opacityImageOld;
        if (opacity >= 1 && opacityImageOld <= 0) {
            clearInterval(setOpacity);
            return;
        }
        opacity += 0.01;
        opacityImageOld -= 0.01;
    }, 20);

}

function getNextImage() {

    if (indexCurrent == images.length - 1) {
        indexCurrent = 0;
        setImage(images.length - 1);
    }
    else {

        indexCurrent++;
        setImage(indexCurrent - 1);
    }
}

window.addEventListener("load", function (event) {
    lyric1.innerHTML = introduction;
	
    if (images.length > 1) {
        setInterval(getNextImage, duration);
    }
    if (enablePlayWidthContent2) {
        var lyric2 = document.createElement("h1");
        lyric2.setAttribute("id", "lyric2");
        lyric2.setAttribute("class", "lyric2");
        lyric2.style.display = "none";
        document.getElementsByClassName("slider")[0].appendChild(lyric2);
        playMusicWidthContent2();
    }
    else {
        playMusic();
    }

})
