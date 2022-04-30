$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function () {
    var vw;
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({top: 240, left: vw - 350}, 500);
        $('#b22').animate({top: 240, left: vw - 250}, 500);
        $('#b33').animate({top: 240, left: vw - 150}, 500);
        $('#b44').animate({top: 240, left: vw - 50}, 500);
        $('#b55').animate({top: 240, left: vw + 50}, 500);
        $('#b66').animate({top: 240, left: vw + 150}, 500);
        $('#b77').animate({top: 240, left: vw + 250}, 500);
    });
    // Get Birthday Boy/Girl's Name
    const title_person = getUrlParameter("t") ?? "";

    // Set data of the document
    const data = {
        name: "Kim",
        title: "kim",
        slowWish: [
            6,
            13,
        ],
        wish: [
            "Today is...",
            "as beautiful as other days",
            "but you realize",
            "another year has gone",
            "in a blink of the eyes",
            "Here's a few words from your friends",
            "When you hold op nobody dares to go in your los ~ Klaudia",
            "Big love Kim hope you have a great birthday! ~ Mike",
            "Happy birthday Kim my Baby boy.... ~ Nayem",
            "Stay blessed and stay happy!!!! ~ Nayem",
            "Love from Nayem...",
            "Kim you are a cool dude, carry on being an awesome and wholesome guy. ~ Ali",
            "Also stop banning ur brothers champs he can carry on all. ~ Ali",
            "Hope you had a blast day, keep shining ❤ ~ Tanveer",
            "Here's a poem for you, sorry for being late...",
            "May you have a very happy birthday",
            "A celebration with family and friends",
            "Filled with whatever brings you joy",
            "The kind of joy that never ends",
            "With all the love your heart can hold",
            "And the utter joy birthday bring",
            "May you have a truly special day",
            "You deserve the best of everything",
            "Let's raise a glass and make a toast",
            "Wishing joy, peace and health to you",
            "May your birthday be truly happy",
            "Full of love and life all day through",
        ]
    }
    // var script = document.createElement('script');
    // script.src = `data/${title_person}.js`;
    // document.getElementsByTagName('head')[0].appendChild(script);
    // console.log(window.data);
    // return;

    // const data = require(`data/${title_person}.js`);
    // $("#json-data").attr("src", `data/${title_person}.js`);
    const person = data.name;

    // Set title of the document
    $(document).prop('title', `Happy Birthday ${person}`)

    // Set Message
    const wish = data.wish;
    wish.push([
        "Once Again",
        `Happy Birthday ${person} 🎂`,
    ]);
    console.log("Wish",wish);

    // Set Person's name on balloon
    for (var i = 0; i < title_person.length || i < 4; i++) {
        $(`#balloon-name-${i + 1}`).text(title_person.charAt(i));
    }

    // Set Person's wish
    for(var i=0; i<wish.length; i++) {
    	$(`<p>${wish[i]}</p>`).appendTo("#wish");
    }

    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });
    $('#play').click(function () {
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color', '#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate({left: randleft, bottom: randtop}, 10000, function () {
            loopSeven();
        });
    }

    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({top: -500}, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        // $('#b3').addClass('balloons-rotate-behaviour-two');
        // $('#b4').addClass('balloons-rotate-behaviour-one');
        // $('#b5').addClass('balloons-rotate-behaviour-one');
        // $('#b6').addClass('balloons-rotate-behaviour-two');
        // $('#b7').addClass('balloons-rotate-behaviour-one');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();

        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function () {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });


    $('#wish_message').click(function () {
        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22')
        $('#b3').attr('id', 'b33')
        $('#b4').attr('id', 'b44')
        $('#b5').attr('id', 'b55')
        $('#b6').attr('id', 'b66')
        $('#b7').attr('id', 'b77')
        $('#b11').animate({top: 240, left: vw - 350}, 500);
        $('#b22').animate({top: 240, left: vw - 250}, 500);
        $('#b33').animate({top: 240, left: vw - 150}, 500);
        $('#b44').animate({top: 240, left: vw - 50}, 500);
        $('#b55').animate({top: 240, left: vw + 50}, 500);
        $('#b66').animate({top: 240, left: vw + 150}, 500);
        $('#b77').animate({top: 240, left: vw + 250}, 500);
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function () {
            $('.message').fadeIn('slow');
        });

        var i;

        function msgLoop(i) {
            const delay = i >= data.slowWish[0] && i<= data.slowWish[1] ? 4000 : 1500;
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(delay);
                console.log(i, i === wish.length-1, $("p:nth-child(" + i + ")").text());
                if (i === wish.length) {
                    console.log(wish.length, $("p:nth-child("+wish.length+")").text());
                    $("p:nth-child("+wish.length+1+")").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');
                    });

                } else {
                    msgLoop(i);
                }

            });
            // body...
        }

        msgLoop(0);

    });
});

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


//alert('hello');