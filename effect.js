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

    $('#bored').click(stepNineBored);
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
        "Can't think of a funny joke",
        "No special wish tonight",
        "Nor even a poem",
        "But hope it feels just alright",
        "You've been so amazing",
        "Probably said a hundred times",
        "So, I'll skip along, with",
        "\"Hey, How's Life?\"",
        "Probably living the best",
        "Climbing mountains",
        "Running through cities",
        "Breaking 9-5 life chains",
        "In any case, I'm sure",
        "you're cherishing your life",
        "doesn't matter the clock",
        "The number of memories is definitely rife",
        "Hahaaa.....",
        "I'm really glad that I've met you",
        "....",
        "Keep smiling 😁",
        "And keep spreading your Positive vibe",
        "Wish you a happy and exciting",
        "Year ahead...",
        "May you live your dreams",
        "Stay happy and healthy",
        "And have the strength",
        "To face the challenges ahead",
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
    $('#bored').delay(7000).fadeIn();
}

let boredMode = false;
function stepNineBored() {
    boredMode = true;
    $('#bored').fadeOut('slow');
}

function msgLoop(i) {
    console.log(`In msg loop ${i}`);
    $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
        ++i;
        if (boredMode && i !== wish.length) {
            i = wish.length-1;
            $("p:nth-child(" + i + ")").text("....Just wanted to say");
        }
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
    $('#bored').fadeOut('slow');
    $("p:nth-child(" + wish.length + 1 + ")").fadeOut('slow').promise().done(function () {
        $('.cake').fadeIn('fast');
        $('#gif-container').fadeIn('slow');
        setImage("https://i.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif");
    });
}

afterImages = [
    "https://external-preview.redd.it/agM7Xc9YXvl1VYA6OnKuqh2UDgwR7a9kVwBH0d71vxc.gif?s=ed4ee9eb28b976b1dafc1ba24e5160bcff1f651d",
    "https://i.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif",
]

function setImage(src){
    setTimeout(function () {
        $("#gif-placeholder").attr("src", src)
    }, 7000)
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