// $('.js-cycle-slider').cycle({
//     fx:       'fade',
//     speed:    1,
//     timeout:  5000,
//     paused:    false,
//     slides: '>',
//     autoHeight: 'calc',
//     swipe: false
// }).on( 'cycle-before', function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
//     console.log('pause');
//
//     $('.js-cycle-slider').addClass('fade');
//     setTimeout( function () {
//         $('.js-cycle-slider').cycle('pause');
//     }, 1000);
//     setTimeout( function () {
//         $('.js-cycle-slider').removeClass('fade').cycle('resume');
//     }, 2000);
// });




$('.js-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dors: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 12000
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slide__image').addClass('fade');
    $('.slide__content__inner').addClass('fade');
    $('.slider-section').addClass('fade');
    setTimeout( function () {

        $('.slick-current .tlt').textillate();
        $('.slick-current .tlt-2').textillate();
    }, 1000);



}).on('afterChange', function(event, slick, currentSlide){
    $('.slider-section').removeClass('fade');
    $('.slide__image').removeClass('fade');
    $('.slide__content__inner').removeClass('fade');

});
$('.slick-current .tlt').textillate();
$('.slick-current .tlt-2').textillate();


$.scrollify({
    section : ".js-scrollify-section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 2000,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function(i,panels) {
        var ref = panels[i].attr("data-section-name");

        if(ref==="intro") {
            $('.slide__image').removeClass('move');

            $.each($('.animate-together'), function(i, el) {
                setTimeout(function() {
                    $(el).addClass("anim");
                }, 100 + (i * 150));
            });

        }
        if(ref==="contacts") {
            $('.slide__image').addClass('move');

            $.each($('.animate-together'), function(i, el) {
                setTimeout(function() {
                    $(el).removeClass("anim");
                }, 100 + (i * 150));
            });
        }

        // setTimeout( function () {
        //     $('.slide__image').removeClass('move');
        // }, 2100);

    },
    after:function() {

    },
    afterResize:function() {},
    afterRender:function() {}
});

$('.form-subscribe').on('submit', function(e) {
    e.preventDefault();

    var form = $(this),
        valEmail = $('input[type="email"]').val(),
        hintBox = $('.form-input__hint');

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    if (validateEmail(valEmail)) {
        $.ajax({
            type: 'POST',
            url: './raw/subscribe.php',
            data: form.serialize()

        }).done(function(msg) {
            if(msg === 'OK') {
                form.html('<div class="text-center" style="font-size:20px;">Спасибо, Вы подписаны.</div>');
                hintBox.html('')
            } else {
                form.html(msg);
            }
        });
    }
    else hintBox.html('Введите корректный e-mail адрес');

});

// ret();

// function ret() {
//     $('.slick-current .tlt').textillate({
//         // the default selector to use when detecting multiple texts to animate
//         // selector: '.texts',
//
//         // enable looping
//         loop: false,
//
//         // sets the minimum display time for each text before it is replaced
//         minDisplayTime: 2000,
//
//         // sets the initial delay before starting the animation
//         // (note that depending on the in effect you may need to manually apply
//         // visibility: hidden to the element before running this plugin)
//         initialDelay: 0,
//
//         // set whether or not to automatically start animating
//         autoStart: true,
//
//         // custom set of 'in' effects. This effects whether or not the
//         // character is shown/hidden before or after an animation
//         inEffects: [],
//
//         // custom set of 'out' effects
//         outEffects: [ 'hinge' ],
//
//         // in animation settings
//         in: {
//             // set the effect name
//             effect: 'fadeInLeftBig',
//
//             // set the delay factor applied to each consecutive character
//             delayScale: 1.5,
//
//             // set the delay between each character
//             delay: 50,
//
//             // set to true to animate all the characters at the same time
//             sync: false,
//
//             // randomize the character sequence
//             // (note that shuffle doesn't make sense with sync = true)
//             shuffle: false,
//
//             // reverse the character sequence
//             // (note that reverse doesn't make sense with sync = true)
//             reverse: false,
//
//             // callback that executes once the animation has finished
//             callback: function () {}
//         },
//
//         // out animation settings.
//         out: {
//             effect: 'hinge',
//             delayScale: 1.5,
//             delay: 0,
//             sync: false,
//             shuffle: false,
//             reverse: false,
//             callback: function () {}
//         },
//
//         // callback that executes once textillate has finished
//         callback: function () {
//             var t = $('.tlt').children('span').attr('aria-label');
//             $('.tlt').html(t);
//             $('.tlt').children('span').remove();
//             $('.tlt').children('ul').remove();
//         },
//
//         // set the type of token to animate (available types: 'char' and 'word')
//         type: 'char'
//     });
// }