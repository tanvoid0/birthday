/**
 * Common Variables
 */
let title_person = "julia";

$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function () {
    addDynamicBalloons(title_person);
    $(window).resize(function () {
        sortBalloons(false);
    });
    $('#gif-container').fadeOut('fast');

    // Set title of the document
    $(document).prop('title', `Happy Birthday ${data.name}`)

    // Set Message
    setWish();

    $('#turn_on').click(stepOneTurnOnLights);


    $('#play').click(stepTwoPlayMusic);

    $('#banner_coming').click(stepThreeBanner);

    $('#balloons_flying').click(stepFourBalloonFlying);

    $('#cake_fadein').click(stepFiveCake);

    $('#light_candle').click(stepSixCandle);

    $('#wish_message').click(stepSevenWish);

    $('#story').click(stepEightStory);
});

/**
 * User data
 */
const data = {
    "name": "Julia",
    "title": title_person,
    slowWish: [
        0,
        0,
    ],
    "wish": [
        // "Today is...",
        // "as beautiful as other days",
        // "but you realize",
        // "another year has gone",
        // "in a blink of the eyes",
        // "however",
        // "Do you know..?",
        // "today is just special",
        // "so special to you",
        // "that's why",
        // "Let's make it...",
        // "the best celebration ever",
        // "and let me share...",
        // "a piece of happiness to you",
        // "I made all this...",
        // "as a birthday present to you",
        // "thanks for being there",
        // "thanks for guiding me through",
        // "and help me when I needed the most",
        // "thanks for everything...",
        // "I wish you all the best",
        // "May your life be at ease",
        // "May all your wishes come true",
        // "Remember",
        // "your ambitions",
        // "you live as a free bird...",
        // "flying in the blue sky",
        // "Now things are different...",
        // "real story of your life",
        // "is just about to begin",
        // "indeed..",
        // "but...",
        // "don't worry",
        // "because...",
        // "you have people who love you",
        // "and care for you",
        // "and has your back",
        // "and",
        // "this year will be better",
        // "and I hope",
        // "you'll find...",
        // "happiness along the way",
        // "keep your spirit up",
        // "enjoy every single moment...",
        // "that you experience today",
        // "fill it with your most beautiful smile",
        // "and make it the best memory..",
        // "Keep smiling 😁",
        // "And keep spreading Positivity",
        "lastly...",
    ]
};
const wish = data.wish;

/**
 * Balloon Loop
 */

function balloonLoop(balloonNumber) {
    $(`#balloon-${balloonNumber + 1}`)
        .animate({left: 1000 * Math.random(), bottom: 500 * Math.random()}, 10000, function () {
            balloonLoop(balloonNumber);
        });
}

/**
 * Loads The name from URL Get Request
 * @param sParam
 * @returns {boolean|string|boolean}
 */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};



const bulbColors = ["yellow", "red", "blue", "green", "pink", "orange"];
const balloonColors = ["#F2B300", "#0719D4", "#D14D39", "#8FAD00", "#8377E4", "#99C96A", "#20CFB4", "#e90e5e", "#8FAD00", "#8377E4", "#99C96A", "#20CFB4", "#F2B300", "#e90e5e",];

function bulbGlow(glowAfter) {
    for (let i = 0; i < bulbColors.length; i++) {
        $(`#bulb_${bulbColors[i]}`).addClass(`bulb-glow-${bulbColors[i]}${glowAfter === true ? "-after" : ""}`);
    }
}

function addDynamicBalloons(person_title) {
    const title = "HBD" + person_title;
    for (let i = 0; i < title.length; i++) {
        addBalloon(i, title[i], balloonColors[i]);
    }
}


function addBalloon(balloonNumber, balloonText, balloonColor) {
    let id = balloonNumber + 1;
    const imgPath = `assets/img/balloons/b${id}.png`;
    $('#balloon-placeholder').append(
        $(`<div class="balloons text-center" style="background-image: url('${imgPath}')" id="balloon-${id}">
            <h2 style="color:${balloonColor};">${balloonText}</h2>
          </div>`)
    );
}


function sortBalloons(attr = false) {
    vw = $(window).width() / 2;
    const range = vw * 0.6;
    let space = (range * 2 / (title_person.length + 3));
    for (let i = 0, j = (-1 * range) - 25; i < title_person.length + 3; i++, j += space) {
        console.log(j);
        let balloon = $(`#balloon-${i + 1}`);
        balloon.stop();
        if (attr) {
            balloon.attr('id', `balloon-fix-${i + 1}`);
        }
        // Space between HBD and name
        if (i === 3) j += 50;
        $(`#balloon-fix-${i + 1}`).animate({top: 240, left: vw + j}, 500);
    }
}

function setWish() {
    wish.push([
        "Once Again",
        `Happy Birthday ${data.name} 🎂`,
    ]);

    // Set Person's wish
    for (var i = 0; i < wish.length; i++) {
        $(`<p>${wish[i]}</p>`).appendTo("#wish");
    }
}
// Fading each button once pressed and show next
function buttonFade(context, name, timeout) {
    $(context).fadeOut('slow').delay(timeout).promise().done(function () {
        $(`#${name}`).fadeIn('slow');
    });
}

/**
 * Step 1
 *
 * Turn on bulbs
 */
function stepOneTurnOnLights() {
    bulbGlow(false);
    $('body').addClass('peach');
    buttonFade(this, 'play', 5000);
}

/**
 * Step 2
 *
 * Turn music on
 * More glowing lights
 */
function stepTwoPlayMusic() {
    let audio = $('.song')[0];
    audio.play();
    bulbGlow(true);
    $('body').css('background-color', '#FFF').addClass('peach-after');
    buttonFade(this, 'banner_coming', 6000);
}

/**
 * Step 3
 *
 * Show banner
 */
function stepThreeBanner() {
    $('.banner').addClass('banner-come');
    buttonFade(this, 'balloons_flying', 6000);
}

/**
 * Step 4
 *
 * throw some balloons
 */
function stepFourBalloonFlying() {
    $('.balloon-border').animate({top: -500}, 8000);
    for (let i = 0; i <= title_person.length + 3; i++) {
        $(`#balloon-${i}`).addClass(`balloons-rotate-behaviour-${i % 2 === 0 ? 'one' : 'two'}`);
        balloonLoop(i);
    }
    buttonFade(this, 'cake_fadein', 5000);
}

/**
 * Show The cake
 */
function stepFiveCake() {
    $('.cake').fadeIn('slow');
    buttonFade(this, 'light_candle', 3000);
}

/**
 * Light up candle
 */
function stepSixCandle() {
    $('.fuego').fadeIn('slow');
    buttonFade(this, 'wish_message', 0);
}

/**
 * Sort the balloons
 * Show Letters on balloons
 */
function stepSevenWish() {
    sortBalloons(true);
    $('.balloons').css('opacity', '0.9');
    $('.balloons h2').fadeIn(3000);
    buttonFade(this, 'story', 3000);
}

/**
 *
 */
function stepEightStory() {
    console.log("Story time");
    $(this).fadeOut('slow');
    $('.cake').fadeOut('fast').promise().done(function () {
        $('.message').fadeIn('slow');
    });
    msgLoop(0);
}

function msgLoop(i) {
    console.log(`In msg loop ${i}`);
    // const delay = i >= data.slowWish[0] && i <= data.slowWish[1] ? 4000 : 1500;
    $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
        ++i;
        $("p:nth-child(" + i + ")").fadeIn('slow').delay(1500);
        if (i >= wish.length) {
            cakeIn();
        } else {
            msgLoop(i);
        }
    });
}
function cakeIn() {
    console.log(`Inside cake`);
    $("p:nth-child(" + wish.length + 1 + ")").fadeOut('slow').promise().done(function () {
        $('.cake').fadeIn('fast');
        $('#gif-container').fadeIn('slow');
        setImage("https://hurfat.com/wp-content/uploads/2021/08/Hurfat.com-1-1.gif");
    });

}

function setImage(src) {
    setTimeout(function() {
        $("#gif-placeholder").attr("src", src)
    }, 1000)
}
//alert('hello');
// Gifs
/***
 * https://giphy.com/gifs/excited-birthday-yeah-yoJC2GnSClbPOkV0eA
 * https://giphy.com/gifs/justin-baby-happy-birthday-cake-26FPpSuhgHvYo9Kyk
 * https://giphy.com/gifs/birthday-happy-birthday-celebrate-mashup-26FPzXYoqqTPcGsUM
 * https://giphy.com/gifs/storyful-happy-birthday-hbd-first-KuDQ5F467dg4uRuV59
 * https://giphy.com/gifs/theoffice-nbc-the-office-tv-lNByEO1uTbVAikv8oT
 * https://www.pbh2.com/wordpress/wp-content/uploads/2014/07/happy-birthday-gifs.gif
 * https://hurfat.com/wp-content/uploads/2021/08/Hurfat.com-1-1.gif
 */